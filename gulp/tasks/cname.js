import fs from "fs";

export const cname = () => {
	if (!fs.existsSync(app.path.src.CNAME)) {
		return Promise.resolve();
	}

	return app.gulp.src(app.path.src.CNAME)
		.pipe(app.gulp.dest(app.path.build.CNAME));
};