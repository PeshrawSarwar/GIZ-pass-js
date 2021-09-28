// importing the file system to read files.
const fs = require('fs')
numbers = [];
fs.readFile('data.txt', 'UTF-8', (err, data) => {
    if (err) throw err;
    //putting the numbers inside an array
    numbers = data.split(',').map(num => parseInt(num, 10))
    let temp = 0;
    let n = numbers.length;

    //sorting
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                temp = numbers[j];
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = temp;
            }
        }
    }

    console.log("numbers list After sorting: ", numbers)
        //writing the numbers to a file.
    fs.writeFile('output.txt', JSON.stringify(numbers), err => {
        console.log(err);
    });
})


// run in the terminal node readAndSortFromDataTxt