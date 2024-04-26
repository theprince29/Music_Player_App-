import React from 'react';
import { SiYoutubemusic } from "react-icons/si";
import "./css/SongEntry.css";

const SongEntry = ({ song }) => {
  return (
    <div className="entry-body">
      <div className="entry-right-body flex">
        <SiYoutubemusic />
        <div>
        <p className="entry-title"> Title: {song.title}</p>
        <p className="entry-subtitle">Artist: {song.artist}</p>
        </div>

      </div>
    </div>
  );
};

export default SongEntry;
