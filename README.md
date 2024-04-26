# Music Player - Recommend Music based on Facial Mood Detection
This project is a Music Web App designed to provide a seamless and enjoyable music listening experience.

## Project Acritecture
![image](https://github.com/theprince29/Music_Player_App-/assets/113759522/786c0f76-6876-4a7b-963c-0a4a283f4437)

### Interactive User Interface
![Screenshot 2024-04-25 071259](https://github.com/theprince29/Music_Player_App-/assets/113759522/025ddbdc-04c9-4d64-889a-8df4f79bd861)

### Scan your face for mood detection 
![Screenshot 2024-04-25 074423](https://github.com/theprince29/Music_Player_App-/assets/113759522/eded7087-5c1f-4996-a3b1-8de4e5271b2b)


## Features
- User-Friendly Interface: Intuitive and responsive interface for easy navigation and control.

- Music Playback: Play, pause, skip, and repeat tracks effortlessly.

- Music Recommendations: Discover new music based on your preferences and listening history.

- Personalized Experience: Customize playlists and settings to tailor the music experience to your liking.

- Accessibility: Accessible design ensuring that all users can enjoy the app regardless of abilities.

## Installation

1. Clone the repository:
```
git clone https://github.com/theprince29/Music_Player_App-.git
```
2. Navigate to the project directory:
```
cd music-webapp
```
3. Install dependencies:
```
npm install
```
4. Start the development server:
```
npm run dev
```
Open a web browser and go to http://localhost:3000 to access the Music Web App.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- React Router: Declarative routing for React applications.
- Axios: Promise-based HTTP client for making API requests.
- React Icons: Library providing popular icon packs as React components.
- Vite: Fast and opinionated web dev build tool that serves your code via native ES Module imports during development.
Spotify Integration
- The spotify.jsx file contains functions for interacting with the Spotify API to fetch song recommendations based on the user's detected emotion.

## Authentication
To use the Spotify API, you'll need to obtain a client ID from the Spotify Developer Dashboard and set up your redirect URI. Replace the clientId and redirectUri variables in spotify.jsx with your own credentials.

## Fetching Songs
The fetchSongs function takes an emotion as input and returns a list of recommended songs based on that emotion. The function maps the detected emotion to a seed genre and calls the Spotify recommendation endpoint with the appropriate seed parameter.

## Emotion Detection
The Emo.jsx component handles emotion detection using a backend server. It makes a POST request to http://127.0.0.1:5000/emotion_detect to detect emotions from facial images. After receiving a response, it sets the detected emotion and image link states. Additionally, the component fetches songs based on the detected emotion using the fetchSongs function imported from spotify.jsx.
- ### Facial Mood Detection Model Information [Click me](https://github.com/theprince29/Music_Player_App-/tree/main/server#readme)

## Contributing
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
