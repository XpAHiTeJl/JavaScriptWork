import './style.css'





function validateEmail(email) { 
    while (!email.includes('.') || !email.includes('@')) {    
       if (!email.includes('.')) {
         console.log("Email should contain a period (.)"); 
      }    
        if (!email.includes('@')) {
           console.log('Email should contain an at symbol (@)');
      }    
         email = prompt('Enter a valid email address:');  
        }   
         return true; 
        }