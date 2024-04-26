# Facial Mood Detection Machine Learning Model

This project is a Music Player App with Facial Mood Detection, powered by Flask to generate a model API. 
It enhances the music listening experience by dynamically selecting music tracks based on the user's detected mood through facial expressions.

## Server Directory Structure
- pycache: Contains compiled Python bytecode files.
- static: Directory for storing static files such as images and CSS.
- app.py: Flask application file containing the backend logic.
- haarcascade_frontalface_default.xml: Haarcascade XML file for facial detection.
- model.h5: Pre-trained Keras model file for emotion detection.
- requirements.txt: File listing Python dependencies required for running the Flask server.

## Usage
1. Navigate to the server directory:
   ```
   cd Music_Player_App/server
   ```
2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Run the Flask application:
   ```
   python app.py
   ```
4. Open a web browser and go to http://127.0.0.1:5000 to use the Music Player App with Facial Mood Detection.

## Features
-Facial Mood Detection: Detects user's emotions through facial expressions in real-time.
-Music Recommendation: Recommends music tracks based on the detected mood.
-API Endpoint: Provides a Flask API endpoint for integrating the model with other applications.
-Privacy: Ensures compliance with privacy regulations and ethical standards related to facial recognition technology.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request with any improvements or features you'd like to add.

## License
This project is licensed under the MIT License.


    
   

