'use strict'

const obj = {
  prop:123,
}

// const map1=new Map();
// map1.set(1,'one');
// map1.set(obj, 'object');
// //может быть массив, функция

// console.log(map1.get(obj))

// map1.set(1,1000);

// map1.delete(1);

const dictionary = new Map();
dictionary.set('собака','dog');
dictionary.set('кот','cat');
dictionary.set('утка','duck');
dictionary.set('брат','brother');
dictionary.set('сестра','sister');
dictionary.set('дочь','daughter');
dictionary.set('небо','sky');
dictionary.set('город','town');
dictionary.set('дорога','road');
dictionary.set('язык','language');
dictionary.set('бросать','throw');
dictionary.set('брать','take');
dictionary.set('смотреть','watch');
dictionary.set('говорить','talk');

const str = 'Город утка смотреть дочь дорога брать сестра кот'.toLowerCase;

const translate =()=>{
  const lowerCaseStr = str.toLowerCase();
  const wordsArray = lowerCaseStr.split(' ');
  const wordsTranslatedArray = wordsArray.map((word)=>{
    if(dictionary.has(word)){
      return dictionary.get(word);
    }
    return word;
    
  });
  const translatedStr = wordsTranslatedArray.join(' ');
  return translatedStr;
}

console.log(translate(str))
