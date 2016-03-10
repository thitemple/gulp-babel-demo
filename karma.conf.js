module.exports = function(config) {
  config.set({
  	basePath: '',
    browsers: ['Chrome'],
    frameworks: ['browserify', 'jasmine'],
    files: [
      'src/**/*.js',
      'test/**/*.spec.js'
    ],
	preprocessors: {
        'src/**/*.js': ['browserify'],
        'test/**/*.spec.js': ['browserify']
    },
    browserify: {
        debug: true,
        transform: [ 'babelify',
        {
          "presets": ["es2015"]        	
        } ]
    },
    //logLevel: config.LOG_DEBUG,    
  });
};