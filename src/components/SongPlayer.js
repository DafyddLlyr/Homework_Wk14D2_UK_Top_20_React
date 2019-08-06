import React from 'react';
import '../App.css';

const SongPlayer = ({song}) => {
  return(
    <audio controls>
      <source src={song.href} type={song.type}/>
    </audio>
  )
}

export default SongPlayer;
