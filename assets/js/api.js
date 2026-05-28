// ─── PROKITS STORE — API CONNECTION ───────────────────────
const PROKITS_API = 'https://prokits-backend-production.up.railway.app';

// ── FETCH PRODUCTS ────────────────────────────────────────
async function fetchProducts(params = {}) {
  try {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${PROKITS_API}/api/products?${query}`);
    if (!res.ok) throw new Error('API error');
    return await res.json();
  } catch (err) {
    console.warn('API fetch failed, using static data:', err.message);
    return null;
  }
}

async function fetchProduct(id) {
  try {
    const res = await fetch(`${PROKITS_API}/api/products/${id}`);
    if (!res.ok) throw new Error('Not found');
    return await res.json();
  } catch (err) {
    return null;
  }
}

async function searchProducts(q) {
  try {
    const res = await fetch(`${PROKITS_API}/api/products/search/${encodeURIComponent(q)}`);
    if (!res.ok) throw new Error('Search error');
    return await res.json();
  } catch (err) {
    return [];
  }
}

// ── RENDER API PRODUCT CARD ───────────────────────────────
function renderAPIProductCard(product, linkPrefix = '') {
  const photo = product.photos && product.photos.length > 0 ? product.photos[0].url : null;
  const sport = product.sport || 'football';
  const emoji = sport === 'nfl' ? '🏈' : sport === 'nba' ? '🏀' : '⚽';
  const url = `${linkPrefix}product.html?id=${product.id}&sport=${sport}&league=${encodeURIComponent(product.league)}&team=${encodeURIComponent(product.team)}&emoji=${encodeURIComponent(emoji)}&price=${product.price}&season=${encodeURIComponent(product.season||'2025/26')}&kit=${encodeURIComponent(product.kit_type||'Home')}`;

  return `<div class="team-card anim">
    ${photo
      ? `<img src="${photo}" style="width:100%;height:140px;object-fit:cover;margin-bottom:10px;border:1px solid rgba(255,255,255,.06)">`
      : `<div style="width:100%;height:140px;background:var(--black-4);display:flex;align-items:center;justify-content:center;font-size:48px;margin-bottom:10px">${emoji}</div>`
    }
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px">
      <div class="tc-name">${product.team}</div>
      ${product.is_new ? '<span class="badge badge-new">New</span>' : product.is_sale ? '<span class="badge badge-hot">Sale</span>' : ''}
    </div>
    <div class="tc-jersey">${product.kit_type} · ${product.season || '2025/26'} · ${product.version}</div>
    <div style="display:flex;align-items:baseline;gap:8px;margin-top:8px">
      <div class="tc-price">$${parseFloat(product.price).toFixed(0)}</div>
      ${product.original_price ? `<div style="font-size:12px;color:var(--white-dim);text-decoration:line-through">$${parseFloat(product.original_price).toFixed(0)}</div>` : ''}
    </div>
    <div style="display:flex;gap:6px;margin-top:10px">
      <a href="${url}" class="tc-btn" style="opacity:1;transform:none;display:block;text-decoration:none;text-align:center;flex:1">View Details</a>
      <button style="background:rgba(201,168,76,.15);border:1px solid rgba(201,168,76,.2);color:var(--gold);padding:6px 12px;font-size:16px;cursor:pointer" onclick="addToCart('${product.team.replace(/'/g,"\\'")} - ${product.kit_type}','${product.season||'2025/26'}',${parseFloat(product.price).toFixed(0)},'${emoji}')">+</button>
    </div>
  </div>`;
}

// ── LOAD API PRODUCTS INTO A GRID ─────────────────────────
async function loadAPIProducts(containerId, params = {}, linkPrefix = '') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '<div class="loading" style="padding:40px;text-align:center;color:var(--white-dim)"><div class="spinner" style="display:inline-block;width:24px;height:24px;border:2px solid rgba(201,168,76,.2);border-top-color:var(--gold);border-radius:50%;animation:spin .8s linear infinite;vertical-align:middle;margin-right:10px"></div>Loading jerseys...</div>';

  const data = await fetchProducts(params);

  if (!data || !data.products || data.products.length === 0) {
    container.innerHTML = '<div style="padding:40px;text-align:center;color:var(--white-dim);font-family:\'Barlow Condensed\',sans-serif;letter-spacing:2px">No products found</div>';
    return;
  }

  container.innerHTML = `<div class="teams-grid">${data.products.map(p => renderAPIProductCard(p, linkPrefix)).join('')}</div>`;
  if (typeof initAnimations === 'function') initAnimations();
}

// ── HOMEPAGE FEATURED PRODUCTS ────────────────────────────
async function loadFeaturedProducts(containerId, linkPrefix = 'pages/') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const data = await fetchProducts({ limit: 8, featured: true });
  const fallback = await fetchProducts({ limit: 8 });
  const products = (data?.products?.length ? data.products : fallback?.products) || [];

  if (!products.length) {
    container.style.display = 'none';
    return;
  }

  container.innerHTML = `
    <div class="sec-row" style="padding:0 40px;margin-bottom:32px">
      <div>
        <div class="sec-tag">From The Store</div>
        <div class="sec-title">LATEST <span>JERSEYS</span></div>
      </div>
      <a href="${linkPrefix}football.html" class="view-all">View All →</a>
    </div>
    <div class="teams-grid" style="padding:0 40px">${products.map(p => renderAPIProductCard(p, linkPrefix)).join('')}</div>
  `;
  if (typeof initAnimations === 'function') initAnimations();
}
