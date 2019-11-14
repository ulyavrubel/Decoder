// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) { // LBH QVQ VG!
  let arrRot1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
  let arrRot2 = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let newArr = str.split('');
  let result = [];
  let testRegex = /[A-Z]/;

  for (let item of newArr) {
    if (testRegex.test(item)) {
      if (arrRot1.indexOf(item) != -1) {
        result.push(arrRot2[arrRot1.indexOf(item)]);
      } else {
        result.push(arrRot1[arrRot2.indexOf(item)]);
      }
    } else {
      result.push(item);
    }
  }

  // return result.join('');
  document.getElementById('outputText').innerHTML = result.join('');
}

// Change the inputs below to test
// rot13("SERR PBQR PNZC");
