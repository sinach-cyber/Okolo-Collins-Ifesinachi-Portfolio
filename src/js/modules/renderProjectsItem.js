export function renderProjectsItem({ title, demo }, index, isHidden) {

	return `
		<article
			class="
				projects__item
				${isHidden ? "projects__item_hidden" : ""}
			"
			data-project-index="${index}"
		>
			<div class="projects__item-title">
				<svg><use href="#icon-eye" /></svg>
				<h3>${title}</h3>
			</div>

			<a
				href="${demo}"
				target="_blank"
				rel="noreferrer"
				class="projects__item-link"
			>
				View Project
			</a>
		</article>
	`;
}