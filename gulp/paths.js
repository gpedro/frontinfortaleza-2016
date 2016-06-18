'use strict';
export var paths = {

	source: {
		js: './app/scripts/*.js',
		sass: 'app/styles/**/*.sass',
		jade: './app/**/*.jade',
		fonts: './app/fonts/**/*',
		img: './app/images/**/**/*.{jpg,png,gif}'
	},

	browserSync: {
		img: '.tmp/images/**/*',
		js: '.tmp/js/**/*.js',
		html: '.tmp/**/*.html',
		css: '.tmp/css/**/*.css'
	},

	server: {
		html: '.tmp/',
		js: '.tmp/scripts',
		img: '.tmp/images',
		styles: '.tmp/styles',
		fonts: '.tmp/fonts/',
		index: '.tmp/index.html'
	},

	build: {
		root: 'dist/**/*',
		html: 'dist/',
		js: 'dist/js',
		img: 'dist/images',
		css: 'dist/css/',
		fonts: 'dist/fonts/'
	}

};
