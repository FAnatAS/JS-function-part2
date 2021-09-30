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

const monthNumber = prompt('Enter month number: ')

switch (monthNumber) {
  case '1':
  case '2':
  case '12':
    console.log('winter')
  break;
  case '3':
  case '4':
  case '5':
    console.log('spring')
  break;
  case '6':
  case '7':
  case '8':
    console.log('summer')
  break;
  case '9':
  case '10':
  case '11':
    console.log('autumn')
  break;
  default:
    console.log('invalid data')
  break;
}