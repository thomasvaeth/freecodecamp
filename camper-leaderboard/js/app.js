var App = React.createClass({
  render: function() {
    return (
    	<Leaderboard />
    );
  }
});

var Leader = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.rank}</td>
				<td><img src={this.props.image} /> {this.props.name}</td>
				<td>{this.props.recentPoints}</td>
				<td>{this.props.allPoints}</td>
			</tr>
		);
	}
});

var Leaderboard = React.createClass({
	getInitialState: function() {
		return {camper: [], sort: 'Recent'}
	},
	componentDidMount: function() {
		this.recent();
	},
	recent: function() {
		var self = this;
		$.get('http://fcctop100.herokuapp.com/api/fccusers/top/recent', function(data) {
			self.setState({camper: data, sort: 'Recent'});
		});
	},
	alltime: function() {
		var self = this;
		$.get('http://fcctop100.herokuapp.com/api/fccusers/top/alltime', function(data) {
			self.setState({camper: data, sort: 'AllTime'});
		});
	},
	render: function() {
		var leaderboard = this.state.camper.map(function(person, idx) {
			return (
				<Leader key={idx} rank={idx + 1} image={person.img} name={person.username} recentPoints={person.recent} allPoints={person.alltime} />
			);
		});
		return (
			<table className="table table-bordered table-condensed table-striped">
				<tbody>
				<tr className="warning">
					<th>#</th>
					<th>Camper Name</th>
					<th><a href="#" onClick={this.recent}>Points in past 30 days</a></th>
					<th><a href="#" onClick={this.alltime}>All time points</a></th>
				</tr>
				{leaderboard}
				</tbody>
			</table>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('container'));
