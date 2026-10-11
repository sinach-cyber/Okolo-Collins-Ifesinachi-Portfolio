export function renderReviewSlide({ name, rating, text, date, link }) {

    rating = +rating;

    const ratingColor =
        rating < 5 ? "#fa1111" :
            rating < 7 ? "#fab43c" :
                "#2CB67D";

    let hostname = "";
    let siteName = "";
    let reviewLink = link;

    if (link && link.trim() !== "") {
        try {
            const url = new URL(link);

            hostname = url.hostname;
            siteName =
                hostname[0].toUpperCase() +
                hostname.split(".")[0].slice(1);

            if (hostname === "freelancehunt.com") {
                reviewLink += "#freelancer-review";
            }

        } catch (error) {
            console.error("Invalid review link:", link);
        }
    }

    return `
        <article class="reviews__slide swiper-slide">

            <header>

                <svg>
                    <use href="#icon-avatar" />
                </svg>

                <p class="reviews__slide-author">
                    ${name}
                </p>

                <div
                    class="reviews__slide-rating"
                    style="color: ${ratingColor};"
                >
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

                ${reviewLink
            ? `
                            <a
                                href="${reviewLink}"
                                target="_blank"
                                rel="nofollow"
                                title="View on ${siteName}"
                                data-umami-event="review-source-link-click"
                                data-umami-event-url="${reviewLink}"
                            >
                                ${hostname}
                            </a>
                        `
            : ""
        }

            </footer>

        </article>
    `;
}