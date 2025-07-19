import{a as f,S as d}from"./assets/vendor-D9yLGaxt.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="51387635-d1faa43170eec50f2b7d86b54",p="https://pixabay.com/api/";function h(n){const t={key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(p,{params:t}).then(o=>o.data).catch(o=>{throw console.log("Sorry, there are no images matching your search query. Please try again!",o),o})}const c=document.querySelector(".form"),a=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(){a.innerHTML=""}function b(){l.classList.add("is-visible")}function L(){l.classList.remove("is-visible")}function v(n){return n.map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:r,comments:s,downloads:u})=>`
        <li class="gallery-item">
          <a href="${o}">
            <img src="${t}" alt="${i}" width ="300" />
          </a>
          <div class="info">
            <p><b>Likes</b> ${e}</p>
            <p><b>Views</b> ${r}</p>
            <p><b>Comments</b> ${s}</p>
            <p><b>Downloads</b> ${u}</p>
          </div>
        </li>
      `).join("")}function q(n){const t=v(n);a.insertAdjacentHTML("beforeend",t),y.refresh()}c.addEventListener("submit",n=>{n.preventDefault();const t=c.querySelector('input[name="search-text"]'),o=t.value.trim();if(!o){alert("Please enter a search term!");return}g(),b(),h(o).then(i=>{i&&i.hits&&i.hits.length>0?q(i.hits):a.innerHTML="<li>No images found.</li>"}).catch(i=>{console.error("Error fetching images:",i),a.innerHTML="<li>Error loading images. Please try again.</li>"}).finally(()=>{L(),t.value=""})});
//# sourceMappingURL=index.js.map
