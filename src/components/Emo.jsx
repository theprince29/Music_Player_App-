// import React, { useState } from "react";

import "./css/emo.css";

// const Emo = () => {
//   const [emotionResult, setEmotionResult] = useState("");
//   const [imageLink, setImageLink] = useState("");

//   const handleEmotionDetection = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:5000/emotion_detect", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
       
//       });
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const data = await response.json();
//       console.log(data);
//       setEmotionResult(data.result); 
//       setImageLink(data.link);
   
//     } catch (error) {
//       console.error("Error:", error);
   
//     }
//   };

//   return (
//     <div className="emo-container">
//       <button className="emo-button" onClick={handleEmotionDetection}>
//         Detect Emotion
//       </button>
//       {emotionResult && (
//         <div>
//             <p className="emo-result">Emotion Detected: {emotionResult}</p>
//             <img className="emo-img" src={imageLink} alt="yourpic" />
//         </div>
    
//       )}
//     </div>
//   );
// };

// export default Emo;
// Emo.jsx
import React, { useState } from "react";
import { fetchSongs } from "../spotify"; // Import the function to fetch songs

const Emo = ({ setSongList }) => {
  const [emotionResult, setEmotionResult] = useState("");
  const [imageLink, setImageLink] = useState("");

  const handleEmotionDetection = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/emotion_detect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      setEmotionResult(data.result); 
      setImageLink(data.link);

      // Fetch songs based on the detected emotion
      const songs = await fetchSongs(data.result);
      setSongList(songs); // Pass the song list to the parent component (Feed)
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <div className="emo-container">
      <button className="emo-button" onClick={handleEmotionDetection}>
        Detect Emotion
      </button>
      {emotionResult && (
        <div>
            <p className="emo-result">Emotion Detected: {emotionResult}</p>
            <img className="emo-img" src={imageLink} alt="yourpic" />
        </div>
    
      )}
    </div>
  );
};

export default Emo;
