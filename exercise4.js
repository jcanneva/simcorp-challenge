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
  let maxLength = 0;
  let helper = [];
  for (let i = 0; i < STR.length; i++) {
    const isOpen = isOpenChar(STR[i]);
    const isClose = isCloseChar(STR[i]);
    const isNotValid = !isOpen && !isClose;
    if (isNotValid) return;
    if (isOpen) helper.push(i);
    else if (isClose) {
      helper.pop();
      if (helper.length) {
        const current = i - helper[helper.length - 1];
        maxLength = maxLength > current ? maxLength : current;
      }
    }
  }
  console.log(maxLength);
}

sizeParentheses("(()");
sizeParentheses(")()())");
sizeParentheses("()))))(()())(");
sizeParentheses(")))))");
//TODO initial case is not working
sizeParentheses("(()())");
