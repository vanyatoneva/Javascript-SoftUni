function solve(...numbers){
    const sum = (x, y) => x + y;
    const subtract = (x, y) => x - y;
    return subtract(sum(numbers[0], numbers[1]), numbers[2]);
}


console.log(solve(23, 6, 10));