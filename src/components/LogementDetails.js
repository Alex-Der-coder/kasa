import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import logementsData from '../logements.json';
import PageNotFound from './PageNotFound';
import Carrousel from './Carrousel';
import Collapse from './collapse';


const LogementDetails = (props) => {
  const { id } = props.match.params;
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return (
      <div>
        <PageNotFound />
        {window.history.pushState(null, '', '/404')}
      </div>
    );
  }


  // Créer un tableau d'étoiles en fonction du rating du logement
  const ratingStars = [];
  for (let i = 0; i < logement.rating; i++) {
    ratingStars.push(
      <FontAwesomeIcon key={i} icon={faStar} className="star_filled" />
    );
  }
  for (let i = logement.rating; i < 5; i++) {
    ratingStars.push(<FontAwesomeIcon key={i} icon={faStar} className="star_empty" />);
  }

  return (
    <div>
      <Carrousel pictures={logement.pictures} />
      <div className="about_title_name">
        <h1 id='title_logement'>{logement.title}</h1>
    
        <p className='host'>{logement.host.name}</p>
        <img src={logement.host.picture} alt={logement.description} className="round-image" />  
             
      </div>
      <div className='location'>
        <p>{logement.location}</p>
      </div>
      <div className='container'>
        <div className="tags">
          {logement.tags.map((tag) => (
            <span className='logement_tags' key={tag}>{tag}</span>
          ))}
        </div>
        <div className="rating-stars">
          {ratingStars.map((icon) => (
            <div key={icon.key}>{icon}</div>
          ))}
        </div>
      </div>
      <div className="content_collapse">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          {logement.equipments.map((equipment) => (
            <p className='justify_left' key={equipment}>{equipment}</p>
          ))}
        </Collapse>
      </div>
      {/* Ajoutez d'autres éléments pour afficher les détails du logement */}
    </div>
  );
};

export default withRouter(LogementDetails);
