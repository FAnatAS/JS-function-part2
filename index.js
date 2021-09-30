// const getSumTwoNums = function(){
//   let userInput1=prompt('enter 1st number');
//   let userInput2=prompt('enter 2nd number');

//   let checkEmpty = userInput1===''|| userInput1===null || userInput2==='' || userInput2===null;

//   let sum=Number(userInput1)+Number(userInput2);
//   if (isNaN(sum)) {
//     console.log('error');
//   }else{
//     console.log(userInput1,'+',userInput2, '=', sum)
//   }

// }

// getSumTwoNums();



let inputFirstValue=prompt('enter 1st value');
let inputSecondValue=prompt('enter 2nd value');

// const checkValue = function(val1, val2){
//   if(typeof(inputFirstValue)===typeof(inputSecondValue))
//   {
//     if ( inputFirstValue===''|| inputFirstValue===null || inputSecondValue==='' || inputSecondValue===null){
//   return error;
// }
// }
// }
/**
//  * returns maximum of two values if they are the same type
//  * @param {any} val1 
//  * @param {any} val2 
//  * @returns {any | null}
//  */

const maximumValue = function(val1, val2){
  if(typeof val1 ===typeof val2 )
  {if(val1>val2)
  {
  return val1 ;
}else{
return val2;
}
  }
  return null;
}
console.log(maximumValue(inputFirstValue, inputSecondValue))
console.log(maximumValue(10,4))
console.log(maximumValue(1099,4333))
// let a = 5(4);

// const isEven = function(a){
// if(typeof a==='number'){
//        return a%2===0;
//        }
//     return null
//   }
 

//   console.log(isEven(12));
//   console.log(isEven(13));
//   console.log(isEven('qwe'));
