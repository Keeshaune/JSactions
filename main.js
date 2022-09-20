//
let string = "chicken"
let number;

// return length of a string
//console.log(string.length)

 // console.log the word train from this sentence “I dislike trains as a mode of transport”
//  string = "I dislike trains as a mode of transport"
// console.log(string.substring(10, 15))

//Return the fifth letter of the alphabet from this string ‘abcdefghijklmnopqrstuvwxyz’
// string = "abcdefghijklmnopqrstuvwxyz"
// console.log(string[4])

//Make this string shouty by making it all upper case ‘I love you’
// string = "I love you";
// console.log(string.toUpperCase())

//console.log this number to 2 decimal places 1.23456789
// number = 1.23456789
// string = number.toString()
// console.log(string.slice(0, 4))

//Change this string into a number “45”

/*
string = "45"
number = parseFloat(string)
console.log(number)
*/


// let arr = ['red', 'yellow', 'green', 'blue']

// console.log(arr[0]);
// console.log(arr[arr.length-1]);
// arr.push('orange')
// console.log(arr[2]);
// console.log(arr)


// let arr = [23123, 2, -328, 0]
// arr.sort();


// console.log(arr[0])


function journey(country, time, location = "London"){
    return `I am going on a ${time} hour flight from ${location} to ${country}`
}

console.log(journey("Japan", 10))
