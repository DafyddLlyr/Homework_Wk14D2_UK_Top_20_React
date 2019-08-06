import React from 'react';
import SongImage from './SongImage'
import SongPlayer from './SongPlayer'
import '../App.css';

const Song = ({entry, index}) => {

  const imageUrl = entry["im:image"][2].label
  const previewSong = entry.link[1].attributes

  return(
    <div className="song">
      <SongImage url={imageUrl} position={index += 1}/>
      <div className="song-container">
        <h2>{entry["im:name"].label}</h2>
        <h3>{entry["im:artist"].label}</h3>
        <SongPlayer song={previewSong} />
      </div>
    </div>
  )
}

export default Song;
