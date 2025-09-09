import React from "react";
import ActorCard from "./ActorCard";
import eastwoodImg from '/img/eastwood.jpeg'; // poné la imagen en /src

function App() {
  return (
    <div>
      <ActorCard
        name="Clinton"
        lastName="Eastwood Jr."
        age="95 años"
        nationality="Estadounidense"
        movies={[
          "Por un puñado de dólares (1964)",
          "Harry el sucio (1971)",
          "Los imperdonables (1992)",
        ]}
        education={[
          "Oakland Technical High School",
          "Los Angeles City College (estudios parciales)"
        ]}
        bio="Clint Eastwood, nacido en San Francisco en 1930, es actor, director y productor. 
        Se hizo famoso por los westerns de Sergio Leone y el personaje Harry el sucio. 
        Ganó varios premios Óscar como director por Los imperdonables y Million Dollar Baby. 
        También fue alcalde de Carmel (California). Hoy es considerado una leyenda del cine."
        image={eastwoodImg}
      />
    </div>
  );
}

export default App;

