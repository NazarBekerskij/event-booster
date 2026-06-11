import{b}from"./assets/vendor-1795e137.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const w="https://app.ticketmaster.com/discovery/v2/events.json",L="EVDOv2DA0yM2nfxqUJW4oSne0yWf70dD";async function S(a=0,o="",n=""){return await(await fetch(`${w}?apikey=${L}&size=20&countryCode=${n}&page=${a}&keyword=${o}`)).json()}const x=document.querySelector(".events__list");x.addEventListener("click",a=>{const o=a.target.closest(".events__item");if(!o)return;const{name:n,date:s,venue:e,city:t,image:c,info:_}=o.dataset,r=b.create(`
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
            <p class="modal__text modal__text--description">${_}</p>
          </div>

          <h2 class="modal__title">${n}</h2>
          
          <div class="modal__group">
            <span class="modal__label">WHEN</span>
            <p class="modal__text">${s}</p>
            <p class="modal__subtext">20:00 (Kyiv/Ukraine)</p>
          </div>

          <div class="modal__group">
            <span class="modal__label">WHERE</span>
            <p class="modal__text">${t}, ${e}</p>
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
  `);r.show();function i(d){d.code==="Escape"&&r.close()}window.addEventListener("keydown",i),r.element().querySelector(".modal__close-btn").addEventListener("click",()=>r.close())});const g=document.querySelector(".events__list"),u=document.querySelector(".pagination"),l={keyword:"",country:""};function O(a){return a.map(({id:o,name:n,images:s,dates:e,_embedded:t,info:c,description:_})=>{var i,m,d,v,f,y,h;const r=c||_||"No description available.";return`
      <li class="events__item" 
        data-name="${n}"
        data-date="${e.start.localDate}"
        data-venue="${((m=(i=t==null?void 0:t.venues)==null?void 0:i[0])==null?void 0:m.name)||"Unknown"}"
        data-city="${((f=(v=(d=t==null?void 0:t.venues)==null?void 0:d[0])==null?void 0:v.city)==null?void 0:f.name)||"Unknown"}"
        data-image="${s[0].url}"
        data-info="${r}"
      >
        <article class="event-card">
          <img class="event-card__image" src="${s[0].url}" alt="${n}" />
          <h2 class="event-card__title">${n}</h2>
          <p class="event-card__date">${e.start.localDate}</p>
          <p class="event-card__place">${((h=(y=t==null?void 0:t.venues)==null?void 0:y[0])==null?void 0:h.name)||"Unknown"}</p>
        </article>
      </li>
    `}).join("")}function k(a,o){u.innerHTML="";const n=Math.min(a,30);if(n<=1)return;const s=[];if(o<3){const e=Math.min(n-1,4);for(let t=0;t<=e;t++)s.push(t);n>5&&(s.push("..."),s.push(n-1))}else if(o>=n-3){s.push(0),s.push("...");for(let e=n-5;e<n;e++)e>0&&s.push(e)}else{s.push(0),s.push("...");for(let e=o-1;e<=o+1;e++)s.push(e);s.push("..."),s.push(n-1)}s.forEach(e=>{if(e==="..."){const t=document.createElement("span");t.className="dots",t.textContent="...",u.appendChild(t)}else{const t=document.createElement("button");t.type="button",t.textContent=e+1,e===o&&t.classList.add("active"),t.addEventListener("click",()=>{p(e)}),u.appendChild(t)}})}function p(a=0,o=l.keyword,n=l.country){l.keyword=o,l.country=n,S(a,l.keyword,l.country).then(s=>{var c;if(!s._embedded||!s._embedded.events){g.innerHTML="<p class='events__not-found'>Nothing found! Try another search.</p>",u.innerHTML="";return}const e=s._embedded.events;g.innerHTML=O(e);const t=((c=s.page)==null?void 0:c.totalPages)||0;k(t,a)}).catch(s=>{console.error("Помилка завантаження даних:",s)})}p();const $=document.querySelector(".searching-input"),E=document.querySelector(".country-select");$&&$.addEventListener("input",a=>{const o=a.target.value.trim();p(0,o,void 0)});E&&E.addEventListener("change",a=>{const o=a.target.value;p(0,void 0,o)});
//# sourceMappingURL=commonHelpers.js.map
