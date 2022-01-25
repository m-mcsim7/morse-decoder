const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "**********": " ",
};

function decode(expr) {
   let strWithOutZero;
   let strItog = "";
   let arr = expr.match(/.{1,10}/g);
   for (let i of arr) {
     let arr10 = i.split("");
 
     strWithOutZero = arr10.join("") 
 
     for (let i = -1; i < arr10.length; ++i) {
        if (arr10[i] == 0) {
         delete arr10[i];
         strWithOutZero = arr10.join("");
       } 
       else if (arr10[i] == 1) break
 
       
       //console.log(strWithOutZero)
     }
    // console.log(strWithOutZero)
     let index = strWithOutZero.replace(/11/gi, "-").replace(/10/gi, ".");
 
    // console.log(MORSE_TABLE[index] + ' = ' + index)
     strItog = strItog + MORSE_TABLE[index];
   }
   return strItog;
 }

module.exports = {
  decode,
};
