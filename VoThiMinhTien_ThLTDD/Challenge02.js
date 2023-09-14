var bmi = function(mass, height) {
    return rs = mass / (height * height);
}

var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

console.log("Check Data 1");
var bmiMark = bmi(massMark, heightMark);
var bmiJohn = bmi(massJohn, heightJohn);

var markHigherBMI = function(bmiMark, bmiJohn) {
    if (bmiMark > bmiJohn)
        return console.log("Mark's BMI(", bmiMark.toFixed(1), ") is higher than John's!(", bmiJohn.toFixed(1), ")");;
    return console.log("John's BMI(", bmiJohn.toFixed(1), ") is higher than Mark's!(", bmiMark.toFixed(1), ")");;
}
markHigherBMI(bmiMark, bmiJohn);

var massMark1 = 95;
var heightMark1 = 1.88;

var massJohn1 = 85;
var heightJohn1 = 1.76;

console.log("Check Data 2");

var bmiMark2 = bmi(massMark1, heightMark1);
var bmiJohn2 = bmi(massJohn1, heightJohn1);
markHigherBMI(bmiMark2, bmiJohn2);