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

// const calcFactorial = function (number=2) {
//   if (number<0){
//     return null;
//   }
// if(number===0 ||number===1){ //number<=1
//   return 1;
// }
// if(number>MAX_FACTORIAL){//max_factorial
//   return false;
// }
// let result=1n;
// for(let i=1; i<number;i++){
//   result*=BigInt(i);
// }
// return result;
// }

// console.log(calcFactorial(555))//BigInt
// console.log(calcFactorial(3))//6
// console.log(calcFactorial(4))//6



/////Object

// const cat={
//   name: 'Muha',
//   isMale: false,
//   color:'grey',
//   breed: 'yard',
//   age:2,
//   isSleeping: true,
//   say:function(){
//     return 'meow';
//   },
//   run:function(){

//   },
// };

// cat.age++;
// console.log(cat.say()); //вызов метода

// cat.countLegs=4; //добавить св-во
// console.log(cat);
// console.log(cat.name);//вызвать св-во
// console.log(cat.isMale);
// console.log(cat.age);

// delete cat.isSleeping;
// console.log(cat);

// // const smartPhone = {
// //   brand: 'samsung',
// //   color: 'red',
// //   size: '6 inches',
// //   memory: '6 Gb',
// //   isWorking: true,
// //   }

// const cat2={
//   name: 'Pushok',
//   isMale: true,
//   color:'white',
//   breed: 'pers',
//   age:4,
//   isSleeping: true,
//   say:function(){
//     return 'meow';
//   },
//   run:function(){
//     return 'i\'m running';
//   },
// };

// function Cat(name, isMale, color, breed, age){ //конструктор
//   this.name = name;
//   this.isMale = isMale;
//   this.color = color;
//   this.breed = breed;
//   this.age=age;
//   this.say = function(){
//     return 'meow';
//   }
// }

// const newMuha = new Cat ('Muha', false, 'grey', 'yard', 2);
// const kitty = new Cat ('kitty', false, 'white', 'yard', 1);
// const catPushok = new Cat ('Pushok', true, 'black', 'yard', 4);

// console.log(catPushok.name+'says '+catPushok.say());


////////////////////


// function User(name, sname, age){
//   this.name = name;
//   this.sname = sname;
//   this.age = age;
//   this.fullName = function(){
//     return this.name+' '+this.sname+' '+this.age+'!!!';
//   }
// }

// const userSmith = new User ('John', 'Smith', 22);

// const userDone = new User ('Will', 'Done', 56);

// const userMusk = new User ('Elon', 'Musk', 53);
// const testUser = new User();

// console.log(userSmith.name+' '+userSmith.fullName());



// function Country (name, population, area){
//   this.name = name;
//   this.population = population;
//   this.area = area;
//   this.getDensity = function(){
//     return this.population/this.area;
//   }
// }

// const Ukraine = new Country ('Ukraine', 41362393, 603628);

// // const userDone = new User ('Will', 'Done', 56);

// // const userMusk = new User ('Elon', 'Musk', 53);
// // const testUser = new User();

// console.log(Ukraine.name + ' has '+ Ukraine.getDensity());

// function Auto (name, maxSpeed){
//   this.name = name;
//   this.maxSpeed = maxSpeed;
//   this.speed = 0;

//   this.accelerate = function (value){
//     if(value<0){
//       return false;
//     }
//     this.speed+=value;
//     if (this.speed>this.maxSpeed){
//       this.speed=this.maxSpeed;
//      }
//     return this.speed;
//   };
//   this.decelerate = function (value){
//     if(value<0){
//       return false;
//     }
//     this.speed-=value;
//     if (this.speed<0){
//        this.speed=0;
//       }
//     return this.speed;

//   };
//  this.stop = function(){
//    return (this.speed=0);
//  };
// };

// const car = new Auto('bmw', 250);


// function coffeMachine (brand, maxVolume){
//   this.brand = brand;
//   this.maxVolume = maxVolume;
//   this.volume = 0;
//   this.isOn=false;

//   this.turnOn = function(){
//     // if(this.isOn)
//     // {
//     //   return (this.isOn=false)
//     // }
//     // return (this.isOn=true);

//     return (this.isOn = this.isOn ? false :true);

//     //return this.isOn = !this.isOn;

//     // if (value==='1'){
//     //   this.isOn=true;
//     //   return this.isOn;
//     // }
//     // else{return 'Press 1 to ON and 0 to OFF'}

//     // if (value==='0'){
//     //   this.isOn=false;
//     //   return this.isOn;
//     // }
//     // else{return 'Press 1 to ON and 0 to OFF'}
    
//   }

//   this.addWater = function (value){
//     if(value<0 || value>this.maxVolume){
//       return false;
//     }
//     if (this.isOn===false){
//       return 'Turn on the spot';
//     }
//     if((this.volume+value)>this.maxVolume){
//       return 'You can add only '+(this.maxVolume-this.volume);
//     }
//     this.volume+=value;
//     // if (this.volume>this.maxVolume){
//     //   this.volume=this.maxVolume;
//     //  }
//     return this.volume;
//   };
//   this.makeCoffe = function (value){
//     if (this.isOn===false){
//       return 'Turn on the spot';
//     }
//     if(value<0){
//       return false;
//     }    
   
//     if (value>this.volume){
//       return 'Add water '+(value - this.volume);
//       }
//       this.volume-=value;
//     return this.volume;

//   };
// //  this.stop = function(){
// //    return (this.speed=0);
// //  };
// };

// const machine = new coffeMachine('Saeco', 1000);

// console.log('Max Volume '+machine.maxVolume);


// const showRange = function () {
 
// const min = prompt('enter min')
// const max = prompt('enter max')
// const number = prompt('enter div')

// for (let i=max; i>=min; i--)
// {
//   if (i%number===0) //i%number===1 ||
//   {
// console.log(i);
//   }

// }
// }
// showRange();


//const num1=1;
//const num2=2;
//const operator1='+';
//const result=0;
// const example = function (num1=1,num2=2, operator='+') {
//   let result = null;
//   //return prompt(num1+ operator1+num2);

// switch (operator) {
//       case '+':
//         result= num1+num2;
//         break;
//       case '-':
//         result= num1-num2;
//         break;
//       case '*':
//         result= num1*num2;
//         break;
//       case '/':
//         result= num1/num2;
//         break;
//       default:
//         break;
// }
// if (result===null || isNaN(result))
// {
//   return 'error'
// }

// while (true){
//   const question = (prompt(num1+operator+num2));
//   if (Number(question)===result){
//     return 'WIN!'
//   }
// }
// }
// console.log(example(45,7,'-'));




/////////////// 05.10

// const user={
//   firstName: 'Elon',
//   lastName:'Musk',
//   age: 50,
//   isMale: true,
// }
// const sayHello = function (obj) {
//     return `Hello, ${obj.firstName} ${obj.lastName}!`;
// }
// console.log(sayHello(user));


// const obj={
//   name: 'pen',
//   'is written': true,
//   11:78,
// }

// const nameProperty='iswritten'
// console.log(obj[11]);
// console.log(obj['11']);
// console.log(obj['is written']);
// console.log(obj['name']);
// console.log(obj[nameProperty]);

/*  пример, что надо сделать. делаем ниже
const table={
  '12*2=':24,
}
*/

// const obj={};
// obj.prop1=12;
// obj['prop 2']=22;

// const createMultiplicationTable = function (min=1, max=10) {
//   const table={};
//   for(let i=min; i<=max; i++){
//     for(let j=1; j<max; j++){
//       //доступ к свойствам с возможносью вычисления. 
//       table[`${i}*${j}=`]=i*j;

//     }
//   }

//   return table;
// }
// const multyCount = function (str, obj) {
//   return obj[str];
// }
// console.log(createMultiplicationTable())



// const queryNumber=prompt('Enter here');
// const table=createMultiplicationTable();

// console.log(multyCount(queryNumber, table));

// {
//   const queryNumber='44*5=';
//   const table=createMultiplicationTable(44,48);
  
//   console.log(multyCount(queryNumber, table));
//   }
//   {
//     const queryNumber=prompt('Enter here');
//     const table=createMultiplicationTable(7);
    
//     console.log(multyCount(queryNumber, table));
//     }
/*logic*/
// function MyArrayProto() {
//   this.push=function(item){
//     this[this.length]=item;
//     return ++this.length;
//   }
//   this.pop=function () {

//     if (this.length ===0)
//     {
//       return;
//     }

//     const item = this[--this.length];
//     delete this[this.length];
//     return item;
//   }
// }
// /*data*/
// function MyArray(){
//   this.length=0;
// }
// /*prototype*/
// MyArray.prototype=new MyArrayProto();

// const myArray = new MyArray();


///// 2nd 





function MyArrayProto() {
  this.push=function(){
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  }
  this.pop=function () {

    if (this.length ===0){
      return;
    }

    const item = this[--this.length];
    delete this[this.length];
    return item;
  }
}
/*data*/
function MyArray(){
  this.length=0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
    
  }
}
/*prototype*/
MyArray.prototype=new MyArrayProto();
MyArray.prototype.newMethod=function(){
  return 'new method';
};

const myArray = new MyArray(1,1,1,15,5);
myArray.push(2,2,2);
