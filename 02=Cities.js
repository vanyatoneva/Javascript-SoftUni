function solve(input) {



      const cities = input.map((city) => {
        const [town, latitude, longitude] = city.split(" | ");
        return {town, latitude, longitude};
      })
      cities.forEach((city) => console.log((city)));
      //cities.forEach((city) => console.log(JSON.stringify(city)));
  }
  
  solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);