// Mobile menu toggle
(function(){
  var nav=document.querySelector('.nav'); if(!nav) return;
  var btn=nav.querySelector('.burger'); if(!btn) return;
  function set(open){nav.classList.toggle('open',open);btn.setAttribute('aria-expanded',open?'true':'false');btn.setAttribute('aria-label',open?'Close menu':'Open menu');}
  btn.addEventListener('click',function(){set(!nav.classList.contains('open'));});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false);});
  nav.querySelectorAll('.links a').forEach(function(a){a.addEventListener('click',function(){set(false);});});
})();
