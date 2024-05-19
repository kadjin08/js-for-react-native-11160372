const readlineSync = require('readline-sync');

function processArray() {
    let y = readlineSync.prompt();
    y = y.split(',').map(Number)

    let processedArr = y.map(num => num % 2 === 0 ? num * num : num * 3);
    return processedArr;

}
console.log('Enter an array of numbers separated by commas: ');
let processedArr = processArray();

console.log(processedArr);


function formatArrayStrings() {
    let yStr = readlineSync.prompt();
    yStr = yStr.split(',');

    let formatArr = [];

    for (let i = 0; i < yStr.length; i++) {
        if (processedArr[i] % 2 === 0) {
            formatArr.push(yStr[i].toUpperCase())
        }
        else {
            formatArr.push(yStr[i].toLowerCase())
        }

    }
    return formatArr;
}

console.log('Enter an array of strings separated by commas: ');
console.log(formatArrayStrings(processedArr));

module.exports = { formatArrayStrings, };
