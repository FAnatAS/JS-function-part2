 'use strict'

// // //declaration
// // function test1(){
// //   console.log(this)
// // }

// // //expression
// // const test2 = function(){
// //   console.log(this)
// // }

// // //arrow
// // const test3 = ()=>{
// //   console.log(this)
// // }

// // test1();
// // test2();
// // test3();

// const site={
//   title:'Green site',
//   headers:['Header1', 'Test', 'Header3', 'New article'],
//   //showHeaders: function.showHeaders()
//    showHeaders(){
//   //   //console.log(this)
//   //   this.headers.forEach(function(header, index){
//   //     console.log(`${index+1}: ${header}`);
//   //   })
//   // }
  
//         this.headers.forEach((header, index)=>{
//         console.log(this.title)
//         console.log(`${index+1}: ${header}`);
//     });
//   }
// };

// site.showHeaders();


// const t1=function(...qq){
//   console.log(arguments)
//   console.log(qq)
// }

// const t1=function(num, ...rest){
//   console.log('num=', num)
//   console.log('rest=', rest )
// }
// t1(1,2,3,4);
// t2(22,4,8,5);

// const sum = (...args)=>{
//   let result=null;

//   // for(let i=0; i<args.length;i++){
//   //   result+=args[i];
//   // }
//   args.forEach((n)=>{
//     result+=n;
//   })

//   return result;
// }

// const sum2=(...args)=>args.reduce((result, n)=>result+n);//... rest



// const arrNums1=[4,1,3,6];
// //console.log(sum(arrNums1[0], arrNums1[1]));

// console.log(sum(...arrNums1)); //spread
// console.log(sum2(...arrNums1));

// const arrNums1=[4,1,3,6];
// const arrNums1=[2,5,7,9];

// const arr3=[...arrNums1, 101, 256, ...arrNums2];//spread для объединения массивов
// console.log(arr3);

//'use strict'

// function recursion(num){
//   if(num===0){
//     return;
//   }
//   console.log(num)
//   recursion(num-1);
// }

// recursion(8);

// const power=(num, exp)=>{
//   if(exp===1){
//     return num;
//   }
//   return num * power(num, exp-1);

// }
// power (2,3)

// const factorial=(num)=>{
//   if(num===0){
//     return 1;
//   }
//   return num * factorial(num-1);

// }
// factorial (4);

// const greater =(num1, num2)=>{ //num1>num2 ? num1 : num2
// if (num1>num2){
// return num1;
// }
// return num2;
// };
// greater(2,5);

// const str = 'tO BE or Not To bE'

// function camelCase (str) {
//   let newStr=str.toLowerCase();

//   const arrWords = newStr.split(' ');
//   const arrWordUp=arrWords.map((word)=>{
//     const letter=word[0].toUpperCase() + word.subString(1);
//   });
//   newStr=arrWordsUp.join(' ')
//   return newStr;

// }

// console.log(camelCase(str))


// function camelCase (str) {
//   return str.split(' ')
//             .map((word)=>{
//               return word[0].toUpperCase() + word.subString(1).toLowerCase();
//             })
//             .join(' ')
// }


// const arr =[1,3,4,5,6,7,8,2,3,3,];

// console.log(arr[4])
// //константная сложность 0(1)

// //линейная сложность
// const linearSearch = (arr,key)=>{
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i]===key){
//       return i;
//     }
//   }
//   return -1;
// }

//квадратичная сложность 0(n:2)

// const createTableMult=(limit)=>{
//   const table=[];
//   for(let i=1; i<=limit; i++){
//     for(let j=1; j<=limit; j++){
//       table.push(`${i}*${j}=${i*j}`);
//     }
//   }
//   return table;
// }
// console.log(createTableMult(9));

//логарифмическая сложность 0(logn)

// const sortedArr = [1,3,5,8,9,12,15,19,40];

// const binarySearch = (arr, key)=>{
//   let start = 0;
//   let end =arr.length-1;
//   let middle;//index
//   while(start<=end){
//     middle=Math.round((start+end)/2);
//     if (arr[middle]===key){
//       return middle;
//     }
//     if(arr[middle]<key){
//       start=middle+1;
//     }else{
//       end=middle-1;
//     }
//   }
//   return -1;
// }
// console.log(binarySearch(sortedArr, 40));


//деструктуризация - способ создания переменной

// const getFullName=(user)=>{
//   return `${user.privateInfo.name} ${user.privateInfo.sname}`
// }

const getFullName=({privateInfo:{name, sname}})=>{
  return `${name} ${sname}`;
}

const user = {
  privateInfo:{
    id:123,
    name: 'Elon',
    sname: 'Musk',
    bday:{
      day:28,
      month:6,
      year: 1971,
    },
  },
  contactInfo:{
    phone:'123-23-23',
    address:{
      town:'ZP',
      street:'Sobornii',
      house:211,
    },
    mail:'elon@gmail.com',
  },
  profession:'director',
}
// const{
//   privateInfo:
//   {
//     name:userName,
//     sname:userSname,
//   },
//   contactInfo:{
//     phone
//   }
// }=user;
// const {contactInfo:{
//   mail:email
// }
// }=user;
// console.log(email);
const {
  contactInfo:{
    address:{
      house:home
    },
    mail:email
  }
}=user;
console.log(home);
console.log(email);


// console.log(userName);
// console.log(userSname);
// console.log(phone);


// const dayBday=user.privateInfo.bday.day;
// console.log(dayBday);

// const{profession:profUser}=user;
// //const{property:variable}=object;
// console.log(profUser);

//const{profession:profession}=user;
//const{profession}=user;

console.log(getFullName(user));


const nums=[1,2,3,4,5];

//const[one,,,four]= nums;

const[one,...rest] = nums;