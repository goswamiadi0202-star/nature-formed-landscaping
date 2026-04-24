/* =========================================================
   NATURE FORMED LANDSCAPING — INTERACTIONS
   ========================================================= */

(function () {
  'use strict';

  /* ---------- SCROLL PROGRESS BAR ---------- */
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);
  const updateProgress = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? window.scrollY / max : 0;
    progressBar.style.transform = `scaleX(${pct})`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ---------- NAV: scroll state + mobile toggle ---------- */
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');

  function handleNavScroll() {
    if (!nav) return;
    if (window.scrollY > 60) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  if (navToggle && navMenu) {
    // Portal the mobile menu to <body> so it escapes the nav's
    // backdrop-filter containing block (which otherwise traps
    // position:fixed children to the nav's bounding box).
    if (navMenu.parentElement !== document.body) {
      document.body.appendChild(navMenu);
    }
    const setMenu = (open) => {
      navMenu.classList.toggle('is-open', open);
      navToggle.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    navToggle.addEventListener('click', () => {
      setMenu(!navMenu.classList.contains('is-open'));
    });
    navMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => setMenu(false));
    });
  }

  /* ---------- SCROLL REVEAL ---------- */
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealItems.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealItems.forEach(el => io.observe(el));
  } else {
    revealItems.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- HERO: WORD-BY-WORD REVEAL ----------
     Preserves <br> and inline tags like <em>. Walks the DOM instead of
     textContent-splitting (which flattens "Something<br>Beautiful" into
     "SomethingBeautiful" and breaks responsive line wrapping). */
  const heroHeadlines = document.querySelectorAll('.hero__headline');
  heroHeadlines.forEach(h => {
    if (h.dataset.split === 'done') return;
    const wordCounter = { n: 0 };
    const wrapWords = (srcNode, destNode) => {
      Array.from(srcNode.childNodes).forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          const words = node.textContent.split(/(\s+)/);
          words.forEach(tok => {
            if (!tok) return;
            if (/^\s+$/.test(tok)) {
              destNode.appendChild(document.createTextNode(' '));
            } else {
              const span = document.createElement('span');
              span.className = 'word';
              span.textContent = tok;
              span.style.animationDelay = `${0.15 + wordCounter.n * 0.08}s`;
              destNode.appendChild(span);
              wordCounter.n++;
            }
          });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.tagName === 'BR') {
            destNode.appendChild(document.createElement('br'));
          } else {
            const clone = node.cloneNode(false);
            wrapWords(node, clone);
            destNode.appendChild(clone);
          }
        }
      });
    };
    const frag = document.createDocumentFragment();
    wrapWords(h, frag);
    h.innerHTML = '';
    h.appendChild(frag);
    h.dataset.split = 'done';
  });

  /* ---------- HERO BG PARALLAX + CONTENT FADE ---------- */
  const heroBg = document.querySelector('.hero__bg');
  const heroContent = document.querySelector('.hero__content');
  if (heroBg) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const vh = window.innerHeight;
        if (y < vh) {
          const progress = y / vh;
          heroBg.style.transform = `translateY(${y * 0.3}px) scale(${1.05 + progress * 0.08})`;
          if (heroContent) {
            heroContent.style.transform = `translateY(${y * 0.18}px)`;
            heroContent.style.opacity = String(1 - progress * 0.7);
          }
        }
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---------- COUNTER ANIMATION (stats) ---------- */
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    const cio = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        const duration = 1400;
        const start = performance.now();
        const tick = now => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        cio.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cio.observe(c));
  }

  /* ---------- PORTFOLIO FILTER ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  if (filterBtns.length && portfolioCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const cat = btn.dataset.filter;
        portfolioCards.forEach(card => {
          const cardCat = card.dataset.category;
          const show = cat === 'all' || cat === cardCat;
          card.style.display = show ? '' : 'none';
          if (show) {
            card.classList.remove('is-visible');
            void card.offsetWidth;
            card.classList.add('is-visible');
          }
        });
      });
    });
  }

  /* ---------- FAQ ACCORDION ---------- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-item__button');
    const panel = item.querySelector('.faq-item__panel');
    if (!btn || !panel) return;
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      } else {
        panel.style.maxHeight = '0px';
      }
    });
  });

  /* ---------- CONTACT FORM: light validation + success state ---------- */
  const form = document.querySelector('form[data-nf-contact]');
  if (form) {
    form.addEventListener('submit', (e) => {
      const required = form.querySelectorAll('[required]');
      let valid = true;
      required.forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = '#c44';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
      });
      if (!valid) {
        e.preventDefault();
      }
    });
  }

  /* ---------- LIVE PHOTO AUTO-UPGRADE ----------
     Any <img src="images/projects/X.jpg"> inside a portfolio/project card or
     split-image slot gets auto-upgraded to a <video> loop with the JPG as poster.
     Static image is the fallback if the video 404s. */
  const LIVE_PAIRS = {
    'paver-walkway-finished.jpg': 'paver-walkway-finished.mp4',
    'paver-walkway-before.jpg':   'paver-walkway-before.mp4',
    'sod-install-established.jpg':'sod-install-established.mp4',
    'sod-install-fresh.jpg':      'sod-install-fresh.mp4',
    'front-yard-driveway.jpg':    'front-yard-driveway.mp4',
    'irrigation-detail.jpg':      'irrigation-detail.mp4',
    'tree-install.jpg':           'tree-install.mp4'
  };
  const upgradeSelectors = [
    '.portfolio-card img',
    '.project-card img',
    '.split__image img',
    '.service-block__image img'
  ].join(',');
  document.querySelectorAll(upgradeSelectors).forEach(img => {
    const src = img.getAttribute('src') || '';
    const filename = src.split('/').pop();
    const videoFile = LIVE_PAIRS[filename];
    if (!videoFile) return;
    const video = document.createElement('video');
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('muted', '');
    video.preload = 'metadata';
    video.poster = src;
    video.setAttribute('aria-label', img.alt || '');
    const source = document.createElement('source');
    source.src = 'images/videos/live/' + videoFile;
    source.type = 'video/mp4';
    video.appendChild(source);
    img.parentNode.replaceChild(video, img);
  });

  /* ---------- BEFORE/AFTER SLIDER ---------- */
  const sliders = document.querySelectorAll('[data-ba]');
  sliders.forEach(slider => {
    let dragging = false;
    // `--ba-inset` controls the `inset(0 X 0 0)` clip — 0 = show full before, 100% = show full after
    const setFromClientX = (clientX) => {
      const rect = slider.getBoundingClientRect();
      const xIntoSlider = Math.max(0, Math.min(rect.width, clientX - rect.left));
      const insetPct = 100 - (xIntoSlider / rect.width) * 100;
      slider.style.setProperty('--ba-inset', insetPct + '%');
    };
    // Initialize at 50%
    slider.style.setProperty('--ba-inset', '50%');

    const onDown = (e) => {
      dragging = true;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setFromClientX(x);
      e.preventDefault();
    };
    const onMove = (e) => {
      if (!dragging) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setFromClientX(x);
    };
    const onUp = () => { dragging = false; };

    slider.addEventListener('mousedown', onDown);
    slider.addEventListener('touchstart', onDown, { passive: false });
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
  });

  /* ---------- SMOOTH ANCHOR SCROLL ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- SET ACTIVE NAV LINK ---------- */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('is-active');
    }
  });

})();
