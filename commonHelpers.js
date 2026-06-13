import{b as y}from"./assets/vendor-1795e137.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const b="https://app.ticketmaster.com/discovery/v2/events.json",g="EVDOv2DA0yM2nfxqUJW4oSne0yWf70dD";async function h(o=0,e="",n=""){return await(await fetch(`${b}?apikey=${g}&size=20&countryCode=${n}&page=${o}&keyword=${e}`)).json()}const $=document.querySelector(".events__list");$.addEventListener("click",o=>{const e=o.target.closest(".events__item");if(!e)return;const{name:n,date:s,venue:t,city:a,image:i,info:p}=e.dataset,r=y.create(`
    <div class="modal">
      <button class="modal__close-btn" type="button">×</button>
      
      <div class="modal__avatar-wrap">
        <img class="modal__avatar-img" src="${i}" alt="${n}" />
      </div>

      <div class="modal__container">
        
        <div class="modal__poster-wrap">
          <img class="modal__poster" src="${i}" alt="${n}" />
        </div>

        <div class="modal__content">
          
          <div class="modal__group modal__group--info">
            <span class="modal__label">INFO</span>
            <p class="modal__text modal__text--description">${p}</p>
          </div>

          <h2 class="modal__title">${n}</h2>
          
          <div class="modal__group">
            <span class="modal__label">WHEN</span>
            <p class="modal__text">${s}</p>
            <p class="modal__subtext">20:00 (Kyiv/Ukraine)</p>
          </div>

          <div class="modal__group">
            <span class="modal__label">WHERE</span>
            <p class="modal__text">${a}, ${t}</p>
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
  `);r.show();function f(v){v.code==="Escape"&&r.close()}window.addEventListener("keydown",f),r.element().querySelector(".modal__close-btn").addEventListener("click",()=>r.close())});const c=document.querySelector(".events__list"),u=document.querySelector(".pagination"),d={keyword:"",country:""};function E(o){return o.map(e=>{const n=e.info||e.description||"No description available.";let s="Unknown",t="Unknown";return e._embedded&&e._embedded.venues&&e._embedded.venues[0]&&(s=e._embedded.venues[0].name||"Unknown",e._embedded.venues[0].city&&(t=e._embedded.venues[0].city.name||"Unknown")),`
      <li class="events__item" 
        data-name="${e.name}"
        data-date="${e.dates.start.localDate}"
        data-venue="${s}"
        data-city="${t}"
        data-image="${e.images[0].url}"
        data-info="${n}"
      >
        <article class="event-card">
          <img class="event-card__image" src="${e.images[0].url}" alt="${e.name}" />
          <h2 class="event-card__title">${e.name}</h2>
          <p class="event-card__date">${e.dates.start.localDate}</p>
          <p class="event-card__place">${s}</p>
        </article>
      </li>
    `}).join("")}function L(o,e){u.innerHTML="";const n=Math.min(o,30);if(n<=1)return;let s=e-2;s<0&&(s=0);let t=s+4;t>=n&&(t=n-1,s=Math.max(0,t-4));for(let a=s;a<=t;a++){const i=document.createElement("button");i.type="button",i.textContent=a+1,a===e&&i.classList.add("active"),i.addEventListener("click",()=>{l(a)}),u.appendChild(i)}}function l(o,e,n){o===void 0&&(o=0),e===void 0&&(e=d.keyword),n===void 0&&(n=d.country),d.keyword=e,d.country=n,c.classList.add("is-swapping"),h(o,d.keyword,d.country).then(s=>{setTimeout(()=>{if(!s._embedded||!s._embedded.events){c.innerHTML="<p class='events__not-found'>Nothing found! Try another search.</p>",u.innerHTML="",c.classList.remove("is-swapping");return}const t=s._embedded.events;c.innerHTML=E(t);const a=s.page.totalPages||0;L(a,o),c.classList.remove("is-swapping")},150)}).catch(s=>{console.error("Помилка завантаження даних:",s),c.classList.remove("is-swapping")})}l();const m=document.querySelector(".searching-input"),_=document.querySelector(".country-select");m&&m.addEventListener("input",o=>{const e=o.target.value.trim();l(0,e,void 0)});_&&_.addEventListener("change",o=>{const e=o.target.value;l(0,void 0,e)});
//# sourceMappingURL=commonHelpers.js.map
