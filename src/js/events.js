import { getEvents } from "./api.js";

const eventsList = document.querySelector(".events__list");



getEvents().then(res => console.log(res))

function createEventsMarkup(array) {
  return array.map(({ name, images, dates, _embedded }) => {
    return `
      <li class="events__item">
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