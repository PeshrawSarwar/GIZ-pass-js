let numbers = [5, 8, 0, 1, 9, 11, 15, 16];

console.log("Original numbers list: ", numbers);

// putting the numbers inside antoher array to keep the original one as it's.
let newNumbers = [...numbers];

let temp = 0;
let n = newNumbers.length; // the length of the array

for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        //if the index before the other index is greater than then :
        if (newNumbers[j] > newNumbers[j + 1]) {
            temp = newNumbers[j]; //insert the greater index to temp veriable

            newNumbers[j] = newNumbers[j + 1]; //insert the smaller one to the index of the greater one

            newNumbers[j + 1] = temp; //insert the greater one to the index of the smaller one
        }
    }
}

console.log("numbers list After sorting: ", newNumbers);

for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        //if the index before the other index is less than then :
        if (newNumbers[j] < newNumbers[j + 1]) {
            let temp = newNumbers[j];
            newNumbers[j] = newNumbers[j + 1];
            newNumbers[j + 1] = temp;
        }
    }
}

console.log("numbers list After Desc sorting: ", newNumbers);