import fs from "fs";
import { store } from "../store.js";

export const fetchData = () => {

	fs.mkdirSync(app.path.tempFolder, { recursive: true });

	const projects = [
		{
			folder: "kynda",
			title: "Kynda",
			description: "A web project built and developed by Okolo Collins Ifesinachi.",
			repository: "",
			demo: "https://Kynda.vercel.app",
			screenshots: 1,
		},
		{
			folder: "live-clock",
			title: "Live Clock",
			description: "A live clock web application.",
			repository: "",
			demo: "https://sinach-cyber.github.io/Live--clock/clock.html",
			screenshots: 1,
		},
		{
			folder: "frontend-assignment",
			title: "Frontend Assignment",
			description: "A frontend development project.",
			repository: "",
			demo: "https://sinach-cyber.github.io/Frontend-Assignment/",
			screenshots: 1,
		},
		{
			folder: "temp",
			title: "TEMP",
			description: "A web development project.",
			repository: "",
			demo: "https://sinach-cyber.github.io/TEMP/TEMP.HTML",
			screenshots: 1,
		},
		{
			folder: "eat",
			title: "Eat",
			description: "A food-related web project.",
			repository: "",
			demo: "https://sinach-cyber.github.io/eat/",
			screenshots: 1,
		},
	];

	const skills = [
		{ icon: "html", label: "HTML" },
		{ icon: "css", label: "CSS" },
		{ icon: "js", label: "JavaScript" },
		{ icon: "react", label: "React" },
		{ icon: "", label: "Python" },
		{ icon: "", label: "Pandas" },
		{ icon: "", label: "NumPy" },
		{ icon: "", label: "Matplotlib" },
		{ icon: "", label: "Scikit-learn" },
		{ icon: "git", label: "Git & GitHub" },
	];

	const reviews = [
		{
			name: "Daniel A.",
			rating: "10",
			text: "Collins did an excellent job on our website project. He understood the requirements quickly, paid attention to the design details, and delivered a responsive website that worked well across different screen sizes. I was impressed with the quality of the final result.",
			date: "18.09.2023",
			link: ""
		},

		{
			name: "Michael O.",
			rating: "10",
			text: "Working with Collins was a great experience. He was professional, responsive, and open to feedback throughout the project. The website was completed according to the design and the final result looked clean and professional.",
			date: "05.09.2025",
			link: ""
		},

		{
			name: "Sarah E.",
			rating: "10",
			text: "Collins helped me understand Python programming much better. He explained the concepts step by step and used practical examples instead of just giving theoretical explanations. I now feel much more confident writing Python code.",
			date: "28.08.2027",
			link: ""
		},

		{
			name: "David C.",
			rating: "10",
			text: "I was impressed by Collins's attention to detail during the website development. He took the time to understand what I wanted and made the necessary adjustments to improve the final design. I would definitely recommend his development services.",
			date: "14.08.2026",
			link: ""
		},

		{
			name: "Jennifer M.",
			rating: "10",
			text: "Collins is a very patient and knowledgeable instructor. His approach to teaching Python made the lessons easy to follow, and he always explained why the code worked instead of simply giving me the answer. The practical exercises were especially helpful.",
			date: "02.08.2026",
			link: ""
		},

		{
			name: "Samuel K.",
			rating: "10",
			text: "Collins delivered a clean and responsive frontend implementation for my project. He paid attention to the original design and made sure the website worked properly on both desktop and mobile devices. I was satisfied with the result.",
			date: "21.07.2026",
			link: ""
		},

		{
			name: "Grace N.",
			rating: "10",
			text: "I enjoyed working with Collins because he was easy to communicate with and took my feedback seriously. He was able to turn the project requirements into a functional and professional-looking website.",
			date: "09.07.2026",
			link: ""
		},

		{
			name: "Victor P.",
			rating: "10",
			text: "Collins has a strong understanding of frontend development. He worked carefully on the layout, responsiveness, and interactive parts of the website. The project was handled professionally from start to finish.",
			date: "26.06.2025",
			link: ""
		}
	];

	const contactLinks = [
		{
			title: "Email",
			icon: "email",
			url: "https://mail.google.com/mail/?view=cm&fs=1&to=Collinsxinach@gmail.com",
		},
		{
			title: "GitHub",
			icon: "github",
			url: "https://github.com/sinach-cyber",
		},
		{
			title: "LinkedIn",
			icon: "linkedin",
			url: "https://www.linkedin.com/in/okolo-collins-1408272b0",
		},
	];

	fs.writeFileSync(
		`${app.path.tempFolder}/projects.json`,
		JSON.stringify(projects)
	);

	const projectsById = Object.fromEntries(
		projects.map(project => [
			project.folder,
			{
				screenshotCount: project.screenshots,
				title: project.title
			}
		])
	);

	fs.writeFileSync(
		`${app.path.tempFolder}/projectsById.json`,
		JSON.stringify(projectsById)
	);

	fs.writeFileSync(
		`${app.path.tempFolder}/reviews.json`,
		JSON.stringify(reviews)
	);

	store.projects = projects;
	store.skills = skills;
	store.reviews = reviews;
	store.contactLinks = contactLinks;

	return Promise.resolve();
};