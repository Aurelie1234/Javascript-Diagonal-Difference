function diagonalDifference(arr) {
    // Write your code here
let difference = 0;


for (let i = 0; i < arr.length; i++ ){
    difference += (arr[i][i])-(arr[i][arr.length - 1 - i]); 
}
return Math.abs(difference);
}
