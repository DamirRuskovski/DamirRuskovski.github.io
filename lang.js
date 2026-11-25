// Language switch (sr / en / ru); remembers the choice, else follows the browser.
(function(){
  var saved=null;try{saved=localStorage.getItem('nex-lang')}catch(e){}
  var nav=(navigator.language||'en').slice(0,2);
  var lang=saved||(nav==='ru'?'ru':(['sr','hr','bs'].indexOf(nav)>=0?'sr':'en'));
  function set(l){lang=l;try{localStorage.setItem('nex-lang',l)}catch(e){}
    document.documentElement.lang=l;
    document.querySelectorAll('[data-lang]').forEach(function(el){el.classList.toggle('show',el.getAttribute('data-lang')===l)});
    document.querySelectorAll('.langs button').forEach(function(b){b.classList.toggle('on',b.dataset.l===l)});}
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('.langs button').forEach(function(b){b.onclick=function(){set(b.dataset.l)}});set(lang);});
})();
