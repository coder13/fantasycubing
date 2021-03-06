const app = require('ampersand-app');
const xhr = require('xhr');
const React = require('react');
const {Grid, Menu, Table} = require('semantic-ui-react');
const ampersandReactMixin = require('ampersand-react-mixin');

let compare = (a,b) => a < b ? -1 : (a > b ? 1 : 0);

module.exports = React.createClass({
	displayName: 'RankingsPage',
	mixins: [ampersandReactMixin],

	getDefaultProps () {
		return {
			view: 'allTime',
		};
	},

	getInitialState () {
		return {
			season: this.props.season || 2
		};
	},

	componentWillMount() {
		this.request();
	},

	componentWillReceiveProps(props) {
		this.props = props;
		this.request();
	},

	request () {
		const {view} = this.props;
		let week = this.props.week || app.currentWeek();
		let season = this.state.season || 2;
		let self = this;

		if (view === 'weekly') {
			xhr.get(`${app.apiURL}/stats/weeklyRankings?week=${week}`, function (err, res, body) {
				if (res.statusCode === 200) {
					self.setState({
						teams: JSON.parse(body)
					});
				}
			});
		} else if (view === 'season') {
			xhr.get(`${app.apiURL}/stats/seasonRankings?season=${season}`, function (err, res, body) {
				if (res.statusCode === 200) {
					self.setState({
						teams: JSON.parse(body)
					});
				}
			});
		} else if (view === 'allTime') {
			xhr.get(`${app.apiURL}/stats/rankings`, function (err, res, body) {
				if (res.statusCode === 200) {
					self.setState({
						teams: JSON.parse(body)
					});
				}
			});
		}
	},

	render () {
		const {season, view} = this.props;

		let week = this.props.week ? parseInt(this.props.week) : (app.currentWeek() - 1);

		let teams = this.state.teams || [];

		let lastPoints = 0;
		let lastRank = 0;
		let rank = 0;

		return (
			<div>
				<Menu tabular>
					<Menu.Item name='All Time' active={view === 'allTime'} onClick={() => app.router.history.navigate('/rankings', {trigger: true})}/>
					<Menu.Item name='Week' active={view === 'weekly'} onClick={() => app.router.history.navigate(`/rankings?week=${app.currentWeek() - 1}`, {trigger: true})}/>
					<Menu.Item name='Season' active={view === 'season'} onClick={() => app.router.history.navigate(`/rankings?season=2`, {trigger: true})}/>
				</Menu>
				{view === 'weekly' ?
					<Menu pagination>
						<Menu.Item icon='left chevron' onClick={() => app.router.history.navigate(`/rankings?week=${week - 1}`)}/>
						<Menu.Item disabled name={`Week: ${week}`}/>
						<Menu.Item icon='right chevron' onClick={() => app.router.history.navigate(`/rankings?week=${week + 1}`)}/>
					</Menu> : null}
				{view === 'season' ?
					<Menu tabular>
						<Menu.Item name='1' active={+season===1} onClick={() => app.router.history.navigate(`/rankings?season=1`)}/>
						<Menu.Item name='2' active={+season===2} onClick={() => app.router.history.navigate(`/rankings?season=2`)}/>
					</Menu> : null}

			<Table compact selectable>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Rank</Table.HeaderCell>
							<Table.HeaderCell>Owner</Table.HeaderCell>
							<Table.HeaderCell>Team</Table.HeaderCell>
							<Table.HeaderCell style={{textAlign: 'center', width: '1em'}}>Total Points</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{teams.sort((a,b) => -compare(a.points, b.points)).map((team, index) => {
							let rank = index + 1;
							if (team.points === lastPoints) {
								rank = lastRank;
							}

							lastRank = rank;
							lastPoints = team.points;

							return (
								<Table.Row key={index}>
									<Table.Cell>{rank}</Table.Cell>
									<Table.Cell>{team.owner}</Table.Cell>
									<Table.Cell><a href={`/teams/${team.id}?week=${week}`}>{team.name}</a></Table.Cell>
									<Table.Cell>{team.points}</Table.Cell>
								</Table.Row>
							);
						})}
					</Table.Body>
					<Table.Footer fullWidth>
						<Table.Row>
							<Table.HeaderCell/>
							<Table.HeaderCell>{teams.length} Teams</Table.HeaderCell>
						</Table.Row>
					</Table.Footer>
				</Table>
			</div>
		);
	}
});
