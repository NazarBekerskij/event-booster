import { renderEventsPage } from "./events.js";

const searchInput = document.querySelector(".searching-input");
const countrySelect = document.querySelector(".country-select");


if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();

    renderEventsPage(0, query, undefined);
  });
}

if (countrySelect) {
  countrySelect.addEventListener("change", (e) => {
    const countryCode = e.target.value; ""
    
   
    renderEventsPage(0, undefined, countryCode);
  });
}