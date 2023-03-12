import React from 'react';
import logementsData from '../logements.json';
import { Link } from 'react-router-dom';


function LogementList() {
  return (
    <div className="logement-list">
      {logementsData.map((logement, index) => (
        <div key={index} className="logement-card">
          <Link to={`/${logement.id}`}>
            <img src={logement.cover} alt={logement.description} />
            <h2>{logement.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default LogementList;
