import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { track } from "../analytics/umami.js";
import { dqs } from "./utils.js";

const reviewsSwiper = new Swiper(".reviews__swiper", {

	modules: [Navigation, Pagination],

	slidesPerView: 1,

	spaceBetween: 50,

	autoHeight: true,

	grabCursor: true,

	allowTouchMove: true,

	simulateTouch: true,

	touchRatio: 1,

	speed: 450,

	navigation: {
		nextEl: ".reviews .swiper-nav_right",
		prevEl: ".reviews .swiper-nav_left",
	},

	pagination: {
		el: ".reviews__swiper-pagination",
		type: "fraction",
	},

	observer: true,

	observeParents: true,

	observeSlideChildren: true,

	on: {

		init: swiper => {
			console.log(
				"Reviews Swiper initialized:",
				swiper.slides.length,
				"slides"
			);
		},

		slideChange: swiper => {

			const activeSlideEl =
				dqs(".reviews__slide.swiper-slide-active");

			if (!activeSlideEl) return;

			const name =
				activeSlideEl.querySelector(
					".reviews__slide-author"
				);

			track("reviews-swiper-slide-change", {
				review: name ? name.textContent.trim() : "",
				"to-index": swiper.activeIndex + 1,
				direction:
					swiper.previousIndex < swiper.activeIndex
						? "next"
						: "prev",
			});
		},
	},
});

export default reviewsSwiper;