// Cards do roteiro: expandir / recolher (um por vez)
document.querySelectorAll('[data-day]').forEach(function (card) {
  card.addEventListener('click', function () {
    var wasOpen = card.classList.contains('open');
    document.querySelectorAll('[data-day].open').forEach(function (c) { c.classList.remove('open'); });
    if (!wasOpen) card.classList.add('open');
  });
});

// Dúvidas: accordion (um aberto por vez)
document.querySelectorAll('#faqList .faqItem button').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var item = btn.parentElement;
    var isOpen = item.classList.contains('open');
    document.querySelectorAll('#faqList .faqItem').forEach(function (it) {
      it.classList.remove('open');
      var b = it.querySelector('button');
      b.setAttribute('aria-expanded', 'false');
      it.querySelector('b') && (it.querySelector('button b').textContent = '+');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      btn.querySelector('b').textContent = '−';
    }
  });
});

// Nav: condensa ao rolar para além do hero
(function () {
  var nav = document.querySelector('.siteNav');
  if (!nav) return;
  var onScroll = function () {
    if (window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// Revelações sutis ao rolar (fade + leve subida)
(function () {
  var reveals = document.querySelectorAll('[data-reveal]');
  if (!reveals.length) return;
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
  reveals.forEach(function (el) { io.observe(el); });
})();
