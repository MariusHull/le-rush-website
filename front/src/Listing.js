import React, { Component } from 'react';
import axios from 'axios';


class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equipes: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/equipes')
      .then(res => {
        this.setState({ equipes: res.data });
        console.log(this.state.equipes);
      });
  }

  render() {
    return (
      <div class = "container"> 
      <EquipeList/>
    </div>
    );
  }
}


class EquipeList extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
            
            </div>
        );
    }
}

export default Listing;