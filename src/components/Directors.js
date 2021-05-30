import React from "react";
import { directors } from "../data";

function Directors() {
  const cardStyles = {
    width: "400px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#fb9300",
    textDecoration: "none",
    color: "white",
  }

  const director=directors.map((d)=>{
    return <div key={d.name} style={cardStyles}>
      <h2>Name : {d.name}</h2>
      <p>Movies:</p>
      <ul>{d.movies.map((m)=><li key={m}>{m}</li>
      )}</ul>
    </div>
  })
  return (<div>
  <h1>Directors Page</h1>
  {director}</div>)
}

export default Directors;
