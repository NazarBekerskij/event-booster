import{b as p}from"./assets/vendor-1795e137.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const u="https://app.ticketmaster.com/discovery/v2/events.json",v="EVDOv2DA0yM2nfxqUJW4oSne0yWf70dD";async function f(n=0){return await(await fetch(`${u}?apikey=${v}&size=20&countryCode=US&page=${n}`)).json()}const $=document.querySelector(".events__list");$.addEventListener("click",n=>{const s=n.target.closest(".events__item");if(!s)return;const{name:o,date:l,venue:t,city:e,image:a,standard:c,vip:r,info:_}=s.dataset;let i=r;(!r||r==="N/A")&&(i=c&&c!=="N/A"?c.replace(/\d+/g,m=>parseInt(m)*2):"N/A");const d=p.create(`
    <div class="modal">
      <button class="modal__close-btn" type="button">×</button>
      
      <div class="modal__avatar-wrap">
        <img class="modal__avatar-img" src="${a}" alt="${o}" />
      </div>

      <div class="modal__container">
        
        <div class="modal__poster-wrap">
          <img class="modal__poster" src="${a}" alt="${o}" />
        </div>

        <div class="modal__content">
          
          <div class="modal__group modal__group--info">
            <span class="modal__label">INFO</span>
            <p class="modal__text modal__text--description">${_}</p>
          </div>

          <h2 class="modal__title">${o}</h2>
          
          <div class="modal__group">
            <span class="modal__label">WHEN</span>
            <p class="modal__text">${l}</p>
            <p class="modal__subtext">20:00 (Kyiv/Ukraine)</p>
          </div>

          <div class="modal__group">
            <span class="modal__label">WHERE</span>
            <p class="modal__text">${e}, ${t}</p>
          </div>

          <div class="modal__group">
            <span class="modal__label">WHO</span>
            <p class="modal__text">${o}</p>
          </div>

          <div class="modal__group">
            <span class="modal__label">PRICES</span>
            
            <div class="modal__price-row">
              <p class="modal__text"><span class="modal__barcode">║▌║█║▌│║</span> Standart ${c}</p>
              <button class="modal__btn" type="button">BUY TICKETS</button>
            </div>

            <div class="modal__price-row">
              <p class="modal__text"><span class="modal__barcode">║▌║█║▌│║</span> VIP ${i}</p>
              <button class="modal__btn" type="button">BUY TICKETS</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal__author-wrap">
        <button class="modal__author-btn" type="button">MORE FROM THIS AUTHOR</button>
      </div>

    </div>
  `);d.show(),d.element().querySelector(".modal__close-btn").addEventListener("click",()=>d.close())});const b=document.querySelector(".events__list");function y(n){return n.map(({id:s,name:o,images:l,dates:t,_embedded:e,priceRanges:a,info:c,description:r})=>{const _=a?`${a[0].min}-${a[0].max} ${a[0].currency}`:"N/A",i=a&&a[1]?`${a[1].min}-${a[1].max} ${a[1].currency}`:"N/A",d=c||r||"No additional information provided by the organizer.";return`
      <li class="events__item" 
        data-id="${s}"
        data-name="${o}"
        data-date="${t.start.localDate}"
        data-venue="${e.venues[0].name}"
        data-city="${e.venues[0].city.name}"
        data-image="${l[0].url}"
        data-standard="${_}"
        data-vip="${i}"
        data-info="${d}"
      >
        <article class="event-card">
          <img class="event-card__image" src="${l[0].url}" alt="${o}" />
          <h2 class="event-card__title">${o}</h2>
          <p class="event-card__date">${t.start.localDate}</p>
          <p class="event-card__place">${e.venues[0].name}</p>
        </article>
      </li>
    `}).join("")}f().then(n=>{const s=n._embedded.events;b.innerHTML=y(s)});
//# sourceMappingURL=commonHelpers.js.map
