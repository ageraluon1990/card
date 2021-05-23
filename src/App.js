import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Card from './component/Card/Card';

class App extends Component {
  state = {
    galleryImages: []
  }
  async componentDidMount(){
    await axios.get('https://don16obqbay2c.cloudfront.net/frontend-test-task/gallery-images.json').then(response => {
      this.setState({
        galleryImages: response.data.galleryImages  
      })
    })
  }
  
  render() {
    return (
      <div className = "App">
        {this.state.galleryImages.map((Images, index) =>{
            return (
                <Card
                    key = {index}
                    url = {Images.url}
                />
            );  
        })} 
      </div>
    );
  }
}

export default App;

