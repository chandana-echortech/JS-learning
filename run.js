// problem 2
let n = 5;                                
for (let i = n; i >= 1; i--) {
  let row = '';
  for (let j = 1; j <= i; j++) {
     row += '*' + ' ';
 
}
  console.log(row);
}
//code here
// use only for loops. dont use .repeat() or .trim()


// expected output:
// * * * * *
// * * * *
// * * *
// * *
// *

