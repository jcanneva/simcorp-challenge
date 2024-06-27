/*
EXERCISE #1

A  boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different. So create a function that returns the total number of boomerangs in an array.

Example : [1,4,1]

Expected result   
counter([9, 5, 9, 5, 1, 1, 1]) ➞ 2
counter([5, 6, 6, 7, 6, 3, 9]) ➞ 1
counter([4, 4, 4, 9, 9, 9, 9]) ➞ 0

INFO

[2, 2, 2] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.

*/

const BOOMERANG_MAX_LENGTH = 3;

function counter(list) {
  const isArray = Array.isArray(list);
  if (!isArray) return;
  let count = 0;
  for (let i = 0; i <= list.length - BOOMERANG_MAX_LENGTH; i++) {
    const firstElement = list[i];
    const middleElement = list[i + 1];
    const lastElement = list[i + 2];
    const isBoomerang = firstElement === lastElement && firstElement !== middleElement;
    if (isBoomerang) count++;
  }
  console.log(count);
}

counter([9, 5, 9, 5, 1, 1, 1]);
counter([5, 6, 6, 7, 6, 3, 9]);
counter([4, 4, 4, 9, 9, 9, 9]);
