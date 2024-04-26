# Facial Mood Detection Machine Learning Model

This project is a Music Player App with Facial Mood Detection, powered by Flask to generate a model API. 
It enhances the music listening experience by dynamically selecting music tracks based on the user's detected mood through facial expressions.

## Machine Learning Model Concept
The Facial Mood Detection Machine Learning Model utilizes a Convolutional Neural Network (CNN) architecture trained on a dataset of labeled facial expressions. The model's objective is to classify the emotional states of individuals based on their facial features. The key steps involved in the model concept are as follows:

- **Data Collection:** The model is trained on a diverse dataset of facial images depicting various emotional states, including happiness, sadness, anger, fear, surprise, and disgust. These images are collected from publicly available datasets and may undergo preprocessing steps such as resizing and normalization.
  
- **Model Architecture:** The CNN architecture comprises multiple layers of convolutional, pooling, and fully connected layers. These layers are designed to extract hierarchical features from the input images, capturing both low-level and high-level patterns associated with different emotions.
  
- **Training Process:** The model is trained using the collected dataset through an iterative optimization process. During training, the model learns to minimize a predefined loss function by adjusting its parameters (weights and biases) through backpropagation. The optimization algorithm, such as stochastic gradient descent (SGD) or Adam, updates the parameters to improve the model's performance in classifying emotions.
  
- **Evaluation and Validation:** After training, the model's performance is evaluated using a separate validation dataset to assess its accuracy, precision, recall, and other performance metrics. The validation process helps ensure that the model generalizes well to unseen data and is not overfitting to the training data.
  
- **Deployment:** Once trained and validated, the model is deployed as part of the Music Player App backend. It serves as the core component responsible for detecting users' facial expressions in real-time and inferring their emotional states.

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


    
   

