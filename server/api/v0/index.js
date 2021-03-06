const moment = require('moment');

const base = '/api/v0';

module.exports.register = function(server, options, next) {
	server.log('info', 'Setting up api...');
	require('./leagues')(server, base);
	require('./teams')(server, base);
	require('./search')(server, base);
	require('./stats')(server, base);

	server.route({
		method: 'GET',
		path: '/api/v0/times',
		config: {
			handler: function (request, reply) {
				reply({
					week: server.methods.getWeek(),
					weekend: server.methods.getWeekend().unix()
				});
			}
		}
	});
	// server.route(require('./users'));

	next();
};

module.exports.register.attributes = {
	pkg: {
		name: 'api',
		version: '0'
	}
};
