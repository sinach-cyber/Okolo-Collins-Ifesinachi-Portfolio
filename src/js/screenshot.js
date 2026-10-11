import projectsById from "../../temp/projectsById.json";
import { getQueryParam } from "./modules/queryParams.js";

const projectId = getQueryParam("project");
const screenshotIndex = +getQueryParam("index");

const project = projectsById[projectId];

if (
	!screenshotIndex ||
	!project ||
	project.screenshotCount < screenshotIndex ||
	screenshotIndex < 0
) {
	window.location.replace("/");
} else {
	document.title =
		`${project.title} | Screenshot ${screenshotIndex} | Okolo Collins Ifesinachi`;

	const imageUrl =
		`/img/project-images/${projectId}/screenshot.jpg`;

	document.body.innerHTML = `
        <picture>
            <img
                src="${imageUrl}"
                alt="${project.title} screenshot ${screenshotIndex}"
            >
        </picture>
    `;
}