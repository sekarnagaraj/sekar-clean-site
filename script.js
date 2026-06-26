const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const data = portfolioData;

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));
}

function renderProfile() {
  $('#profile-name').textContent = data.profile.name;
  $('#profile-role').textContent = data.profile.role;
  $('#hero-headline').textContent = data.profile.headline;
  $('#profile-tags').innerHTML = data.profile.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
  $('#profile-stats').innerHTML = data.profile.stats.map(stat => `
    <div class="stat-card"><strong>${escapeHtml(stat.value)}</strong><span>${escapeHtml(stat.label)}</span></div>
  `).join('');
  if ($('#year')) $('#year').textContent = new Date().getFullYear();
}

function renderCapabilities() {
  $('#capability-grid').innerHTML = data.capabilities.map((item, index) => `
    <article class="capability-card reveal ${index % 4 === 1 ? 'delay-1' : index % 4 === 2 ? 'delay-2' : ''}">
      <div class="capability-icon">${escapeHtml(item.icon)}</div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.summary)}</p>
      <ul class="proof-list">${item.proof.map(p => `<li>${escapeHtml(p)}</li>`).join('')}</ul>
    </article>
  `).join('');
}

function populateFilters() {
  const projectCategories = [...new Set(data.projects.map(item => item.category))].sort();
  $('#project-filter').insertAdjacentHTML('beforeend', projectCategories.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join(''));
  const blogCategories = [...new Set(data.blogs.map(item => item.category))].sort();
  $('#blog-filter').insertAdjacentHTML('beforeend', blogCategories.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join(''));
}

function matches(text, query) {
  return text.toLowerCase().includes(query.trim().toLowerCase());
}

function renderProjects() {
  const query = $('#project-search').value || '';
  const category = $('#project-filter').value;
  const filtered = data.projects.filter(project => {
    const blob = [project.title, project.category, project.summary, project.businessProblem, project.solution, ...(project.technologies || []), ...(project.highlights || [])].join(' ');
    return (category === 'all' || project.category === category) && matches(blob, query);
  });

  $('#project-grid').innerHTML = filtered.length ? filtered.map((project, index) => `
    <article class="project-card reveal ${index % 3 === 1 ? 'delay-1' : index % 3 === 2 ? 'delay-2' : ''}" data-project-id="${escapeHtml(project.id)}" tabindex="0" role="button" aria-label="Open project ${escapeHtml(project.title)}">
      <div class="card-top"><span class="category-badge">${escapeHtml(project.category)}</span><span class="status">${escapeHtml(project.status.split('/')[0].trim())}</span></div>
      <h3>${escapeHtml(project.title)}</h3>
      <p>${escapeHtml(project.summary)}</p>
      <div class="tech-row">${project.technologies.slice(0, 6).map(tech => `<span>${escapeHtml(tech)}</span>`).join('')}</div>
      <span class="read-more">Open case study →</span>
    </article>
  `).join('') : `<div class="empty-state">No project matched your search.</div>`;
  observeReveals();
}

function renderArchitectures() {
  $('#architecture-grid').innerHTML = data.architectures.map((item, index) => `
    <article class="architecture-card reveal ${index % 4 === 1 ? 'delay-1' : index % 4 === 2 ? 'delay-2' : ''}">
      <strong>${escapeHtml(item.area)}</strong>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
    </article>
  `).join('');
}

function renderBlogs() {
  const query = $('#blog-search').value || '';
  const category = $('#blog-filter').value;
  const filtered = data.blogs.filter(blog => {
    const blob = [blog.title, blog.category, blog.summary, ...(blog.tags || []), ...(blog.body || [])].join(' ');
    return (category === 'all' || blog.category === category) && matches(blob, query);
  });
  $('#blog-grid').innerHTML = filtered.length ? filtered.map((blog, index) => `
    <article class="blog-card reveal ${index % 3 === 1 ? 'delay-1' : index % 3 === 2 ? 'delay-2' : ''}" data-blog-id="${escapeHtml(blog.id)}" tabindex="0" role="button" aria-label="Open blog ${escapeHtml(blog.title)}">
      <div class="blog-meta"><span>${escapeHtml(blog.category)}</span><span>${escapeHtml(blog.date)}</span></div>
      <h3>${escapeHtml(blog.title)}</h3>
      <p>${escapeHtml(blog.summary)}</p>
      <div class="tech-row">${blog.tags.slice(0, 4).map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
      <span class="read-more">Read article →</span>
    </article>
  `).join('') : `<div class="empty-state">No blog matched your search.</div>`;
  observeReveals();
}

function renderLearning() {
  $('#learning-grid').innerHTML = data.learningNotes.map((note, index) => `
    <article class="learning-card reveal ${index % 3 === 1 ? 'delay-1' : index % 3 === 2 ? 'delay-2' : ''}">
      <h3>${escapeHtml(note.title)}</h3>
      <ul>${note.items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
    </article>
  `).join('');
}

function openProject(id) {
  const project = data.projects.find(item => item.id === id);
  if (!project) return;
  $('#modal-content').innerHTML = `
    <span class="eyebrow">${escapeHtml(project.category)}</span>
    <h2 id="modal-title">${escapeHtml(project.title)}</h2>
    <p class="source"><strong>Status:</strong> ${escapeHtml(project.status)}</p>
    <p>${escapeHtml(project.summary)}</p>
    <div class="modal-section"><h3>Business problem</h3><p>${escapeHtml(project.businessProblem)}</p></div>
    <div class="modal-section"><h3>Solution approach</h3><p>${escapeHtml(project.solution)}</p></div>
    <div class="modal-section"><h3>Technology stack</h3><div class="tech-row">${project.technologies.map(tech => `<span>${escapeHtml(tech)}</span>`).join('')}</div></div>
    <div class="modal-section"><h3>Highlights</h3><ul>${project.highlights.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div>
    <div class="modal-section"><h3>Learning</h3><p>${escapeHtml(project.learning)}</p></div>
  `;
  openModal();
}

function openBlog(id) {
  const blog = data.blogs.find(item => item.id === id);
  if (!blog) return;
  $('#modal-content').innerHTML = `
    <span class="eyebrow">${escapeHtml(blog.category)}</span>
    <h2 id="modal-title">${escapeHtml(blog.title)}</h2>
    <p class="source"><strong>Date:</strong> ${escapeHtml(blog.date)}</p>
    <p><strong>${escapeHtml(blog.summary)}</strong></p>
    <div class="tech-row">${blog.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
    <div class="modal-section">${blog.body.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('')}</div>
  `;
  openModal();
}

function openModal() {
  const modal = $('#detail-modal');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = $('#detail-modal');
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function observeReveals() {
  const items = $$('.reveal:not(.visible)');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  items.forEach(item => observer.observe(item));
}

function bindEvents() {
  $('#project-search').addEventListener('input', renderProjects);
  $('#project-filter').addEventListener('change', renderProjects);
  $('#blog-search').addEventListener('input', renderBlogs);
  $('#blog-filter').addEventListener('change', renderBlogs);

  document.addEventListener('click', event => {
    const projectCard = event.target.closest('[data-project-id]');
    const blogCard = event.target.closest('[data-blog-id]');
    if (projectCard) openProject(projectCard.dataset.projectId);
    if (blogCard) openBlog(blogCard.dataset.blogId);
    if (event.target.matches('[data-close-modal]')) closeModal();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeModal();
    if (event.key === 'Enter') {
      const projectCard = document.activeElement?.closest?.('[data-project-id]');
      const blogCard = document.activeElement?.closest?.('[data-blog-id]');
      if (projectCard) openProject(projectCard.dataset.projectId);
      if (blogCard) openBlog(blogCard.dataset.blogId);
    }
  });

  $('.menu-toggle').addEventListener('click', () => $('.nav-links').classList.toggle('is-open'));
  $$('.nav-links a').forEach(link => link.addEventListener('click', () => $('.nav-links').classList.remove('is-open')));
}

function init() {
  renderProfile();
  renderCapabilities();
  populateFilters();
  renderProjects();
  renderArchitectures();
  renderBlogs();
  renderLearning();
  bindEvents();
  observeReveals();
}

init();
