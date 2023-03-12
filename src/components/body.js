import React from "react";
import Gallery from "./Gallery";


function Body({ showGallery = true, isAboutPage = false }) {
  return (
    <div id="about">
      <div className={`section1 ${isAboutPage ? "section1-about" : "section1-home"}`}>
        <div className="section1-inner">
          <div className="section1-text">
            {!isAboutPage && <p>Chez vous, partout et ailleurs</p>}
          </div>
        </div>
      </div>
      {showGallery && <Gallery />}
    </div>
  );
}

export default Body;
