import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const eventsList = document.querySelector(".events__list");

eventsList.addEventListener("click", (e) => {
  const item = e.target.closest(".events__item");
  if (!item) return;

  const { 
    name = "Event", 
    date = "Date not available", 
    venue = "Unknown Venue", 
    city = "Unknown City", 
    image = "", 
    info = "No description available.", 
    url = "#", 
    authorUrl = "#" 
  } = item.dataset;

  const eventLink = url || "#";
  const authorFinalLink = authorUrl || "#";

  const instance = basicLightbox.create(`
    <div class="modal">
      <button class="modal__close-btn" type="button">×</button>
      
      <div class="modal__avatar-wrap">
        <img class="modal__avatar-img" src="${image}" alt="${name}" />
      </div>

      <div class="modal__container">
        
        <div class="modal__poster-wrap">
          <img class="modal__poster" src="${image}" alt="${name}" />
        </div>

        <div class="modal__content">
          
          <div class="modal__group modal__group--info">
            <span class="modal__label">INFO</span>
            <p class="modal__text modal__text--description">${info}</p>
          </div>

          <h2 class="modal__title">${name}</h2>
          
          <div class="modal__group">
            <span class="modal__label">WHEN</span>
            <p class="modal__text">${date}</p>
            <p class="modal__subtext">20:00 (Kyiv/Ukraine)</p>
          </div>

          <div class="modal__group">
            <span class="modal__label">WHERE</span>
            <p class="modal__text">${city}, ${venue}</p>
          </div>

          <div class="modal__group">
            <span class="modal__label">WHO</span>
            <p class="modal__text">${name}</p>
          </div>

          <div class="modal__group">
            <span class="modal__label">PRICES</span>
            <div class="modal__price-row">
              <p class="modal__text"><span class="modal__barcode">║▌║█║▌│║</span> Standart 300-500 UAH</p>
              <a class="modal__btn" href="${eventLink}" target="_blank" rel="noopener noreferrer">BUY TICKETS</a>
            </div>
            <div class="modal__price-row">
              <p class="modal__text"><span class="modal__barcode">║▌║█║▌│║</span> VIP 1000-1500 UAH</p>
              <a class="modal__btn" href="${eventLink}" target="_blank" rel="noopener noreferrer">BUY TICKETS</a>
            </div>
          </div>
        </div>
      </div>

      <div class="modal__author-wrap">
        <a class="modal__author-btn" href="${authorFinalLink}" target="_blank" rel="noopener noreferrer">MORE FROM THIS AUTHOR</a>
      </div>

    </div>
  `);

  instance.show();

  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onEscKeyPress); 
    }
  }
  window.addEventListener('keydown', onEscKeyPress);

  const closeBtn = instance.element().querySelector('.modal__close-btn');
  closeBtn.addEventListener('click', () => {
    instance.close();
    window.removeEventListener('keydown', onEscKeyPress);
  });
});