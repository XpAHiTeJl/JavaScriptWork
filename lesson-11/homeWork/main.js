"use strict";

const store = [
  {
  category : "drama",
       movie : [ 
      {
        label : "Barbie",
        yearOfRelease : new Date().getFullYear().toString(),
        tags : ["#iCan'tBelieveIt" , "#it'sAmazing"]
      },
      {
        label : "Sparta",
        yearOfRelease : new Date().getFullYear().toString(),
        tags : ["#rome" , "#gladiator" , "#misha"]
          }
        ]
      },

  {
      category : "comedy",
      movie : [ 
      {
        label : "FunnyShit",
        yearOfRelease : new Date().getFullYear().toString(),
        tags : [ "#it'cool"]
      },
      {
        label : "FunnyShit2",
        yearOfRelease : new Date().getFullYear().toString(),
        tags : ["#dnepr" , "#office"]
          }
        ]
      },
];

  let isRunning = true;

  const isArray = Array.isArray;

 while (isRunning) {
    const movie = prompt(" Привет, ты должен выбрать категорию: " + getCategories(store));
    console.log('[категория]', movie);

    for (const  element of store) {
         
      if (movie !== element['category'] ) {
      }
      else{
          matchCategories(movie,store);
         isRunning = isExit();

          break;
      }
    
    }
    


    
  } 
 
  function getCategories(arr) {
//! Проверка на масив
     if (!isArray(arr)) {
          return;
     };
// !-------------------
     const categories = [];
     
     for (const element of arr) {
       if(!'category' in element) {
        continue;
       };
       categories.push(element.category);

      // console.log('[element]', element);
      
     }
      return categories.join(", ");
     
  }

  function matchCategories(pickedCategory, arr) {
    if (!isArray(arr)) {
      return;
    };

     for (let i = 0; i < arr.length; i++) {
      const category = arr[i];

      const hasCategory = category.category === pickedCategory;

              if(!hasCategory) continue;
      
              console.log("Фильмы в выбранной категории - ",category.movie);
     }
    

    

  
  }

  function isExit() {
     return !confirm ( " Ты  хочешь уйти  ? ")
    
  }

 for (let i = 0; i < store.length; i++) {
    const movie = store[i];
    console.log('[категории]', movie);
  }

 const result = getCategories(store); 
 console.log('[result]',result);
 console.log('[store]', store);
