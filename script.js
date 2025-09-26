// Year
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
// Sticky header shadow (optional)
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
// v4.10: CC submitter when 'Send me a copy' checked
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