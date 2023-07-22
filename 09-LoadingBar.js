function solve(percent){
    if(percent === 100){
        console.log("100% Complete!");
        return;
    }
    let bar = [];
    for(let i = 0; i < 10; i++){
        if(i < percent / 10){
            bar[i] = '%';
            continue;
        }
        bar[i] = '.';
    }
    console.log(`${percent}% [${bar.join('')}]`);
    console.log("Still loading...");
}

solve(100);