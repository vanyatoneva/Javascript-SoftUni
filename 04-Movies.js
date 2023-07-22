class MovieLibrary{
    constructor(){
        this.movies = [];
    }

    addMovie(input){
        const [_, name] = input.split("addMovie ");
        this.movies.push({ name });
    }
    addDirector(input){
        const[movieName, director] = input.split(" directedBy ");
        const thisMovie = this.movies.find((m) => m.name === movieName);
        if(thisMovie){
            thisMovie.director = director;
        }
    }

    addDate(input){
        const[movieName, date] = input.split(" onDate ");
        const movie = this.movies.find((m) => m.name === movieName);
        if(movie){
            movie.date = date;
        }
    }

}

function solve(moviesInfo){
class MovieLibrary{
    constructor(){
        this.movies = [];
    }

    addMovie(input){
        const [_, name] = input.split("addMovie ");
        this.movies.push({ name });
    }
    addDirector(input){
        const[movieName, director] = input.split(" directedBy ");
        const thisMovie = this.movies.find((m) => m.name === movieName);
        if(thisMovie){
            thisMovie.director = director;
        }
    }

    addDate(input){
        const[movieName, date] = input.split(" onDate ");
        const movie = this.movies.find((m) => m.name === movieName);
        if(movie){
            movie.date = date;
        }
    }

}


   const movieLibrary = new MovieLibrary();
   moviesInfo.forEach((comm) => {
        if(comm.includes("addMovie")){
            movieLibrary.addMovie(comm);
        }
        else if(comm.includes("directedBy")){
            movieLibrary.addDirector(comm);
        }
        else if(comm.includes("onDate")){
            movieLibrary.addDate(comm);
        }
    });
   
    movieLibrary.movies.filter((m) => 
        m.name && m.director && m.date)
        .forEach(element => {
         console.log(JSON.stringify(element));
    });

}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);
console.log(' ');
    solve([
        'addMovie The Avengers',
        'addMovie Superman',
        'The Avengers directedBy Anthony Russo',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo'
        ]);
    
    