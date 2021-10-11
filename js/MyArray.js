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



// /*logic*/

// function MyArrayProto() {
//   this.push=function(){
//     for (let i = 0; i < arguments.length; i++) {
//       this[this.length++] = arguments[i];
//     }
//     return this.length;
//   }
//   this.pop=function () {

//     if (this.length ===0){
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
//   for (let i = 0; i < arguments.length; i++) {
//     this.push(arguments[i]);
    
//   }
// }
// /*prototype*/
// MyArray.prototype=new MyArrayProto();
// MyArray.prototype.newMethod=function(){
//   return 'new method';
// };

// const myArray = new MyArray(1,1,1,15,5);
// myArray.push(2,2,2);

/*data*/
function MyArray(){
  this.length=0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
    
  }
}

/*logic*/

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
  this.forEach=function(func){
    for(let i=0; i<this.length;i++){
        func(this[i]);
    }
  }
  this.some=function(func){
    for(let i=0; i<this.length;i++){
      if(func(this[i])){
      return true;
      }
    }
    return false;
  }
  this.every=function(func){
    for(let i=0; i<this.length;i++){
      if(func(this[i])===false){
      return false;
      }
    }
    return true;
  }
  this.filter=function(func){
    const result=new MyArray();
    for(let i=0; i<this.length;i++){
      if(func(this[i])){
      result.push(this[i]);
      }
    }
  return result;
}
}

function isOdd(n){
  return n%2===1;
}
function isEven(n){
  return n%2===0;
}



/*prototype*/
MyArray.prototype=new MyArrayProto();
// MyArray.prototype.newMethod=function(){
//   return 'new method';
// };

const myArray = new MyArray(1,4,7,14,5);
// myArray.push(2,2,2);
// myArray.pop();
//myArray.forEach(square);
// console.log(myArray.some(isEven));
console.log(myArray.filter(isEven));
