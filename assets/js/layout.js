// ─── SHARED LAYOUT ────────────────────────────────────────
function renderNav(activePage) {
  return `
  <nav>
    <div class="nav-top">
      <a class="nav-logo" href="../index.html">Pro<span>Kits</span></a>
      <div class="nav-search">
        <input type="text" placeholder="🔍 Search jerseys, teams..." id="searchInput">
        <a href="../pages/football.html" class="btn btn-gold" style="padding:9px 18px;font-size:11px;text-decoration:none" onclick="sessionStorage.setItem('search', document.getElementById('searchInput').value)">Search</a>
      </div>
      <div class="nav-actions">
        <a href="../pages/cart.html" class="nav-cart" id="cartCount">🛒 Cart (0)</a>
      </div>
    </div>
    <div class="nav-bottom">
      <a class="nav-link ${activePage==='home'?'active':''}" href="../index.html">Home</a>
      <div class="nav-dropdown">
        <a class="nav-link ${activePage==='football'?'active':''}" href="../pages/football.html">⚽ Football ▾</a>
        <div class="dropdown-menu">
          <a href="../pages/football.html#all">All Clubs</a>
          <a href="../pages/football.html#england">🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League</a>
          <a href="../pages/football.html#spain">🇪🇸 La Liga</a>
          <a href="../pages/football.html#france">🇫🇷 Ligue 1</a>
          <a href="../pages/football.html#germany">🇩🇪 Bundesliga</a>
          <a href="../pages/football.html#italy">🇮🇹 Serie A</a>
          <a href="../pages/football.html#portugal">🇵🇹 Liga NOS</a>
          <a href="../pages/football.html#netherlands">🇳🇱 Eredivisie</a>
          <a href="../pages/football.html#international">🌍 National Teams</a>
        </div>
      </div>
      <div class="nav-dropdown">
        <a class="nav-link ${activePage==='nfl'?'active':''}" href="../pages/nfl.html">🏈 NFL ▾</a>
        <div class="dropdown-menu">
          <a href="../pages/nfl.html#all">All 32 Teams</a>
          <a href="../pages/nfl.html#popular">🔥 Most Popular</a>
          <a href="../pages/nfl.html#afc">AFC Teams</a>
          <a href="../pages/nfl.html#nfc">NFC Teams</a>
        </div>
      </div>
      <div class="nav-dropdown">
        <a class="nav-link ${activePage==='nba'?'active':''}" href="../pages/nba.html">🏀 NBA ▾</a>
        <div class="dropdown-menu">
          <a href="../pages/nba.html#all">All 30 Teams</a>
          <a href="../pages/nba.html#popular">🔥 Most Popular</a>
          <a href="../pages/nba.html#east">Eastern Conference</a>
          <a href="../pages/nba.html#west">Western Conference</a>
        </div>
      </div>
      <a class="nav-link ${activePage==='about'?'active':''}" href="../pages/about.html">About</a>
      <a class="nav-link ${activePage==='contact'?'active':''}" href="../pages/contact.html">Contact</a>
      <a class="nav-link ${activePage==='faq'?'active':''}" href="../pages/faq.html">FAQ</a>
      <a class="nav-link ${activePage==='shipping'?'active':''}" href="../pages/shipping.html">Shipping</a>
      <a class="nav-link ${activePage==='returns'?'active':''}" href="../pages/returns.html">Returns</a>
      <a class="nav-link ${activePage==='size-guide'?'active':''}" href="../pages/size-guide.html">Size Guide</a>
      <a class="nav-link ${activePage==='track'?'active':''}" href="../pages/track.html">Track Order</a>
    </div>
  </nav>`;
}

function renderFooter() {
  return `
  <footer>
    <div class="footer-grid">
      <div>
        <div class="footer-logo">Pro<span>Kits</span> Store</div>
        <p class="footer-desc">Premium quality sports jerseys — Football, NFL, NBA. Shipped worldwide. Thailand AAA grade quality guaranteed.</p>
        <div class="socials">
          <a class="social" href="#">TK</a>
          <a class="social" href="#">IG</a>
          <a class="social" href="#">FB</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Shop</div>
        <ul class="footer-links">
          <li><a href="../pages/football.html">Football Jerseys</a></li>
          <li><a href="../pages/nfl.html">NFL Jerseys</a></li>
          <li><a href="../pages/nba.html">NBA Jerseys</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Support</div>
        <ul class="footer-links">
          <li><a href="../pages/shipping.html">Shipping Info</a></li>
          <li><a href="../pages/returns.html">Returns Policy</a></li>
          <li><a href="../pages/size-guide.html">Size Guide</a></li>
          <li><a href="../pages/track.html">Track Order</a></li>
          <li><a href="../pages/contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Company</div>
        <ul class="footer-links">
          <li><a href="../pages/about.html">About Us</a></li>
          <li><a href="../pages/faq.html">FAQ</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">© 2025 ProKits Store. All rights reserved.</div>
      <div class="pay-badges">
        <span class="pay-badge">VISA</span>
        <span class="pay-badge">MC</span>
        <span class="pay-badge">AMEX</span>
        <span class="pay-badge">CRYPTO</span>
      </div>
    </div>
  </footer>`;
}

function renderCursor() {
  return `<div class="cursor" id="cursor"></div><div class="cursor-ring" id="ring"></div><div id="toast"></div>`;
}

function initCursor() {
  const cur = document.getElementById('cursor'), rng = document.getElementById('ring');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; cur.style.left=mx+'px'; cur.style.top=my+'px'; });
  (function loop(){ rx+=(mx-rx)*.12; ry+=(my-ry)*.12; rng.style.left=rx+'px'; rng.style.top=ry+'px'; requestAnimationFrame(loop); })();
  document.querySelectorAll('a,button,input,select,textarea').forEach(el => {
    el.addEventListener('mouseenter', () => { cur.style.width='6px'; cur.style.height='6px'; rng.style.width='50px'; rng.style.height='50px'; rng.style.opacity='.8'; });
    el.addEventListener('mouseleave', () => { cur.style.width='12px'; cur.style.height='12px'; rng.style.width='36px'; rng.style.height='36px'; rng.style.opacity='.5'; });
  });
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.style.opacity='1'; t.style.transform='translateY(0)';
  setTimeout(() => { t.style.opacity='0'; t.style.transform='translateY(20px)'; }, 2800);
}

function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem('prokits_cart') || '[]');
  const total = cart.reduce((s,i) => s+i.qty, 0);
  const el = document.getElementById('cartCount');
  if(el) el.textContent = `🛒 Cart (${total})`;
}

function addToCart(name, league, price, emoji) {
  let cart = JSON.parse(localStorage.getItem('prokits_cart') || '[]');
  const existing = cart.find(i => i.name===name && i.league===league);
  if(existing) { existing.qty++; } else { cart.push({name,league,price,emoji,qty:1}); }
  localStorage.setItem('prokits_cart', JSON.stringify(cart));
  updateCartBadge();
  showToast(`${emoji} ${name} added to cart!`);
}

function initAnimations() {
  const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:.1});
  document.querySelectorAll('.anim').forEach(el => obs.observe(el));
}

function toggleFAQ(el) {
  const item = el.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if(!isOpen) item.classList.add('open');
}

// Adjust paths for root-level pages (index.html)
function fixRootPaths() {
  document.querySelectorAll('[href^="../"]').forEach(el => {
    el.href = el.href.replace('../', '');
  });
}

// ── LIVE SEARCH ───────────────────────────────────────────
function initLiveSearch() {
  const inputs = document.querySelectorAll('.nav-search input, #searchInput');
  inputs.forEach(input => {
    // Wrap in search-wrapper if not already
    if (!input.parentElement.classList.contains('search-wrapper')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'search-wrapper';
      input.parentNode.insertBefore(wrapper, input);
      wrapper.appendChild(input);
      const dropdown = document.createElement('div');
      dropdown.className = 'search-dropdown';
      dropdown.id = 'searchDropdown';
      wrapper.appendChild(dropdown);
    }
    input.addEventListener('input', function() {
      const q = this.value.trim().toLowerCase();
      const dd = document.getElementById('searchDropdown') || this.parentElement.querySelector('.search-dropdown');
      if (!dd) return;
      if (q.length < 2) { dd.classList.remove('open'); return; }

      // Search all data sources available
      let results = [];
      if (typeof FOOTBALL !== 'undefined') {
        Object.entries(FOOTBALL).forEach(([league, data]) => {
          data.teams.forEach(t => {
            if (t.n.toLowerCase().includes(q)) {
              results.push({...t, league, sport:'football'});
            }
          });
        });
      }
      if (typeof NFL_TEAMS !== 'undefined') {
        Object.values(NFL_TEAMS).forEach((conf, i) => {
          conf.teams.forEach(t => {
            if (t.n.toLowerCase().includes(q)) results.push({...t, league: i===0?'afc':'nfc', sport:'nfl'});
          });
        });
      }
      if (typeof NBA_TEAMS !== 'undefined') {
        Object.values(NBA_TEAMS).forEach((conf, i) => {
          conf.teams.forEach(t => {
            if (t.n.toLowerCase().includes(q)) results.push({...t, league: i===0?'east':'west', sport:'nba'});
          });
        });
      }

      results = results.slice(0, 7);
      if (!results.length) {
        dd.innerHTML = '<div class="search-no-results">No jerseys found for "' + q + '"</div>';
      } else {
        dd.innerHTML = results.map(r => {
          const price = parseInt(r.p.replace(/\$|–.*/g,''));
          const url = (window.location.pathname.includes('/pages/') ? '' : 'pages/') +
            'product.html?sport=' + r.sport + '&league=' + r.league +
            '&team=' + encodeURIComponent(r.n) + '&emoji=' + encodeURIComponent(r.e) + '&price=' + price;
          return '<a href="' + url + '" class="search-result-item">' +
            '<span class="sri-emoji">' + r.e + '</span>' +
            '<div><div class="sri-name">' + r.n + '</div><div class="sri-league">' + r.sport.toUpperCase() + ' · ' + r.league + '</div></div>' +
            '<span class="sri-price">' + r.p + '</span>' +
          '</a>';
        }).join('');
      }
      dd.classList.add('open');
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
      const dd = document.getElementById('searchDropdown') || input.parentElement.querySelector('.search-dropdown');
      if (dd && !input.parentElement.contains(e.target)) dd.classList.remove('open');
    });

    // Enter key
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        const dd = document.getElementById('searchDropdown') || this.parentElement.querySelector('.search-dropdown');
        if (dd) dd.classList.remove('open');
      }
    });
  });
}
