var React = require('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');

var Weather = React.createClass({
	render: function() {
		return (
			<div>
				<h3>This is the weather component.</h3>
				<WeatherForm />
				<WeatherMessage />
			</div>
		)
	}
});

module.exports = Weather;
