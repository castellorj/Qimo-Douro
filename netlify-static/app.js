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
