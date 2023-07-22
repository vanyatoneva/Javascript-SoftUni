function solve(n){
    let row = [];
    for(let i = 0; i < n; i++){
        row[i] = n;
    }
    for(let i = 0; i < n; i++){
        console.log(row.join(' '));
    }
}

solve(3);