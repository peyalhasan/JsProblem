const word = 'Ae';
const letter = word.toLocaleLowerCase();
const tet = letter.split('a').length -1
console.log(tet);

let count = 0;
for(let a of word){
    if(a === 'a' || a === 'A'){
        count++
    }
}
console.log(count)

const vowels = ['a', 'e', 'i', 'o', 'u']
let allVowels = true;
for(let vol of vowels){
    if(!letter.includes(vol)){
        allVowels=false
        break;
    }
}
console.log(allVowels)

let inputString = "This is an example string containing all vowels.";
let inputReplace = inputString.replace("vowels", 'Consonant')
console.log(inputReplace)