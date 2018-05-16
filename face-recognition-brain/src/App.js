import React, { Component } from 'react';
// Require the client API
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Logo from './components/Logo/Logo';
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import './App.css';

// initialize with your api key.
const app = new Clarifai.App({
  apiKey: "e37ad30eb5924e62904f93ae7520fc49"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input});
    app.models
      .predict(
      Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(
        function(response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
          // do something with response
        },
        function(err) {
          // there was an error
        }
      );
  }

  render() {
    return <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>;
  }
}

export default App;
