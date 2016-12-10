import React, {Component} from "react";
import NavBar from '../components/NavBar';
import axios from 'axios';


class Giphy extends Component {

  constructor (props){
      super(props);
      this.state = {
          search: ""
      }
  }

  handleSubmit(e){
      e.preventDefault();
      this.getThatShit(this.state.search);
      this.setState({search:""})

  }

  handleChange(e){
      this.setState({search: e.target.value});
  }

  getThatShit(giphy) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${giphy}&api_key=dc6zaTOxFJmzC`;
    console.log(url);

    axios.get(url)
    .then(res => {
      console.log('res', res);
    })
    .catch(err => console.log('err', err));
  }

  render() {
    return (
     	<div>
        <NavBar
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          show={true}
        />
      </div>
    );
  }
}

export default Giphy
