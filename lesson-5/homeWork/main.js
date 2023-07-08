import './style.css'

confirm ("Hello Everyone")

let isRunning = true;

 while(isRunning) {
    const choice = interfaceSait();

    switch (choice) {
      case "a":
          const userName = prompt("Whats is your name? ");
          const cardNumber = prompt("Whats is your card number? ");
          const userData = prompt("Whats is your data? ");
          const userCVV = prompt("Whats is your CVV? ");

          const person = createdPerson(userName,cardNumber,userData,userCVV);
          console.log(person)
        break;
      case "b":
         alert("no bay")
        break;
      case "q":
        isRunning = false;
        break;

      default:
        break;
    }break;
    
 }


 function validateCVV(CVV) {
    if(userCVV.length = 3);  
}

function cardMaxNumber (){

};

 function createdPerson(userName,cardNumber,userData,userCVV) {
      return {
        "Имя": userName,
        "Номер" : cardNumber,
        "Дата" : userData,
        "CVV" : userCVV
      }
    }

function interfaceSait() {
  return prompt ("a)Get Users b) New scum operation q) quit")
};