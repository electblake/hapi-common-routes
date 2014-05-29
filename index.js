var Hoek = require('hoek'),
	eye = require('eyes').inspector(),
	_ = require('underscore');

var internals = {
    defaults: {
        assets: {
        	style: 'www/style',
        	script: 'www/script',
        	images: 'www/images'
        }
    }
};

exports.register = module.exports.register = function (plugin, options, next) {

	var settings = _.extend(internals.defaults, options);

	/**
	 * Common Asset Routes
	 */
	if (!_.isUndefined(settings['assets'])) {
		_.each(require('./route.assets.js')(settings['assets']), function(route, index) {
			plugin.route(route);
		});
	}

	next();

}