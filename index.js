// ### CHALLENGE 1: REVERSE A STRING
// // Return a string in reverse
// //  ex:

function reverseString(str) {
    console.log(str.split("").reverse().join(""))
}

reverseString('hello') // === 'olleh';

const reverseString2 = str => str.split("").reverse().join("")

console.log(reverseString2('hello')) // === 'olleh';

// #### CHALLENGE 2: VALIDATE A PALINDROME
// // Return true if palindrome and false if not
// // ex:

const isPalindrome = str => {
    if(str.split("").reverse().join("") === str) {
        console.log(true)
    } else {
        console.log(false)
    }
}

isPalindrome('racecar') // === true;
isPalindrome('hello') // == false;

// ### CHALLENGE 3: REVERSE AN INTEGER
// // Return an integer in reverse
// // ex:

const reverseInt = int => console.log(Number(int.toString().split("").reverse().join("")))

reverseInt(521) === 125;

// ### CHALLENGE 4: CAPITALIZE LETTERS
// // Return a string with the first letter of every word capitalized
// //  ex:

const capitalizeLetters = str => {
    const newStr = str.split(" ");
    for(let i = 0; i < newStr.length; i++){
        newStr[i] = newStr[i][0].toUpperCase() + newStr[i].substr(1)
    }
    console.log(newStr.join(" "))
}
capitalizeLetters('i love javascript') // === 'I Love Javascript';

//or 

const capitalizeLetters2 = str => {
    const newStr = str.split(" ");
    console.log(newStr.map((word) => { 
        return word[0].toUpperCase() + word.substring(1); 
    }).join(" "));
}

capitalizeLetters2('i love javascript')

// ### CHALLENGE 5: MAX CHARACTER
// // Return the character that is most common in a string
// // ex:

const maxCharacter = str =>  {
    
    let max = 0,
    maxChar = '';
    str.split('').forEach(char =>{
        if(str.split(char).length > max) {
            max = str.split(char).length;
            maxChar = char;
            }
        });
        console.log(maxChar);
};
maxCharacter('javascript') //== 'a';

// ### CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

const fizzBuzz = () => {
    for(let i = 1; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzz()

// ### CHALLENGE 7: LONGEST WORD
// Return the longest word of a string
// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string
// ex:
// longestWord('Hi there, my name is Brad') === 'there,';
// longestWord('My name is Brad') === ['name', 'brad'];
// longestWord('Brad') === 'brad';

const longestWord = str => {
    const newStr = str.split(" ");
    let longestWord = 0;

    for(let i in newStr){
        if(newStr[i].length > longestWord) {
            longestWord = newStr[i.length]
        }
    }
    console.log(longestWord)
}

longestWord('Hi there, my name is Brad')

// ### CHALLENGE 8: ARRAY CHUNKING
// // Split an array into chunked arrays of a specific length
// // ex:

const chunkArray = (array, n) => {

    const newArray = [];

    for(let i = 0; i <= array.length; i += n) {
        const chunk = array.slice(i, i+n);
        newArray.push(chunk);

    }
    console.log(newArray)
}
chunkArray([1, 2, 3, 4, 5, 6, 7], 3) // === [[1, 2, 3], [4, 5, 6], [7]];
chunkArray([1, 2, 3, 4, 5, 6, 7], 2) //=== [[1, 2], [3, 4], [5, 6], [7]];

// ### CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex:

const flattenArray = arr => console.log([].concat.apply([], arr));

flattenArray([[1, 2], [3, 4], [5, 6], [7]]) // = [1, 2, 3, 4, 5, 6, 7]

//or

const flattenArrayV2 = arr => console.log(arr.flat());

flattenArrayV2([[1, 2], [3, 4], [5, 6], [7]]) 

// ### CHALLENGE 10: ANAGRAM
// Return true if anagram and false if not
// ex. isAnagram('elbow', 'below') === true
// ex. isAnagram('Dormitory', ''dirty room##'') --> false

// ### CHALLENGE 11: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers
// ex:


function addAll(){
    
    let sum = 0;
    for(let i=0; i < arguments.length; i++){
        sum += arguments[i]
    } console.log(sum)
}
addAll(2, 5, 6, 7) // === 20;
console.log("------------")
// ### CHALLENGE 12: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex.

const sumAllPrimes = int => {

    const newArray = []
    for(let i = 2; i<=int; i++){
        if(int % i === 0){
            return false;
        } else {
            return newArray.push(i)
        }
    } console.log(newArray)
}
sumAllPrimes(10) // === 17;

// ### CHALENGE 13: SEEK AND DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex:

const seekAndDestroy = (arr, ...values) => {

    console.log(arr.filter(value => !values.includes(value)));
  }
seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) // == [3, 4, 'hello'];

// ### CHALLENGE 14: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex:

const evenOddSums = (arr) => {

    let sumEven = 0;
    let sumOdd = 0;
    for(let i in arr){

        if(arr[i] % 2 === 0){
            sumEven += arr[i];

        } else if(arr[i] % 2 === 1) {
            sumOdd += arr[i];
    
        }
    } 
     console.log([sumEven,sumOdd])
}

evenOddSums([50, 60, 60, 45, 71]) // == [170, 116];


// 7,10,12