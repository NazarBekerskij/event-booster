import{b as _}from"./assets/vendor-1795e137.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p="https://app.ticketmaster.com/discovery/v2/events.json",m="EVDOv2DA0yM2nfxqUJW4oSne0yWf70dD";async function u(o=0){return await(await fetch(`${p}?apikey=${m}&size=20&countryCode=US&page=${o}`)).json()}const v=document.querySelector(".events__list");v.addEventListener("click",o=>{const s=o.target.closest(".events__item");if(!s)return;const{name:a,date:l,venue:e,city:t,image:n,info:r}=s.dataset,c=_.create(`
    <div class="modal">
      <button class="modal__close-btn" type="button">×</button>
      
      <div class="modal__avatar-wrap">
        <img class="modal__avatar-img" src="${n}" alt="${a}" />
      </div>

      <div class="modal__container">
        
        <div class="modal__poster-wrap">
          <img class="modal__poster" src="${n}" alt="${a}" />
        </div>

        <div class="modal__content">
          
          <div class="modal__group modal__group--info">
            <span class="modal__label">INFO</span>
            <p class="modal__text modal__text--description">${r}</p>
          </div>

          <h2 class="modal__title">${a}</h2>
          
          <div class="modal__group">
            <span class="modal__label">WHEN</span>
            <p class="modal__text">${l}</p>
            <p class="modal__subtext">20:00 (Kyiv/Ukraine)</p>
          </div>

          <div class="modal__group">
            <span class="modal__label">WHERE</span>
            <p class="modal__text">${t}, ${e}</p>
          </div>

          <div class="modal__group">
            <span class="modal__label">WHO</span>
            <p class="modal__text">${a}</p>
          </div>

          <div class="modal__group">
            <span class="modal__label">PRICES</span>
            
            <div class="modal__price-row">
              <p class="modal__text"><span class="modal__barcode">║▌║█║▌│║</span> Standart Price</p>
              <button class="modal__btn" type="button">BUY TICKETS</button>
            </div>

            <div class="modal__price-row">
              <p class="modal__text"><span class="modal__barcode">║▌║█║▌│║</span> VIP Price</p>
              <button class="modal__btn" type="button">BUY TICKETS</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal__author-wrap">
        <button class="modal__author-btn" type="button">MORE FROM THIS AUTHOR</button>
      </div>

    </div>
  `);c.show();function i(d){d.code==="Escape"&&c.close()}window.addEventListener("keydown",i),c.element().querySelector(".modal__close-btn").addEventListener("click",()=>c.close())});const f=document.querySelector(".events__list");function b(o){return o.map(({id:s,name:a,images:l,dates:e,_embedded:t,info:n,description:r})=>{const c=n||r||"No description available.";return`
      <li class="events__item" 
        data-name="${a}"
        data-date="${e.start.localDate}"
        data-venue="${t.venues[0].name}"
        data-city="${t.venues[0].city.name}"
        data-image="${l[0].url}"
        data-info="${c}"
      >
        <article class="event-card">
          <img class="event-card__image" src="${l[0].url}" alt="${a}" />
          <h2 class="event-card__title">${a}</h2>
          <p class="event-card__date">${e.start.localDate}</p>
          <p class="event-card__place">${t.venues[0].name}</p>
        </article>
      </li>
    `}).join("")}u().then(o=>{const s=o._embedded.events;f.innerHTML=b(s)});
//# sourceMappingURL=commonHelpers.js.map
