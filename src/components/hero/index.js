import React from 'react';

const Hero = ({ url, title, thumbnail }) => (
  <React.Fragment>
    <div className="thumbnail wrapper">
      <img className="thumbnail-img" src={thumbnail} alt={thumbnail} />
      <div className="thumbnail-overlay">
        <span className="thumbnail-text">{title}</span>
      </div>
    </div>
  </React.Fragment>
);

export default Hero;
