// Given an array of comparable values, move the lowest element to array’s front,
// shifting backward any elements previously ahead of it. Do not otherwise change
// the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it.
// As always, do this without using built-in functions.

function minFront(arr) {
  // make a variable to store the minimum val of the array.
  let min = arr[0];
  // make a variable to store the index of the elements in the original array.
  let index = 0;

  // loop thru the array
  for (let i = 0; i < arr.length; i++) {
    // find the minimum value, and store it and its index
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }

  // create another for loop starting from the index you found,
  // going backwards
  // to move the min to the front.
  for (let x = index; x > 0; x--) {
    // create another var to hold index, because index will be changed. While x is greater than zero, each index will decrease by one.
    let temp = arr[x]; // make a temp var to store indexes.
    arr[x] = arr[x - 1];
    arr[x - 1] = temp;
  }
  return arr;
}

console.log(minFront([2, 3, 4, 1]));

console.log(minFront([5, -1, 2, 7]));
// temp = arr[1] = -1
// arr[1] = arr[0] -> moving 5 to index 1
// arr[0] = temp = -1 -> moving -1 to index 0