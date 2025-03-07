var beginIncreaseVerb = ["went up", "increased", "rose", "climbed"];
var difficultIncreaseVerb = ["soared", "surged"];
var beginIncreaseNoun = ["increase", "rise", "climb", "growth"];
var beginDecreaseVerb = ["went down", "decreased", "fell", "dropped"];
var beginDecreaseNoun = ["decrease", "fall", "drop", "cut"];
var magMinorAdv = ["negligibly", "marginally", "slightly", "moderately"];
var magMajorAdv = ["significantly", "sharply", "steeply", "dramatically"];
var magMinorAdj = ["negligible", "marginal", "slight", "moderate"];
var magMajorAdj = ["significant", "sharp", "steep", "dramatic"];

document.getElementById('fileInput').addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const csvData = e.target.result;
        const parsedData = parseCSV(csvData);
        const smoothedData = smoothData(parsedData);
        const summarizedData = summarizeTo12Points(smoothedData);
        populateTable(summarizedData);
    };
    reader.readAsText(file);
}

function parseCSV(csv) {
    const lines = csv.trim().split('\n');
    const data = lines.map(line => {
        const [date, value] = line.split(',');
        return { date: date.trim(), value: parseFloat(value.trim()) };
    });
    return data;
}

function smoothData(data) {
    const windowSize = 5; // Moving average window size
    const smoothed = [];

    for (let i = 0; i < data.length; i++) {
        let sum = 0;
        let count = 0;
        for (let j = i - Math.floor(windowSize / 2); j <= i + Math.floor(windowSize / 2); j++) {
            if (j >= 0 && j < data.length) {
                sum += data[j].value;
                count++;
            }
        }
        smoothed.push({ date: data[i].date, value: sum / count });
    }
    return smoothed;
}

function summarizeTo12Points(data) {
    const interval = Math.floor(data.length / 12);
    const summarizedData = [];
    for (let i = 0; i < 12; i++) {
        const index = Math.min(i * interval, data.length - 1);
        summarizedData.push(data[index]);
    }
    return summarizedData;
}

function populateTable(data) {
    const rows = document.querySelectorAll('#tableBody tr');
    data.forEach((item, index) => {
        const timeInput = rows[index].querySelector('.time');
        const valueInput = rows[index].querySelector('.value');

        if (timeInput && valueInput) {
            timeInput.value = item.date;
            valueInput.value = item.value.toFixed(2);
        }
    });
}

function getRandomInteger(max) {
    if (typeof max !== 'number' || max < 0 || !Number.isInteger(max)) {
        throw new Error('Need a inter. >0!');
    }
    return Math.floor(Math.random() * (max + 1));
}

function vnDependerBeginner(valueFirst, valueLast)
//verb&noun sentence depender + increase&decrease depender
{
    var random_verb_noun = Math.round(Math.random());
    var outputStr = "";
    if(random_verb_noun == 1){
        //Use verb sentence
        outputStr += "the value ";
        if(Number(valueFirst) > Number(valueLast)){
            outputStr += beginDecreaseVerb[getRandomInteger(3)];
        }
        else{
            if(Number(valueFirst) < Number(valueLast)){
                outputStr += beginIncreaseVerb[getRandomInteger(3)];
            }
            else{
                outputStr += "keeps table at ";
            }
        }
    }
    else{
        //Use noun sentence
        outputStr += "there was ";
        if(Number(valueFirst) > Number(valueLast)){
            outputStr += "a ";
            outputStr += beginDecreaseNoun[getRandomInteger(3)];
        }
        else{
            if(Number(valueFirst) < Number(valueLast)){
                outputStr += "a ";
                outputStr += beginIncreaseNoun[getRandomInteger(3)];
            }
            else{
                outputStr += "no significant change, but stable with ";
            }
        }
    }
    return outputStr;
};

function vnDependerAdjvMode(valueFirst, valueLast)
//verb&noun sentence depender + increase&decrease depender
{
    var random_verb_noun = Math.round(Math.random());
    var outputStr = "";
    var advChoice = "";
    if (Math.abs((valueFirst - valueLast) / valueLast) > 0.4) {
        //Great change.
        advChoice = magMajorAdv[getRandomInteger(3)];
        adjChoice = magMajorAdj[getRandomInteger(3)];
    }
    else{
        //Normal change.
        advChoice = magMinorAdv[getRandomInteger(3)];
        adjChoice = magMinorAdj[getRandomInteger(3)];
    }
    if(random_verb_noun == 1){
        //Use verb sentence
        outputStr += "the value ";
        if(Number(valueFirst) > Number(valueLast)){
            outputStr += beginDecreaseVerb[getRandomInteger(3)] + " " + advChoice;
        }
        else{
            if(Number(valueFirst) < Number(valueLast)){
                outputStr += beginIncreaseVerb[getRandomInteger(3)] + " " + advChoice;
            }
            else{
                outputStr += "keeps table at ";
            }
        }
    }
    else{
        //Use noun sentence
        outputStr += "there was ";
        if(Number(valueFirst) > Number(valueLast)){
            outputStr += "a ";
            outputStr += adjChoice + " " + beginDecreaseNoun[getRandomInteger(3)];
        }
        else{
            if(Number(valueFirst) < Number(valueLast)){
                outputStr += "a ";
                outputStr += adjChoice + " " + beginIncreaseNoun[getRandomInteger(3)];
            }
            else{
                outputStr += "no significant change, but stable with ";
            }
        }
    }
    return outputStr;
};

function valueDepender(valueFirst, valueLast)
{
    var dependerRandom = getRandomInteger(3);
    var outputStr = "";
    if(valueFirst == valueLast){
        outputStr += valueFirst + ". "
    }
    else{
        if (dependerRandom == 0){
            outputStr += " from " + valueFirst + " to " + valueLast + ". ";
        }
        else if (dependerRandom == 1){
            outputStr += " from " + valueFirst + " to " + valueLast + " by " + (Math.abs(valueFirst - valueLast) % 1 === 0 ? Math.abs(valueFirst - valueLast) : Math.abs(valueFirst - valueLast).toFixed(2)) + ". ";
        }
        else if (dependerRandom == 2){
            outputStr += " from " + valueFirst + " by " + (Math.abs(valueFirst - valueLast) % 1 === 0 ? Math.abs(valueFirst - valueLast) : Math.abs(valueFirst - valueLast).toFixed(2)) + ". ";
        }
        else{
            outputStr += " to " + valueLast + " by " + (Math.abs(valueFirst - valueLast) % 1 === 0 ? Math.abs(valueFirst - valueLast) : Math.abs(valueFirst - valueLast).toFixed(2)) + ". "
        }
    }
    
    return outputStr;
};

function valueDependerTimeMod(valueFirst, valueLast, timeFirst, timeLast)
{
    var dependerRandom = getRandomInteger(5);
    var outputStr = "";
    if(valueFirst == valueLast){
        outputStr += valueFirst + " from " + timeFirst + " to " + timeLast + ". ";
    }
    else{
        if (dependerRandom == 0){
            //from 1 in Jan to 2 in Feb
            outputStr += " from " + valueFirst + " in " + timeFirst + " to " + valueLast + " in " + timeLast + ". ";
        }else if (dependerRandom == 1){
            //from 1 to 2 from Jan to Feb
            outputStr += " from " + valueFirst + " to " + valueLast + " from " + timeFirst + " to " + timeLast + ". ";
        }else if (dependerRandom == 2){
            //from 1 by 1 from Jan to Feb
            outputStr += " from " + valueFirst + " by " + (Math.abs(valueFirst - valueLast) % 1 === 0 ? Math.abs(valueFirst - valueLast) : Math.abs(valueFirst - valueLast).toFixed(2)) + " from " + timeFirst + " to " + timeLast + ". ";
        }else if (dependerRandom == 3){
            //to 2 by 1 from Jan to Feb
            outputStr += " to " + valueLast + " by " +(Math.abs(valueFirst - valueLast) % 1 === 0 ? Math.abs(valueFirst - valueLast) : Math.abs(valueFirst - valueLast).toFixed(2)) + " from " + timeFirst + " to " + timeLast + ". ";
        }else if (dependerRandom == 4){
            //by 1 from 1 in Jan to 2 in Feb
            outputStr += " by " + (Math.abs(valueFirst - valueLast) % 1 === 0 ? Math.abs(valueFirst - valueLast) : Math.abs(valueFirst - valueLast).toFixed(2)) + " from " + valueFirst + " in " + timeFirst + " to " + valueLast + " in " + timeLast + ". ";
        }else{
            //by 1 from 1 to 2 from Jan to Feb
            outputStr += " by " + (Math.abs(valueFirst - valueLast) % 1 === 0 ? Math.abs(valueFirst - valueLast) : Math.abs(valueFirst - valueLast).toFixed(2)) + " from " + valueFirst + " to " + valueLast + " from " + timeFirst + " to " + timeLast + ". ";
        }
    }
    
    return outputStr;
};

function generateIntroductoryBeginner(subject) {
    var str = "This is a report regarding " + subject + ". ";
    return str;

};

function generateIntroductoryPreIntermediate(subject, valueList) {
    var str = "This is a report regarding " + subject + ". Over the year, ";
    var valueFirst = Number(valueList[0].value);
    var valueLast = Number(valueList[11].value);
    str += vnDependerBeginner(valueFirst, valueLast);
    str += valueDepender(valueFirst, valueLast);
    return str;

}

function generateIntroductoryUpperIntermediate(subject, timeList, valueList) {
    //var str = "This is a report regarding " + subject +", ";
    var str = '';
    var random = Math.round(Math.random());
    var valueFirst = Number(valueList[0].value);
    var valueLast = Number(valueList[11].value);
    var roopIndex = 0;
    var maxValue = valueFirst;
    var minValue = valueFirst;
    var maxDate = timeList[0].value;
    var minDate = timeList[0].value;


    for (roopIndex = 0; roopIndex < 11; roopIndex++) {
        if (Number(valueList[roopIndex + 1].value) > maxValue){
            maxValue = Number(valueList[roopIndex + 1].value);
            maxDate = timeList[roopIndex + 1].value;
        }
    }

    for (roopIndex = 0; roopIndex < 11; roopIndex++) {
        if (Number(valueList[roopIndex + 1].value) < minValue) {
            minValue = Number(valueList[roopIndex + 1].value);
            minDate = timeList[roopIndex + 1].value;
        }
    }

    if (random == 1) {
        str += ("The value hit a low at " + minValue + " in " + minDate + ", and peaked at " + maxValue + " in " + maxDate + ". ");
    }
    else {
        str += ("The value bottomed out at " + minValue + " in " + minDate + ", and peaked at " + maxValue + " in " + maxDate + ". ");
    }

    return str;

}

function generateDescribeBeginner(subject, timeList, valueList) {
    var describe = "";
    var arrMember = 0;
    if (timeList.length != valueList.length) {
        alert("Error! The number of Time Point is not equal to the number of Data Value.");
        describe = "Error! The number of Time Point is not equal to the number of Data Value. ";
        return describe;
    }
    else {
        var dataNumber = timeList.length;
        for (var i = 0; i < dataNumber - 1; i++) {
            describe += ("From " + timeList[i].value + " to " + timeList[i + 1].value + ", ");
            describe += vnDependerBeginner(valueList[i].value, valueList[i+1].value);
            describe += valueDepender(valueList[i].value, valueList[i+1].value);
        }
        return describe;
    }
}


function generateDescribeElementary(subject, timeList, valueList) {
    var flag = 0;
    var preFlag = 0;
    var describe = "";
    var tempDifference = 0;
    if (timeList.length != valueList.length) {
        alert("Error! The number of Time Point is not equal to the number of Data Value.");
        describe = "Error! The number of Time Point is not equal to the number of Data Value. ";
        return describe;
    }
    else {

        var tempDifferenceOld = Number(valueList[1].value) - Number(valueList[0].value);

        for (var i = 0; i < 11; i++) {
            var tempStartValue = Number(valueList[i].value);
            var tempStartTime = timeList[i].value;
            var flag = 0;
            console.log("outer" + i + ":" + timeList[i].value);
            for (var j = i + 1; j < 12; j++) {
                console.log("inner" + j + ":" + timeList[j].value);
                var tempDifferenceNew = Number(valueList[j].value) - Number(valueList[j - 1].value);
                console.log(timeList[j].value + "-" + timeList[j - 1].value + "=" + tempDifferenceNew);
                console.log("old=" + tempDifferenceOld);
                if (tempDifferenceNew == 0){
                    console.log("FIND = 0 !!!")
                    //?
                    continue;
                }
                if (tempDifferenceNew * tempDifferenceOld > 0) {
                    console.log("positive value" + timeList[j].value);
                    var tempEndValue = Number(valueList[j].value);
                    var tempEndTime = timeList[j].value;
                    if (tempEndTime == "December") {
                        flag = 1;
                        break;
                    }
                }
                else {
                    console.log("Not positive");
                    tempDifferenceOld = -tempDifferenceOld;
                    i = j - 2;
                    describe += vnDependerBeginner(tempStartValue, tempEndValue);
                    describe += valueDependerTimeMod(tempStartValue, tempEndValue, tempStartTime, tempEndTime);
                    if (tempEndTime == "December") {
                        flag = 1;
                    }
                    break;
                }
            }

            if (flag == 1) {
                if (flag == 1) {
                    if (getRandomInteger(1) == 1){
                        describe += " It is also well noticed that in the end, "
                    }else{
                        describe += "Lastly, "
                }
                describe += vnDependerBeginner(tempStartValue, tempEndValue);
                describe += valueDependerTimeMod(tempStartValue, tempEndValue, tempStartTime, tempEndTime);
                break;
            }
        }
        }
    return describe;
    }
}

function generateDescribeIntermediate(subject, timeList, valueList) {
    var random;
    var describe = "";
    if (timeList.length != valueList.length) {
        alert("Error! The number of Time Point is not equal to the number of Data Value.");
        describe = "Error! The number of Time Point is not equal to the number of Data Value. ";
        return describe;
    }
    else {
        var tempDifferenceOld = Number(valueList[1].value) - Number(valueList[0].value);

        for (var i = 0; i < 11; i++) {
            var tempStartValue = Number(valueList[i].value);
            var tempStartTime = timeList[i].value;
            var flag = 0;
            console.log("outer" + i + ":" + timeList[i].value);
            for (var j = i + 1; j < 12; j++) {
                console.log("inner" + j + ":" + timeList[j].value);
                var tempDifferenceNew = Number(valueList[j].value) - Number(valueList[j - 1].value);
                console.log(timeList[j].value + "-" + timeList[j - 1].value + "=" + tempDifferenceNew);
                console.log("old=" + tempDifferenceOld);
                if (tempDifferenceNew == 0){
                    console.log("FIND = 0 !!!")
                    //?
                    continue;
                }
                if (tempDifferenceNew * tempDifferenceOld > 0) {
                    console.log("positive value" + timeList[j].value);
                    var tempEndValue = Number(valueList[j].value);
                    var tempEndTime = timeList[j].value;
                    if (tempEndTime == "December") {
                        flag = 1;
                        break;
                    }
                }
                else {
                    console.log("Not positive");
                    tempDifferenceOld = -tempDifferenceOld;
                    i = j - 2;
                    describe += vnDependerAdjvMode(tempStartValue, tempEndValue);
                    describe += valueDependerTimeMod(tempStartValue, tempEndValue, tempStartTime, tempEndTime);
                    if (tempEndTime == "December") {
                        flag = 1;
                    }
                    break;
                }
            }

            if (flag == 1) {
                if (getRandomInteger(1) == 1){
                    describe += " It is also well noticed that in the end, "
                }else{
                    describe += "Lastly, "
                }
                describe += vnDependerAdjvMode(tempStartValue, tempEndValue);
                describe += valueDependerTimeMod(tempStartValue, tempEndValue, tempStartTime, tempEndTime);
                break;
            }
        }
    }
    return describe;
}


document.getElementById("startButtonBeginner").onclick = function () {
    var subject = document.getElementById("subjectInput").value;

    var timeList = document.getElementsByClassName("time");
    var valueList = document.getElementsByClassName("value");

    var describe = "";

    startSentence = generateIntroductoryBeginner(subject);
    describe += startSentence;

    paragraph = generateDescribeBeginner(subject, timeList, valueList);
    describe += paragraph;

    document.getElementById("result").innerText = describe;
}

document.getElementById("startButtonElementary").onclick = function () {
    var subject = document.getElementById("subjectInput").value;

    var timeList = document.getElementsByClassName("time");
    var valueList = document.getElementsByClassName("value");
    var describe = "";

    startSentence = generateIntroductoryBeginner(subject);
    describe += startSentence;

    paragraph = generateDescribeElementary(subject, timeList, valueList);
    describe += paragraph;

    document.getElementById("result").innerText = describe;
}


document.getElementById("startButtonPreIntermediate").onclick = function () {
    var subject = document.getElementById("subjectInput").value;

    var timeList = document.getElementsByClassName("time");
    var valueList = document.getElementsByClassName("value");

    var describe = "";

    startSentence = generateIntroductoryPreIntermediate(subject, valueList);
    describe += startSentence;

    paragraph = generateDescribeElementary(subject, timeList, valueList);
    describe += paragraph;

    document.getElementById("result").innerText = describe;
}

document.getElementById("startButtonIntermediate").onclick = function () {
    var subject = document.getElementById("subjectInput").value;

    var timeList = document.getElementsByClassName("time");
    var valueList = document.getElementsByClassName("value");

    var describe = "";

    startSentence = generateIntroductoryPreIntermediate(subject, valueList);
    describe += startSentence;

    paragraph = generateDescribeIntermediate(subject, timeList, valueList);
    describe += paragraph;

    document.getElementById("result").innerText = describe;
}

document.getElementById("startButtonUpperIntermediate").onclick = function () {
    var subject = document.getElementById("subjectInput").value;

    var timeList = document.getElementsByClassName("time");
    var valueList = document.getElementsByClassName("value");

    var describe = "";

    startSentence1 = generateIntroductoryPreIntermediate(subject, valueList);
    describe += startSentence1;

    startSentence2 = generateIntroductoryUpperIntermediate(subject, timeList, valueList);
    describe += startSentence2;

    paragraph = generateDescribeIntermediate(subject, timeList, valueList);
    describe += paragraph;

    document.getElementById("result").innerText = describe;
}

// Define the advanced segmentation function
function segmentDataAdvanced(timeList, valueList) {
    // Convert input elements to array of data points
    let dataPoints = [];
    for (let i = 0; i < timeList.length; i++) {
        dataPoints.push({
            time: timeList[i].value,
            value: Number(valueList[i].value)
        });
    }
    
    const segments = [];
    let currentSegment = {
        start_time: dataPoints[0].time,
        start_value: dataPoints[0].value,
        end_time: dataPoints[0].time,
        end_value: dataPoints[0].value,
        direction: null,
        change_type: "stable"
    };
    
    // Function to determine the change type based on percentage change
    function getChangeType(previousValue, currentValue) {
        if (previousValue === currentValue) return "stable";
        
        const percentChange = Math.abs((currentValue - previousValue) / previousValue) * 100;
        return percentChange <= 30 ? "within_30" : "above_30";
    }
    
    // Function to determine direction
    function getDirection(previousValue, currentValue) {
        if (previousValue < currentValue) return "increase";
        if (previousValue > currentValue) return "decrease";
        return "stable";
    }
    
    // Start from the second point
    for (let i = 1; i < dataPoints.length; i++) {
        const previousPoint = dataPoints[i - 1];
        const currentPoint = dataPoints[i];
        
        // Determine direction and change type for current point
        const currentDirection = getDirection(previousPoint.value, currentPoint.value);
        const currentChangeType = getChangeType(previousPoint.value, currentPoint.value);
        
        // Initialize direction if this is the first comparison
        if (currentSegment.direction === null && currentDirection !== "stable") {
            currentSegment.direction = currentDirection;
            currentSegment.change_type = currentChangeType;
        }
        
        // Check if we need to start a new segment
        const directionChanged = currentDirection !== "stable" && 
                                 currentSegment.direction !== null && 
                                 currentDirection !== currentSegment.direction;
                                 
        const changeTypeChanged = currentChangeType !== "stable" && 
                                  currentSegment.change_type !== "stable" && 
                                  currentChangeType !== currentSegment.change_type;
        
        if (directionChanged || changeTypeChanged) {
            // Finalize current segment
            currentSegment.end_time = previousPoint.time;
            currentSegment.end_value = previousPoint.value;
            
            // Only add non-trivial segments
            if (currentSegment.start_time !== currentSegment.end_time && 
                currentSegment.direction !== null) {
                segments.push({...currentSegment});
            }
            
            // Start new segment
            currentSegment = {
                start_time: previousPoint.time,
                start_value: previousPoint.value,
                end_time: currentPoint.time,
                end_value: currentPoint.value,
                direction: currentDirection === "stable" ? currentSegment.direction : currentDirection,
                change_type: currentDirection === "stable" ? currentSegment.change_type : currentChangeType
            };
        } else {
            // Continue current segment
            currentSegment.end_time = currentPoint.time;
            currentSegment.end_value = currentPoint.value;
            
            // Update direction and change_type if not stable
            if (currentDirection !== "stable") {
                currentSegment.direction = currentDirection;
            }
            if (currentChangeType !== "stable") {
                currentSegment.change_type = currentChangeType;
            }
        }
    }
    
    // Add the last segment if it's valid
    if (currentSegment.start_time !== currentSegment.end_time && 
        currentSegment.direction !== null) {
        segments.push({...currentSegment});
    }
    
    return segments;
}


document.getElementById("startButtonUpperAdvanced").onclick = async function () {
    var subject = document.getElementById("subjectInput").value;
    var timeList = document.getElementsByClassName("time");
    var valueList = document.getElementsByClassName("value");
    
    // Update result area to show loading status
    document.getElementById("result").innerText = "Generating advanced analysis...";
    
    // Generate Upper Intermediate description using existing code-based approach
    var upperIntermediateDescription = "";
    var startSentence1 = generateIntroductoryPreIntermediate(subject, valueList);
    upperIntermediateDescription += startSentence1;
    var startSentence2 = generateIntroductoryUpperIntermediate(subject, timeList, valueList);
    upperIntermediateDescription += startSentence2;
    var paragraph = generateDescribeIntermediate(subject, timeList, valueList);
    upperIntermediateDescription += paragraph;
    
    console.log("Upper Intermediate Description:", upperIntermediateDescription);
    
    // Generate Advanced description using the API-based approach
    // Segment the data
    const segments = segmentDataAdvanced(timeList, valueList);
    console.log("Advanced Segmentation Results:", segments);
    
    var apiAdvancedDescription = "";
    
    try {
        // Only process when there are meaningful segments
        if (segments.length > 0) {
            // First add the same introductory parts as in Upper Intermediate
            apiAdvancedDescription += startSentence1;
            apiAdvancedDescription += startSentence2;
            
            // Then get descriptions for each segment from the API
            for (const segment of segments) {
                const segmentDescription = await generateSegmentDescription(segment, subject);
                apiAdvancedDescription += " " + segmentDescription; // Note the space to connect sentences
            }
            
            console.log("API Advanced Description:", apiAdvancedDescription);
            
            // Now send both descriptions to the API to select and fix the better one
            const finalDescription = await compareBothDescriptions(upperIntermediateDescription, apiAdvancedDescription, subject);
            
            // Display the final description
            document.getElementById("result").innerText = finalDescription;
        } else {
            document.getElementById("result").innerText = 
                "Could not generate an advanced report. The data doesn't contain significant pattern changes.";
        }
    } catch (error) {
        console.error("Error in advanced report generation:", error);
        document.getElementById("result").innerText = 
            "An error occurred while generating the advanced report. Please check the console for details.";
    }
};

/**
 * Compare both descriptions and select the better one with minimal grammar fixes
 * @param {string} upperIntermediateDesc - Description generated with the code-based approach
 * @param {string} apiAdvancedDesc - Description generated with the API-based approach
 * @param {string} subject - The subject of the report
 * @returns {Promise<string>} - The final description
 */
async function compareBothDescriptions(upperIntermediateDesc, apiAdvancedDesc, subject) {
    try {
        const prompt = `
I have two descriptions of trend analysis for "${subject}". Please compare them and:
1. Select the BETTER description based on accuracy, clarity, and language sophistication
2. FIX ONLY critical grammar errors in the selected description
3. Do NOT make any other changes unless absolutely necessary
4. Return the entire fixed description

DESCRIPTION 1:
${upperIntermediateDesc}

DESCRIPTION 2:
${apiAdvancedDesc}

Please return only the selected and minimally fixed description with no explanations.
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
                    temperature: 0.3, // Lower temperature for more consistent selection
                    maxOutputTokens: 1000,
                }
            })
        });

        const data = await response.json();
        
        // Extract the generated text from the response
        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            return data.candidates[0].content.parts[0].text.trim();
        } else {
            console.error("Unexpected API response format:", data);
            // If API fails, just return the API advanced description
            return apiAdvancedDesc;
        }
    } catch (error) {
        console.error("Error comparing descriptions:", error);
        // In case of error, return the API advanced description
        return apiAdvancedDesc;
    }
}

let chartInstance = null;

function getChartData() {
    const times = Array.from(document.getElementsByClassName('time')).map(input => input.value);
    const values = Array.from(document.getElementsByClassName('value')).map(input => input.value);
    return { times, values };
}

function generateLineChart() {
    const { times, values } = getChartData();
    const ctx = document.getElementById('showChart').getContext('2d');
    
    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
                label: 'Values',
                data: values,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Value'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}

document.getElementById("startButtonGraph").onclick = function(){
    generateLineChart();
}

function uploadCSV() {
    document.getElementById('supportCSV').click();
}

document.getElementById('supportCSV').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const contents = e.target.result;
        const rows = contents.split('\n');

        // Find all rows in the table
        const tableRows = document.querySelectorAll('#dataTable tr');
        
        // Skip the header row
        for (let i = 1; i < tableRows.length; i++) {
            const row = tableRows[i];
            const cells = row.querySelectorAll('input');

            // Fill the row with CSV data if available
            if (i - 1 < rows.length) {
                const csvData = rows[i - 1].split(',');
                cells[0].value = csvData[0] ? csvData[0] : cells[0].value;
                cells[1].value = csvData[1] ? csvData[1] : cells[1].value;
            }
        }
    };

    reader.readAsText(file);
});

document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById('showChart');
    var context = canvas.getContext('2d');

    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.strokeRect(0, 0, canvas.width, canvas.height);

    context.font = '20px Arial';
    context.fillStyle = 'blue';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('Please click "Graph" button to generate graph view.', canvas.width / 2, canvas.height / 2); 
});
