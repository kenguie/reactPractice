var React = require('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');
var openWeatherMap = require('../api/openWeatherMap');

var Weather = React.createClass({
	getInitialState: function() {
	    return {
	        isLoading: false
	    }
	},
	handleSearch: function(location, temp) {
		var that = this;
		this.setState({isLoading: true});

		openWeatherMap.getTemp(location).then(function(temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function(errorMessage) {
			this.setState({isLoading: false});
			alert(errorMessage);
		})
	},
	render: function() {
		var {isLoading, temp, location} = this.state;  // passing our state to WeatherMessage

		function renderMessage() {
			if (isLoading) {
				return <h3>Fetching weather ...</h3>;
			} else if (temp && location) {
				return <WeatherMessage temp={temp} location={location} />;
			}
		}

		return (
			<div>
				<h3>This is the weather component.</h3>
				<WeatherForm onSearch={this.handleSearch} />
				{renderMessage()}
			</div>
		)
	}
});

module.exports = Weather;
