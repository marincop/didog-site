// 蘇記嘀兜雞 Di Do G — 網站互動
(function () {
  'use strict';

  // 年份
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // 導覽列滾動變色
  var nav = document.getElementById('nav');
  var toTop = document.getElementById('toTop');
  function onScroll() {
    var s = window.scrollY > 60;
    if (nav) nav.classList.toggle('scrolled', s);
    if (toTop) toTop.classList.toggle('show', window.scrollY > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 漢堡選單
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') menu.classList.remove('open');
    });
  }

  // 回頂端
  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 訂位連結：若設定 BOOKING_URL 則套用；否則退回電話
  // ⬇️ 把下方字串改成你的線上訂位網址即可（會自動套用到所有 [data-booking]）
  var BOOKING_URL = 'https://marincop-didog01.hf.space/booking/'; // 線上訂位
  var PHONE = 'tel:0229410528';
  document.querySelectorAll('[data-booking]').forEach(function (el) {
    el.setAttribute('href', BOOKING_URL ? BOOKING_URL : PHONE);
    if (BOOKING_URL) { el.setAttribute('target', '_blank'); el.setAttribute('rel', 'noopener'); }
  });

  // 捲動進場動畫
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.style.opacity = '1';
          en.target.style.transform = 'none';
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.card, .store, .stat, .section .h2').forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(22px)';
      el.style.transition = 'opacity .7s ease, transform .7s ease';
      io.observe(el);
    });
  }
})();
