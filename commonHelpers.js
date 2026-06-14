import{b as E}from"./assets/vendor-1795e137.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const w="https://app.ticketmaster.com/discovery/v2/events.json",S="EVDOv2DA0yM2nfxqUJW4oSne0yWf70dD";async function L(n=0,e="",o=""){return await(await fetch(`${w}?apikey=${S}&size=20&countryCode=${o}&page=${n}&keyword=${e}`)).json()}const x=document.querySelector(".events__list");x.addEventListener("click",n=>{const e=n.target.closest(".events__item");if(!e)return;const{name:o,date:s,venue:t,city:a,image:r,info:_,url:m,authorUrl:u}=e.dataset,d=m||"#",c=E.create(`
    <div class="modal">
      <button class="modal__close-btn" type="button">×</button>
      
      <div class="modal__avatar-wrap">
        <img class="modal__avatar-img" src="${r}" alt="${o}" />
      </div>

      <div class="modal__container">
        
        <div class="modal__poster-wrap">
          <img class="modal__poster" src="${r}" alt="${o}" />
        </div>

        <div class="modal__content">
          
          <div class="modal__group modal__group--info">
            <span class="modal__label">INFO</span>
            <p class="modal__text modal__text--description">${_}</p>
          </div>

          <h2 class="modal__title">${o}</h2>
          
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
            <p class="modal__text">${o}</p>
          </div>

        <div class="modal__group">
            <span class="modal__label">PRICES</span>
            <div class="modal__price-row">
              <p class="modal__text"><span class="modal__barcode">║▌║█║▌│║</span> Standart 300-500 UAH</p>
              <a class="modal__btn" href="${d}" target="_blank" rel="noopener noreferrer">BUY TICKETS</a>
            </div>
            <div class="modal__price-row">
              <p class="modal__text"><span class="modal__barcode">║▌║█║▌│║</span> VIP 1000-1500 UAH</p>
              <a class="modal__btn" href="${d}" target="_blank" rel="noopener noreferrer">BUY TICKETS</a>
            </div>
          </div>
        </div>
      </div>

      <div class="modal__author-wrap">
       <a class="modal__author-btn" href="${u}" target="_blank" rel="noopener noreferrer">MORE FROM THIS AUTHOR</a>
      </div>

    </div>
  `);c.show();function p(f){f.code==="Escape"&&c.close()}window.addEventListener("keydown",p),c.element().querySelector(".modal__close-btn").addEventListener("click",()=>c.close())});const i=document.querySelector(".events__list"),y=document.querySelector(".pagination"),l={keyword:"",country:""};function P(n){return n.map(e=>{var r,_,m,u,d,c,p,g,f,h;const o=e.info||e.description||"No description available.",s=((m=(_=(r=e._embedded)==null?void 0:r.venues)==null?void 0:_[0])==null?void 0:m.name)??"Unknown",t=((p=(c=(d=(u=e._embedded)==null?void 0:u.venues)==null?void 0:d[0])==null?void 0:c.city)==null?void 0:p.name)??"Unknown",a=((h=(f=(g=e._embedded)==null?void 0:g.attractions)==null?void 0:f[0])==null?void 0:h.url)??"#";return`
      <li class="events__item" 
        data-name="${e.name}"
        data-date="${e.dates.start.localDate}"
        data-venue="${s}"
        data-city="${t}"
        data-image="${e.images[0].url}"
        data-info="${o}"
        data-url="${e.url}"
        data-author-url="${a}" 
      >
        <article class="event-card">
          <img class="event-card__image" src="${e.images[0].url}" alt="${e.name}" />
          <h2 class="event-card__title">${e.name}</h2>
          <p class="event-card__date">${e.dates.start.localDate}</p>
          <p class="event-card__place">${s}</p>
        </article>
      </li>
    `}).join("")}function k(n,e){y.innerHTML="";const o=Math.min(n,30);if(o<=1)return;let s=e-2;s<0&&(s=0);let t=s+4;t>=o&&(t=o-1,s=Math.max(0,t-4));for(let a=s;a<=t;a++){const r=document.createElement("button");r.type="button",r.textContent=a+1,a===e&&r.classList.add("active"),r.addEventListener("click",()=>{v(a)}),y.appendChild(r)}}function v(n,e,o){n===void 0&&(n=0),e===void 0&&(e=l.keyword),o===void 0&&(o=l.country),l.keyword=e,l.country=o,i.classList.add("is-swapping"),L(n,l.keyword,l.country).then(s=>{setTimeout(()=>{if(!s._embedded||!s._embedded.events){i.innerHTML="<p class='events__not-found'>Nothing found! Try another search.</p>",y.innerHTML="",i.classList.remove("is-swapping");return}const t=s._embedded.events;i.innerHTML=P(t);const a=s.page.totalPages||0;k(a,n),i.classList.remove("is-swapping")},150)}).catch(s=>{console.error("Помилка завантаження даних:",s),i.classList.remove("is-swapping")})}v();L().then(n=>console.log(n));const b=document.querySelector(".searching-input"),$=document.querySelector(".country-select");b&&b.addEventListener("input",n=>{const e=n.target.value.trim();v(0,e,void 0)});$&&$.addEventListener("change",n=>{const e=n.target.value;v(0,void 0,e)});
//# sourceMappingURL=commonHelpers.js.map
