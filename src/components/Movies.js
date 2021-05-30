import React from "react";
import { movies } from "../data";

function Movies() {
  const cardStyles = {
    width: "400px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#fc92e3",
    textDecoration: "none",
    color: "white",
  }


  const movie = movies.map((m) => {
    let eachMovie=m.genres
    return (
      <div key={m.title} style={cardStyles}>
      <h2>Name : {m.title}</h2>
      <p>Runtime: {m.time} min.</p>
      <p>Genres : </p>
      <ul>{eachMovie.map((r)=><li key={r}>{r}</li>
      )} </ul>
    </div>
    )
  })
  return (<div>
    <h1>Movies Page</h1>
    {movie}
  </div>)
}

export default Movies;
