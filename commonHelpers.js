(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a="https://app.ticketmaster.com/discovery/v2/events.json",l="EVDOv2DA0yM2nfxqUJW4oSne0yWf70dD";async function i(s=0){return await(await fetch(`${a}?apikey=${l}&size=20&countryCode=US&page=${s}`)).json()}const u=document.querySelector(".events__list");i().then(s=>console.log(s));function d(s){return s.map(({name:r,images:o,dates:n,_embedded:e})=>`
      <li class="events__item">
        <article class="event-card">
          <img class="event-card__image" src="${o[0].url}" alt="${r}" />

          <h2 class="event-card__title">${r}</h2>

          <p class="event-card__date">${n.start.localDate}</p>

          <p class="event-card__place">${e.venues[0].name}</p>
        </article>
      </li>
    `).join("")}i().then(s=>{const r=s._embedded.events;u.innerHTML=d(r)});
//# sourceMappingURL=commonHelpers.js.map
