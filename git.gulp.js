/**
* Loads the app.git data structure for Gulp processing
*/
const debug = require('debug')('doop:git');
debug('Init gulp git');

const git = require('./libs/git');
const gulp = require('gulp');

gulp.task.once('load:app.git', 'load:app', ()=>
	git.current()
		.then(res => {
			app.git = git;
			app.git.current = res; // Work out current hash for ease of reference and glue it into app.git.current
		})
);

gulp.task('app.git', gulp.series('load:app.git'), ()=> console.dump(app.git.current));

gulp.task('app.git.history', 'load:app.git', ()=>
	app.git.history()
		.then(v => console.dump(v))
);
