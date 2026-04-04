document.addEventListener('DOMContentLoaded', function () {
    // ハンバーガーメニュー
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
  });

  document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('open');
    });
  });
  
  // TOPに戻るボタン
  const pageTop = document.getElementById('pageTop');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 800) {
      pageTop.classList.add('show');
    } else {
      pageTop.classList.remove('show');
    }
  });

  pageTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// フェードイン
document.addEventListener("DOMContentLoaded", function() {
  const faders = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); 
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: "0px 0px -80px 0px"
  });

  faders.forEach(fader => {
    observer.observe(fader);
  });
});

// 順番フェード
document.addEventListener("DOMContentLoaded", function() {
  const fadeItems = document.querySelectorAll(".fade-container");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll(".fade-item");
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("visible");
          }, index * 200); // 少し速めにするとスマホで見やすい
        });
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -80px 0px"
  });

  fadeItems.forEach(el => observer.observe(el));


  // 各セクションを監視
  document.querySelectorAll(".fade-section").forEach((section) => {
    observer.observe(section);
  });
});
