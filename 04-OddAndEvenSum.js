function findOddAndEvenSum(number){
    let stringNumber = number.toString();
    let sumOdd = 0;
    let sumEven = 0;

    for(let i = 0; i < stringNumber.length; i ++){
        let digit = Number(stringNumber[i]);
        if(digit % 2 == 0){
            sumEven += digit;
        }
        else{
            sumOdd += digit;
        }
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}


findOddAndEvenSum(1000435);