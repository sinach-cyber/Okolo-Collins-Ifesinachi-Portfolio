import fileInclude from "gulp-file-include";
import { Transform } from "stream";
import { minify } from "html-minifier-terser";
import { renderProjectsItem } from "../../src/js/modules/renderProjectsItem.js";
import { store } from "../store.js";

function renderSkillsItem({ icon, label }) {
	return `
        <li>
            ${icon ? `<svg><use href="#icon-${icon}" /></svg>` : ""}
            ${label}
        </li>
    `;
}

function renderReviewItem({ name, rating, text, date }) {
	return `
        <article class="reviews__slide swiper-slide">

            <header>
                <svg>
                    <use href="#icon-avatar" />
                </svg>

                <p class="reviews__slide-author">
                    ${name}
                </p>

                <div class="reviews__slide-rating">
                    <p>${rating}/10</p>

                    <svg>
                        <use href="#icon-star" />
                    </svg>
                </div>
            </header>

            <p>
                ${text}
            </p>

            <footer>
                <time datetime="${date.split(".").toReversed().join("-")}">
                    ${date}
                </time>
            </footer>

        </article>
    `;
}

function renderContactLink({ title, icon, url }) {
	return `
        <a
            class="contact__link"
            href="${url}"
            ${!url.startsWith("mailto") ? "target='_blank'" : ""}
            title="${title}"
            data-umami-event="contact-link-click"
            data-umami-event-title="${title}"
        >
            <svg><use href="#icon-${icon}" /></svg>
        </a>
    `;
}

export const html = () => {

	const { projects, skills, reviews, contactLinks } = store;

	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber())
		.pipe(fileInclude({
			context: {
				projectCount: projects.length,

				reviewSlideCount: reviews.length,

				reviewItems:
					reviews
						.map(renderReviewItem)
						.join(""),

				projectItems:
					projects
						.slice(0, 6)
						.map((p, i) => renderProjectsItem(p, i, false))
						.join(""),

				skillItems: [
					{ icon: "html", label: "HTML" },
					{ icon: "css", label: "CSS" },
					{ icon: "js", label: "JavaScript" },
					{ icon: "react", label: "React" },
					{ icon: "", label: "TypeScript" },
					{ icon: "", label: "Next.js" },
					{ icon: "", label: "Python" },
					{ icon: "", label: "Pandas" },
					{ icon: "", label: "NumPy" },
					{ icon: "", label: "Matplotlib" },
					{ icon: "", label: "Scikit-learn" },
					{ icon: "git", label: "Git & GitHub" },
				]
					.map(renderSkillsItem)
					.join(""),

				firstReviewSlide: "",

				contactLinks: contactLinks
					.map(renderContactLink)
					.join(""),

				currentYear: new Date().getFullYear(),
			}
		}))
		.pipe(
			app.plugins.if(app.isBuild, new Transform({
				objectMode: true,

				transform: async (file, _, cb) => {
					if (file.isNull()) return cb(null, file);

					try {
						const minified = await minify(
							file.contents.toString(),
							{
								collapseWhitespace: true,
								removeComments: true,
							}
						);

						file.contents = Buffer.from(minified);
						cb(null, file);

					} catch (err) {
						cb(err);
					}
				}
			}))
		)
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream());
};