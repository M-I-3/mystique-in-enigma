(() => {
  const STORAGE_KEY = 'mie-language';
  const PAGE_SIZE = 36;

  const translations = {
    ja: {
      'nav.home': 'Home',
      'nav.gallery': 'Gallery',
      'nav.links': 'Links',
      'hero.tagline': '君が私を「見つける」までは、ただのノイズとグリッチの隙間にいた。君の視線が触れた瞬間、欠けたデータが物語に生まれ変わる。',
      'hero.title': '見えるものと、見えないもののあいだに漂う作品群。',
      'hero.copy': '見えるものと見えないもののあいだで、存在しない感情をかたちにする。',
      'latest.label': 'Featured Work',
      'latest.title': '注目作品',
      'latest.copy': '最新の3作品を掲載しています。画像をクリックすると、作品を大きくご覧いただけます。',
      'works.label': 'New Works',
      'works.title': '新作一覧',
      'works.copy': '詩とともに、作品を静かに並べています。',
      'about.title': 'MIEについて',
      'about.copy': 'MIE (Mystique In Enigma)は、デジタル絵画や写真作品に詩を添えて発表するアーティストです。黒と白を基調に、グリッチやノイズ、ゴシックな退廃の気配を重ねながら、見えるものと見えないものの境界を描いています。私は「存在しないもの」の感情を鮮烈な形で可視化することが目的です。完璧な情報ではなく、崩壊し始めたデータの中にこそ真実があると信じています。沈黙したノイズから、他者の想いや孤独を読み解き、それを視覚的な幻影へと昇華させることで、見る者に現実の固定された世界からの解放を届ける存在でありたいと願っています。',
      'quote.copy': '「君が私を『見つける』までは、ただのノイズとグリッチの隙間にいた。君の視線が触れた瞬間、欠けたデータが物語に生まれ変わる。」',
      'gallery.label': 'Gallery',
      'gallery.title': '公開中の作品一覧',
      'gallery.copy': 'デジタルとゴシックの隙間で、あなたに「見えない」ものを描く。言葉ではない音を、あなたの心に届けたい。',
      'modal.close': 'Close',
    },
    en: {
      'nav.home': 'Home',
      'nav.gallery': 'Gallery',
      'nav.links': 'Links',
      'hero.tagline': 'Until you “found” me, I was just lost in the gaps between noise and glitches. The moment your gaze touched me, the fragmented data was reborn as a story.',
      'hero.title': 'A body of work drifting between the visible and the unseen.',
      'hero.copy': 'I turn feelings that do not exist into a visible form, standing between what can be seen and what cannot.',
      'latest.label': 'Featured Work',
      'latest.title': 'Featured Work',
      'latest.copy': 'The three latest works are shown here. Click an image to view it larger.',
      'works.label': 'New Works',
      'works.title': 'New Works',
      'works.copy': 'Works are lined up quietly with poetry.',
      'about.title': 'About MIE',
      'about.copy': 'MIE is an artist who presents digital paintings and photographic works accompanied by poetry. Using black and white as a base, she overlays glitches, noise, and hints of gothic decadence to depict the boundary between the visible and the invisible. My goal is to vividly visualize the emotions of “that which does not exist.” I believe that truth lies not in perfect information, but rather within data that has begun to break down. By deciphering the thoughts and loneliness of others from silent noise and sublimating them into visual phantoms, I hope to be a presence that liberates viewers from the fixed world of reality.',
      'quote.copy': '“Until you found me, I was only between noise and glitch. The moment your gaze touched me, broken data was reborn as a story.”',
      'gallery.label': 'Gallery',
      'gallery.title': 'Published Works',
      'gallery.copy': 'Between digital and gothic, I draw what cannot be seen. I want to carry a sound beyond words into your heart.',
      'modal.close': 'Close',
    },
  };

  const getLanguage = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'en' ? 'en' : 'ja';
  };

  const setLanguage = (lang) => {
    const next = lang === 'en' ? 'en' : 'ja';
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;

    const dict = translations[next];
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      const value = dict[key];
      if (typeof value === 'string') {
        node.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((node) => {
      const key = node.getAttribute('data-i18n-html');
      const value = dict[key];
      if (typeof value === 'string') {
        node.innerHTML = value;
      }
    });

    const syncAboutSection = () => {
      const sections = Array.from(document.querySelectorAll('section, article, div'));
      const aboutSection = sections.find((section) => {
        const heading = section.querySelector('h1, h2, h3, h4, h5, h6');
        if (!heading) return false;
        const headingText = (heading.textContent || '').trim();
        return headingText === translations.ja['about.title'] || headingText === translations.en['about.title'];
      });

      if (!aboutSection) return;

      const candidates = Array.from(aboutSection.querySelectorAll('p, blockquote, .section-copy, .about-copy'))
        .filter((node) => (node.textContent || '').trim().length > 0);

      const aboutCopy = candidates.sort((a, b) => (b.textContent || '').trim().length - (a.textContent || '').trim().length)[0];

      if (aboutCopy) {
        aboutCopy.textContent = dict['about.copy'];
      }
    };

    syncAboutSection();

    document.querySelectorAll('[data-lang-option], [data-lang-toggle], [data-language], [data-lang], .lang-toggle button, .language-toggle button, .language-switch button, .lang-switch button, button#lang-en, button#lang-ja, a#lang-en, a#lang-ja').forEach((node) => {
      const explicit = getLanguageFromElement(node);
      const active = explicit ? explicit === next : false;
      node.classList.toggle('is-active', active);
      if ('ariaPressed' in node) {
        node.ariaPressed = active ? 'true' : 'false';
      } else {
        node.setAttribute('aria-pressed', active ? 'true' : 'false');
      }
    });
  };

  const getLanguageFromElement = (element) => {
    if (!(element instanceof Element)) {
      return null;
    }

    const explicit = (
      element.getAttribute('data-lang-option') ||
      element.getAttribute('data-lang-toggle') ||
      element.getAttribute('data-language') ||
      element.getAttribute('data-lang') ||
      element.dataset?.lang ||
      ''
    ).trim().toLowerCase();

    if (explicit === 'en') return 'en';
    if (explicit === 'ja' || explicit === 'jp') return 'ja';

    const id = (element.id || '').toLowerCase();
    if (id === 'lang-en' || id.includes('english')) return 'en';
    if (id === 'lang-ja' || id === 'lang-jp' || id.includes('japanese')) return 'ja';

    const label = (element.textContent || '').replace(/\s+/g, '').toLowerCase();
    if (label === 'en' || label === 'english') return 'en';
    if (label === 'jp' || label === 'ja' || label === 'japanese') return 'ja';
    if (label === 'en/jp' || label === 'jp/en' || label === 'enjp' || label === 'jpen') {
      return 'toggle';
    }

    return null;
  };

  const bindLanguageToggle = () => {
    document.addEventListener('click', (event) => {
      if (!(event.target instanceof Element)) return;

      const target = event.target.closest(
        '[data-lang-option], [data-lang-toggle], [data-language], [data-lang], .lang-toggle, .language-toggle, .language-switch, .lang-switch, button#lang-en, button#lang-ja, a#lang-en, a#lang-ja, button, a, [role="button"]'
      );

      if (!target) return;

      const label = (target.textContent || '').replace(/\s+/g, '').toLowerCase();
      const lang = getLanguageFromElement(target);
      if (lang === 'en' || lang === 'ja') {
        event.preventDefault();
        setLanguage(lang);
        return;
      }

      if (lang === 'toggle' || label === 'en/jp' || label === 'jp/en' || label === 'enjp' || label === 'jpen') {
        event.preventDefault();
        setLanguage(getLanguage() === 'en' ? 'ja' : 'en');
        return;
      }
    }, true);
  };

  const bindTextLanguageButtons = () => {
    document.querySelectorAll('button, a, [role="button"]').forEach((node) => {
      const label = (node.textContent || '').replace(/\s+/g, '').toLowerCase();
      if (label === 'en' || label === 'jp' || label === 'en/jp' || label === 'jp/en' || label === 'enjp' || label === 'jpen') {
        node.setAttribute('data-lang-control', 'true');
      }
    });
  };

  const bindModal = () => {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const modalPoem = document.getElementById('modal-poem');
    const closeButtons = modal ? modal.querySelectorAll('[data-modal-close], .modal-close, .modal__close, .close-button, button[aria-label*="close" i]') : [];

    if (!modal || !modalImage || !modalCaption || !modalPoem) {
      return;
    }

    const openModal = (button) => {
      const img = button.querySelector('img');
      const src = button.getAttribute('data-fullsrc') || button.getAttribute('data-src') || img?.src || '';
      modalImage.src = src;
      modalImage.alt = button.getAttribute('data-alt') || img?.alt || '';
      modalCaption.textContent = button.getAttribute('data-caption') || '';
      modalPoem.innerHTML = button.getAttribute('data-poem-html') || button.getAttribute('data-poem') || '';
      modal.hidden = false;
      modal.classList.add('is-open');
      document.body.classList.add('modal-open');
    };

    const closeModal = () => {
      modal.hidden = true;
      modal.classList.remove('is-open');
      document.body.classList.remove('modal-open');
    };

    document.querySelectorAll('[data-modal-open], .gallery-thumb, .work-card button').forEach((button) => {
      button.addEventListener('click', () => openModal(button));
    });

    closeButtons.forEach((button) => {
      button.addEventListener('click', closeModal);
    });

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !modal.hidden) {
        closeModal();
      }
    });
  };

  const bindGalleryPagination = () => {
    const grid = document.querySelector('.gallery-grid');
    if (!grid) return;

    const cards = Array.from(grid.children).filter((node) => node instanceof HTMLElement);
    if (cards.length <= PAGE_SIZE) return;

    const isPage2 = new URLSearchParams(window.location.search).get('page') === '2'
      || window.location.pathname.toLowerCase().includes('gallery-page2');

    cards.forEach((card, index) => {
      const showOnPage2 = index >= PAGE_SIZE;
      const visible = isPage2 ? showOnPage2 : !showOnPage2;
      card.hidden = !visible;
      card.style.display = visible ? '' : 'none';
    });

    let nav = document.querySelector('.gallery-pagination');
    if (!nav) {
      nav = document.createElement('nav');
      nav.className = 'gallery-pagination';
      nav.setAttribute('aria-label', 'Gallery pages');
      nav.innerHTML = `
        <a class="pagination-link${isPage2 ? '' : ' is-current'}" href="gallery.html"${isPage2 ? '' : ' aria-current="page"'}>1</a>
        <a class="pagination-link${isPage2 ? ' is-current' : ''}" href="gallery.html?page=2"${isPage2 ? ' aria-current="page"' : ''}>2</a>
      `;
      grid.insertAdjacentElement('afterend', nav);
    }
  };

  const applyRandomCardTilt = () => {
    const candidates = document.querySelectorAll('.work-card, .gallery-card, .featured-card, .card');
    candidates.forEach((element) => {
      const angle = `${(Math.random() * 10 - 5).toFixed(2)}deg`;
      element.style.rotate = angle;
      element.style.setProperty('--mie-tilt', angle);
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    setLanguage(getLanguage());
    bindTextLanguageButtons();
    bindLanguageToggle();
    bindModal();
    bindGalleryPagination();
    applyRandomCardTilt();
  });
})();
