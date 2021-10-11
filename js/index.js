// 'use strict'

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

const sum = (...args)=>{
  let result=null;

  // for(let i=0; i<args.length;i++){
  //   result+=args[i];
  // }
  args.forEach((n)=>{
    result+=n;
  })

  return result;
}

const sum2=(...args)=>args.reduce((result, n)=>result+n);
