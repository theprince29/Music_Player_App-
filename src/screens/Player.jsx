import React, { useEffect, useState } from "react";
import "./css/player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../spotify";
import SongCard from "../components/songCard/SongCard";
import Queue from "../components/Queue";
import AudioPLayer from "../components/audioPlayer/AudioPlayer";
import Widgets from "../components/widgets/Widgets";

export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleSelectTrack = (track) => {
    setCurrentTrack(track);
    // Optionally, update the currentIndex based on the selected track
  };

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        <AudioPLayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Widgets artistID={currentTrack?.album?.artists[0]?.id}
            onSelectTrack={handleSelectTrack}
         />
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
}