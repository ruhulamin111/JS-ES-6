// variable declare
var marks = [12, 34, 65, 68, 90, 96, 42, 94];
let fruit = ['mango', 'apple', 'jackfruit', 'watermilon'];
const gadget = ['asus', 'hp', 'acer', 'samsung'];

// default input 
function add(num1, num2 = 0) {
    sum = num1 + num2;
    return sum;
}
const addTest = add(45, 23);

// template string 
const age = 10;
const hisName = 'Abdul Baten';
const profile = `Hi, There is a ${hisName} and he is ${age} years old`;

// function declare
function addNumber(num1, num2) {
    sum = num1 + num2;
    return sum;
}
// anonymous funtion 
const addNumber2 = function (num1, num2) {
    sum = num1 + num2;
    return sum;
}
// arrow function 
const addNumber3 = (num1, num2) => num1 + num2;
// multiline function
const mathTerm = (num1, num2) => {
    const sum = num1 + num2;
    const substraction = num1 - num2;
    const multiplaction = substraction * sum;
    const division = multiplaction / 10;
    return division;
}
const result = addNumber(23, 45);
const result1 = addNumber2(23, 45);
const result2 = addNumber3(23, 45);
const result4 = mathTerm(200, 20);

// spread oparator 
const marksSheet = [97, 84, 73, 62, 59, 37]
const marksTest = Math.max(...marksSheet);
const updateMarks = [29, ...marksSheet, 90, 80];
