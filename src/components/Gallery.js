import React from 'react';
import LogementList from './logementList'
import Redirect404  from './404'

function Gallery ({ showLogement = true , show404 = false }) {
  const galleryClassName = show404 ? "gallery_404" : "gallery";
  return (
    <div className={galleryClassName}>
      {showLogement && <LogementList />}
      {show404 && <Redirect404 />}
    </div>
  );
}


export default Gallery;
