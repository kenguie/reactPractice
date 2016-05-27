var React = require('react');

var WeatherMessage = React.createClass({
	render: function() {
		var {temp, location} = this.props;  // state becomes props here 

		return (
			<h3>It is {temp} in {location}.</h3>
		)
	}
})

module.exports = WeatherMessage;