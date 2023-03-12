import React from "react";
import Collapse from "./collapse";




function About() {
  return (
    <div className="body_container">
      <div className="section1 section1-about">
        <div className="section1-inner">
          <div className="section1-text">
          </div>
        </div>
      </div>
      <div className="content">
        <Collapse title="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </Collapse>
        <Collapse title="Respect" isInitiallyOpen={true}>
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse title="Service">
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </Collapse>
        <Collapse title="Responsabilité">
          <p>Nous nous engageons à vous fournir des logements de qualité, des vérifications d'identités et des avis vérifiés. Nous sommes là pour vous aider à voyager en toute confiance.</p>
        </Collapse>
      </div>
      {/* Le reste du contenu de votre application se trouve ici */}
    </div>
  );
}

export default About;

