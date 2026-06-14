import{b as k}from"./assets/vendor-1795e137.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const S="https://app.ticketmaster.com/discovery/v2/events.json",x="EVDOv2DA0yM2nfxqUJW4oSne0yWf70dD";async function P(o=0,e="",s=""){return await(await fetch(`${S}?apikey=${x}&size=20&countryCode=${s}&page=${o}&keyword=${e}`)).json()}const U=document.querySelector(".events__list");U.addEventListener("click",o=>{const e=o.target.closest(".events__item");if(!e)return;const{name:s="Event",date:n="Date not available",venue:t="Unknown Venue",city:a="Unknown City",image:r="",info:m="No description available.",url:u="#",authorUrl:p="#"}=e.dataset,_=u||"#",v=p||"#",i=k.create(`
    <div class="modal">
      <button class="modal__close-btn" type="button">×</button>
      
      <div class="modal__avatar-wrap">
        <img class="modal__avatar-img" src="${r}" alt="${s}" />
      </div>

      <div class="modal__container">
        
        <div class="modal__poster-wrap">
          <img class="modal__poster" src="${r}" alt="${s}" />
        </div>

        <div class="modal__content">
          
          <div class="modal__group modal__group--info">
            <span class="modal__label">INFO</span>
            <p class="modal__text modal__text--description">${m}</p>
          </div>

          <h2 class="modal__title">${s}</h2>
          
          <div class="modal__group">
            <span class="modal__label">WHEN</span>
            <p class="modal__text">${n}</p>
            <p class="modal__subtext">20:00 (Kyiv/Ukraine)</p>
          </div>

          <div class="modal__group">
            <span class="modal__label">WHERE</span>
            <p class="modal__text">${a}, ${t}</p>
          </div>

          <div class="modal__group">
            <span class="modal__label">WHO</span>
            <p class="modal__text">${s}</p>
          </div>

          <div class="modal__group">
            <span class="modal__label">PRICES</span>
            <div class="modal__price-row">
              <p class="modal__text"><span class="modal__barcode">║▌║█║▌│║</span> Standart 300-500 UAH</p>
              <a class="modal__btn" href="${_}" target="_blank" rel="noopener noreferrer">BUY TICKETS</a>
            </div>
            <div class="modal__price-row">
              <p class="modal__text"><span class="modal__barcode">║▌║█║▌│║</span> VIP 1000-1500 UAH</p>
              <a class="modal__btn" href="${_}" target="_blank" rel="noopener noreferrer">BUY TICKETS</a>
            </div>
          </div>
        </div>
      </div>

      <div class="modal__author-wrap">
        <a class="modal__author-btn" href="${v}" target="_blank" rel="noopener noreferrer">MORE FROM THIS AUTHOR</a>
      </div>

    </div>
  `);i.show();function c(f){f.code==="Escape"&&(i.close(),window.removeEventListener("keydown",c))}window.addEventListener("keydown",c),i.element().querySelector(".modal__close-btn").addEventListener("click",()=>{i.close(),window.removeEventListener("keydown",c)})});const l=document.querySelector(".events__list"),b=document.querySelector(".pagination"),d={keyword:"",country:""};function O(o){return o.map(e=>{var m,u,p,_,v,i,c,y,f,h,$,w;const s=e.info||e.description||"No description available.",n=((p=(u=(m=e._embedded)==null?void 0:m.venues)==null?void 0:u[0])==null?void 0:p.name)??"Unknown",t=((c=(i=(v=(_=e._embedded)==null?void 0:_.venues)==null?void 0:v[0])==null?void 0:i.city)==null?void 0:c.name)??"Unknown",a=((h=(f=(y=e._embedded)==null?void 0:y.attractions)==null?void 0:f[0])==null?void 0:h.url)??"#",r=((w=($=e.images)==null?void 0:$[0])==null?void 0:w.url)??"";return`
      <li class="events__item" 
        data-name="${e.name}"
        data-date="${e.dates.start.localDate}"
        data-venue="${n}"
        data-city="${t}"
        data-image="${r}"
        data-info="${s}"
        data-url="${e.url}"
        data-author-url="${a}" 
      >
        <article class="event-card">
          <img class="event-card__image" src="${r}" alt="${e.name}" />
          <h2 class="event-card__title">${e.name}</h2>
          <p class="event-card__date">${e.dates.start.localDate}</p>
          <p class="event-card__place">${n}</p>
        </article>
      </li>
    `}).join("")}function T(o,e){b.innerHTML="";const s=Math.min(o,30);if(s<=1)return;let n=e-2;n<0&&(n=0);let t=n+4;t>=s&&(t=s-1,n=Math.max(0,t-4));for(let a=n;a<=t;a++){const r=document.createElement("button");r.type="button",r.textContent=a+1,a===e&&r.classList.add("active"),r.addEventListener("click",()=>{g(a)}),b.appendChild(r)}}function g(o,e,s){o===void 0&&(o=0),e===void 0&&(e=d.keyword),s===void 0&&(s=d.country),d.keyword=e,d.country=s,l.classList.add("is-swapping"),P(o,d.keyword,d.country).then(n=>{setTimeout(()=>{if(!n._embedded||!n._embedded.events){l.innerHTML="<p class='events__not-found'>Nothing found! Try another search.</p>",b.innerHTML="",l.classList.remove("is-swapping");return}const t=n._embedded.events;l.innerHTML=O(t);const a=n.page.totalPages||0;T(a,o),l.classList.remove("is-swapping")},150)}).catch(n=>{console.error("Помилка завантаження даних:",n),l.classList.remove("is-swapping")})}g();const L=document.querySelector(".searching-input"),E=document.querySelector(".country-select");L&&L.addEventListener("input",o=>{const e=o.target.value.trim();g(0,e,void 0)});E&&E.addEventListener("change",o=>{const e=o.target.value;g(0,void 0,e)});
//# sourceMappingURL=commonHelpers.js.map
