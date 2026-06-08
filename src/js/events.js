import { getEvents } from "./api.js";
import "./modal.js";

const eventsList = document.querySelector(".events__list");

const searchState = {
  keyword: "",
  country: ""
}


function createEventsMarkup(array) {
  return array.map(({ id, name, images, dates, _embedded, info, description }) => {
    const eventInfo = info || description || "No description available.";

    return `
      <li class="events__item" 
        data-name="${name}"
        data-date="${dates.start.localDate}"
        data-venue="${_embedded.venues[0].name}"
        data-city="${_embedded.venues[0].city.name}"
        data-image="${images[0].url}"
        data-info="${eventInfo}"
      >
        <article class="event-card">
          <img class="event-card__image" src="${images[0].url}" alt="${name}" />
          <h2 class="event-card__title">${name}</h2>
          <p class="event-card__date">${dates.start.localDate}</p>
          <p class="event-card__place">${_embedded.venues[0].name}</p>
        </article>
      </li>
    `;
  }).join("");
}

getEvents().then(data => {
  const events = data._embedded.events;
  eventsList.innerHTML = createEventsMarkup(events);
});



export function renderEventsPage(page = 0, keyword = searchState.keyword, countryCode = searchState.country) {
  searchState.keyword = keyword;
  searchState.country = countryCode;

  getEvents(page, searchState.keyword, searchState.country).then(data => {
    if (!data._embedded || !data._embedded.events) {
      eventsList.innerHTML = "<p class='events__not-found'>Nothing found! Try another search.</p>";
      return;
    }

    const events = data._embedded.events;
    eventsList.innerHTML = createEventsMarkup(events);
  });
}

renderEventsPage();


