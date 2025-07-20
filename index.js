import{a as p,S as d,i as a}from"./assets/vendor-C5BuWtzx.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const h="51387635-d1faa43170eec50f2b7d86b54",m="https://pixabay.com/api/";function g(s){const o={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(m,{params:o}).then(i=>{const t=i.data;if(!t.hits||t.hits.length===0)throw new Error("No images found");return t}).catch(i=>{throw i})}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){return s.map(({webformatURL:o,largeImageURL:i,tags:t,likes:e,views:r,comments:n,downloads:f})=>`
        <li class="photo-card">
          <a href="${i}">
            <img src="${o}" alt="${t}" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${e}</p>
            <p><b>Views:</b> ${r}</p>
            <p><b>Comments:</b> ${n}</p>
            <p><b>Downloads:</b> ${f}</p>
          </div>
        </li>
      `).join("")}function L(s){const o=b(s);l.insertAdjacentHTML("beforeend",o),y.refresh()}function v(){u.classList.add("is-visible")}function w(){u.classList.remove("is-visible")}function q(){l.innerHTML=""}const c=document.querySelector(".form");document.querySelector(".gallery");c.addEventListener("submit",s=>{s.preventDefault();const o=c.querySelector('input[name="search-text"]'),i=o.value.trim();if(!i){a.error({title:"Error",message:"Please enter a search term!",position:"topRight"});return}q(),v(),g(i).then(t=>{t&&t.hits&&t.hits.length>0?L(t.hits):a.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(t=>{a.error({title:"Error",message:"There was an error loading the images. Please try again.",position:"topRight"})}).finally(()=>{w(),o.value=""})});
//# sourceMappingURL=index.js.map
