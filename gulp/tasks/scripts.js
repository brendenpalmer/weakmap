/**
 * Gulp task for scripts
 *
 * @author brendenpalmer
 * @license MIT
 */

'use strict';

import gulp from 'gulp';
import iife from 'gulp-iife';
import ts from 'gulp-typescript';
import sequence from 'gulp-sequence';
import del from 'del';
import config from '../config.json';

let tsProject = ts.createProject(config.ts.config);

gulp.task('scripts:clear', (done) => {
  del([config.tmp, config.dist]).then(() => {
    done();
  });
});

gulp.task('scripts:build', () => {
  var tsResult = tsProject.src()
    .pipe(ts(tsProject));

  return tsResult.js.pipe(gulp.dest(config.tmp));
});

gulp.task('scripts:concat', () => {
  return gulp.src(config.tmp + '/weakmap.min.js')
    .pipe(iife())
    .pipe(gulp.dest(config.dist));
});

gulp.task('scripts', sequence('scripts:clear', 'scripts:build', 'scripts:concat'));
