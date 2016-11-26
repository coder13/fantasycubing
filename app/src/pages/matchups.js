const app = require('ampersand-app');
const React = require('react');
const ampersandReactMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
	displayName: 'MatchupsPage',
	mixins: [ampersandReactMixin],

	getDefaultProps () {
		return {};
	},

	renderMatchups() {
		return (
			<table className='table table-bordered'>
				<thead>
					<tr>
						<th>Team</th>
						<th style={{textAlign: 'center', width: '1em'}}>Points</th>
						<th style={{width: '1em'}}></th>
						<th style={{textAlign: 'center', width: '1em'}}>Points</th>
						<th>Team</th>
					</tr>
				</thead>
				<tbody>
					{app.matchups.map((matchup, index) => 
						<tr key={index}>
							<td>{matchup.homeTeam.name}</td>
							<td>0</td>
							<td>VS</td>
							<td>0</td>
							<td>{matchup.awayTeam.name}</td>
						</tr>)}
				</tbody>
			</table>
		);
	},

	render () {
		return (
			<div className='container'>
				{app.matchups.length ? renderMatchups() :
					<div>
						<p>No Matchups yet, wait till the start of the weekend.</p>
					</div>
				}
			</div>
		);
	}
});