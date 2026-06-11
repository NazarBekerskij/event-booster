import { getEvents } from "./api.js";
import "./modal.js";

const eventsList = document.querySelector(".events__list");
const paginationContainer = document.querySelector(".pagination");

const searchState = {
  keyword: "",
  country: ""
};

function createEventsMarkup(array) {
  return array.map(({ id, name, images, dates, _embedded, info, description }) => {
    const eventInfo = info || description || "No description available.";

    return `
      <li class="events__item" 
        data-name="${name}"
        data-date="${dates.start.localDate}"
        data-venue="${_embedded?.venues?.[0]?.name || 'Unknown'}"
        data-city="${_embedded?.venues?.[0]?.city?.name || 'Unknown'}"
        data-image="${images[0].url}"
        data-info="${eventInfo}"
      >
        <article class="event-card">
          <img class="event-card__image" src="${images[0].url}" alt="${name}" />
          <h2 class="event-card__title">${name}</h2>
          <p class="event-card__date">${dates.start.localDate}</p>
          <p class="event-card__place">${_embedded?.venues?.[0]?.name || 'Unknown'}</p>
        </article>
      </li>
    `;
  }).join("");
}


function renderPagination(totalPages, currentPage) {
  paginationContainer.innerHTML = ''; 

  
  const maxPages = Math.min(totalPages, 30); 

  if (maxPages <= 1) return; 

  const pages = [];


  if (currentPage < 3) {
    const end = Math.min(maxPages - 1, 4);
    for (let i = 0; i <= end; i++) {
      pages.push(i);
    }
   
    if (maxPages > 5) {
      pages.push('...');
      pages.push(maxPages - 1);
    }
  } 

  else if (currentPage >= maxPages - 3) {
    pages.push(0);
    pages.push('...');
    for (let i = maxPages - 5; i < maxPages; i++) {
      if (i > 0) pages.push(i);
    }
  } 
  
  else {
    pages.push(0);
    pages.push('...');
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      pages.push(i);
    }
    pages.push('...');
    pages.push(maxPages - 1);
  }


  pages.forEach(page => {
    if (page === '...') {
      const span = document.createElement('span');
      span.className = 'dots';
      span.textContent = '...';
      paginationContainer.appendChild(span);
    } else {
      const button = document.createElement('button');
      button.type = "button";
      button.textContent = page + 1; 

      if (page === currentPage) {
        button.classList.add('active');
      }

      button.addEventListener('click', () => {
        renderEventsPage(page);
      });

      paginationContainer.appendChild(button);
    }
  });
}

export function renderEventsPage(page = 0, keyword = searchState.keyword, countryCode = searchState.country) {
  searchState.keyword = keyword;
  searchState.country = countryCode;

  getEvents(page, searchState.keyword, searchState.country).then(data => {
    if (!data._embedded || !data._embedded.events) {
      eventsList.innerHTML = "<p class='events__not-found'>Nothing found! Try another search.</p>";
      paginationContainer.innerHTML = '';
      return;
    }

    const events = data._embedded.events;
    eventsList.innerHTML = createEventsMarkup(events);

    const totalPages = data.page?.totalPages || 0;
    renderPagination(totalPages, page);
  }).catch(error => {
    console.error("Помилка завантаження даних:", error);
  });
}

renderEventsPage();