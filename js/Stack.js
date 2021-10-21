class Stack{
  constructor(maxSize, ...args){
    this._maxSize=maxSize;
    this._size=0;
    for(const argument of args){
      this.push(argument);
    }
  }
  get size(){
    return this._size;
  }
  get isEmpty(){
    return this._size===0;
  }
  push(argument){
    if(this.size>=this._maxSize){
      throw new RangeError ('Stack overflow');
    }
    this[`_${this.size}`]=argument;
    this._size++; //return ++this._size
    return this.size
  }
  pick(){
    return this[`_${this.size-1}`];
  }
  pop(){
    if(this.size<=0){ //if (this.isEmpty())
      return;
    }
    const lastItem = this[`_${this.size-1}`];
    delete this[`_${this.size-1}`];
    this._size--;
    return lastItem;
  }
}
const stack1 = new Stack(3, 77,78,79);

const options = {
  brackets:{
    '(':')',
    '[':']',
  },
  isStrict: false,
}

/**
 * 
 * @param {string} str 
 * @param {object} options 
 * @returns 
 */
const checkSequence=(str, options)=>{
  const brackets = options.brackets;  //option ['brackets'] можно так
  const closesBrackets=Object.values(brackets);//массив всех закрывающих скобок
  const stack = new Stack(str.length);
  for (const symbol of str){
    if(brackets[symbol]){ //brackets['('] true brackets['*'] undefined 
      stack.push(symbol);
      continue;
    }
    // if(stack.isEmpty){
    //   return false;
    // }
    const lastBracketOfStack = stack.pick();//'[' значение по ключу
    const correctBracket = brackets[lastBracketOfStack];
    if(symbol===correctBracket){
      stack.pop();
    }else if (closesBrackets.includes(symbol)){
      return false;
    }
  }
  return stack.isEmpty;
}
console.log(checkSequence('8*(5+2)*(7-5)-({[2.0]}/{44}', options));