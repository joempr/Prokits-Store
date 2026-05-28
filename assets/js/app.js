// ─── CART STATE ───────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
function saveCart(){ localStorage.setItem('cart', JSON.stringify(cart)); updateCartUI(); }
function addToCart(name, league, price, emoji){
  const existing = cart.find(i => i.name === name && i.league === league);
  if(existing){ existing.qty++; } else { cart.push({name,league,price,emoji,qty:1}); }
  saveCart();
  showToast(`${emoji} ${name} added to cart!`);
}
function removeFromCart(idx){ cart.splice(idx,1); saveCart(); renderCart(); }
function updateQty(idx, delta){ cart[idx].qty = Math.max(1, cart[idx].qty + delta); saveCart(); renderCart(); }
function updateCartUI(){
  const total = cart.reduce((s,i) => s+i.qty, 0);
  document.getElementById('cartCount').textContent = `🛒 Cart (${total})`;
}
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.style.opacity = '1'; t.style.transform = 'translateY(0)';
  setTimeout(()=>{ t.style.opacity='0'; t.style.transform='translateY(20px)'; }, 2500);
}

// ─── NAVIGATION ───────────────────────────────────────────
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
  const activeLink = document.querySelector(`[data-page="${id}"]`);
  if(activeLink) activeLink.classList.add('active');
  window.scrollTo(0,0);
  if(id==='football') renderLeague('all');
  if(id==='nfl') renderNFL('all');
  if(id==='nba') renderNBA('all');
  if(id==='cart') renderCart();
  initAnimations();
}

// ─── RENDERS ─────────────────────────────────────────────
function teamCard(t){
  const priceNum = parseInt(t.p.replace(/\$|–.*/g,''));
  return `<div class="team-card anim">
    <span class="tc-emoji">${t.e}</span>
    <div class="tc-name">${t.n}</div>
    <div class="tc-jersey">${t.j}</div>
    <div class="tc-price">${t.p}</div>
    <button class="tc-btn" onclick="addToCart('${t.n}','${t.j}',${priceNum},'${t.e}')">Add to Cart +</button>
  </div>`;
}
function leagueSec(key, data, filter){
  const show = filter==='all' || filter===key;
  return `<div class="league-sec${show?'':' hidden'}" data-key="${key}">
    <div class="league-hdr">
      <span class="league-flag">${data.flag||'🏈'}</span>
      <div><div class="league-name-text">${data.name}</div><div class="league-country-text">${data.country||''}</div></div>
      <span class="league-num">${data.teams.length} Clubs</span>
    </div>
    <div class="teams-grid">${data.teams.map(teamCard).join('')}</div>
  </div>`;
}

function renderLeague(filter){
  document.querySelectorAll('#football-tabs .ftab').forEach((t,i)=>{
    const fs=['all','england','spain','france','germany','italy','portugal','netherlands','international'];
    t.classList.toggle('active', fs[i]===filter);
  });
  let html='';
  Object.entries(FOOTBALL).forEach(([k,v])=> html += leagueSec(k,v,filter));
  document.getElementById('football-body').innerHTML = html;
  initAnimations();
}

function renderNFL(filter){
  document.querySelectorAll('#nfl-tabs .ftab').forEach((t,i)=>{
    t.classList.toggle('active',['all','popular','afc','nfc'][i]===filter);
  });
  let html='';
  if(filter==='popular'){
    const pops = [...NFL_TEAMS.afc.teams,...NFL_TEAMS.nfc.teams].filter(t=>t.pop);
    html = leagueSec('popular',{flag:'🔥',name:'Most Popular Teams',country:'',teams:pops},'all');
  } else {
    Object.entries(NFL_TEAMS).forEach(([k,v])=>{
      if(filter==='all'||filter===k) html += leagueSec(k,v,'all');
    });
  }
  document.getElementById('nfl-body').innerHTML = html;
  initAnimations();
}

function renderNBA(filter){
  document.querySelectorAll('#nba-tabs .ftab').forEach((t,i)=>{
    t.classList.toggle('active',['all','popular','east','west'][i]===filter);
  });
  let html='';
  if(filter==='popular'){
    const pops = [...NBA_TEAMS.east.teams,...NBA_TEAMS.west.teams].filter(t=>t.pop);
    html = leagueSec('popular',{flag:'🔥',name:'Most Popular Teams',country:'',teams:pops},'all');
  } else {
    Object.entries(NBA_TEAMS).forEach(([k,v])=>{
      if(filter==='all'||filter===k) html += leagueSec(k,v,'all');
    });
  }
  document.getElementById('nba-body').innerHTML = html;
  initAnimations();
}

function renderCart(){
  const container = document.getElementById('cart-items');
  const summary = document.getElementById('cart-summary');
  if(!cart.length){
    container.innerHTML=`<div class="cart-empty"><div class="ce-icon">🛒</div><h2>Your Cart is Empty</h2><p style="color:var(--white-dim);margin-bottom:24px">Browse our collections and find your perfect jersey.</p><button class="btn btn-gold" onclick="showPage('home')">Shop Now</button></div>`;
    summary.style.display='none'; return;
  }
  summary.style.display='block';
  const subtotal = cart.reduce((s,i)=>s+(i.price*i.qty),0);
  const shipping = subtotal>100?0:12;
  container.innerHTML=`<div class="cart-items">${cart.map((item,idx)=>`
    <div class="cart-item">
      <div class="ci-emoji-lg">${item.emoji}</div>
      <div class="ci-details">
        <div class="ci-iname">${item.name}</div>
        <div class="ci-ileague">${item.league}</div>
        <div class="ci-qty">
          <button class="qty-btn" onclick="updateQty(${idx},-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${idx},1)">+</button>
        </div>
      </div>
      <div class="ci-price-lg">$${item.price*item.qty}</div>
      <button class="ci-remove" onclick="removeFromCart(${idx})">✕</button>
    </div>`).join('')}</div>`;
  document.getElementById('os-subtotal').textContent=`$${subtotal}`;
  document.getElementById('os-shipping').textContent=shipping?`$${shipping}`:'FREE';
  document.getElementById('os-total').textContent=`$${subtotal+shipping}`;
}

// ─── SEARCH ───────────────────────────────────────────────
function globalSearch(val){
  if(!val||val.length<2) return;
  const q=val.toLowerCase();
  const results=[];
  Object.values(FOOTBALL).forEach(l=>l.teams.forEach(t=>{if(t.n.toLowerCase().includes(q))results.push({...t,sport:'football'});}));
  Object.values(NFL_TEAMS).forEach(c=>c.teams.forEach(t=>{if(t.n.toLowerCase().includes(q))results.push({...t,sport:'nfl'});}));
  Object.values(NBA_TEAMS).forEach(c=>c.teams.forEach(t=>{if(t.n.toLowerCase().includes(q))results.push({...t,sport:'nba'});}));
  showPage('football');
  document.getElementById('football-body').innerHTML = results.length
    ? `<div class="league-sec"><div class="league-hdr"><span class="league-flag">🔍</span><div><div class="league-name-text">Results for "${val}"</div><div class="league-country-text">${results.length} items found</div></div></div><div class="teams-grid">${results.map(teamCard).join('')}</div></div>`
    : `<div class="no-results">No jerseys found for "${val}"</div>`;
  initAnimations();
}

// ─── FAQ ──────────────────────────────────────────────────
function toggleFAQ(el){
  const item = el.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i=>i.classList.remove('open'));
  if(!isOpen) item.classList.add('open');
}

// ─── TRACK ORDER ──────────────────────────────────────────
function trackOrder(){
  const num = document.getElementById('trackInput').value.trim();
  if(!num){ alert('Please enter a tracking number.'); return; }
  const res = document.getElementById('trackResult');
  res.style.display = 'block';
  res.scrollIntoView({behavior:'smooth',block:'center'});
}

// ─── CURSOR ───────────────────────────────────────────────
const cur=document.getElementById('cursor'),rng=document.getElementById('ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
(function loop(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;rng.style.left=rx+'px';rng.style.top=ry+'px';requestAnimationFrame(loop);})();
document.querySelectorAll('a,button,input,select,textarea').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.width='6px';cur.style.height='6px';rng.style.width='50px';rng.style.height='50px';rng.style.opacity='.8';});
  el.addEventListener('mouseleave',()=>{cur.style.width='12px';cur.style.height='12px';rng.style.width='36px';rng.style.height='36px';rng.style.opacity='.5';});
});

// ─── SCROLL ANIMATIONS ───────────────────────────────────
function initAnimations(){
  const obs = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:.1});
  document.querySelectorAll('.anim:not(.visible)').forEach(el=>obs.observe(el));
}

// ─── INIT ─────────────────────────────────────────────────
updateCartUI();
renderLeague('all');
renderNFL('all');
renderNBA('all');
initAnimations();
