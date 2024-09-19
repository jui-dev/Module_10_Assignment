// 1.

function calculateDifference(a, b) {
  return a - b;
}

let res1 = calculateDifference(5, 4);

console.log("Difference: ", res1);

// 2.

function isOdd(a) {
  if (a % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

let res2 = isOdd(5);

console.log(res2);

// 3.

function findMin(arr) {
  arr.sort();
  return arr[0];
}

let arr = [4, 8, 2, 3, 9, 5];

let res3 = findMin(arr);

console.log("Smallest Number:", res3);

// 4.

function filterEvenNumbers(arrNum) {
  let newArr = [];
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 === 0) {
      newArr.push(arrNum[i]);
    }
  }
  return newArr;
}

let arrNum = [1, 2, 3, 4, 5, 6, 7];

let res4 = filterEvenNumbers(arrNum);

console.log(res4);

// 5.

function sortArrayDescending(numArr) {
  return numArr.sort().reverse();
}

let numArr = [1, 2, 3, 4, 5, 6, 7, 8];

let res5 = sortArrayDescending(numArr);

console.log(res5);

// 6.

function lowercaseFirstLetter(str) {
  let newStr = str.replace(str[0], str[0].toLowerCase());
  return newStr;
}

let str = "HELLOWORLD";

let res6 = lowercaseFirstLetter(str);

console.log(res6);

// 7.

function countVowels(str1) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (
      str1[i] === "a" ||
      str1[i] === "e" ||
      str1[i] === "i" ||
      str1[i] === "o" ||
      str1[i] === "u" ||
      str1[i] === "A" ||
      str1[i] === "E" ||
      str1[i] === "I" ||
      str1[i] === "O" ||
      str1[i] === "U"
    ) {
      count++;
    }
  }
  return count;
}

let str1 = "bangladeshi";

let res7 = countVowels(str1);

console.log("Number of Vowels: ", res7);

// 8.

function findAverage(arrNumbers) {
  let sum = 0;
  for (let i = 0; i < arrNumbers.length; i++) {
    sum += arrNumbers[i];
  }

  let avg = sum / arrNumbers.length;
  return avg;
}

let arrNumbers = [4, 4, 4];

let res8 = findAverage(arrNumbers);

console.log("Average is: ", res8);
