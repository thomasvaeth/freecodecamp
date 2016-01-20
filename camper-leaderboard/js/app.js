var App = React.createClass({
  render: function() {
    return (
    	<div className="container">
      	<div className="well">
        	<h1>Hello</h1>
      	</div>
      </div>
    );
  }
});

var Leader = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.rank}</td>
				<td>{this.props.img} {this.props.name}</td>
				<td>{this.props.recentPoints}</td>
				<td>{this.props.allPoints}</td>
			</tr>
		);
	}
});

var Leaderboard = React.createClass({
	render: function() {
		var leaderboard = this.state.data.map(function(person, idx) {
			return (
				<Leader key={idx} rank={idx + 1} name={person.username} recentPoints={person.recent} allPoints={person.alltime} />
			);
		});
		return (
			<table className="table table-striped">
				<tr>
					<th>#</th>
					<th>Camper Name</th>
					<th>Points in past 30 days</th>
					<th>All time points</th>
				</tr>
				{leaderboard}
			</table>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('container'));
