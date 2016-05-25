var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	render: function() {
		return (
			<div>
				<h2>React Weather</h2>
				<IndexLink to="/" activeClassName="Active" activeStyle={{fontWeight: 'bold', color: 'red', textDecoration: 'none'}}>Get Weather</IndexLink>
				<Link to="About" activeClassName="Active" activeStyle={{fontWeight: 'bold', color: 'red', textDecoration: 'none'}}>About</Link>
				<Link to="Examples" activeClassName="Active" activeStyle={{fontWeight: 'bold', color: 'red', textDecoration: 'none'}}>Examples</Link>
			</div>
		)
	}
})

module.exports = Nav;