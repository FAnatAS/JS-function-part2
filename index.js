let userInput = prompt ('Enter number: ');
//string || null

//пустая строка
//то, что нельзя привести к нулю
//null

if (userInput==='' || userInput===null || isNaN(Number(userInput))){
  console.log(error);
}
else{
  console.log ('well done');
}