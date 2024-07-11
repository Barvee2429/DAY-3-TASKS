//Anonymous function
let arr=[12,13,19,17,24,36];
//var prime=function (){
//     for (var i=0; i<arr.length; i++) {
//     if(arr[i]%2==1 )
//         {
//             console.log(arr[i]);
//         }
//     }
// };
//IIFE
// (function (){
// for (var i=0; i<arr.length; i++) {
//          if(arr[i]%2==1 )
//              {
//                  console.log(arr[i]);
//              }
//         }
//     }());
    //Arrow function

    var prime= ()=>{
           for (var i=0; i<arr.length; i++) {
             if(arr[i]%2==1 )
                 {
                    console.log(arr[i]);
                 }
                }
            };
            return prime();
          