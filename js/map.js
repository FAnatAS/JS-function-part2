// 'use strict'

// const obj = {
//   prop:123,
// }

// // const map1=new Map();
// // map1.set(1,'one');
// // map1.set(obj, 'object');
// // //может быть массив, функция

// // console.log(map1.get(obj))

// // map1.set(1,1000);

// // map1.delete(1);

// const dictionary = new Map();
// dictionary.set('собака','dog');
// dictionary.set('кот','cat');
// dictionary.set('утка','duck');
// dictionary.set('брат','brother');
// dictionary.set('сестра','sister');
// dictionary.set('дочь','daughter');
// dictionary.set('небо','sky');
// dictionary.set('город','town');
// dictionary.set('дорога','road');
// dictionary.set('язык','language');
// dictionary.set('бросать','throw');
// dictionary.set('брать','take');
// dictionary.set('смотреть','watch');
// dictionary.set('говорить','talk');

// const str = 'Город утка смотреть дочь дорога брать сестра кот'.toLowerCase;

// // const translate =()=>{
// //   const lowerCaseStr = str.toLowerCase();
// //   const wordsArray = lowerCaseStr.split(' ');
// //   const wordsTranslatedArray = wordsArray.map((word)=>{
// //     if(dictionary.has(word)){
// //       return dictionary.get(word);
// //     }
// //     return word;
    
// //   });
// //   const translatedStr = wordsTranslatedArray.join(' ');
// //   return translatedStr;
// // }

// const translate =(dictionary, str, separator = ' ')=>{
//   return str.toLowerCase()
//             .split(separator)
//             .map((word)=> (dictionary.has(word) ? dictionary.get(word) : word))
//             .join(separator);
// }
// // console.log(translate(dictionary, str))

// //const iteratorKeys = dictionary.keys();
// const keysArray = [... dictionary.keys()];
// //for (const iterator of dictionary.keys()) {
// //  keysArray.push(iterator)
// //}
// //так же и с Values
// const iteratorValues = dictionary.values();
// for (const iterator of iteratorValues) {
//   console.log(iterator)
// }

// const set1 = new Set(dictionary.keys());
// const set1 = new Set(...dictionary.keys());
// const set1 = new Set([...dictionary.keys()]);

// set.add(7);
// set.add(7);
// set.add(7);//в сете будет 7 только один раз
// set.add('7'); //а эта добавится
// set.add([7]);//массив
// set.add({7:7});//объект

// const nums1 = [1,2,3,4,8,7,9];

// const nums1 = [2,4,6,8,8,8,7,9];

// const unique = [new Set ([...nums1, ...nums2])];

// set1.forEach((currentValue, currentKey, set)=>{
//   console.log(currentValue, currentKey);
// })

