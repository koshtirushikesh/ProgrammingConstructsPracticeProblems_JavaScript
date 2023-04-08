function palindrome(num1, num2) {

    const reverseNum1 = num1.toString().split('').reverse().join('');
    const reverseNum2 = num2.toString().split('').reverse().join('');
  
    if (num1 == reverseNum1 && num2 == reverseNum2) {
      return "number 1 And 2 is palindrom";
    } else if (num1 != reverseNum1 && num2 == reverseNum2){
      return "number 1 is not palindrom but number 2 is palindrom";
    }else if (num1 == reverseNum1 && num2 != reverseNum2){
        return "number 1 is palindrom but number 2 is not palindrom";
    }else{
        return "both number are not palindrome";
    }
    
  }
  
  console.log(palindrome(12321, 458854)); // both true
  console.log(palindrome(1232, 458854)); // false true
  console.log(palindrome(12321, 45885)); // true false
  console.log(palindrome(123, 789)); //both false