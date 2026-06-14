import { getEvents } from "./api.js";
import "./modal.js";

const eventsList = document.querySelector(".events__list");
const paginationContainer = document.querySelector(".pagination");

const searchState = {
  keyword: "",
  country: ""
};

function createEventsMarkup(array) {
  return array.map((event) => {
    const eventInfo = event.info || event.description || "No description available.";
    
    const venueName = event._embedded?.venues?.[0]?.name ?? "Unknown";
    const cityName = event._embedded?.venues?.[0]?.city?.name ?? "Unknown";

    const authorLink = event._embedded?.attractions?.[0]?.url ?? "#";

    return `
      <li class="events__item" 
        data-name="${event.name}"
        data-date="${event.dates.start.localDate}"
        data-venue="${venueName}"
        data-city="${cityName}"
        data-image="${event.images[0].url}"
        data-info="${eventInfo}"
        data-url="${event.url}"
        data-author-url="${authorLink}" 
      >
        <article class="event-card">
          <img class="event-card__image" src="${event.images[0].url}" alt="${event.name}" />
          <h2 class="event-card__title">${event.name}</h2>
          <p class="event-card__date">${event.dates.start.localDate}</p>
          <p class="event-card__place">${venueName}</p>
        </article>
      </li>
    `;
  }).join("");
}

function renderPagination(totalPages, currentPage) {
  paginationContainer.innerHTML = ''; 

  const maxPages = Math.min(totalPages, 30); 
  if (maxPages <= 1) return; 

  let startPage = currentPage - 2;
  if (startPage < 0) startPage = 0;

  let endPage = startPage + 4;
  if (endPage >= maxPages) {
    endPage = maxPages - 1;
    startPage = Math.max(0, endPage - 4);
  }

  for (let i = startPage; i <= endPage; i++) {
    const button = document.createElement('button');
    button.type = "button";
    button.textContent = i + 1; 

    if (i === currentPage) {
      button.classList.add('active');
    }

    button.addEventListener('click', () => {
      renderEventsPage(i);
    });

    paginationContainer.appendChild(button);
  }
}

export function renderEventsPage(page, keyword, countryCode) {
  if (page === undefined) page = 0;
  if (keyword === undefined) keyword = searchState.keyword;
  if (countryCode === undefined) countryCode = searchState.country;

  searchState.keyword = keyword;
  searchState.country = countryCode;

  eventsList.classList.add("is-swapping");

  getEvents(page, searchState.keyword, searchState.country)
    .then(data => {
      setTimeout(() => {
        if (!data._embedded || !data._embedded.events) {
          eventsList.innerHTML = "<p class='events__not-found'>Nothing found! Try another search.</p>";
          paginationContainer.innerHTML = '';
          eventsList.classList.remove("is-swapping");
          return;
        }

        const events = data._embedded.events;
        eventsList.innerHTML = createEventsMarkup(events);

        const totalPages = data.page.totalPages || 0;
        renderPagination(totalPages, page);

        eventsList.classList.remove("is-swapping");
      }, 150);
    })
    .catch(error => {
      console.error("Помилка завантаження даних:", error);
      eventsList.classList.remove("is-swapping");
    });
}

renderEventsPage();


getEvents().then(res => console.log(res))