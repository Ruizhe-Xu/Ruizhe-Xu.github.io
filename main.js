(() => {
  'use strict';
  const site = window.ACADEMIC_SITE;
  if (!site) { console.error('site-data.js did not load'); return; }
  const p = site.person || {};
  const $ = id => document.getElementById(id);
  const node = (tag, className, value) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (value != null) el.textContent = value;
    return el;
  };
  const validUrl = url => typeof url === 'string' && /^(https?:\/\/|mailto:|assets\/|\.\/)/i.test(url);
  $('english-name').textContent = p.englishName || '';
  $('chinese-name').textContent = p.chineseName || '';
  $('footer-name').textContent = p.englishName || '';
  document.title = p.englishName || 'Academic Homepage';
  $('affiliation').textContent = p.affiliation || '';
  $('affiliation').hidden = !p.affiliation;

  
  if (p.email) {
    const infoRow = node('div', 'affiliation-email-row');

    const affiliation = $('affiliation');
    affiliation.before(infoRow);
    infoRow.append(affiliation);

    const emailRow = node('p', 'email-address');
    emailRow.append(document.createTextNode('Email: '));

    const emailLink = node('a', '', p.email);
    emailLink.href = 'mailto:' + p.email;

    emailRow.append(emailLink);
    infoRow.append(emailRow);
  }

  const paragraphs = Array.isArray(p.biography) ? p.biography : [p.biography || ''];
  paragraphs.forEach(text => {
  if (!text.trim()) return;

  const p = document.createElement('p');
  const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;

  let lastIndex = 0;

  for (const match of text.matchAll(linkPattern)) {
    p.append(document.createTextNode(
      text.slice(lastIndex, match.index)
    ));

    const a = document.createElement('a');
    a.textContent = match[1];
    a.href = match[2];
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    p.append(a);
    lastIndex = match.index + match[0].length;
  }

  p.append(document.createTextNode(
    text.slice(lastIndex)
  ));

  $('biography').append(p);
  });
  (p.links || []).forEach(link => {
    if (!validUrl(link.url)) return;
    const a = node('a', '', link.label + ' ↗');
    a.href = link.url;
    if (/^https?:\/\//i.test(link.url)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    $('profile-links').append(a);
  });

/* ===== Lightbox ===== */

const lightbox = document.createElement('dialog');
lightbox.className = 'image-lightbox';

const lightboxImage = document.createElement('img');
lightboxImage.className = 'lightbox-image';
lightboxImage.alt = '';

const closeButton = document.createElement('button');
closeButton.type = 'button';
closeButton.className = 'lightbox-close';
closeButton.textContent = '×';
closeButton.setAttribute('aria-label', 'Close image');

const lightboxCaption = document.createElement('p');
lightboxCaption.className = 'lightbox-caption';

lightbox.append(
  closeButton,
  lightboxImage,
  lightboxCaption
);
document.body.append(lightbox);

// Open Lightbox
function openLightbox(src, alt, caption) {
  lightboxImage.src = src;
  lightboxImage.alt = alt || '';

  lightboxCaption.textContent = caption || '';
  lightboxCaption.hidden = !caption;

  lightbox.showModal();
}


// Close button
closeButton.addEventListener('click', () => {
  lightbox.close();
});

// Click outside the image to close
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

// Esc closes the dialog automatically
  const portrait = $('portrait');
  if (!p.photo) $('portrait-wrap').hidden = true;
  else {
    portrait.src = p.photo;
    portrait.onerror = () => { $('portrait-wrap').hidden = true; };
  }
  (site.papers || []).forEach((paper, index) => {
    const article = node('article', 'publication');
    
if (paper.image) {
  const imageButton = document.createElement('button');
  imageButton.type = 'button';
  imageButton.className = 'paper-image-trigger';

  imageButton.setAttribute(
    'aria-label',
    'Enlarge image: ' + paper.title
  );

  const image = node('img', 'paper-image');
  image.src = paper.image;
  image.alt = paper.title || 'Research illustration';
  image.loading = 'lazy';

  image.onerror = () => {
    imageButton.hidden = true;
  };

  imageButton.append(image);

  imageButton.addEventListener('click', () => {
  openLightbox(
    paper.image,
    image.alt,
    paper.imageCaption
  );
  });

  article.append(imageButton);
}

    const content = node('div', 'paper-content');
    if (paper.venue) content.append(node('div', 'paper-venue', paper.venue));
    content.append(node('h3', '', paper.title || 'Untitled'));
    if (paper.authors) {
  const authors = node('p', 'authors');
  const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;

  let lastIndex = 0;

  for (const match of paper.authors.matchAll(linkPattern)) {
    authors.append(document.createTextNode(
      paper.authors.slice(lastIndex, match.index)
    ));

    const a = document.createElement('a');
    a.textContent = match[1];
    a.href = match[2];
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    authors.append(a);
    lastIndex = match.index + match[0].length;
  }

  authors.append(document.createTextNode(
    paper.authors.slice(lastIndex)
  ));

  content.append(authors);
  } 
    if (paper.description) content.append(node('p', '', paper.description));
    const resources = node('div', 'resources');
    if (paper.abstract) {
      const details = node('details');
      details.append(node('summary', '', 'Abstract'));
      details.append(node('p', '', paper.abstract));
      resources.append(details);
    }
    (paper.resources || []).forEach(r => {
      if (!validUrl(r.url)) return;
      const a = node('a', '', r.label);
      a.href = r.url;
      if (/^https?:\/\//i.test(r.url)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
      resources.append(a);
    });
    content.append(resources);
    article.append(content);
    $('publication-list').append(article);
  });
})();
