import { getEvents } from "./api.js";
import "./modal.js";


const eventsList = document.querySelector(".events__list");

getEvents().then(res => console.log(res));

function createEventsMarkup(array) {
  return array.map(({ id, name, images, dates, _embedded, priceRanges }) => {
    return `
      <li class="events__item" 
        data-id="${id}"
        data-name="${name}"
        data-date="${dates.start.localDate}"
        data-venue="${_embedded.venues[0].name}"
        data-city="${_embedded.venues[0].city.name}"
        data-image="${images[0].url}"
        data-price="${priceRanges ? priceRanges[0].min + '-' + priceRanges[0].max + ' ' + priceRanges[0].currency : 'N/A'}"
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