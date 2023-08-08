import React from 'react';
import { withRouter } from 'react-router-dom';
import logementsData from '../logements.json';
import PageNotFound from './PageNotFound';
import Carrousel from './Carrousel';
import Collapse from './collapse';

import starActiveSvg from '../Sass/images/star_active.svg';
import starInactiveSvg from '../Sass/images/star_inactive.svg';

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

  const ratingStars = [];
  for (let i = 0; i < logement.rating; i++) {
    ratingStars.push(<img key={`active-${i}`} src={starActiveSvg} alt="Active Star" className="star_icon" />);
  }
  for (let i = logement.rating; i < 5; i++) {
    ratingStars.push(<img key={`inactive-${i}`} src={starInactiveSvg} alt="Inactive Star" className="star_icon" />);
  }

  const tagsClass = logement.tags.length === 2 || logement.tags.length === 3 ? 'two-three-tags' : '';

  const hostClass = logement.tags.length === 2 ? 'two-tags-host' : '';
  const roundClass = logement.tags.length === 2 ? 'two-tags-host_round' : '';
  return (
    <div>
      <Carrousel pictures={logement.pictures} />
      <div className={`about_title_name`}>
        <h1 id='title_logement'>{logement.title}</h1>
        <p className={`host ${hostClass}`}>{logement.host.name}</p>
        <img
          src={logement.host.picture}
          alt={logement.description}
          className={`round-image ${roundClass}`}
        />
      </div>
      <div className='location'>
        <p>{logement.location}</p>
      </div>
      <div className={`container tags ${tagsClass}`}>
        <div className="tags">
          {logement.tags.map((tag) => (
            <span className='logement_tags' key={tag}>{tag}</span>
          ))}
        </div>
        <div className="rating-stars">
          {ratingStars}
        </div>
      </div>
      <div className="content_collapse">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          {logement.equipments.map((equipment, index) => (
            <p className='justify_left' key={index}>{equipment}</p>
          ))}
        </Collapse>
      </div>
      {/* Add more elements to display the logement details */}
    </div>
  );
};

export default withRouter(LogementDetails);
