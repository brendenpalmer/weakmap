/**
 * Gulp task for tests
 *
 * @author brendenpalmer
 * @license MIT
 */

'use strict';

import gulp from 'gulp';
import tslint from 'gulp-tslint';
import config from '../config.json';

gulp.task('lint:scripts', () => {
  return gulp.src("source.ts")
    .pipe(tslint())
    .pipe(tslint.report("verbose"));
});
