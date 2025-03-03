// Configuration for Gemini API
const API_KEY = "KEY_REMOVED"; 
const API_URL = "https://generativelanguage.googleapis.com/v1beta2/models/gemini-1:generateContent";

/**
 * Generate a description for a data segment using Gemini API
 * @param {Object} segment - Data segment with start/end time and values
 * @param {string} subject - The subject of the report
 * @returns {Promise<string>} - Generated description
 */
async function generateSegmentDescription(segment, subject) {
    try {
        const prompt = `
As a C1 level English writer (advanced proficiency), please describe the following trend in a single sophisticated sentence:

Subject: ${subject}
Time period: from ${segment.start_time} to ${segment.end_time}
Value change: from ${segment.start_value} to ${segment.end_value}
Direction: ${segment.direction} (${segment.change_type === "within_30" ? "moderate" : "significant"} change)

Your response should be only ONE sentence with:
- Varied vocabulary (use sophisticated synonyms for increase/decrease)
- Complex sentence structure (with appropriate connectors)
- Precise quantifiers and modifiers
- Advanced expressions typical of C1 English level
`;

        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 150,
                }
            })
        });

        const data = await response.json();
        
        // Extract the generated text from the response
        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            return data.candidates[0].content.parts[0].text.trim();
        } else {
            console.error("Unexpected API response format:", data);
            return `From ${segment.start_time} to ${segment.end_time}, the ${subject} ${segment.direction === "increase" ? "rose" : "fell"} from ${segment.start_value} to ${segment.end_value}.`;
        }
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        // Fallback text if API fails
        return `From ${segment.start_time} to ${segment.end_time}, the ${subject} ${segment.direction === "increase" ? "rose" : "fell"} from ${segment.start_value} to ${segment.end_value}.`;
    }
}

/**
 * Generate a complete advanced report for all segments
 * @param {Array} segments - Array of data segments
 * @param {string} subject - The subject of the report
 * @returns {Promise<string>} - Complete report
 */
async function generateAdvancedReport(segments, subject) {
    try {
        // Introduction for the report
        let report = `This is an advanced analysis regarding ${subject}. `;
        
        // Generate descriptions for each segment in parallel
        const descriptionPromises = segments.map(segment => 
            generateSegmentDescription(segment, subject)
        );
        
        // Wait for all API calls to complete
        const descriptions = await Promise.all(descriptionPromises);
        
        // Combine all descriptions
        report += descriptions.join(" ");
        
        return report;
    } catch (error) {
        console.error("Error generating advanced report:", error);
        return `Error generating advanced report: ${error.message}`;
    }
}