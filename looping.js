// const persons = ['rakib', 'nokib', 'sakib', 'Pakib', 'dakib']
// const sortedPersons = persons.sort();
// console.log(sortedPersons)
// console.log([...persons].sort(function(a,b){return b-a}))
// const numbers = [4,5,6,2,1,4,7,0,9]
// const numbers_asc = [...numbers].sort(function(a,b){return a-b});
// const numbers_dsc = numbers.sort(function(a,b){return b-a})
// console.log(numbers_asc)
// console.log(numbers_dsc)

const colors = ['red', 'blue', 'green', 'yellow', 'orange']
let reverse = [];
for(let col of colors){
    reverse.unshift(col)
}
// console.log(reverse)
const numbers = [12, 98, 5, 41, 23, 78, 46];
const even = [];
for(let num of numbers){
    if(num%2 === 0){
        even.push(num)
    }
}
// console.log(even)
var names = ['Tom', 'Tim', 'Tin', 'Tik']
let string = ''
for(let name of names){
    string += name ;
}
// console.log(string)
const statement = ' I am a hard working person';
const split = statement.split(' ')
// console.log(split)
let revers = '';
for(let stat of split){
    console.log(stat)
    revers = stat + ' ' + revers 
}
console.log(revers)