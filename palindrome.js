function isPalindrome(N)

{


let len = str.length;

for (let i = 0; i < parseInt(len / 2, 10); i++)

{

if (str[i] != str[len])

return false;

}

return true;

}

// Anonymous Function :

function(arr,n)

{



for (let i = 0; i < n; i++)

{

let ans = isPalindrome(arr[i]);

if (ans == false)

return false;

}

return true;

}

// IIFE :

( function (arr, n)

{


for (let i = 0; i < n; i++)

{

let ans = isPalindrome(arr[i]);

if (ans == false)

return false;

}

return true;

})([1,2,3] , 3)

// Arrow :

Palindrome = (arr, n) =>

{


for (let i = 0; i < n; i++)

{

let ans = isPalindrome(arr[i]);

if (ans == false)

return false;

}

return true;

}