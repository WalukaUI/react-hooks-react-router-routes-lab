import React from "react";
import { actors } from "../data";

function Actors() {
  const cardStyles = {
    width: "400px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#ff96ad",
    textDecoration: "none",
    color: "white",
  }

  const actor=actors.map((a)=>{
    return <div key={a.name} style={cardStyles}>
         <h2>Name : {a.name}</h2>
         <p>Movie</p>
         <ul>
           {a.movies.map((m)=><li key={m}>{m}</li>
           )}
         </ul>
    </div>
  })
  return <div>
  <h1>Actors Page</h1>
  {actor}
  </div>
}

export default Actors;
