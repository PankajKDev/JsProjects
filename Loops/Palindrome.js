// // Check if a string is palindrome

function palindromeChecker(paliString){
    let palindromeString=paliString.toLowerCase();
    let palindromeArray=palindromeString.split("",paliString.length)
    let reversedPalindromeArray=palindromeArray.reverse();
    let reversedPalindrome=reversedPalindromeArray.join('');
    if(reversedPalindrome==palindromeString){
        console.log(`The string ${paliString} is a palindrome`)
    }
    else{
        console.log(`The string ${paliString} is not a palindrome`)
    }
  

}

palindromeChecker('wow')