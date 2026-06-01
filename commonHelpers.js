import{b as l}from"./assets/vendor-1795e137.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const u="https://app.ticketmaster.com/discovery/v2/events.json",d="EVDOv2DA0yM2nfxqUJW4oSne0yWf70dD";async function o(n=0){return await(await fetch(`${u}?apikey=${d}&size=20&countryCode=US&page=${n}`)).json()}const p=document.querySelector(".events__list");p.addEventListener("click",n=>{const s=n.target.closest(".events__item");if(!s)return;const{name:c,date:a,venue:e,city:t,image:r,price:i}=s.dataset;l.create(`
    <div class="modal">
      <img src="${r}" alt="${c}" />
      <h2>${c}</h2>
      <p><b>WHEN:</b> ${a}</p>
      <p><b>WHERE:</b> ${t}, ${e}</p>
      <p><b>PRICES:</b> ${i}</p>
    </div>
  `).show()});const m=document.querySelector(".events__list");o().then(n=>console.log(n));function f(n){return n.map(({id:s,name:c,images:a,dates:e,_embedded:t,priceRanges:r})=>`
      <li class="events__item" 
        data-id="${s}"
        data-name="${c}"
        data-date="${e.start.localDate}"
        data-venue="${t.venues[0].name}"
        data-city="${t.venues[0].city.name}"
        data-image="${a[0].url}"
        data-price="${r?r[0].min+"-"+r[0].max+" "+r[0].currency:"N/A"}"
      >
        <article class="event-card">
          <img class="event-card__image" src="${a[0].url}" alt="${c}" />
          <h2 class="event-card__title">${c}</h2>
          <p class="event-card__date">${e.start.localDate}</p>
          <p class="event-card__place">${t.venues[0].name}</p>
        </article>
      </li>
    `).join("")}o().then(n=>{const s=n._embedded.events;m.innerHTML=f(s)});
//# sourceMappingURL=commonHelpers.js.map
