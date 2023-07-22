function isPalindrome(number){

    for(let j = 0; j < number.length; j ++){
        
        let stringOfNumber = number[j].toString();
        let isPalindrome = true;
        for(let i = 0; i < stringOfNumber.length / 2; i++){
            if(stringOfNumber[i] !== stringOfNumber[stringOfNumber.length - i - 1]){
                isPalindrome = false;
                break;
            }
        }
        console.log(isPalindrome ? "true" : "false");
    }
}



isPalindrome([123, 323, 421, 121]);