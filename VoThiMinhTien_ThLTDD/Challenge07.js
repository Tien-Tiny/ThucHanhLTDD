var calcBMI = function(obj) {
    return (obj.mass / obj.height **2).toFixed(1);
}

var Mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

}
console.log(Mark);

var John = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
}
console.log(John);

var bmiMark = calcBMI(Mark);
console.log(bmiMark);

var bmiJohn = calcBMI(John);
console.log(bmiJohn);

if (bmiMark > bmiJohn) {
    console.log("Mark's BMI (" + bmiMark + ") is higher than John's (" + bmiJohn + ")");
} 
else if (bmiJohn > bmiMark) {
    console.log("John's BMI (" + bmiJohn + ") is higher than Mark's (" + bmiMark + ")");
}
else {
    console.log("John's BMI (" + bmiJohn + ") and Mark's BMI (" + bmiMark + ") Same BMI");
}



