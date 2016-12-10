import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import axios from 'axios';

var owl = {
  title: "NFL Schedule",
  nextURL: "http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=2016&week=6&position=QB&format=json"
};

var scheduleStuff = scheduleNFL();

function scheduleNFL() {
	axios.get(owl.nextURL)
	.then(res => {
		var teamName = res.data.players[0].name;
	})
}
// Component class starts here:
var Owl = React.createClass({
  render: function() {
    return (
      <div>
      	<h1>{owl.title}</h1>
        {scheduleStuff}
        <h1>{teamName}</h1>
      </div>
    );
  }
});

ReactDOM.render(<Owl />, document.getElementById('root'))

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
