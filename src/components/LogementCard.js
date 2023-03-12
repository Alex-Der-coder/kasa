import React from 'react';

function LogementCard(props) {
  const { cover, title, description } = props.logement;

  return (
    <div className="logement-card">
      <img src={cover} alt={description} />
      <h2>{title}</h2>
    </div>
  );
}

export default LogementCard;
