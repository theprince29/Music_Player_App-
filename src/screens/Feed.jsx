import React, { useState, useEffect } from "react";
import Emo from "../components/Emo";
import { fetchSongs } from "../spotify"; // Import the fetchSongs function
import "./css/feed.css";

import SongList from "../components/songlist/SongList";

export default function Feed() {
  const [emotionResult, setEmotionResult] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if (emotionResult) {
      fetchSongs(emotionResult)
        .then((songs) => {
          setSongs(songs);
        })
        .catch((error) => {
          console.error("Error fetching songs:", error);
        });
    }
  }, [emotionResult]);

  const handleEmotionDetection = async () => {
    try {
      // Your existing code for emotion detection
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <div className="screen-container ">
      <div className="feed">
        <div className="feed-content">
          <h1>Scan your face</h1>
          <Emo
            setEmotionResult={setEmotionResult}
            setImageLink={setImageLink}
            setSongList={setSongs} // Corrected prop name
          />
          {emotionResult && (
            <div>
              <p className="emo-result">Emotion Detected: {emotionResult}</p>
              <img className="emo-img" src={imageLink} alt="yourpic" />
            </div>
          )}
        </div>
        <div>
          <SongList songs={songs} />
        </div>
      </div>
    </div>
  );
}
