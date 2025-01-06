//Take a 3 character string and find if it is a sandwich string. Sandwich string is when the
//first and last character is consonant and the middle one is a vowel.

//
const VOWELS = "aeiou";
const CONSONANTS = "bcdfghjklmnpqrstvwxyz";

function checkSandWichString(txt) {
  if (txt.length !== 3) {
    console.log("Enter a three character word");
  } else {
    let firstCharacter = CONSONANTS.includes(txt[0].toLowerCase());
    let secondCharacter = VOWELS.includes(txt[1].toLowerCase());
    let thirdCharacter = CONSONANTS.includes(txt[2].toLowerCase());

    (firstCharacter && secondCharacter && thirdCharacter)
      ? console.log("The  string is a sandwich string ")
      : console.log("Thee string isnt a sandwich string");
  }
}
checkSandWichString("REM");
