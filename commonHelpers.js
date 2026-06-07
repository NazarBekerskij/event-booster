import{b}from"./assets/vendor-1795e137.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const g="https://app.ticketmaster.com/discovery/v2/events.json",$="EVDOv2DA0yM2nfxqUJW4oSne0yWf70dD";async function m(a=0,t="",n=""){return await(await fetch(`${g}?apikey=${$}&size=20&countryCode=${n}&page=${a}&keyword=${t}`)).json()}const h=document.querySelector(".events__list");h.addEventListener("click",a=>{const t=a.target.closest(".events__item");if(!t)return;const{name:n,date:o,venue:e,city:s,image:c,info:d}=t.dataset,r=b.create(`
    <div class="modal">
      <button class="modal__close-btn" type="button">×</button>
      
      <div class="modal__avatar-wrap">
        <img class="modal__avatar-img" src="${c}" alt="${n}" />
      </div>

      <div class="modal__container">
        
        <div class="modal__poster-wrap">
          <img class="modal__poster" src="${c}" alt="${n}" />
        </div>

        <div class="modal__content">
          
          <div class="modal__group modal__group--info">
            <span class="modal__label">INFO</span>
            <p class="modal__text modal__text--description">${d}</p>
          </div>

          <h2 class="modal__title">${n}</h2>
          
          <div class="modal__group">
            <span class="modal__label">WHEN</span>
            <p class="modal__text">${o}</p>
            <p class="modal__subtext">20:00 (Kyiv/Ukraine)</p>
          </div>

          <div class="modal__group">
            <span class="modal__label">WHERE</span>
            <p class="modal__text">${s}, ${e}</p>
          </div>

          <div class="modal__group">
            <span class="modal__label">WHO</span>
            <p class="modal__text">${n}</p>
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
  `);r.show();function f(y){y.code==="Escape"&&r.close()}window.addEventListener("keydown",f),r.element().querySelector(".modal__close-btn").addEventListener("click",()=>r.close())});const i=document.querySelector(".events__list"),l={keyword:"",country:""};function v(a){return a.map(({id:t,name:n,images:o,dates:e,_embedded:s,info:c,description:d})=>{const r=c||d||"No description available.";return`
      <li class="events__item" 
        data-name="${n}"
        data-date="${e.start.localDate}"
        data-venue="${s.venues[0].name}"
        data-city="${s.venues[0].city.name}"
        data-image="${o[0].url}"
        data-info="${r}"
      >
        <article class="event-card">
          <img class="event-card__image" src="${o[0].url}" alt="${n}" />
          <h2 class="event-card__title">${n}</h2>
          <p class="event-card__date">${e.start.localDate}</p>
          <p class="event-card__place">${s.venues[0].name}</p>
        </article>
      </li>
    `}).join("")}m().then(a=>{const t=a._embedded.events;i.innerHTML=v(t)});function _(a=0,t=l.keyword,n=l.country){l.keyword=t,l.country=n,m(a,l.keyword,l.country).then(o=>{if(!o._embedded||!o._embedded.events){i.innerHTML="<p class='events__not-found'>Nothing found! Try another search.</p>";return}const e=o._embedded.events;i.innerHTML=v(e)})}_();const u=document.querySelector(".searching-input"),p=document.querySelector(".country-select");u&&u.addEventListener("input",a=>{const t=a.target.value.trim();_(0,t,void 0)});p&&p.addEventListener("change",a=>{const t=a.target.value;_(0,void 0,t)});
//# sourceMappingURL=commonHelpers.js.map
