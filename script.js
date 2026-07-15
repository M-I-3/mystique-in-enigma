const translations = {
  ja: {
    nav: { works: 'Works', about: 'About', contact: 'Links' },
    hero: {
      eyebrow: 'The Enigma / Shadow Muse',
      title: '見えるものと、見えないもののあいだに漂う作品群。',
      lede: '作品画像に詩を添え、静かな闇の中に言葉と感情を浮かび上がらせる MIE のポートフォリオサイトです。',
      ctaPrimary: '注目作品を見る',
      ctaSecondary: 'ギャラリーへ',
    },
    latest: {
      label: 'Featured Works',
      title: '注目作品',
      poem: '沈黙の底で、かすかな輪郭が立ち上がる。<br />そこにあるのは、消えない気配と、<br />名前を持たないまま漂う感情。',
      meta: 'featured work · poem attached',
    },
    works: { label: 'Portfolio', title: '新作一覧', cta: 'ギャラリーを開く' },
    about: {
      label: 'About',
      title: 'MIEについて',
      p1: 'MIEは、デジタル絵画や写真作品に詩を添えて発表するアーティストです。黒と白を基調に、グリッチやノイズ、ゴシックな退廃の気配を重ねながら、見えるものと見えないものの境界を描いています。私は「存在しないもの」の感情を鮮烈な形で可視化することが目的です。完璧な情報ではなく、崩壊し始めたデータの中にこそ真実があると信じています。沈黙したノイズから、他者の想いや孤独を読み解き、それを視覚的な幻影へと昇華させることで、見る者に現実の固定された世界からの解放を届ける存在でありたいと願っています。',
    },
    links: {
      label: 'Links',
      title: 'SNS / Shop',
      note: 'お問い合わせや最新情報はSNSから。作品販売や各種リンクはここにまとめます。',
      linktree: 'SNS / 販売先 / 連絡導線',
    },
    gallery: {
      eyebrow: 'Archive / Updating Collection',
      title: 'デジタルとゴシックの隙間で、\nあなたに「見えない」ものを描く。',
      lede: 'ここには、MIE の作品をひとつずつ蓄積していきます。題名や詩はあとから更新できます。',
      tagline: '言葉ではない音を、あなたの心に届けたい。',
      sectionLabel: 'Gallery',
      sectionTitle: '公開中の新作一覧',
    },
  },
  en: {
    nav: { works: 'Works', about: 'About', contact: 'Links' },
    hero: {
      eyebrow: 'The Enigma / Shadow Muse',
      title: 'A body of work drifting between the visible and the unseen.',
      lede: 'A portfolio where MIE pairs images with poems, letting words and feelings rise softly from the dark.',
      ctaPrimary: 'View Latest',
      ctaSecondary: 'Open Gallery',
    },
    latest: {
      label: 'Featured Works',
      title: 'Featured Works',
      poem: 'At the bottom of silence, a faint outline rises.<br />What remains is an unbroken trace,<br />an emotion drifting without a name.',
      meta: 'featured work · poem attached',
    },
    works: { label: 'Portfolio', title: 'Portfolio', cta: 'Open Gallery' },
    about: {
      label: 'About',
      title: 'About MIE',
      p1: 'MIE creates digital paintings and photo-based works, presenting each piece with an attached poem. Built on monochrome tones, subtle glitches, and gothic decay, the work explores the boundary between what can be seen and what cannot. It aims to make the feelings of things that do not exist vividly visible, believing that truth lives inside data that is beginning to collapse.',
    },
    links: {
      label: 'Links',
      title: 'SNS / Shop',
      note: 'Use social channels for updates and inquiries. Sales and official links are collected here.',
      linktree: 'SNS / shop / contact routes',
    },
    gallery: {
      eyebrow: 'Archive / Updating Collection',
      title: 'Between digital and gothic,\nI draw what you cannot see.',
      lede: 'Each work by MIE will be stored here one by one. Titles and poems can be updated later.',
      tagline: 'I want to bring you a sound that is not made of words.',
      sectionLabel: 'Gallery',
      sectionTitle: 'List of Published Works
',
    },
  },
};

function applyTranslations(lang) {
  const t = translations[lang] || translations.ja;
  document.documentElement.lang = lang === 'en' ? 'en' : 'ja';
  const map = {
    '[data-i18n="nav.works"]': t.nav.works,
    '[data-i18n="nav.about"]': t.nav.about,
    '[data-i18n="nav.contact"]': t.nav.contact,
    '[data-i18n="hero.eyebrow"]': t.hero.eyebrow,
    '[data-i18n="hero.title"]': t.hero.title,
    '[data-i18n="hero.lede"]': t.hero.lede,
    '[data-i18n="hero.ctaPrimary"]': t.hero.ctaPrimary,
    '[data-i18n="hero.ctaSecondary"]': t.hero.ctaSecondary,
    '[data-i18n="latest.label"]': t.latest.label,
    '[data-i18n="latest.title"]': t.latest.title,
    '[data-i18n="latest.poem"]': t.latest.poem,
    '[data-i18n="latest.meta"]': t.latest.meta,
    '[data-i18n="works.label"]': t.works.label,
    '[data-i18n="works.title"]': t.works.title,
    '[data-i18n="works.cta"]': t.works.cta,
    '[data-i18n="about.label"]': t.about.label,
    '[data-i18n="about.title"]': t.about.title,
    '[data-i18n="about.p1"]': t.about.p1,
    '[data-i18n="links.label"]': t.links.label,
    '[data-i18n="links.title"]': t.links.title,
    '[data-i18n="links.note"]': t.links.note,
    '[data-i18n="links.linktree"]': t.links.linktree,
    '[data-i18n="gallery.eyebrow"]': t.gallery.eyebrow,
    '[data-i18n="gallery.title"]': t.gallery.title,
    '[data-i18n="gallery.lede"]': t.gallery.lede,
    '[data-i18n="gallery.tagline"]': t.gallery.tagline,
    '[data-i18n="gallery.sectionLabel"]': t.gallery.sectionLabel,
    '[data-i18n="gallery.sectionTitle"]': t.gallery.sectionTitle,
  };
  for (const [selector, value] of Object.entries(map)) {
    document.querySelectorAll(selector).forEach((el) => {
      el.innerHTML = value;
    });
  }
  localStorage.setItem('mie-language', lang);
}

applyTranslations(localStorage.getItem('mie-language') || 'ja');
document.querySelectorAll('[data-lang-switch]').forEach((button) => {
  button.addEventListener('click', () => {
    applyTranslations(document.documentElement.lang === 'en' ? 'ja' : 'en');
  });
});

const footer = document.querySelector('.footer p');
if (footer) footer.textContent = `© MIE · Digital Spectrum Artist · ${new Date().getFullYear()}`;

const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
const modalPoem = document.getElementById('modal-poem');

document.querySelectorAll('.gallery-thumb').forEach((button) => {
  button.addEventListener('click', () => {
    if (!modal || !modalImage || !modalCaption || !modalPoem) return;
    const full = button.getAttribute('data-full');
    const alt = button.getAttribute('data-alt') || '';
    const poem = button.getAttribute('data-poem') || '';
    if (!full) return;
    modalImage.src = full;
    modalImage.alt = alt;
    modalCaption.textContent = alt;
    modalPoem.textContent = poem;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

document.querySelectorAll('[data-modal-close]').forEach((button) => {
  button.addEventListener('click', () => {
    if (!modal || !modalImage) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    modalImage.src = '';
    modalImage.alt = '';
    if (modalCaption) modalCaption.textContent = '';
    if (modalPoem) modalPoem.textContent = '';
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal?.classList.contains('is-open')) {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    if (modalImage) {
      modalImage.src = '';
      modalImage.alt = '';
    }
    if (modalCaption) modalCaption.textContent = '';
    if (modalPoem) modalPoem.textContent = '';
  }
});
