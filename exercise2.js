/*
EXERCISE #2

Given a string of letters, 
create a function that returns an array with the separator that yields the longest possible substring, provided that:

The substring starts and ends with the separator.
The separator doesn't occur inside the substring other than at the ends.
If two or more possibleValues yield substrings with the same length, they should appear in alphabetical order.

Examples
separator("supercalifragilistic") ➞ ["s"]
// The longest substring is "supercalifragilis".

separator("laboratory") ➞ ["a", "o", "r"]
// "abora", "orato" and "rator" are the same length.

separator("candle") ➞ []
// No possible substrings.

INFO
All substrings should be at least of length 2 (i.e. no single-letter substrings).
Expect lowercase alphabetic characters only.

*/

const getElement = (item, start, end) => item.substring(start, end);

function separator(str) {
  if (!str) return;
  const STR = String(str);
  let possibleValues = [];
  for (let i = 0; i < STR.length; i++) {
    const current = STR[i];
    const lastIndex = STR.indexOf(current, i + 1);
    const isSeparator = lastIndex !== -1;
    if (isSeparator) {
      const element = getElement(STR, i, lastIndex + 1);
      possibleValues.push(element);
    }
  }
  const maxLength = possibleValues.reduce((max, current) => {
    return max > current.length ? max : current.length;
  }, 0);
  const result = possibleValues
    .filter((sub) => sub.length === maxLength)
    .map((item) => item[0])
    .sort();
  console.log(result);
}

separator("supercalifragilistic");
separator("laboratory");
separator("candle");
separator("happyanniversaryqontigo");
separator("futureofwork");
separator("Intranet");
