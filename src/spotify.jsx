// spotify.jsx

import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
const redirectUri = "http://localhost:5173/";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;



export const fetchSongs = async (emotion) => {
  try {
    // Map the detected emotion to a seed genre or seed track, depending on your preference
    
      let seed = '';
  switch (emotion) {
  case 'Anger':
    seed = 'rock'; // Example seed genre for anger emotion
    break;
  case 'Neutral':
    seed = 'ambient'; // Example seed genre for neutral emotion
    break;
  case 'Fear':
    seed = 'classical'; // Example seed genre for fear emotion
    break;
  case 'Happy':
    seed = 'pop'; // Example seed genre for happy emotion
    break;
  case 'Sad':
    seed = 'blues'; // Example seed genre for sad emotion
    break;
  case 'Surprise':
    seed = 'world'; // Example seed genre for surprise emotion
    break;
  default:
    seed = 'pop'; // Default seed genre
}

    // Call the recommendation endpoint with the appropriate seed parameter
    const response = await apiClient.get(`/recommendations?seed_genres=${seed}&limit=10`);
    const data = response.data;

    // Extract relevant information from the response data (e.g., title, artist, etc.)
    const songs = data.tracks.map((track) => ({
      title: track.name,
      artist: track.artists.map((artist) => artist.name).join(", "),
      album: track.album.name,
      preview_url: track.preview_url,
      // image_url: imageURLs[data.tracks.indexOf(track)],
    }));
    return songs;
  } catch (error) {
    console.error("Error fetching songs:", error);
    return []; // Return an empty array if there's an error
  }

};
