document.getElementById('year').textContent = new Date().getFullYear();
(function () {
  const root = document.querySelector('.carousel');
  if (!root) return;
  const slides = Array.from(root.querySelectorAll('.slide'));
  const dots = Array.from(root.querySelectorAll('.dot'));
  const prev = root.querySelector('.prev');
  const next = root.querySelector('.next');
  const pauseBtn = root.querySelector('.pause');
  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let i = 0, timer = null, delay = 5000, playing = !prefersReduce;
  function show(n){ i=(n+slides.length)%slides.length; slides.forEach((s,idx)=>s.classList.toggle('is-active',idx===i)); dots.forEach((d,idx)=>d.classList.toggle('is-active',idx===i)); }
  function start(){ stop(); if(playing) timer=setInterval(()=>show(i+1),delay); }
  function stop(){ if(timer) clearInterval(timer); }
  prev.addEventListener('click',()=>{show(i-1);start();});
  next.addEventListener('click',()=>{show(i+1);start();});
  dots.forEach((d,idx)=>d.addEventListener('click',()=>{show(idx);start();}));
  pauseBtn.addEventListener('click',()=>{ playing=!playing; pauseBtn.setAttribute('aria-pressed', String(!playing)); pauseBtn.textContent=playing?'Pause':'Play'; start(); });
  ['mouseenter','focusin'].forEach(e=>root.addEventListener(e,stop));
  ['mouseleave','focusout'].forEach(e=>root.addEventListener(e,start));
  show(0); start();
})();