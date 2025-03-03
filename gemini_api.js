async function analyzeDataWithGemini(timeList, valueList) {
    const API_KEY = 'KEY_REMOVED';
    const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
    
    // Prepare data for analysis
    let dataPoints = [];
    for(let i = 0; i < timeList.length; i++) {
        dataPoints.push({
            time: timeList[i].value,
            value: Number(valueList[i].value)
        });
    }
    
    // First prompt for segmentation
    const segmentPrompt = `Analyze this time series data and segment it based on trend direction and change rate:
    ${JSON.stringify(dataPoints)}
    
    Rules for segmentation:
    1. Find periods where values change in the same direction (increase or decrease)
    2. Within each direction, group consecutive changes where the change rate stays either all within 30% or all above 30%
    3. A new segment starts when either:
       - The direction changes
       - The change rate category (within/above 30%) changes
    4. For stable periods, don't start a new segment
       
    
    Return a raw JSON array of segments (no markdown, no code blocks), where each segment has:
    - start_time
    - start_value
    - end_time
    - end_value
    - direction
    - change_type (within_30/above_30/stable)

    Example format:
    [{"start_time":"January","start_value":100,"end_time":"March","end_value":120,"direction":"increase","change_type":"within_30"}]`;

    try {
        // Get segments
        const segmentResponse = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: segmentPrompt
                    }]
                }]
            })
        });

        const segmentData = await segmentResponse.json();
        const rawText = segmentData.candidates[0].content.parts[0].text;
        
        // Clean the response text
        const cleanedText = rawText.replace(/```json\s?|```\s?/g, '').trim();
        const segments = JSON.parse(cleanedText);
        console.log('Segments:', segments);

        // Get the subject from input
        const subject = document.getElementById("subjectInput").value;

        // Generate description for each segment
        let fullDescription = "";
        
        for (const segment of segments) {
            const segmentPrompt = `Create a single concise sentence describing this change in ${subject}:
            From ${segment.start_time} to ${segment.end_time}, the value ${segment.direction}d from ${segment.start_value} to ${segment.end_value} (${segment.change_type} rate of change).
            
            Rules:
            1. Use formal academic language
            2. Mention the time period and values
            3. Use precise terms to mention the direction and rate, but don't tell the number of change rate directly
            4. Make it exactly one sentence`;

            const descriptionResponse = await fetch(`${API_URL}?key=${API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: segmentPrompt
                        }]
                    }]
                })
            });

            const descriptionData = await descriptionResponse.json();
            const segmentDescription = descriptionData.candidates[0].content.parts[0].text.trim();
            
            fullDescription += segmentDescription + " ";
        }
        
        console.log('Full Description:', fullDescription);
        
        return {
            segments: segments,
            description: fullDescription.trim()
        };

    } catch (error) {
        console.error('Error in Gemini API:', error);
        return null;
    }
}

// Export the function
window.analyzeDataWithGemini = analyzeDataWithGemini;