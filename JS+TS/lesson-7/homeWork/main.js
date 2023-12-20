// СОбрание lesson 11 с немо
// + lesson 13

console.log("----------------------------------------");

const searchNemo = "asdsadwqeqwnemodadwqetgsdhqe";
console.log("Search nemo this text: ",searchNemo);

const nameNemo = "nemo";

const startIndex = searchNemo.indexOf(nameNemo);
const lastIndex = startIndex + nameNemo.length;

console.log('[startIndex]',startIndex);
console.log('[lastIndex]',lastIndex);

const Nemo = searchNemo.slice(startIndex, lastIndex );
console.log('This is : '+ Nemo);


console.log("----------------------------------------");
const findNemo = [
    'don',
    'nemo',
    'don',
    'nemo',
    'don',
    'don',
    'nemo',
    'don',
    'nemo',
    'don'
]
console.log(findNemo);

for (let i = 0; i < findNemo.length; i++) {
    const thiesNemo = findNemo[i];
    
    if (thiesNemo === 'nemo') {

        console.log("Yep this : " + thiesNemo);
        console.log("Nemo in position : " + i );
        
    }
}    
console.log("----------------------------------------");    


const nemo = {
    firstName : {
        surname : {
            text : {
                msg : "nameNemo"
            }
        } 
    }
}
console.log(nemo.firstName.surname.text.msg)
console.log("----------------------------------------");    
