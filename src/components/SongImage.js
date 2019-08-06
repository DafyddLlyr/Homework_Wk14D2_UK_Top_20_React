import React from 'react';
import '../App.css';

const SongImage = ({url, position}) => {

  const imageStyle = {
    width: '10vw',
    height: '10vw',
    backgroundImage: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <div style={imageStyle}>
      <h1 className="position-number">{position}</h1>
    </div>
  )
}

export default SongImage;
