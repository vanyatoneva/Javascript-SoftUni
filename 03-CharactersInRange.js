function printCharacters(a, b){
    let chars = [];
    if(a > b){
        let temp = a;
        a = b;
        b = temp;
    }
    for(let i = a.charCodeAt(0) + 1; i < b.charCodeAt(0) ; i++){
        
        chars.push(String.fromCharCode(i));
    }

    console.log(chars.join(' '));
}

printCharacters('C', '#');