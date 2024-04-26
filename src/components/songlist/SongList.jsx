import React from 'react';
import SongEntry from './SongEntry';
import "./css/SongEntry.css";

const SongList = ({ songs }) => {
  return (
    <div>
      <h2>Song List</h2>
      <div className="song-list-container">
        {songs.map((song, index) => (
          <SongEntry key={index} song={song} />
        ))}
      </div>
    </div>
  );
};

export default SongList;
