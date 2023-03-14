// Import the necessary libraries and components
import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import logementsData from '../logements.json';
import PageNotFound from './PageNotFound';
import Carrousel from './Carrousel';
import Collapse from './collapse';

// Define the LogementDetails component
const LogementDetails = (props) => {
  // Extract the "id" parameter from the URL using "props.match.params"
  const { id } = props.match.params;

  // Find the logement object in the "logementsData" array that has the same "id"
  const logement = logementsData.find((logement) => logement.id === id);

  // If there is no logement object, return a PageNotFound component and redirect to the 404 page
  if (!logement) {
    return (
      <div>
        <PageNotFound />
        {window.history.pushState(null, '', '/404')}
      </div>
    );
  }

  // Create an array of stars based on the logement's rating
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
      <Carrousel pictures={logement.pictures} /> {/* Render the Carrousel component with the logement's pictures */}
      <div className="about_title_name">
        <h1 id='title_logement'>{logement.title}</h1> {/* Render the logement's title */}
        <p className='host'>{logement.host.name}</p> {/* Render the logement host's name */}
        <img src={logement.host.picture} alt={logement.description} className="round-image" />  {/* Render the logement host's picture */}
      </div>
      <div className='location'>
        <p>{logement.location}</p> {/* Render the logement's location */}
      </div>
      <div className='container'>
        <div className="tags">
          {/* Render the logement's tags */}
          {logement.tags.map((tag) => (
            <span className='logement_tags' key={tag}>{tag}</span>
          ))}
        </div>
        <div className="rating-stars">
          {/* Render the rating stars */}
          {ratingStars.map((icon) => (
            <div key={icon.key}>{icon}</div>
          ))}
        </div>
      </div>
      <div className="content_collapse">
        {/* Render the Collapse components with the logement's description and equipment */}
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          {logement.equipments.map((equipment) => (
            <p className='justify_left' key={equipment}>{equipment}</p>
          ))}
        </Collapse>
      </div>
      {/* Add more elements to display the logement details */}
    </div>
  );
};

export default withRouter(LogementDetails); 
