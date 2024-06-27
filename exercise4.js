/*
Exercise #4

Given a string containing just the characters "(" and ")",
find the length of the longest valid (well-formed) parentheses substring.

Expected Result 
sizeParentheses("(()") ➞ 2
// Longest valid parentheses substring is "()"

sizeParentheses(")()())") ➞ 4
// Longest valid parentheses substring is "()()"

sizeParentheses("()))))(()())(") ➞ 6

*/

const isOpenChar = (item) => item === "(";
const isCloseChar = (item) => item === ")";

function sizeParentheses(str) {
  if (!str) return;
  const STR = String(str);
  let currentLength = 0;
  let maxLength = 0;
  let count = 0;
  for (let i = 0; i < STR.length; i++) {
    const isOpen = isOpenChar(STR[i]);
    const isClose = isCloseChar(STR[i]);
    const isNotValid = !isOpen && !isClose;
    if (isNotValid) return;
    if (isOpen) count++;
    else if (isClose) {
      if (count > 0) {
        currentLength += 2;
        maxLength = maxLength > currentLength ? maxLength : currentLength;
        count--;
      } else currentLength = 0;
    }
  }
  console.log(maxLength);
}

sizeParentheses("(()");
sizeParentheses(")()())");
sizeParentheses("()))))(()())(");
sizeParentheses(")))))");
sizeParentheses("(()())");
