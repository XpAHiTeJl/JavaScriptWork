"use strict";



while (isRunning) {
    const movie = prompt(" Привет, ты должен выбрать категорию: " + getCategories(store));
    console.log('[категория]', movie);


    switch (movie) {
      case "drama"  :
      
      matchCategories(movie,store);
      isRunning = isExit();
        
        break;
      case "comedy" :
      
      matchCategories(movie,store);
      isRunning = isExit();
        
        break;
    
      default:
        console.log("Введи корректную категорию! ");
        break;
    }

    
    
  } 