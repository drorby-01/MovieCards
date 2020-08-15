import React from 'react';
import logo from './logo.svg';
import './App.css';

const MovieCards = [
{"Title":"Batman Begins","Year":"2005","imdbID":"tt0372784","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg","rank":4},
{"Title":"Batman v Superman: Dawn of Justice","Year":"2016","imdbID":"tt2975590","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","rank":1},
{"Title":"Batman","Year":"1989","imdbID":"tt0096895","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg","rank":5},
{"Title":"Batman Returns","Year":"1992","imdbID":"tt0103776","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg","rank":4},{"Title":"Batman Forever","Year":"1995","imdbID":"tt0112462","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","rank":4},{"Title":"Batman & Robin","Year":"1997","imdbID":"tt0118688","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg","rank":4},{"Title":"The Lego Batman Movie","Year":"2017","imdbID":"tt4116284","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg","rank":4},{"Title":"Batman: The Animated Series","Year":"1992–1995","imdbID":"tt0103359","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMjFiNzk3NzctY2E0OS00NTVkLThlMDUtODVlNmRmZWI1ZjMzXkEyXkFqcGdeQXVyNTQ0NjQzNTE@._V1_SX300.jpg","rank":4},{"Title":"Batman: Under the Red Hood","Year":"2010","imdbID":"tt1569923","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","rank":5},
{"Title":"Batman: The Dark Knight Returns, Part 1","Year":"2012","imdbID":"tt2313197","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg","rank":4}]



function App() {
  return <div>
    <MovieCardsList cardsList={MovieCards}/>
    </div>  
}

interface IMovieCard{
  Title:string,
  Year:string,
  imdbID:string,
  Type:string,
  Poster:string,
  rank:number
}


function MovieCard(prop:IMovieCard){
  return (   <div className="card col-lg-4" style={{display:"inline-flex"}} >
  <img src={prop.Poster} className="card-img-top" height="400px" width="400px" />
  <div className="card-body">
    <h5 className="card-title">Title:{prop.Title}</h5>
    <p className="card-text">Year:{prop.Year}</p>
    <p className="card-text">Type:{prop.Type}</p>
    <p className="card-text">rank:{prop.rank}</p>
  </div>
</div>
)
}

interface IMovieCardList{
  cardsList:Array<IMovieCard>
}

function MovieCardsList(cardsListArray:IMovieCardList){
  const MovieCardsArrayElement:JSX.Element[] =cardsListArray.cardsList.map(element=><MovieCard {...element}></MovieCard>)

return <div>
    {MovieCardsArrayElement}
  </div>
}

export default App;
