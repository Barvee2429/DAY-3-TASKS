//anonymous function

let arr=[1,2,3,4,5];
let sum =0;
// var total=function (){
//     for (let i=0; i<arr.length; i++){   
//     sum =sum+arr[i];
// }
//     console.log(sum);
// };return total();

//iife

// (function (){
//          for (let i=0; i<arr.length; i++){   
//         sum =sum+arr[i];
//     }
//         console.log(sum);
//     }());

//Arrow function
var total=()=>{
        for (let i=0; i<arr.length; i++){   
        sum =sum+arr[i];
    }
        console.log(sum);
     };
     return total();