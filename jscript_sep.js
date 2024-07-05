
var beginIncreaseVerb = ["went up", "increased", "rose", "climbed"];
var difficultIncreaseVerb = ["soared", "surged"];
var beginIncreaseNoun = ["increase", "rise", "climb"];
var beginDecreaseVerb = ["went down", "decreased", "fell", "dropped"];
var beginDecreaseNoun = ["decrease", "fall", "drop"];
var magMinorAdv = ["negligibly", "marginally", "slightly", "moderately"];
var magMajorAdv = ["significantly", "sharply", "steeply", "dramatically"];
var magMinorAdj = ["negligible", "marginal", "slight", "moderate"];
var magMajorAdj = ["significant", "sharp", "steep", "dramatic"];

function generateIntroductoryBeginner(subject) {
    var str = "This is a report regarding " + subject + ". ";
    return str;

};

function generateIntroductoryPreIntermediate(subject, valueList) {
    var str = "This is a report regarding " + subject + ", ";
    var valueFirst = Number(valueList[0].value);
    var valueLast = Number(valueList[11].value);
    var random_1 = Math.round(Math.random());
    var random_2 = Math.round(Math.random());
    var random_verb_noun = Math.round(Math.random());
    var random_word;
    if (random_verb_noun == 1) {
        random_word = Math.random();
        console.log(random_word);
        if (random_word < 0.25) {
            arrMember = 0;
        }
        else {
            if (random_word < 0.5) {
                arrMember = 1;
            }
            else {
                if (random_word < 0.75) {
                    arrMember = 2;
                }
                else {
                    arrMember = 3;
                }
            }
        }

        if (valueFirst > valueLast) {
            //str += ("over the year, the value goes down from " + valueFirst + " to " + valueLast + ". ");
            if (random_1 == 1) {
                if (random_2 == 1) {
                    str += ("over the year, the value " + beginDecreaseVerb[arrMember] + " from " + valueFirst + " to " + valueLast + ". ");
                }
                else {
                    str += ("over the year, the value " + beginDecreaseVerb[arrMember] + " from " + valueFirst + " to " + valueLast + " by " + (valueFirst - valueLast) + ". ");
                }
            }
            else {
                if (random_2 == 1) {
                    str += ("over the year, the value " + beginDecreaseVerb[arrMember] + " from " + valueFirst + " by " + (valueFirst - valueLast) + ". ");
                }
                else {
                    str += ("over the year, the value " + beginDecreaseVerb[arrMember] + " to " + valueLast + " by " + (valueFirst - valueLast) + ". ");
                }
            }
        }
        else {
            if (valueFirst == valueLast) {
                str += ("over the year, the value finally keeps stable at " + valueFirst + ". ");
            }
            else {
                if (random_1 == 1) {
                    if (random_2 == 1) {
                        str += ("over the year, the value " + beginIncreaseVerb[arrMember] + " from " + valueFirst + " to " + valueLast + ". ");
                    }
                    else {
                        str += ("over the year, the value " + beginIncreaseVerb[arrMember] + " from " + valueFirst + " to " + valueLast + " by " + (valueFirst - valueLast) + ". ");
                    }
                }
                else {
                    if (random_2 == 1) {
                        str += ("over the year, the value " + beginIncreaseVerb[arrMember] + " from " + valueFirst + " by " + (valueFirst - valueLast) + ". ");
                    }
                    else {
                        str += ("over the year, the value " + beginIncreaseVerb[arrMember] + " to " + valueLast + " by " + (valueFirst - valueLast) + ". ");
                    }
                }
            }
        }
    }
    else {
        random_word = Math.random();
        if (random_word < 0.3) {
            arrMember = 0;
        }
        else {
            if (random_word < 0.6) {
                arrMember = 1;
            }
            else {
                arrMember = 2;
            }
        }

        if (valueFirst > valueLast) {
            //str += ("over the year, the value goes down from " + valueFirst + " to " + valueLast + ". ");
            if (random_1 == 1) {
                if (random_2 == 1) {
                    str += ("over the year, there was a " + beginDecreaseNoun[arrMember] + " from " + valueFirst + " to " + valueLast + ". ");
                }
                else {
                    str += ("over the year, there was a " + beginDecreaseNoun[arrMember] + " from " + valueFirst + " to " + valueLast + " by " + (valueFirst - valueLast) + ". ");
                }
            }
            else {
                if (random_2 == 1) {
                    str += ("over the year, there was a " + beginDecreaseNoun[arrMember] + " from " + valueFirst + " by " + (valueFirst - valueLast) + ". ");
                }
                else {
                    str += ("over the year, there was a " + beginDecreaseNoun[arrMember] + " to " + valueLast + " by " + (valueFirst - valueLast) + ". ");
                }
            }
        }
        else {
            if (valueFirst == valueLast) {
                str += ("over the year, the value finally keeps stable at " + valueFirst + ". ");
            }
            else {
                if (random_1 == 1) {
                    if (random_2 == 1) {
                        str += ("over the year, there was a " + beginIncreaseNoun[arrMember] + " from " + valueFirst + " to " + valueLast + ". ");
                    }
                    else {
                        str += ("over the year, there was a " + beginIncreaseNoun[arrMember] + " from " + valueFirst + " to " + valueLast + " by " + (valueFirst - valueLast) + ". ");
                    }
                }
                else {
                    if (random_2 == 1) {
                        str += ("over the year, there was a " + beginIncreaseNoun[arrMember] + " from " + valueFirst + " by " + (valueFirst - valueLast) + ". ");
                    }
                    else {
                        str += ("over the year, there was a " + beginIncreaseNoun[arrMember] + " to " + valueLast + " by " + (valueFirst - valueLast) + ". ");
                    }
                }
            }
        }



    }

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
    /*if( valueFirst > valueLast )
    {
        str += ("over the year, the value goes down from " + valueFirst + " to " + valueLast + ". ");
    }
    else
    {
        if( valueFirst == valueLast )
        {
            str += ("over the year, the value finally keeps table at " + valueFirst + ". ");
        }
        else
        {
            str += ("over the year, the value increase from " + valueFirst + " to " + valueLast + ". ");
        }
    }
    */



    for (roopIndex = 0; roopIndex < 11; roopIndex++) {
        //console.log(roopIndex);
        //console.log(Number(valueList[roopIndex+1].value));
        //console.log(timeList[roopIndex+1]);
        //console.log(Number(valueList[roopIndex].value));
        if (Number(valueList[roopIndex + 1].value) > Number(valueList[roopIndex].value)) {
            maxValue = Number(valueList[roopIndex + 1].value);
            maxDate = timeList[roopIndex + 1].value;
        }
    }

    for (roopIndex < 0; roopIndex < 11; roopIndex++) {
        if (Number(valueList[roopIndex + 1].value) < Number(valueList[roopIndex].value)) {
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
    var random_1;
    var random_2;
    var random_word;
    var random_verb_noun;
    var describe = "";
    var arrMember = 0;
    if (timeList.length != valueList.length) {
        alert("Error! The number of Time Point is not equal to the number of Data Value.");
        describe = "Error! The number of Time Point is not equal to the number of Data Value. ";
        return describe;
    }
    else {
        var dataNumber = timeList.length;
        var differenceThisTime;
        //describe += ("There are "  + dataNumber + " datas inserted. ");
        for (var i = 0; i < dataNumber - 1; i++) {
            console.log(timeList[i].value);
            console.log(timeList[i + 1].value);
            describe += ("From " + timeList[i].value + " to " + timeList[i + 1].value + ", ");
            random_1 = Math.round(Math.random());
            random_2 = Math.round(Math.random());
            random_verb_noun = Math.round(Math.random());
            console.log(i, valueList[i].value, valueList[i + 1].value);
            console.log(random_1);
            console.log(random_2);
            console.log(random_verb_noun);
            if (Number(valueList[i].value) < Number(valueList[i + 1].value)) {
                differenceThisTime = Number(valueList[i + 1].value) - Number(valueList[i].value);
                console.log(valueList[i].value + "<" + valueList[i + 1].value + (Number(valueList[i].value) < Number(valueList[i + 1].value)));
                if (random_verb_noun == 1) {
                    random_word = Math.random();
                    console.log(random_word);
                    if (random_word < 0.25) {
                        arrMember = 0;
                    }
                    else {
                        if (random_word < 0.5) {
                            arrMember = 1;
                        }
                        else {
                            if (random_word < 0.75) {
                                arrMember = 2;
                            }
                            else {
                                arrMember = 3;
                            }
                        }
                    }

                    if (random_1 == 1) {
                        if (random_2 == 1) {
                            describe += (subject + " " + beginIncreaseVerb[arrMember] + 
                            " from " + valueList[i].value + " to " + valueList[i + 1].value + 
                            " by " + differenceThisTime + ". ");
                        }
                        else {
                            describe += (subject + " " + beginIncreaseVerb[arrMember] + 
                            " from " + valueList[i].value + " to " + valueList[i + 1].value + ". ");
                        }
                        //describe += (subject + " increase from " + valueList[i].value + " to "+ valueList[i+1].value + ". ");
                    }
                    else {
                        if (random_2 == 1) {
                            describe += (subject + " " + beginIncreaseVerb[arrMember] + " from " + valueList[i].value + " by " + differenceThisTime + ". ");
                        }
                        else {
                            describe += (subject + " " + beginIncreaseVerb[arrMember] + " to " + valueList[i + 1].value + " by " + differenceThisTime + ". ");
                        }
                        //describe += ("there is a rise on " + subject + " . It rose from " + valueList[i].value + " to "+ valueList[i+1].value + ". ");
                    }
                }
                else {
                    random_word = Math.random();
                    console.log(random_word);
                    if (random_word < 0.3) {
                        arrMember = 0;
                    }
                    else {
                        if (random_word < 0.6) {
                            arrMember = 1;
                        }
                        else {
                            arrMember = 2;
                        }
                    }

                    if (random_1 == 1) {
                        if (random_2 == 1) {
                            describe += ("there was a " + beginIncreaseNoun[arrMember] + " in " + subject + " to " + valueList[i + 1].value + " by " + differenceThisTime + ". ");
                        }
                        else {
                            describe += ("there was a " + beginIncreaseNoun[arrMember] + " in " + subject + " from " + valueList[i].value + " by " + differenceThisTime + ". ");
                        }
                    }
                    else {
                        if (random_2 == 1) {
                            describe += ("there was a " + beginIncreaseNoun[arrMember] + " in " + subject + " from " + valueList[i].value + " by " + differenceThisTime + ". ");
                        }
                        else {
                            describe += ("there was a " + beginIncreaseNoun[arrMember] + " in " + subject + " from " + valueList[i].value + " to " + valueList[i + 1].value + " by " + differenceThisTime + ". ");
                        }
                    }

                    //describe += ("there was an increase in " + subject + " to "+ valueList[i+1].value + " by " + differenceThisTime + ".");
                }
            }
            else {
                if (Number(valueList[i].value) > Number(valueList[i + 1].value)) {
                    differenceThisTime = Number(valueList[i].value) - Number(valueList[i + 1].value);
                    console.log(valueList[i].value + ">" + valueList[i + 1].value + (Number(valueList[i].value) > Number(valueList[i + 1].value)));
                    if (random_verb_noun == 1) {
                        random_word = Math.random();
                        console.log(random_word);
                        if (random_word < 0.25) {
                            arrMember = 0;
                        }
                        else {
                            if (random_word < 0.5) {
                                arrMember = 1;
                            }
                            else {
                                if (random_word < 0.75) {
                                    arrMember = 2;
                                }
                                else {
                                    arrMember = 3;
                                }
                            }
                        }

                        if (random_1 == 1) {
                            if (random_2 == 1) {
                                describe += (subject + " " + beginDecreaseVerb[arrMember] + " from " + valueList[i].value + " to " + valueList[i + 1].value + " by " + differenceThisTime + ". ");
                            }
                            else {
                                describe += (subject + " " + beginDecreaseVerb[arrMember] + " from " + valueList[i].value + " to " + valueList[i + 1].value + ". ");
                            }
                        }
                        else {
                            if (random_2 == 1) {
                                describe += (subject + " " + beginDecreaseVerb[arrMember] + " from " + valueList[i].value + " by " + differenceThisTime + ". ");
                            }
                            else {
                                describe += (subject + " " + beginDecreaseVerb[arrMember] + " to " + valueList[i + 1].value + " by " + differenceThisTime + ". ");
                            }
                        }
                    }
                    else {
                        random_word = Math.random();
                        console.log(random_word);
                        if (random_word < 0.3) {
                            arrMember = 0;
                        }
                        else {
                            if (random_word < 0.6) {
                                arrMember = 1;
                            }
                            else {
                                arrMember = 2;
                            }
                        }

                        if (random_1 == 1) {
                            if (random_2 == 1) {
                                describe += ("there was a " + beginDecreaseNoun[arrMember] + " in " + subject + " to " + valueList[i + 1].value + " by " + differenceThisTime + ". ");
                            }
                            else {
                                describe += ("there was a " + beginDecreaseNoun[arrMember] + " in " + subject + " from " + valueList[i].value + " by " + differenceThisTime + ". ");
                            }
                        }
                        else {
                            if (random_2 == 1) {
                                describe += ("there was a " + beginDecreaseNoun[arrMember] + " in " + subject + " from " + valueList[i].value + " by " + differenceThisTime + ". ");
                            }
                            else {
                                describe += ("there was a " + beginDecreaseNoun[arrMember] + " in " + subject + " from " + valueList[i].value + " to " + valueList[i + 1].value + " by " + differenceThisTime + ". ");
                            }
                        }
                    }
                }
                else {
                    describe += (subject + " remain statble at " + valueList[i].value + ". ");
                }
            }
        }
        return describe;
    }

};

function generateDescribeElementary(subject, timeList, valueList) {
    var random;
    var describe = "";
    if (timeList.length != valueList.length) {
        alert("Error! The number of Time Point is not equal to the number of Data Value.");
        describe = "Error! The number of Time Point is not equal to the number of Data Value. ";
        return describe;
    }
    else {
        var dataNumber = timeList.length;
        var tempDifferenceOld = Number(valueList[1].value) - Number(valueList[0].value);
        var k = 0;
        for (var i = 0; i < 11; i++) {
            var tempStartValue = Number(valueList[i].value);
            var tempStartTime = timeList[i].value;
            var finalLoopEndIndexTime = tempStartTime;
            var finalLoopEndIndexValue = tempStartValue;
            var flag;
            console.log("outer" + i + ":" + timeList[i].value);
            for (var j = i + 1; j < 12; j++) {
                var random = Math.round(Math.random());
                var random_1 = Math.round(Math.random());
                var random_2 = Math.round(Math.random());
                var random_time_position = Math.round(Math.random());
                var random_verb_noun = Math.round(Math.random());
                var random_word = 0;
                console.log("inner" + j + ":" + timeList[j].value);
                var tempDifferenceNew = Number(valueList[j].value) - Number(valueList[j - 1].value);
                console.log(timeList[j].value + "-" + timeList[j - 1].value + "=" + tempDifferenceNew);
                console.log("old=" + tempDifferenceOld);
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
                    //k++;
                    if (tempStartValue < tempEndValue) {
                        //if(random == 0)
                        //{
                        //    describe += ("From " + tempStartTime + " to " + tempEndTime + ", the value went up from " + tempStartValue + " to " + tempEndValue + ". ");
                        //}
                        //else
                        //{
                        //    describe += ("There is an increase from " + tempStartValue + " to " + tempEndValue + ", regarding the data change from " + tempStartTime + " to " + tempEndTime + ".");
                        //}
                        if (random_verb_noun == 0) {
                            random_word = Math.random();
                            console.log(random_word);
                            if (random_word < 0.25) {
                                arrMember = 0;
                            }
                            else {
                                if (random_word < 0.5) {
                                    arrMember = 1;
                                }
                                else {
                                    if (random_word < 0.75) {
                                        arrMember = 2;
                                    }
                                    else {
                                        arrMember = 3;
                                    }
                                }
                            }
                            if (random_time_position == 1) {
                                if (random == 1) {
                                    describe += ("The price " + beginIncreaseVerb[arrMember] + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("The price " + beginIncreaseVerb[arrMember] + " by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                            }
                            else {
                                if (random_1 == 1) {
                                    if (random_2 == 1) {
                                        describe += ("The price " + beginIncreaseVerb[arrMember] + " by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("The price " + beginIncreaseVerb[arrMember] + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                                else {
                                    if (random_2 == 1) {
                                        describe += ("The price " + beginIncreaseVerb[arrMember] + " from " + tempStartValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("The price " + beginIncreaseVerb[arrMember] + " to " + tempEndValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                            }
                        }
                        else {
                            random_word = Math.random();
                            console.log(random_word);
                            if (random_word < 0.3) {
                                arrMember = 0;
                            }
                            else {
                                if (random_word < 0.6) {
                                    arrMember = 1;
                                }
                                else {
                                    arrMember = 2;
                                }
                            }

                            if (random_time_position == 1) {
                                if (random == 1) {
                                    describe += ("There was a " + beginIncreaseNoun[arrMember] + " in price from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("There was a " + beginIncreaseNoun[arrMember] + " in price by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                            }
                            else {
                                if (random_1 == 1) {
                                    if (random_2 == 1) {
                                        describe += ("There was a " + beginIncreaseNoun[arrMember] + " in price by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("There was a " + beginIncreaseNoun[arrMember] + " in price from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                                else {
                                    if (random_2 == 1) {
                                        describe += ("There was a " + beginIncreaseNoun[arrMember] + " in price from " + tempStartValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("There was a " + beginIncreaseNoun[arrMember] + " in price to " + tempEndValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                            }
                        }
                    }
                    else {
                        if (random_verb_noun == 0) {
                            random_word = Math.random();
                            console.log(random_word);
                            if (random_word < 0.25) {
                                arrMember = 0;
                            }
                            else {
                                if (random_word < 0.5) {
                                    arrMember = 1;
                                }
                                else {
                                    if (random_word < 0.75) {
                                        arrMember = 2;
                                    }
                                    else {
                                        arrMember = 3;
                                    }
                                }
                            }
                            if (random_time_position == 1) {
                                if (random == 1) {
                                    describe += ("The price " + beginDecreaseVerb[arrMember] + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("The price " + beginDecreaseVerb[arrMember] + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                            }
                            else {
                                if (random_1 == 1) {
                                    if (random_2 == 1) {
                                        describe += ("The price " + beginDecreaseVerb[arrMember] + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("The price " + beginDecreaseVerb[arrMember] + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                                else {
                                    if (random_2 == 1) {
                                        describe += ("The price " + beginDecreaseVerb[arrMember] + " from " + tempStartValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("The price " + beginDecreaseVerb[arrMember] + " to " + tempEndValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                            }
                        }
                        else {
                            random_word = Math.random();
                            console.log(random_word);
                            if (random_word < 0.3) {
                                arrMember = 0;
                            }
                            else {
                                if (random_word < 0.6) {
                                    arrMember = 1;
                                }
                                else {
                                    arrMember = 2;
                                }
                            }

                            if (random_time_position == 1) {
                                if (random == 1) {
                                    describe += ("There was a " + beginDecreaseNoun[arrMember] + " in price from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("There was a " + beginDecreaseNoun[arrMember] + " in price by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                            }
                            else {
                                if (random_1 == 1) {
                                    if (random_2 == 1) {
                                        describe += ("There was a " + beginDecreaseNoun[arrMember] + " in price by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("There was a " + beginDecreaseNoun[arrMember] + " in price from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                                else {
                                    if (random_2 == 1) {
                                        describe += ("There was a " + beginDecreaseNoun[arrMember] + " in price from " + tempStartValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("There was a " + beginDecreaseNoun[arrMember] + " in price to " + tempEndValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                            }
                        }
                    }
                    if (tempEndTime == "December") {
                        flag = 1;
                    }
                    break;
                }
            }

            if (flag == 1) {
                describe += " It is also well noticed that in the end, "
                if (tempStartValue < tempEndValue) {
                    if (random_verb_noun == 0) {
                        random_word = Math.random();
                        console.log(random_word);
                        if (random_word < 0.25) {
                            arrMember = 0;
                        }
                        else {
                            if (random_word < 0.5) {
                                arrMember = 1;
                            }
                            else {
                                if (random_word < 0.75) {
                                    arrMember = 2;
                                }
                                else {
                                    arrMember = 3;
                                }
                            }
                        }
                        if (random_time_position == 1) {
                            if (random == 1) {
                                describe += ("the price " + beginIncreaseVerb[arrMember] + 
                                " from " + tempStartValue + " in " + tempStartTime + 
                                " to " + tempEndValue + " in " + tempEndTime + ". ");
                            }
                            else {
                                describe += ("the price " + beginIncreaseVerb[arrMember] + " by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                            }
                        }
                        else {
                            if (random_1 == 1) {
                                if (random_2 == 1) {
                                    describe += ("the price " + beginIncreaseVerb[arrMember] + 
                                    " by " + (tempEndValue - tempStartValue) + 
                                    " from " + tempStartValue + " to " + tempEndValue + 
                                    " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("the price " + beginIncreaseVerb[arrMember] + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                            }
                            else {
                                if (random_2 == 1) {
                                    describe += ("the price " + beginIncreaseVerb[arrMember] + " from " + tempStartValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("the price " + beginIncreaseVerb[arrMember] + " to " + tempEndValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                            }
                        }
                    }
                    else {
                        random_word = Math.random();
                        console.log(random_word);
                        if (random_word < 0.3) {
                            arrMember = 0;
                        }
                        else {
                            if (random_word < 0.6) {
                                arrMember = 1;
                            }
                            else {
                                arrMember = 2;
                            }
                        }

                        if (random_time_position == 1) {
                            if (random == 1) {
                                describe += ("there was a " + beginDecreaseNoun[arrMember] + " in price from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                            }
                            else {
                                describe += ("there was a " + beginDecreaseNoun[arrMember] + " in price by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                            }
                        }
                        else {
                            if (random_1 == 1) {
                                if (random_2 == 1) {
                                    describe += ("there was a " + beginDecreaseNoun[arrMember] + " in price by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("there was a " + beginDecreaseNoun[arrMember] + " in price from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                            }
                            else {
                                if (random_2 == 1) {
                                    describe += ("there was a " + beginDecreaseNoun[arrMember] + " in price from " + tempStartValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("there was a " + beginDecreaseNoun[arrMember] + " in price to " + tempEndValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                            }
                        }
                    }
                }
                else {
                    if (random_verb_noun == 0) {
                        random_word = Math.random();
                        console.log(random_word);
                        if (random_word < 0.25) {
                            arrMember = 0;
                        }
                        else {
                            if (random_word < 0.5) {
                                arrMember = 1;
                            }
                            else {
                                if (random_word < 0.75) {
                                    arrMember = 2;
                                }
                                else {
                                    arrMember = 3;
                                }
                            }
                        }
                        if (random_time_position == 1) {
                            if (random == 1) {
                                describe += ("the price " + beginDecreaseVerb[arrMember] + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                            }
                            else {
                                describe += ("the price " + beginDecreaseVerb[arrMember] + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                            }
                        }
                        else {
                            if (random_1 == 1) {
                                if (random_2 == 1) {
                                    describe += ("the price " + beginDecreaseVerb[arrMember] + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("the price " + beginDecreaseVerb[arrMember] + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                            }
                            else {
                                if (random_2 == 1) {
                                    describe += ("the price " + beginDecreaseVerb[arrMember] + " from " + tempStartValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("the price " + beginDecreaseVerb[arrMember] + " to " + tempEndValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                            }
                        }
                    }
                    else {
                        random_word = Math.random();
                        console.log(random_word);
                        if (random_word < 0.3) {
                            arrMember = 0;
                        }
                        else {
                            if (random_word < 0.6) {
                                arrMember = 1;
                            }
                            else {
                                arrMember = 2;
                            }
                        }

                        if (random_time_position == 1) {
                            if (random == 1) {
                                describe += ("there was a " + beginDecreaseNoun[arrMember] + " in price from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                            }
                            else {
                                describe += ("there was a " + beginDecreaseNoun[arrMember] + " in price by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                            }
                        }
                        else {
                            if (random_1 == 1) {
                                if (random_2 == 1) {
                                    describe += ("there was a " + beginDecreaseNoun[arrMember] + " in price by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("there was a " + beginDecreaseNoun[arrMember] + " in price from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                            }
                            else {
                                if (random_2 == 1) {
                                    describe += ("there was a " + beginDecreaseNoun[arrMember] + " in price from " + tempStartValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("there was a " + beginDecreaseNoun[arrMember] + " in price to " + tempEndValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                            }
                        }
                    }
                }
                break;
            }
        }
    }
    return describe;
}

function generateDescribeIntermediate(subject, timeList, valueList) {
    var random = Math.round(Math.random());
    var random_1 = Math.round(Math.random());
    var random_2 = Math.round(Math.random());
    var random_time_position = Math.round(Math.random());
    var random_verb_noun = Math.round(Math.random());
    var random_word_1 = 0;
    var random_word_2 = 0;
    var describe = "";
    if (timeList.length != valueList.length) {
        alert("Error! The number of Time Point is not equal to the number of Data Value.");
        describe = "Error! The number of Time Point is not equal to the number of Data Value. ";
        return describe;
    }
    else {
        var dataNumber = timeList.length;
        var tempDifferenceOld = Number(valueList[1].value) - Number(valueList[0].value);
        var k = 0;
        for (var i = 0; i < 11; i++) {
            var tempStartValue = Number(valueList[i].value);
            var tempStartTime = timeList[i].value;
            var finalLoopEndIndexTime = tempStartTime;
            var finalLoopEndIndexValue = tempStartValue;
            var flag;
            var random_verb_noun = Math.round(Math.random());
            console.log("outer" + i + ":" + timeList[i].value);
            for (var j = i + 1; j < 12; j++) {
                var random = Math.round(Math.random());
                console.log("inner" + j + ":" + timeList[j].value);
                var tempDifferenceNew = Number(valueList[j].value) - Number(valueList[j - 1].value);
                console.log(timeList[j].value + "-" + timeList[j - 1].value + "=" + tempDifferenceNew);
                console.log("old=" + tempDifferenceOld);
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
                    //k++;
                    if (tempStartValue < tempEndValue) {
                        if (random_verb_noun == 0) {
                            random_word_1 = Math.random();
                            random_word_2 = Math.random();

                            if (random_word_1 < 0.25) {
                                arrMember_1 = 0;
                            }
                            else {
                                if (random_word_1 < 0.5) {
                                    arrMember_1 = 1;
                                }
                                else {
                                    if (random_word_1 < 0.75) {
                                        arrMember_1 = 2;
                                    }
                                    else {
                                        arrMember_1 = 3;
                                    }
                                }
                            }

                            if (random_word_2 < 0.25) {
                                arrMember_2 = 0;
                            }
                            else {
                                if (random_word_2 < 0.5) {
                                    arrMember_2 = 1;
                                }
                                else {
                                    if (random_word_2 < 0.75) {
                                        arrMember_2 = 2;
                                    }
                                    else {
                                        arrMember_2 = 3;
                                    }
                                }
                            }

                            if (Math.abs((tempEndValue - tempStartValue) / tempEndValue) > 0.4) {
                                if (random_time_position == 1) {
                                    if (random == 1) {
                                        describe += ("The price " + beginIncreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("The price " + beginIncreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                    }
                                }
                                else {
                                    if (random_1 == 1) {
                                        if (random_2 == 1) {
                                            describe += ("The price " + beginIncreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                        }
                                        else {
                                            describe += ("The price " + beginIncreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                        }
                                    }
                                    else {
                                        if (random_2 == 1) {
                                            describe += ("The price " + beginIncreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " from " + tempStartValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                        }
                                        else {
                                            describe += ("The price " + beginIncreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " to " + tempEndValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                        }
                                    }
                                }
                            }
                            else {
                                if (random_time_position == 1) {
                                    if (random == 1) {
                                        describe += ("The price " + beginIncreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("The price " + beginIncreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                    }
                                }
                                else {
                                    if (random_1 == 1) {
                                        if (random_2 == 1) {
                                            describe += ("The price " + beginIncreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                        }
                                        else {
                                            describe += ("The price " + beginIncreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                        }
                                    }
                                    else {
                                        if (random_2 == 1) {
                                            describe += ("The price " + beginIncreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " from " + tempStartValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                        }
                                        else {
                                            describe += ("The price " + beginIncreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " to " + tempEndValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            random_word_1 = Math.random();
                            random_word_2 = Math.random();

                            if (random_word_1 < 0.3) {
                                arrMember_1 = 0;
                            }
                            else {
                                if (random_word_1 < 0.6) {
                                    arrMember_1 = 1;
                                }
                                else {
                                    arrMember_1 = 2;
                                }
                            }

                            if (random_word_2 < 0.25) {
                                arrMember_2 = 0;
                            }
                            else {
                                if (random_word_2 < 0.5) {
                                    arrMember_2 = 1;
                                }
                                else {
                                    if (random_word_2 < 0.75) {
                                        arrMember_2 = 2;
                                    }
                                    else {
                                        arrMember_2 = 3;
                                    }
                                }
                            }
                        // No }

                        if (Math.abs((tempEndValue - tempStartValue) / tempEndValue) > 0.4) {
                            if (random_time_position == 1) {
                                if (random == 1) {
                                    describe += ("There was a " + magMajorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("There was a " + magMajorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                            }
                            else {
                                if (random_1 == 1) {
                                    if (random_2 == 1) {
                                        describe += ("There was a " + magMajorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("There was a " + magMajorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                                else {
                                    if (random_2 == 1) {
                                        describe += ("There was a " + magMajorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " from " + tempStartValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("There was a " + magMajorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " to " + tempEndValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                            }
                        }
                        else {
                            if (random_time_position == 1) {
                                if (random == 1) {
                                    describe += ("There was a " + magMinorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("There was a " + magMinorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                            }
                            else {
                                if (random_1 == 1) {
                                    if (random_2 == 1) {
                                        describe += ("There was a " + magMinorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("There was a " + magMinorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                                else {
                                    if (random_2 == 1) {
                                        describe += ("There was a " + magMinorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " from " + tempStartValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("There was a " + magMinorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " to " + tempEndValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                            }

                        }
                    }
                    }
                    else {
                        if (random_verb_noun == 0) {
                            random_word_1 = Math.random();
                            random_word_2 = Math.random();

                            if (random_word_1 < 0.25) {
                                arrMember_1 = 0;
                            }
                            else {
                                if (random_word_1 < 0.5) {
                                    arrMember_1 = 1;
                                }
                                else {
                                    if (random_word_1 < 0.75) {
                                        arrMember_1 = 2;
                                    }
                                    else {
                                        arrMember_1 = 3;
                                    }
                                }
                            }

                            if (random_word_2 < 0.25) {
                                arrMember_2 = 0;
                            }
                            else {
                                if (random_word_2 < 0.5) {
                                    arrMember_2 = 1;
                                }
                                else {
                                    if (random_word_2 < 0.75) {
                                        arrMember_2 = 2;
                                    }
                                    else {
                                        arrMember_2 = 3;
                                    }
                                }
                            }

                            if (Math.abs((tempEndValue - tempStartValue) / tempEndValue) > 0.4) {
                                if (random_time_position == 1) {
                                    if (random == 1) {
                                        describe += ("The price " + beginDecreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("The price " + beginDecreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                    }
                                }
                                else {
                                    if (random_1 == 1) {
                                        if (random_2 == 1) {
                                            describe += ("The price " + beginDecreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                        }
                                        else {
                                            describe += ("The price " + beginDecreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                        }
                                    }
                                    else {
                                        if (random_2 == 1) {
                                            describe += ("The price " + beginDecreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " from " + tempStartValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                        }
                                        else {
                                            describe += ("The price " + beginDecreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " to " + tempEndValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                        }
                                    }
                                }
                            }
                            else {
                                if (random_time_position == 1) {
                                    if (random == 1) {
                                        describe += ("The price " + beginDecreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("The price " + beginDecreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                    }
                                }
                                else {
                                    if (random_1 == 1) {
                                        if (random_2 == 1) {
                                            describe += ("The price " + beginDecreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                        }
                                        else {
                                            describe += ("The price " + beginDecreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                        }
                                    }
                                    else {
                                        if (random_2 == 1) {
                                            describe += ("The price " + beginDecreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " from " + tempStartValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                        }
                                        else {
                                            describe += ("The price " + beginDecreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " to " + tempEndValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            random_word_1 = Math.random();
                            random_word_2 = Math.random();

                            if (random_word_1 < 0.3) {
                                arrMember_1 = 0;
                            }
                            else {
                                if (random_word_1 < 0.6) {
                                    arrMember_1 = 1;
                                }
                                else {
                                    arrMember_1 = 2;
                                }
                            }

                            if (random_word_2 < 0.25) {
                                arrMember_2 = 0;
                            }
                            else {
                                if (random_word_2 < 0.5) {
                                    arrMember_2 = 1;
                                }
                                else {
                                    if (random_word_2 < 0.75) {
                                        arrMember_2 = 2;
                                    }
                                    else {
                                        arrMember_2 = 3;
                                    }
                                }
                            }
                        // No }

                        if (Math.abs((tempEndValue - tempStartValue) / tempEndValue) > 0.4) {
                            if (random_time_position == 1) {
                                if (random == 1) {
                                    describe += ("There was a " + magMajorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("There was a " + magMajorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                            }
                            else {
                                if (random_1 == 1) {
                                    if (random_2 == 1) {
                                        describe += ("There was a " + magMajorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("There was a " + magMajorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                                else {
                                    if (random_2 == 1) {
                                        describe += ("There was a " + magMajorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " from " + tempStartValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("There was a " + magMajorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " to " + tempEndValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                            }
                        }
                        else {
                            if (random_time_position == 1) {
                                if (random == 1) {
                                    describe += ("There was a " + magMinorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("There was a " + magMinorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                            }
                            else {
                                if (random_1 == 1) {
                                    if (random_2 == 1) {
                                        describe += ("There was a " + magMinorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("There was a " + magMinorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                                else {
                                    if (random_2 == 1) {
                                        describe += ("There was a " + magMinorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " from " + tempStartValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("There was a " + magMinorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " to " + tempEndValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                            }

                        }
                    }

                    }
                    if (tempEndTime == "December") {
                        flag = 1;
                    }
                    break;
                }
            }

            if (flag == 1) {
                describe += " It is also well noticed that in the end, "
                if (tempStartValue < tempEndValue) {
                    if (random_verb_noun == 0) {
                        random_word_1 = Math.random();
                        random_word_2 = Math.random();

                        if (random_word_1 < 0.25) {
                            arrMember_1 = 0;
                        }
                        else {
                            if (random_word_1 < 0.5) {
                                arrMember_1 = 1;
                            }
                            else {
                                if (random_word_1 < 0.75) {
                                    arrMember_1 = 2;
                                }
                                else {
                                    arrMember_1 = 3;
                                }
                            }
                        }

                        if (random_word_2 < 0.25) {
                            arrMember_2 = 0;
                        }
                        else {
                            if (random_word_2 < 0.5) {
                                arrMember_2 = 1;
                            }
                            else {
                                if (random_word_2 < 0.75) {
                                    arrMember_2 = 2;
                                }
                                else {
                                    arrMember_2 = 3;
                                }
                            }
                        }

                        if (Math.abs((tempEndValue - tempStartValue) / tempEndValue) > 0.4) {
                            if (random_time_position == 1) {
                                if (random == 1) {
                                    describe += ("the price " + beginIncreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("the price " + beginIncreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                            }
                            else {
                                if (random_1 == 1) {
                                    if (random_2 == 1) {
                                        describe += ("the price " + beginIncreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("the price " + beginIncreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                                else {
                                    if (random_2 == 1) {
                                        describe += ("the price " + beginIncreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " from " + tempStartValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("the price " + beginIncreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " to " + tempEndValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                            }
                        }
                        else {
                            if (random_time_position == 1) {
                                if (random == 1) {
                                    describe += ("the price " + beginIncreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("the price " + beginIncreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                            }
                            else {
                                if (random_1 == 1) {
                                    if (random_2 == 1) {
                                        describe += ("the price " + beginIncreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("the price " + beginIncreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                                else {
                                    if (random_2 == 1) {
                                        describe += ("the price " + beginIncreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " from " + tempStartValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("the price " + beginIncreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " to " + tempEndValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                            }
                        }
                    }
                    else {
                        random_word_1 = Math.random();
                        random_word_2 = Math.random();

                        if (random_word_1 < 0.3) {
                            arrMember_1 = 0;
                        }
                        else {
                            if (random_word_1 < 0.6) {
                                arrMember_1 = 1;
                            }
                            else {
                                arrMember_1 = 2;
                            }
                        }

                        if (random_word_2 < 0.25) {
                            arrMember_2 = 0;
                        }
                        else {
                            if (random_word_2 < 0.5) {
                                arrMember_2 = 1;
                            }
                            else {
                                if (random_word_2 < 0.75) {
                                    arrMember_2 = 2;
                                }
                                else {
                                    arrMember_2 = 3;
                                }
                            }
                        }
                    }

                    if (Math.abs((tempEndValue - tempStartValue) / tempEndValue) > 0.4) {
                        if (random_time_position == 1) {
                            if (random == 1) {
                                describe += ("there was a " + magMajorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                            }
                            else {
                                describe += ("there was a " + magMajorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                            }
                        }
                        else {
                            if (random_1 == 1) {
                                if (random_2 == 1) {
                                    describe += ("there was a " + magMajorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("there was a " + magMajorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                            }
                            else {
                                if (random_2 == 1) {
                                    describe += ("there was a " + magMajorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " from " + tempStartValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("there was a " + magMajorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " to " + tempEndValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                            }
                        }
                    }
                    else {
                        if (random_time_position == 1) {
                            if (random == 1) {
                                describe += ("there was a " + magMinorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                            }
                            else {
                                describe += ("there was a " + magMinorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                            }
                        }
                        else {
                            if (random_1 == 1) {
                                if (random_2 == 1) {
                                    describe += ("there was a " + magMinorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " by " + (tempEndValue - tempStartValue) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("there was a " + magMinorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                            }
                            else {
                                if (random_2 == 1) {
                                    describe += ("there was a " + magMinorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " from " + tempStartValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("there was a " + magMinorAdj[arrMember_2] + " " + beginIncreaseNoun[arrMember_1] + " to " + tempEndValue + " by " + (tempEndValue - tempStartValue) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                            }
                        }

                    }
                }
                else {
                    if (random_verb_noun == 0) {
                        random_word_1 = Math.random();
                        random_word_2 = Math.random();

                        if (random_word_1 < 0.25) {
                            arrMember_1 = 0;
                        }
                        else {
                            if (random_word_1 < 0.5) {
                                arrMember_1 = 1;
                            }
                            else {
                                if (random_word_1 < 0.75) {
                                    arrMember_1 = 2;
                                }
                                else {
                                    arrMember_1 = 3;
                                }
                            }
                        }

                        if (random_word_2 < 0.25) {
                            arrMember_2 = 0;
                        }
                        else {
                            if (random_word_2 < 0.5) {
                                arrMember_2 = 1;
                            }
                            else {
                                if (random_word_2 < 0.75) {
                                    arrMember_2 = 2;
                                }
                                else {
                                    arrMember_2 = 3;
                                }
                            }
                        }

                        if (Math.abs((tempEndValue - tempStartValue) / tempEndValue) > 0.4) {
                            if (random_time_position == 1) {
                                if (random == 1) {
                                    describe += ("the price " + beginDecreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("the price " + beginDecreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                            }
                            else {
                                if (random_1 == 1) {
                                    if (random_2 == 1) {
                                        describe += ("the price " + beginDecreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("the price " + beginDecreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                                else {
                                    if (random_2 == 1) {
                                        describe += ("the price " + beginDecreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " from " + tempStartValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("the price " + beginDecreaseVerb[arrMember_1] + " " + magMajorAdv[arrMember_2] + " to " + tempEndValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                            }
                        }
                        else {
                            if (random_time_position == 1) {
                                if (random == 1) {
                                    describe += ("the price " + beginDecreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("the price " + beginDecreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                                }
                            }
                            else {
                                if (random_1 == 1) {
                                    if (random_2 == 1) {
                                        describe += ("the price " + beginDecreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("the price " + beginDecreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                                else {
                                    if (random_2 == 1) {
                                        describe += ("the price " + beginDecreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " from " + tempStartValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                    else {
                                        describe += ("the price " + beginDecreaseVerb[arrMember_1] + " " + magMinorAdv[arrMember_2] + " to " + tempEndValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                    }
                                }
                            }
                        }
                    }
                    else {
                        random_word_1 = Math.random();
                        random_word_2 = Math.random();

                        if (random_word_1 < 0.3) {
                            arrMember_1 = 0;
                        }
                        else {
                            if (random_word_1 < 0.6) {
                                arrMember_1 = 1;
                            }
                            else {
                                arrMember_1 = 2;
                            }
                        }

                        if (random_word_2 < 0.25) {
                            arrMember_2 = 0;
                        }
                        else {
                            if (random_word_2 < 0.5) {
                                arrMember_2 = 1;
                            }
                            else {
                                if (random_word_2 < 0.75) {
                                    arrMember_2 = 2;
                                }
                                else {
                                    arrMember_2 = 3;
                                }
                            }
                        }
                    //NO }

                    if (Math.abs((tempEndValue - tempStartValue) / tempEndValue) > 0.4) {
                        if (random_time_position == 1) {
                            if (random == 1) {
                                describe += ("there was a " + magMajorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                            }
                            else {
                                describe += ("there was a " + magMajorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                            }
                        }
                        else {
                            if (random_1 == 1) {
                                if (random_2 == 1) {
                                    describe += ("there was a " + magMajorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("there was a " + magMajorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                            }
                            else {
                                if (random_2 == 1) {
                                    describe += ("there was a " + magMajorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " from " + tempStartValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("there was a " + magMajorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " to " + tempEndValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                            }
                        }
                    }
                    else {
                        if (random_time_position == 1) {
                            if (random == 1) {
                                describe += ("there was a " + magMinorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                            }
                            else {
                                describe += ("there was a " + magMinorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " in " + tempStartTime + " to " + tempEndValue + " in " + tempEndTime + ". ");
                            }
                        }
                        else {
                            if (random_1 == 1) {
                                if (random_2 == 1) {
                                    describe += ("there was a " + magMinorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("there was a " + magMinorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " from " + tempStartValue + " to " + tempEndValue + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                            }
                            else {
                                if (random_2 == 1) {
                                    describe += ("there was a " + magMinorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " from " + tempStartValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                                else {
                                    describe += ("there was a " + magMinorAdj[arrMember_2] + " " + beginDecreaseNoun[arrMember_1] + " to " + tempEndValue + " by " + (-(tempEndValue - tempStartValue)) + " from " + tempStartTime + " to " + tempEndTime + ". ");
                                }
                            }
                        }

                    }
                }
                }
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

    i = 0;
    console.log(timeList[i].value);

    //console.log(timeList[0].value);

    ///console.log(subject,name1,value1,name2,value2,name3,value3,name4,value4);

    startSentence = generateIntroductoryBeginner(subject);
    describe += startSentence;
    //console.log(startSentence);

    paragraph = generateDescribeBeginner(subject, timeList, valueList);
    describe += paragraph;
    //console.log(paragraph);

    document.getElementById("result").innerText = describe;
}

document.getElementById("startButtonElementary").onclick = function () {
    var subject = document.getElementById("subjectInput").value;

    var timeList = document.getElementsByClassName("time");
    var valueList = document.getElementsByClassName("value");

    var describe = "";

    i = 0;
    console.log(timeList[i].value);

    startSentence = generateIntroductoryBeginner(subject);
    describe += startSentence;
    //console.log(startSentence);

    paragraph = generateDescribeElementary(subject, timeList, valueList);
    describe += paragraph;
    //console.log(paragraph);

    document.getElementById("result").innerText = describe;
}


document.getElementById("startButtonPreIntermediate").onclick = function () {
    var subject = document.getElementById("subjectInput").value;

    var timeList = document.getElementsByClassName("time");
    var valueList = document.getElementsByClassName("value");

    var describe = "";

    i = 0;
    console.log(timeList[i].value);

    startSentence = generateIntroductoryPreIntermediate(subject, valueList);
    describe += startSentence;
    //console.log(startSentence);

    paragraph = generateDescribeElementary(subject, timeList, valueList);
    describe += paragraph;
    //console.log(paragraph);

    document.getElementById("result").innerText = describe;
}

document.getElementById("startButtonIntermediate").onclick = function () {
    var subject = document.getElementById("subjectInput").value;

    var timeList = document.getElementsByClassName("time");
    var valueList = document.getElementsByClassName("value");

    var describe = "";

    i = 0;
    console.log(timeList[i].value);

    startSentence = generateIntroductoryPreIntermediate(subject, valueList);
    describe += startSentence;
    //console.log(startSentence);

    paragraph = generateDescribeIntermediate(subject, timeList, valueList);
    describe += paragraph;
    //console.log(paragraph);

    document.getElementById("result").innerText = describe;
}

document.getElementById("startButtonUpperIntermediate").onclick = function () {
    var subject = document.getElementById("subjectInput").value;

    var timeList = document.getElementsByClassName("time");
    var valueList = document.getElementsByClassName("value");

    var describe = "";

    i = 0;
    console.log(timeList[i].value);

    startSentence1 = generateIntroductoryPreIntermediate(subject, valueList);
    describe += startSentence1;

    startSentence2 = generateIntroductoryUpperIntermediate(subject, timeList, valueList);
    describe += startSentence2;
    //console.log(startSentence);

    paragraph = generateDescribeIntermediate(subject, timeList, valueList);
    describe += paragraph;
    //console.log(paragraph);

    document.getElementById("result").innerText = describe;
}

document.getElementById("startButtonUpperAdvanced").onclick = function () {
    var subject = document.getElementById("subjectInput").value;

    var timeList = document.getElementsByClassName("time");
    var valueList = document.getElementsByClassName("value");

    var describe = "";

    i = 0;
    console.log(timeList[i].value);

    startSentence = generateIntroductoryUpperIntermediate(subject, timeList, valueList);
    describe += startSentence;
    //console.log(startSentence);

    describe += ("Following is a more specific description of the changes during th whole period. ");

    paragraph = generateDescribeIntermediate(subject, timeList, valueList);
    describe += paragraph;
    //console.log(paragraph);

    document.getElementById("result").innerText = describe;
}

document.getElementById("supportCSV").onchange = function () {
    var e = event;
    var timeList = [];
    var valueList = [];
    var temp = [];
    var i = 0;
    console.log(e);
    var File = e.target.files[0];
    // console.log(File+"file");
    let reader = new FileReader();
    reader.onload = function () {
        //console.log(reader.result+"result");
        csvContent = reader.result;
        //console.log(csvContent);
        csvContent = csvContent.split(/[\r\n]/);
        //console.log(csvContent);
        for (var j = 0; j < 24; j = j + 2) {
            temp = csvContent[j].split(",");
            //console.log(temp[0]);
            //console.log(temp[1]);
            //console.log(document.getElementsByClassName("time")[i].value);
            document.getElementsByClassName("time")[i].value = temp[0];
            document.getElementsByClassName("value")[i].value = temp[1];
            i++;
        }
    }
    reader.readAsText(File);


}
