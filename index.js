// const isEmptyMessage = function(){

//   let message = prompt('enter message')
//   const message1 = (message>'')? 'Thank you' : 'Enter message with symbols'
//   console.log (message1);
// }

// isEmptyMessage ();

// const isEmptyMessage = function(){

//   const message1 = (prompt('enter message')>'')? 'Thank you' : 'Enter message with symbols'
//   console.log (message1);
// }

// isEmptyMessage ();

// const logDataInfo = function(){
//   const data = prompt('Enter: '); //string '' null
//   // if (data){
//   //   console.log('Thanks')
//   // }else{
//   //   console.log('Enter any ')
//   // }
//   console.log(data?'Thanks, you entered: '+data:'Enter any')
// }
// logDataInfo();

// const monthNumber = prompt('Enter month number: ')

// switch (monthNumber) {
//   case '1':
//   case '2':
//   case '12':
//     console.log('winter')
//   break;
//   case '3':
//   case '4':
//   case '5':
//     console.log('spring')
//   break;
//   case '6':
//   case '7':
//   case '8':
//     console.log('summer')
//   break;
//   case '9':
//   case '10':
//   case '11':
//     console.log('autumn')
//   break;
//   default:
//     console.log('invalid data')
//   break;
// }

// const calc = function (num1=10, num2=2, operator='+') {
//   if(isNaN(num1-num2)){
//     return false;
//   }
//   switch (operator) {
//     case '+':
//       return num1+num2
//     case '-':
//       return num1-num2
      
//     case '*':
//       return num1*num2
//     case '/':
//       return num1/num2
//     default:
//       return null;
//     break;
//  }
// }
// console.log(calculate())
// //const userNumber1=prompt ('Enter 1st num')
// //const userNumber2=prompt ('Enter 2st num')
// //const userOperator=prompt ('Enter operator')

// const sum=function (a,b) {
//   return a+b
// }
// const sub=function (a,b) {
//   return a-b;
// }
// const mult=function (a,b) {
//   return a*b;
// }
// const div=function (a,b) {
//   return a/b;
// }
// const rem=function (a,b) {
//   return a%b;
// }

// console.log(typeof sum)
// const calc = function (num1=10, num2=2, operator='+') {
//   if(isNaN(num1-num2)){
//     return false;
//   }
//   let f=null;
//   switch (operator) {
//     case '+':
//       f = sum;
//       break;
//     case '-':
//       f = sub;
//       break;
//     case '*':
//       f = mult;
//       break;
//     case '/':
//       f = div;
//       break;
//     case '/':
//       f = div;
//       break;
//     default:
//       return null;
//     break;
//  }
//  return f(num1,num2);
//  return (typeof f==='function')?f(num1,num2):f;
// }
// console.log(calculate())
// //const userNumber1=prompt ('Enter 1st num')
// //const userNumber2=prompt ('Enter 2st num')
// //const userOperator=prompt ('Enter operator')

// const sum=function (a,b) {
//   return a+b
// }
// const sub=function (a,b) {
//   return a-b;
// }
// const mult=function (a,b) {
//   return a*b;
// }
// const div=function (a,b) {
//   return a/b;
// }
// const rem=function (a,b) {
//   return a%b;
// }
// debugger;

// let effort = 0;

// while(true){
 
//   const password=prompt('Enter password: ');
//   effort++;
//   if(password===GOOD_PASSWORD){
//     alert('Thanks');
//     break;
//   }
  
//   if(effort===MAX_COUNT_TRY){
//     alert('Bed boy');
//     break;
//   }
//   alert('Count try= ' + effort);
// }

// debugger;

// let effort = FACTORIAL;
// let count=0

// while(true){

//   if (count<FACTORIAL){

//   }
  
//}

// let num=1;
// for(i=1; i<=FACTORIAL; i++){
//   num*=i;
//   console.log(num);

// }

const calcFactorial = function (number=2) {
  if (number<0){
    return null;
  }
if(number===0 ||number===1){ //number<=1
  return 1;
}
if(number>MAX_FACTORIAL){//max_factorial
  return false;
}
let result=1n;
for(let i=1; i<number;i++){
  result*=BigInt(i);
}
return result;
}

console.log(calcFactorial(555))//BigInt
console.log(calcFactorial(3))//6
console.log(calcFactorial(4))//6