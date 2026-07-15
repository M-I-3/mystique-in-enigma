(() => {
  const translations = {
    ja: {
      'nav.home': 'Home',
      'nav.gallery': 'Gallery',
      'nav.links': 'Links',
      'hero.tagline': 'Digital Gothic / Glitch Grunge / MIE',
      'hero.title': 'MIE',
      'hero.copy': '見えるものと見えないもののあいだで、存在しない感情をかたちにする。',
      'latest.label': 'Featured Work',
      'latest.title': '注目作品',
      'latest.copy': '最新の3作品を掲載しています。画像をクリックすると、作品を大きくご覧いただけます。',
      'works.label': 'New Works',
      'works.title': '新作一覧',
      'works.copy': '詩とともに、作品を静かに並べています。',
      'about.title': 'MIEについて',
      'about.copy': '私は「存在しないもの」の感情を鮮烈な形で可視化することが目的です。完璧な情報ではなく、崩壊し始めたデータの中にこそ真実があると信じています。沈黙したノイズから、他者の想いや孤独を読み解き、それを視覚的な幻影へと昇華させることで、見る者に現実の固定された世界からの解放を届ける存在でありたいと願っています。',
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
      'hero.tagline': 'Digital Gothic / Glitch Grunge / MIE',
      'hero.title': 'MIE',
      'hero.copy': 'I turn feelings that do not exist into a visible form, standing between what can be seen and what cannot.',
      'latest.label': 'Featured Work',
      'latest.title': 'Featured Work',
      'latest.copy': 'The three latest works are shown here. Click an image to view it larger.',
      'works.label': 'New Works',
      'works.title': 'New Works',
      'works.copy': 'Works are lined up quietly with poetry.',
      'about.title': 'About MIE',
      'about.copy': 'My purpose is to make the feelings of what does not exist vivid and visible. I believe truth lives not in perfect information, but in data that has already begun to collapse. By reading other people’s thoughts and loneliness from silent noise and elevating them into visual phantoms, I want to offer viewers a release from the fixed world of reality.',
      'quote.copy': '“Until you found me, I was only between noise and glitch. The moment your gaze touched me, broken data was reborn as a story.”',
      'gallery.label': 'Gallery',
      'gallery.title': 'Published Works',
      'gallery.copy': 'Between digital and gothic, I draw what cannot be seen. I want to carry a sound beyond words into your heart.',
      'modal.close': 'Close',
    },
  };

  const storageKey = 'mie-language';
  const getCurrentLanguage = () => localStorage.getItem(storageKey) === 'en' ? 'en' : 'ja';

  const applyLanguage = (lang) => {
    const dict = translations[lang] || translations.ja;
    document.documentElement.lang = lang;

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

    document.querySelectorAll('[data-lang-option]').forEach((button) => {
      const active = button.getAttribute('data-lang-option') === lang;
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
      button.classList.toggle('is-active', active);
    });

    document.querySelectorAll('[data-lang-label]').forEach((node) => {
      const key = node.getAttribute('data-lang-label');
      const value = dict[key];
      if (typeof value === 'string') {
        node.textContent = value;
      }
    });
  };

  const bindLanguageToggle = () => {
    const buttons = document.querySelectorAll('[data-lang-option], [data-lang-toggle], .lang-toggle button, .language-toggle button');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang-option')
          || button.getAttribute('data-lang-toggle')
          || button.dataset.lang
          || (button.id === 'lang-en' ? 'en' : 'ja');
        localStorage.setItem(storageKey, lang === 'en' ? 'en' : 'ja');
        applyLanguage(lang === 'en' ? 'en' : 'ja');
      });
    });
  };

  const bindModal = () => {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const modalPoem = document.getElementById('modal-poem');
    const closeButton = document.querySelector('[data-modal-close], .modal-close');

    if (!modal || !modalImage || !modalCaption || !modalPoem) {
      return;
    }

    const openModal = (button) => {
      const src = button.getAttribute('data-fullsrc') || button.getAttribute('data-src') || button.querySelector('img')?.src;
      if (src) {
        modalImage.src = src;
      }
      modalImage.alt = button.getAttribute('data-alt') || button.querySelector('img')?.alt || '';
      modalCaption.textContent = button.getAttribute('data-caption') || '';
      modalPoem.textContent = button.getAttribute('data-poem') || '';
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

    if (closeButton) {
      closeButton.addEventListener('click', closeModal);
    }

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

  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(getCurrentLanguage());
    bindLanguageToggle();
    bindModal();
  });
})();
