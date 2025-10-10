/* Simple client-side project search and tag filter
   - Fetches /assets/projects.json
   - Renders tag chips and results
   - Supports text search (title+excerpt+tags) and clicking tags to filter
*/
(function () {
  const INDEX_URL = '/assets/projects.json';

  function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
  function qsa(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  let index = [];
  let activeTag = null;

  function renderTags(tags, container) {
    container.innerHTML = '';
    tags.forEach(tag => {
      const btn = document.createElement('button');
      btn.className = 'tag-chip';
      btn.type = 'button';
      btn.textContent = tag;
      btn.addEventListener('click', () => {
        if (activeTag === tag) activeTag = null;
        else activeTag = tag;
        qsa('#projects-tags .tag-chip').forEach(el => el.classList.toggle('active', el.textContent === activeTag));
        doSearch(qs('#projects-query').value.trim());
      });
      container.appendChild(btn);
    });
  }

  function makeResultItem(item) {
    const el = document.createElement('div');
    el.className = 'project-item';
    const a = document.createElement('a');
    a.href = item.url;
    a.textContent = item.title;
    a.className = 'project-title';
    el.appendChild(a);
    const p = document.createElement('p');
    p.className = 'project-excerpt';
    p.textContent = item.excerpt;
    el.appendChild(p);
    if (item.tags && item.tags.length) {
      const row = document.createElement('div');
      row.className = 'project-tags';
      item.tags.forEach(t => {
        const span = document.createElement('button');
        span.type = 'button';
        span.className = 'tag-chip small';
        span.textContent = t;
        span.addEventListener('click', () => {
          // emulate clicking on the global tag to filter
          const global = qsa('#projects-tags .tag-chip').find(el => el.textContent === t);
          if (global) global.click();
        });
        row.appendChild(span);
      });
      el.appendChild(row);
    }
    return el;
  }

  function doSearch(query) {
    const results = document.getElementById('projects-results');
    if (!results) return;
    let q = (query || '').toLowerCase();
    const filtered = index.filter(item => {
      const hay = (item.title + ' ' + (item.excerpt||'') + ' ' + (item.tags||[]).join(' ')).toLowerCase();
      const textMatch = q === '' || hay.indexOf(q) !== -1;
      const tagMatch = !activeTag || (item.tags && item.tags.indexOf(activeTag) !== -1);
      return textMatch && tagMatch;
    });
    results.innerHTML = '';
    if (!filtered.length) {
      results.textContent = 'No projects found.';
      return;
    }
    filtered.forEach(item => results.appendChild(makeResultItem(item)));
  }

  function init() {
    const queryInput = qs('#projects-query');
    const tagsContainer = qs('#projects-tags');
    const results = qs('#projects-results');
    if (!queryInput || !tagsContainer || !results) return;

    fetch(INDEX_URL).then(r => r.json()).then(data => {
      index = data || [];
      // collect unique tags
      const allTags = Array.from(new Set(index.flatMap(i => i.tags || []))).sort();
      renderTags(allTags, tagsContainer);
      doSearch('');
    }).catch(err => {
      console.error('Could not load project index', err);
      qs('#projects-results').textContent = 'Could not load project index.';
    });

    let debounce;
    queryInput.addEventListener('input', (e) => {
      clearTimeout(debounce);
      debounce = setTimeout(() => doSearch(e.target.value.trim()), 150);
    });
  }

  // Initialize when DOM ready
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
