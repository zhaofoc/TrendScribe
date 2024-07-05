var beginIncreaseVerb = ["went up", "increased", "rose", "climbed"];
var difficultIncreaseVerb = ["soared", "surged"];
var beginIncreaseNoun = ["n increase", "rise", "climb", "growth"];
var beginDecreaseVerb = ["went down", "decreased", "fell", "dropped"];
var beginDecreaseNoun = ["decrease", "fall", "drop", "cut"];
var magMinorAdv = ["negligibly", "marginally", "slightly", "moderately"];
var magMajorAdv = ["significantly", "sharply", "steeply", "dramatically"];
var magMinorAdj = ["negligible", "marginal", "slight", "moderate"];
var magMajorAdj = ["significant", "sharp", "steep", "dramatic"];


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
            outputStr += " from " + valueFirst + " to " + valueLast + " by " + Math.abs((valueFirst - valueLast)) + ". ";
        }
        else if (dependerRandom == 2){
            outputStr += " from " + valueFirst + " by " + Math.abs((valueFirst - valueLast)) + ". ";
        }
        else{
            outputStr += " to " + valueLast + " by " + Math.abs((valueFirst - valueLast)) + ". "
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
            outputStr += " from " + valueFirst + " by " + Math.abs((valueFirst - valueLast)) + " from " + timeFirst + " to " + timeLast + ". ";
        }else if (dependerRandom == 3){
            //to 2 by 1 from Jan to Feb
            outputStr += " to " + valueLast + " by " + Math.abs((valueFirst - valueLast)) + " from " + timeFirst + " to " + timeLast + ". ";
        }else if (dependerRandom == 4){
            //by 1 from 1 in Jan to 2 in Feb
            outputStr += " by " + Math.abs((valueFirst - valueLast)) + " from " + valueFirst + " in " + timeFirst + " to " + valueLast + " in " + timeLast + ". ";
        }else{
            //by 1 from 1 to 2 from Jan to Feb
            outputStr += " by " + Math.abs((valueFirst - valueLast)) + " from " + valueFirst + " to " + valueLast + " from " + timeFirst + " to " + timeLast + ". ";
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

document.getElementById("startButtonUpperAdvanced").onclick = function () {
    var subject = document.getElementById("subjectInput").value;

    var timeList = document.getElementsByClassName("time");
    var valueList = document.getElementsByClassName("value");

    var describe = "";

    startSentence = generateIntroductoryUpperIntermediate(subject, timeList, valueList);
    describe += startSentence;

    describe += ("Following is a more specific description of the changes during th whole period. ");

    paragraph = generateDescribeIntermediate(subject, timeList, valueList);
    describe += paragraph;

    document.getElementById("result").innerText = describe;
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
