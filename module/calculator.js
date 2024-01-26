console.log('calculator.js');

const defaultNum = 1;

function add(num1, num2){
    return num1 + num2;
}

function minus(num1, num2){
    return num1 - num2;
}

function multi(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

module.exports = {
//export default {
    defNum : defaultNum,
    add, // add : add
    minus, // "minus" : minus
    multi, 
    divide
}