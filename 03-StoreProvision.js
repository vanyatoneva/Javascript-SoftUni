function solve(productsInStock, productsOrdered){
    const allProducts = [...productsInStock, ...productsOrdered]
    const products = allProducts.reduce(
        (acc, curr, i) => {
            if(i % 2 === 0){
                if(!acc.hasOwnProperty(curr)){
                    acc[curr] = 0;
                }
                acc[curr] += Number(allProducts[i+1]);
                
            }
            return acc;
        },
        {});

    Object.keys(products).forEach(
        (key) => {
            console.log(`${key} -> ${products[key]}`);
        }
    );
}


solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]
    )