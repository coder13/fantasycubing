const LIMIT = 50;
const YEAR = 2017;

const Queries = {
	weeklyPoints: `
		SELECT personId, personName, personCountryId, TRUNCATE(avg(totalPoints), 2) points
		FROM Points
		WHERE week = :week AND year=${YEAR}
		GROUP BY personId, personName, personCountryId
		ORDER BY points DESC
		LIMIT :limit;
	`,
	pointsByEvent: `
		SELECT personId, personName, personCountryId, eventId, TRUNCATE(avg(totalPoints), 2) points
		FROM Points
		WHERE week = :week AND year=${YEAR}
		GROUP BY personId, personName, personCountryId, eventId
		ORDER BY points DESC
		LIMIT :limit;
	`,
	rankings: (limit) => `
		SELECT u.name owner, t.name, t.id, t.points
		FROM Teams t
		JOIN Users u ON t.owner = u.id
		ORDER BY t.points DESC, t.name, u.name
		${limit ? 'LIMIT :limit' : ''};
	`,
	weeklyRankings: (week, limit) => `
		SELECT u.name owner, t.name, t.id, a.points
		FROM Archive a
		JOIN Teams t ON a.teamId = t.id
		JOIN Users u ON t.owner = u.id
		WHERE a.week = :week
		ORDER BY a.points DESC, t.name, u.name
		${limit ? 'LIMIT :limit' : ''};		
	`,
	weeklyCompProgress: () => `
		SELECT (SELECT COUNT(DISTINCT competitionId) FROM Points WHERE year=2017 AND week=:week) completed,
		(SELECT count(id) FROM (
			SELECT id,
			@date := DATE(CONCAT(year, '-', month, '-', day)) date,
			@weekend := DATE_SUB(@date, INTERVAL (DAYOFWEEK(@date) + 2) % 7 DAY) weekend,
			@week:= week(@weekend) week, year
			FROM Competitions WHERE id NOT IN (SELECT DISTINCT competitionId FROM Points)) comps
		WHERE year=2017 AND week=:week) pending;
	`,
	recordsByEvent: (date) => `
		SELECT (SELECT min(average) FROM ResultDates WHERE eventId=:event AND average > 0 AND regionalAverageRecord = 'WR'${date ? ' AND date < :date' : ''}) average,
					 (SELECT min(best) FROM ResultDates WHERE eventId=:event AND best > 0 AND regionalSingleRecord = 'WR' ${date ? ' AND date < :date' : ''}) single
	`,
	records: (date) => `
		SELECT id eventId,
					 (SELECT min(average) FROM ResultDates WHERE eventId=id AND average > 0 AND regionalAverageRecord = 'WR'${date ? ' AND date < :date' : ''}) average,
					 (SELECT min(best) FROM ResultDates WHERE eventId=id AND best > 0 AND regionalSingleRecord = 'WR'${date ? ' AND date < :date' : ''}) single				
		FROM (SELECT id FROM Events WHERE rank < 500) events;
	`
};

module.exports = function (sequelize) {
	let queries = {};

	queries.weeklyPoints = (week, limit) => sequelize.query(Queries.weeklyPoints, {
		replacements: {
			week,
			limit: limit || LIMIT
		},
		type: sequelize.QueryTypes.SELECT
	});

	queries.weeklyPointsByEvent = (week, limit) => sequelize.query(Queries.pointsByEvent, {
		replacements: {
			week,
			limit: limit || LIMIT
		},
		type: sequelize.QueryTypes.SELECT
	});

	queries.weeklyRankings = (week, limit) => sequelize.query(Queries.weeklyRankings(week, limit), {
		replacements: {
			limit: limit || LIMIT,
			week
		},
		type: sequelize.QueryTypes.SELECT
	});

	queries.rankings = (limit) => sequelize.query(Queries.rankings(limit), {
		replacements: {
			limit: limit || LIMIT
		},
		type: sequelize.QueryTypes.SELECT
	});

	queries.weeklyCompProgress = (week) => sequelize.query(Queries.weeklyCompProgress(), {
		replacements: {week},
		type: sequelize.QueryTypes.SELECT
	});

	queries.recordsByEvent = (event,date) => sequelize.query(Queries.recordsByEvent(date), {
		replacements: {date, event},
		type: sequelize.QueryTypes.SELECT
	});

	queries.records = (date) => sequelize.query(Queries.records(date), {
		replacements: {date},
		type: sequelize.QueryTypes.SELECT
	});

	return queries;
};
