/**Loop + String Practice Problems */

// Task 1

for(let i = 1 ; i<=10; i++){
    console.log(`Task 1 for loop:`, i)
}

let a = 1;
while (a<=10) {
    console.log('Task 1 while loop', a);
    a++
}

// Task 2
let num = prompt("Enter Your Number ");
let n = Number(num);

for(let i = 1 ; i <= n ; i++){
    console.log('Task 2 ', i)
}

// Task 3

let total = 0;
for(let i = 1; i<=n ; i++){
    total = total + i;
    console.log('Task 3 Total:',total)
}

// Task 4

for(let i = 1; i <=100 ; i++){
    if(i%2===0){
        console.log('Task 4 Even number', i)
    }
}

//Task 5 
for(let i = 1; i <=100 ; i++){
    if(i%2 !==0){
        console.log('Task 4 ODD number', i)
    }
}

// Task 6

if(true){
   for(let i = 1 ; i <= 10; i++){
    console.log(`${n} * ${i} = ${n * i }`)
   }
}

// Task 7

let result = 1;
for(let i = 1 ; i<= n ; i++ ){
    result *= i; 
}
console.log(`${n}! = ${result} `)

// Task 8

for(let i = n; i>=1 ; i--){
    console.log('REverse Number Printing',i)
}

//Task 9 

let SumOfEven = 0; 
for(let i = 1; i <=100 ; i++){
    if(i%2===0){
        SumOfEven += i;
    }
}
console.log('Task 9 Sum of Even number', SumOfEven)

// Task 10 

for(let i = 1; i<= 50; i++){
    if(i %3 ===0 ){
        console.log(i)
    }
}

// Task 11 

let str = "What is JavaScript";
console.log('String Length:',str.length)

// Task 12

let vowelCount = 0;
let consonantCount = 0;
let string = str.toLocaleLowerCase();
for (let char of string) {
    if(char >='a' && char <= 'z'){
        if('aeiou'.includes(char)){
            vowelCount += 1;
        }
        else{
            consonantCount += 1;
        }
    }
}
console.log('Vowel Count :', vowelCount , 'ConsonantCount :', consonantCount);

// Task 13 & 14

let text = 'hello mamam level';
let revarse = '';

for(let letter of text){
    revarse = letter + revarse;
}
console.log('Reverse Text:  ', revarse)

// Task 15 
