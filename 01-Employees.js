function solve(people){
    const employees = people.reduce((acc, cur) => {
        acc[cur] = cur.length;
        return acc;
    }, {});

    Object.keys(employees).forEach((key) => {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
    });

}


solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );