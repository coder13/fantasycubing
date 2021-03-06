module.exports.Events = ['333', '444', '555', '222', '333bf', '333oh', '333fm', '333ft', 'minx', 'pyram', 'sq1', 'clock', 'skewb', '666', '777', '444bf', '555bf', '333mbf'];

module.exports.EventNames = {
	'333': '3x3',
	'444': '4x4',
	'555': '5x5',
	'222': '2x2',
	'333bf': '3BLD',
	'333oh': 'OH',
	'333fm': 'FMC',
	'333ft': 'Feet',
	'minx': 'Megaminx',
	'pyram': 'Pyraminx',
	'sq1': 'SQ-1',
	'clock': 'Clock',
	'skewb': 'Skewb',
	'666': '6x6',
	'777': '7x7',
	'444bf': '4BLD',
	'555bf': '5BLD',
	'333mbf': 'MBLD'
};

module.exports.Formats = {
	'1': {
		times: 1
	},
	'2': {
		times: 2
	},
	'3': {
		times: 3
	},
	'm': {
		times: 3
	},
	'a': {
		times: 5
	}
};

module.exports.Rounds = {
	0: {
		name: 'Qualification',
		final: false
	},
	1: {
		name: 'First Round',
		final: false
	},
	2: {
		name: 'Second Round',
		final: false
	},
	3: {
		name: 'Semi Final',
		final: false
	},
	b: {
		name: 'B Final',
		final: false
	},
	c: {
		name: 'Combined Final',
		final: true
	},
	d: {
		name: 'Combined First',
		final: false
	},
	e: {
		name: 'Combined Second',
		final: false
	},
	f: {
		name: 'Final',
		final: true
	},
	g: {
		name: 'Combined Third',
		final: false
	},
	h: {
		name: 'Combined Qualification',
		final: false
	}
};

module.exports.League = [
	{eventId: '333', slots: 3},
	{eventId: '444', slots: 2},
	{eventId: '555', slots: 2},
	{eventId: '222', slots: 2},
	{eventId: '333bf', slots: 2},
	{eventId: '333oh', slots: 2},
	{eventId: '333fm', slots: 1},
	{eventId: '333ft', slots: 1},
	{eventId: 'minx', slots: 1},
	{eventId: 'pyram', slots: 1},
	{eventId: 'sq1', slots: 1},
	{eventId: 'clock', slots: 1},
	{eventId: 'skewb', slots: 1},
	{eventId: '666', slots: 1},
	{eventId: '777', slots: 1},
	{eventId: '444bf', slots: 1},
	{eventId: '555bf', slots: 1},
	{eventId: '333mbf', slots: 1}
];
