//QUESTION 1:  PRINTING THE SUM OF AN ARRAY

var array = [1, 2, 3, 4, 5];

var sum = array.reduce(function (a, b) {
    return a + b;
}, 0);
console.log(sum);


// QUESTION 2 : ALICE AND BOB EACH CREATED ONE PROBLEM FOR HACKERRANK

let a = [20, 45, 68, 96, 34, 78];
let b = [11, 23, 67, 90, 98, 100];
function aliceBob() {
    let alicePoints = 0;
    let bobPoints = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alicePoints++;
        }
        else if (b[i] > a[i]) {
            bobPoints++;
        }
    }
    return [alicePoints, bobPoints]
}
aliceBob();


// QUESTION 3: GIVEN AN ARRAY OF INTEGERS, CALCULATE THE RATIO OF ITS ELEMENTS THAT ARE POSITIVE, NEGATIVE AND ZERO. PRINT THE DECIMAL VALUE OF EACH FRACTION ON A NEW LINE WITH PLACES AFTER THE DECIMAL.
// Approach:  
// Count the total number of positive elements in the array.
// Count the total number of negative elements in the array.
// Count the total number of zero elements in the array.
// Divide the total number of positive elements, negative elements, and zero elements by the size of the array, to get the ratio.
// Print the ratio of positive, negative, and zero elements in the array up to four decimal places.
// Solution
let arr = [-1, -13, 12, 3, 4, 15]
function elementsRatio(arr) {
    let len = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    for (i = 0; i < len; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        }
        else if (arr[i] < 0) {
            negativeCount++;
        }
        else if (arr[i] == 0) {
            zeroCount++;
        }
    }
    // Print the ratio of positive,negative, and zero elements on a new line to two decimal places
    console.log((positiveCount / len).toFixed(2) + " ");
    console.log((negativeCount / len).toFixed(2) + " ");
    console.log((zeroCount / len).toFixed(2));

}
console.log(elementsRatio(arr))

// QUESTION 4 : CREATE A FUNCTION WITH A FUNCTION NAME FIRSTFUNCTION() AND RETURN THE SUM OF TWO INTEGERS(NUMBERS)

function firstFunction(a, b) {
    return a + b;
}

