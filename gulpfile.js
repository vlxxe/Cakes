"use strict";

var gulp = require("gulp");
var wait = require("gulp-wait");
var sass = require("gulp-sass"); // Подключаем Sass пакет
var rename = require("gulp-rename");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var minify = require("gulp-csso"); // Минимизация CSS
var imagemin = require("gulp-imagemin"); // Сжатие изображений
var svgstore = require("gulp-svgstore"); // svg спрайт
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var run = require("run-sequence");
var del = require("del");
var concat = require("gulp-concat"); // Объединение файлов
var uglify = require("gulp-uglify"); // Минимизация js

gulp.task('js', function () { //Минификация js
  return gulp.src([
			'node_modules/jquery/dist/jquery.min.js',
			'node_modules/owl.carousel/dist/owl.carousel.min.js',
      'js/scripts.js'
    ])
    .pipe(gulp.dest('build/js'))
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
		.pipe(gulp.dest('build/js'))
});

gulp.task("style", function () { // sass в css
	return gulp.src([
		'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
		'node_modules/owl.carousel/dist/assets/owl.theme.default.min.css'
	])
	.pipe(gulp.dest('build/css')),
	gulp.src("sass/main.+(sass|scss)")
		.pipe(plumber())
		.pipe(wait(100))
		.pipe(sass({outputStyle: "expand"}).on("error", sass.logError))
		.pipe(postcss([
			autoprefixer({
				browsers: ["last 2 versions"]
			})
		]))
		.pipe(gulp.dest("build/css"))
		.pipe(minify())
		.pipe(rename("main.min.css"))
		.pipe(gulp.dest("build/css"))
		.pipe(server.stream());
});

gulp.task("serve", function () { // LiveServer build
	server.init({
		server: "build/",
		notify: false,
		open: true,
		cors: true,
		ui: false
	});

	gulp.watch("sass/**/*.scss", ["style"]).on("change", server.reload);
	gulp.watch(['js/scripts.js'], ["js"]).on("change", server.reload);
	gulp.watch("*.html", ["html"]).on("change", server.reload);
});

gulp.task("build", function (done) { // Создание билда
	run(
		"clean",
		"copy",
		"style",
    "js",
		"images",
		"sprite",
		"html",
		done
	);
});

gulp.task("sprite", function () { // Создание svg спрайта
	return gulp.src("img/**/icon-*.svg")
		.pipe(svgstore({
			inlineSvg: true
		}))
		.pipe(rename("sprite.svg"))
		.pipe(gulp.dest("build/img/"));
});

gulp.task("images", function () { // Сжатие изображений
	return gulp.src("build/img/**/*.{png,jpg,svg}")
		.pipe(imagemin([
			imagemin.optipng({
				optimizationLevel: 3
			}),
			imagemin.jpegtran({
				progressive: true
			})
		]))
		.pipe(gulp.dest("build/img"));
});

gulp.task("html", function () { // PostHtml
	return gulp.src("*.html")
		.pipe(posthtml([
			include()
		]))
		.pipe(gulp.dest("build"));
});

gulp.task("copy", function () { // Копирование в билд
	return gulp.src([
			"fonts/**/*",
			"img/**",
			"js/**",
			"*.html"
		], {
			base: "."
		})
		.pipe(gulp.dest("build"));
});

gulp.task("clean", function () { // Удаление билда
	return del("build");
});