// ActorCard.jsx
import React from "react";

function ActorCard({ name, lastName, age, nationality, movies, education, bio, image }) {
  return (
    <div className="actor-card">
      <nav className="menu">
        <button>Home</button>
        <button>About</button>
        <button>Career</button>
        <button>Education</button>
      </nav>

      <div className="content">
        <img src={image} alt={`${name} ${lastName}`} className="actor-image" />

        <div className="info">
          <h3>Informacion Personal:</h3>
          <p><b>Nombre:</b> {name}</p>
          <p><b>Apeliido:</b> {lastName}</p>
          <p><b>Edad:</b> {age}</p>
          <p><b>Nacionalidad:</b> {nationality}</p>

          <h3>Experiencia en peliculas:</h3>
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>

          <h3>Educación:</h3>
          <ul>
            {education.map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
          </ul>

          <h3>Biografía:</h3>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
}

export default ActorCard;
