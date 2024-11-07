// Array.from syntax example
// const squares = Array.from({ length: 5 }, (_, index) => index * index);
// console.log(squares);

// // random number Array from number range
// const firstArray = Array.from({length:30}, () => Math.floor(Math.random()*21)+5)
// console.log("first array",firstArray)

// // Libraries
// const alphabetLow = "qwertyuiopasdfghjklzxcvbnm"
// const alphabetHigh = "QWERTYUIOPASDFGHJKLZXCVBNM"
// const numbers = "1234567890"

// // random array from specified string
// const letterArray = Array.from({length:20},()=>{
//     const indexer=Math.floor(Math.random()*alphabetLow.length)
//     return alphabetLow[indexer]
// })
// console.log("random array from specified string",letterArray)

// // custom Array builder function
// function buildArray(length,lib){
//     const result = Array.from({length:length},() => {
//         const indexer=Math.floor(Math.random()*lib.length)
//         return lib[indexer]
//     })
//     return result
// }
// console.log("custom Array builder function example log",buildArray(50,numbers))

// // custom Array builder function in use
// const randomUppercaseArray = buildArray(100,alphabetHigh)
// console.log("custom Array builder function in use",randomUppercaseArray)

// console.log("")////////////////////////////////////////////////////////////




//// 1.1 Pratybos (62 skaidre - JavaScript4)
/// 1
const firstArray = Array.from({length:30}, () => Math.floor(Math.random()*21)+5)
console.log("first array",firstArray)
/// a.
// filter solution
const countGreaterThan = firstArray.filter(num => num > 10).length
console.log(countGreaterThan)
// reduce() solution
const countGreaterThanReduce = firstArray.reduce((count,num)=> num>10 ? count + 1: count, 0)
console.log(countGreaterThanReduce)
// for...in loop solution (not recommended for arrays)
let counterForIn = 0
for (key in firstArray){
    if (firstArray[key]>10) counterForIn += 1
}
console.log(counterForIn)
// for...of loop solution
let counterForOf=0
for (let X of firstArray){
    if (X>10) counterForOf++
}
console.log(counterForOf)
// for loop solution
let counterFor = 0
for (let i=0; i <= firstArray.length;i++){
    if (firstArray[i]>10) counterFor++
}
console.log(counterFor)
// forEach() solution
let counterForEach=0
firstArray.forEach(num =>{
    if (num>10)counterForEach++
})
console.log(counterForEach)
/// b.
// Math.max(...array), array.map().filter()
const maxVal = Math.max(...firstArray)
const maxIndexer = firstArray.map((value, index)=> value === maxVal ? index : -1).filter(index=>index !== -1)
console.log(maxIndexer)
