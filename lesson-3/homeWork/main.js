"use strict";


let invalidPerson = {
  userWeight: true,
  userHeight: true,
};


while (invalidPerson) {
  let userWeight =  prompt("Укажите ваш Вес:");
  let userHeight =  prompt("Укажите ваш Рост:" );

  console.log("Вес:", userWeight);
  console.log("Рост:", userHeight);

if( invalidPerson = true){

let userFormulHight = parseInt (userHeight ** 2 );
console.log("Рост*Рост:",userFormulHight); 

let userFormul = +(userWeight / userFormulHight )
  console.log("Среднее:", userFormul);

let  unExist = userFormul < 16;
let  young = userFormul > 16 && userFormul < 18;
let  adult = userFormul >= 18 && userFormul < 25;
let  elderly = userFormul >= 25 && userFormul < 30;
let  almostDeadman = userFormul >= 30;

if (young) {
    console.log('Маловато будет');
} else if (adult) {
    console.log('ЭТО НОРМА');
} else if (elderly) {
    console.log('Чутка избыток');
} else if (unExist || almostDeadman) {
    console.log('Кто ты вообще?');
}
break;
}
}




  




















// if (userMMR < 700) {
//     console.log("Take ur bagpack and put there ur hucking books");
//     // && , || , !
// }else if (userMMR > 700 && userMMR < 2000) {
//     console.log("There is some one whose mom was on the meeting with ur party-partners (was hucked)");
// }else if (userMMR > 2000 && userMMR < 4000) {
//     console.log("U should try to run faster on the streets");
// }else {
//     console.log("Oh my goodness !");
// }