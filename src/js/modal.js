import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const eventsList = document.querySelector(".events__list");

eventsList.addEventListener("click", (e) => {
  const item = e.target.closest(".events__item");
  if (!item) return;


  
  const { name, date, venue, city, image, price } = item.dataset;

  const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${image}" alt="${name}" />
      <h2>${name}</h2>
      <p><b>WHEN:</b> ${date}</p>
      <p><b>WHERE:</b> ${city}, ${venue}</p>
      <p><b>PRICES:</b> ${price}</p>
    </div>
  `);

  instance.show();
});