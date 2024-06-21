/*
EXERCISE #3

Write a function that returns the longest non-repeating substring for a string input.

Expected Result   
longestSubstring("abcabcbb") ➞ "abc"
longestSubstring("aaaaaa") ➞ "a"
longestSubstring("abcde") ➞ "abcde"
longestSubstring("abcda") ➞ "abcd


INFO
If multiple substrings tie in length, return the one which occurs first.
Bonus: Can you solve this problem in linear time?

*/

const getSubstring = (item, start, end) => item.substring(start, end);

function longestSubstring(str) {
  if (!str) return;
  const STR = String(str);
  let result = "";
  let start = 0;
  let helper = {};
  for (let i = 0; i < STR.length; i++) {
    const char = STR[i];
    const current = helper[char];
    if (!isNaN(current) && current >= start) start = current + 1;
    helper[char] = i;
    const sub = getSubstring(STR, start, i + 1);
    if (sub.length > result.length) result = sub;
  }
  console.log(result);
}

longestSubstring("abcabcbb");
longestSubstring("aaaaaa");
longestSubstring("abcde");
longestSubstring("abcda");
