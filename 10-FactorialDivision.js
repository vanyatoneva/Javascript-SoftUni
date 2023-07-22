function solve(num1, num2){
    function calculateFactorial(num){
        let result = 1;
        for(let i = 1; i <= num; i++){
            result *= i;
        }
        return result;
    }
    
    let result = calculateFactorial(num1) / calculateFactorial(num2);
    console.log(result.toFixed(2));
}

solve(5, 2);