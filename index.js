var path = require( 'path' );

module.exports = function() {
	return {
		loadShipitTask: function( task ) {
			var taskPath = path.join( __dirname, 'config/shipit/' + task );
			return require( taskPath );
		},
		paths: {
			assets:  'assets',
			config:  'config',
			css:     'src/assets/css',
			dist:    'dist',
			grunt:   'config/grunt',
			js:      'src/assets/js',
			less:    'assets/less',
			logs:    'logs',
			reports: 'reports',
			source:  'src',
			tmp:     'tmp',
			wpcom:   'wpcom',
			global: {
				config: path.join( __dirname, 'config' ),
				grunt:  path.join( __dirname, 'config/grunt' ),
				shipit: path.join( __dirname, 'config/shipit' )
			}
		},
		taskMap: {
			addtextdomain: 'grunt-wp-i18n',
			makepot:       'grunt-wp-i18n',
			replace:       'grunt-text-replace',
			wpcss:         'grunt-wp-css'
		},
		themes: [
			'amplify',
			'creative',
			'dailymag',
			'gallery',
			'largo',
			'odessa',
			'worldview',
			'yumblog'
		]
	};
};
