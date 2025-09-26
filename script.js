// Year
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
// Quick Inquiry modal
(function(){
  const btn = document.querySelector('.quick-inquiry');
  const modal = document.getElementById('qi-modal');
  const close = document.getElementById('qi-close');
  if(!btn || !modal || !close) return;
  const open = () => { modal.classList.add('is-open'); document.body.style.overflow='hidden'; }
  const hide = () => { modal.classList.remove('is-open'); document.body.style.overflow=''; }
  btn.addEventListener('click', open);
  close.addEventListener('click', hide);
  modal.addEventListener('click', (e)=>{ if(e.target === modal) hide(); });
  window.addEventListener('keydown', (e)=>{ if(e.key==='Escape') hide(); });
})();
// CC submitter when 'Send me a copy' is checked
(function(){
  document.querySelectorAll('form.inquiry').forEach(form => {
    form.addEventListener('submit', () => {
      const email = form.querySelector('input[type="email"]');
      const cc = form.querySelector('input[name="_cc"]');
      const replyto = form.querySelector('input[name="_replyto"]');
      const sendcopy = form.querySelector('input[name="send_copy"]');
      if (email && cc && replyto) {
        replyto.value = email.value || '';
        cc.value = (sendcopy && sendcopy.checked) ? (email.value || '') : '';
      }
    });
  });
})();
// Simple slider autoplay + arrows
(function(){
  const slides = document.querySelectorAll('.slide');
  if(!slides.length) return;
  let i = 0;
  const show = idx => { slides.forEach((s,j)=>s.classList.toggle('active', j===idx)); }
  const next = () => { i = (i+1)%slides.length; show(i); }
  const prev = () => { i = (i-1+slides.length)%slides.length; show(i); }
  show(0);
  const nbtn = document.querySelector('.slider .next');
  const pbtn = document.querySelector('.slider .prev');
  nbtn && nbtn.addEventListener('click', next);
  pbtn && pbtn.addEventListener('click', prev);
  setInterval(next, 6000);
})();