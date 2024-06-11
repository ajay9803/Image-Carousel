var g=Object.defineProperty;var v=(n,t,s)=>t in n?g(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s;var o=(n,t,s)=>(v(n,typeof t!="symbol"?t+"":t,s),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();class E{constructor(t,s){o(this,"carouselElement");o(this,"slides");o(this,"prevButton");o(this,"nextButton");o(this,"dotsContainer");o(this,"counter");o(this,"autoSlideInterval");o(this,"dots");o(this,"direction");o(this,"duration");this.carouselElement=t,this.slides=this.carouselElement.querySelectorAll(".carousel-image"),this.prevButton=this.carouselElement.querySelector(".prev"),this.nextButton=this.carouselElement.querySelector(".next"),this.dotsContainer=this.carouselElement.querySelector(".dots-container"),this.counter=0,this.autoSlideInterval=null,this.dots=[],this.direction=1,this.duration=s,this.setInitialPosition(),this.createDots(),this.startAutoSlide(),this.prevButton.addEventListener("click",()=>this.prevSlide()),this.nextButton.addEventListener("click",()=>this.nextSlide())}setInitialPosition(){this.slides.forEach((t,s)=>{t.style.left=`${s*100}%`})}slideImage(){this.slides.forEach(t=>{t.style.transform=`translateX(-${this.counter*100}%)`}),this.updateDots()}prevSlide(){this.counter--,this.counter<0&&(this.counter=this.slides.length-1),this.slideImage(),this.resetAutoSlide()}nextSlide(){this.counter++,this.counter>=this.slides.length&&(this.counter=0),this.slideImage(),this.resetAutoSlide()}updateDots(){this.dots.forEach((t,s)=>{t.classList.toggle("active",s===this.counter%this.slides.length)})}createDots(){this.dotsContainer.innerHTML="",this.slides.forEach((t,s)=>{const r=document.createElement("div");r.classList.add("dot"),r.addEventListener("click",()=>{this.counter=s,this.slideImage(),this.resetAutoSlide()}),this.dotsContainer.appendChild(r),this.dots.push(r)}),this.updateDots()}startAutoSlide(){this.autoSlideInterval=window.setInterval(()=>{this.counter+=this.direction,this.counter>=this.slides.length?(this.direction=-1,this.counter=this.slides.length-2):this.counter<0&&(this.direction=1,this.counter=1),this.slideImage()},this.duration)}resetAutoSlide(){this.autoSlideInterval!==null&&(clearInterval(this.autoSlideInterval),this.startAutoSlide())}}const h=(n,t,s)=>{const r=document.getElementById(n),e=document.createElement("div");e.classList.add("the-carousel");const i=document.createElement("div");i.classList.add("main-wrapper");const a=document.createElement("div");a.classList.add("arrow-icon","prev"),a.innerHTML="<div>&#9664;</div>";const l=document.createElement("div");l.classList.add("arrow-icon","next"),l.innerHTML="<div>&#9654;</div>";const d=document.createElement("div");d.classList.add("carousel-container");const u=document.createElement("div");u.classList.add("carousel-wrapper"),t.forEach(f=>{const c=document.createElement("img");c.src=f,c.alt="random",c.classList.add("carousel-image"),u.appendChild(c)}),d.appendChild(u),i.appendChild(a),i.appendChild(d),i.appendChild(l),e.appendChild(i);const m=document.createElement("div");m.classList.add("dots-container"),e.appendChild(m),r.appendChild(e),new E(e,s)},p=["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg","https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg","https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/covera-gh.jpg"];h("carousel-container-1",p,3e3);h("carousel-container-2",p,5e3);h("carousel-container-3",p,1e3);