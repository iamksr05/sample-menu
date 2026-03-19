/* ══════════════════════
   DATA
══════════════════════ */
const CATS = [
  {id:'all',     label:'All'},
  {id:'starters',label:'Starters'},
  {id:'mains',   label:'Main Course'},
  {id:'breads',  label:'Breads'},
  {id:'rice',    label:'Rice & Biryani'},
  {id:'salads',  label:'Salads'},
  {id:'desserts',label:'Desserts'},
  {id:'drinks',  label:'Beverages'},
];
const CAT_LABELS = {
  starters:'Starters', mains:'Main Course', breads:'Breads',
  rice:'Rice & Biryani', salads:'Salads & Raita', desserts:'Desserts', drinks:'Beverages',
};

const DISHES = [
  {id:1,  name:'Veg Samosa',         desc:'Crispy pastry filled with spiced potato and peas',              price:40,  cat:'starters', veg:true,  bs:true,  cs:false, spice:1, img:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=300&q=80'},
  {id:2,  name:'Aloo Tikki Chaat',   desc:'Golden patties, tamarind chutney and crispy sev',               price:80,  cat:'starters', veg:true,  bs:true,  cs:false, spice:2, img:'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=300&q=80'},
  {id:3,  name:'Paneer Tikka',       desc:'Marinated cottage cheese grilled in the tandoor',                price:180, cat:'starters', veg:true,  bs:false, cs:true,  spice:2, img:'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=300&q=80'},
  {id:4,  name:'Hara Bhara Kabab',   desc:'Spinach and pea patties with a crisp golden crust',             price:140, cat:'starters', veg:true,  bs:false, cs:false, spice:1, img:'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=300&q=80'},
  {id:5,  name:'Veg Seekh Kebab',    desc:'Spiced vegetable mince on skewers, grilled over coal',          price:150, cat:'starters', veg:true,  bs:false, cs:false, spice:2, img:'https://images.unsplash.com/photo-1544025162-d76538977a0e?auto=format&fit=crop&w=300&q=80'},
  {id:6,  name:'Malai Paneer Tikka', desc:'Melt-in-mouth paneer in a rich cream marinade',                 price:200, cat:'starters', veg:true,  bs:false, cs:true,  spice:1, img:'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=300&q=80'},
  {id:7,  name:'Dal Makhani',        desc:'Overnight slow-cooked black lentils in butter and cream',        price:160, cat:'mains',    veg:true,  bs:true,  cs:false, spice:1, img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80'},
  {id:8,  name:'Shahi Paneer',       desc:'Cottage cheese in rich cashew-tomato cream gravy',               price:200, cat:'mains',    veg:true,  bs:false, cs:true,  spice:1, img:'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80'},
  {id:9,  name:'Kadai Paneer',       desc:'Paneer with capsicum in a bold kadai masala',                    price:190, cat:'mains',    veg:true,  bs:true,  cs:false, spice:3, img:'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=300&q=80'},
  {id:10, name:'Palak Paneer',       desc:'Cottage cheese in smooth, perfectly spiced spinach',             price:180, cat:'mains',    veg:true,  bs:false, cs:false, spice:1, img:'https://images.unsplash.com/photo-1620964849168-4e25bcc9aaa0?auto=format&fit=crop&w=300&q=80'},
  {id:11, name:'Paneer Butter Masala',desc:'Tender paneer in a velvety tomato-butter sauce',                price:210, cat:'mains',    veg:true,  bs:true,  cs:true,  spice:1, img:'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80'},
  {id:12, name:'Rajma Masala',       desc:'Kidney beans slow-cooked in rich onion-tomato gravy',            price:160, cat:'mains',    veg:true,  bs:true,  cs:false, spice:2, img:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=300&q=80'},
  {id:13, name:'Chole Masala',       desc:'Chickpeas in a bold blend of traditional spices',                price:160, cat:'mains',    veg:true,  bs:true,  cs:false, spice:2, img:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=300&q=80'},
  {id:14, name:'Malai Kofta',        desc:'Soft paneer dumplings in a velvety cream gravy',                 price:200, cat:'mains',    veg:true,  bs:false, cs:true,  spice:1, img:'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80'},
  {id:15, name:'Butter Naan',        desc:'Soft leavened bread brushed generously with butter',             price:40,  cat:'breads',   veg:true,  bs:true,  cs:false, spice:0, img:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=300&q=80'},
  {id:16, name:'Garlic Naan',        desc:'Fluffy naan with minced garlic and fresh coriander',             price:50,  cat:'breads',   veg:true,  bs:true,  cs:false, spice:0, img:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=300&q=80'},
  {id:17, name:'Chur Chur Naan',     desc:'Crispy crumbled Punjabi naan served warm with butter',           price:60,  cat:'breads',   veg:true,  bs:true,  cs:false, spice:0, img:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=300&q=80'},
  {id:18, name:'Laccha Paratha',     desc:'Flaky multi-layered whole wheat bread from the tawa',            price:50,  cat:'breads',   veg:true,  bs:false, cs:false, spice:0, img:'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=300&q=80'},
  {id:19, name:'Missi Roti',         desc:'Spiced chickpea flour bread, a Kanpur specialty',                price:35,  cat:'breads',   veg:true,  bs:false, cs:true,  spice:1, img:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=300&q=80'},
  {id:20, name:'Tandoori Roti',      desc:'Whole wheat bread baked fresh in the tandoor',                   price:20,  cat:'breads',   veg:true,  bs:false, cs:false, spice:0, img:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=300&q=80'},
  {id:21, name:'Veg Biryani',        desc:'Saffron basmati dum-cooked with vegetables and fried onions',    price:180, cat:'rice',     veg:true,  bs:true,  cs:true,  spice:2, img:'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=300&q=80'},
  {id:22, name:'Chicken Biryani',    desc:'Fragrant basmati layered with spiced chicken, slow dum-cooked',  price:260, cat:'rice',     veg:false, bs:true,  cs:true,  spice:2, img:'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=300&q=80'},
  {id:23, name:'Mutton Biryani',     desc:'Royal dum biryani with tender slow-cooked mutton',               price:320, cat:'rice',     veg:false, bs:false, cs:true,  spice:2, img:'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=300&q=80'},
  {id:24, name:'Jeera Rice',         desc:'Fragrant basmati tempered with cumin and ghee',                  price:100, cat:'rice',     veg:true,  bs:false, cs:false, spice:0, img:'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=300&q=80'},
  {id:25, name:'Boondi Raita',       desc:'Chilled yogurt with crispy boondi and roasted cumin',            price:70,  cat:'salads',   veg:true,  bs:false, cs:false, spice:0, img:'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=300&q=80'},
  {id:26, name:'Kachumber Salad',    desc:'Diced cucumber, tomato, onion with lime',                        price:60,  cat:'salads',   veg:true,  bs:false, cs:false, spice:1, img:'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=300&q=80'},
  {id:27, name:'Gulab Jamun',        desc:'Milk dumplings soaked in rose-cardamom syrup, 2 pcs',            price:80,  cat:'desserts', veg:true,  bs:true,  cs:false, spice:0, img:'https://images.unsplash.com/photo-1666984970900-60c6b83be3d0?auto=format&fit=crop&w=300&q=80'},
  {id:28, name:'Gajar Halwa',        desc:'Slow-cooked carrot pudding with ghee and cardamom',              price:100, cat:'desserts', veg:true,  bs:false, cs:true,  spice:0, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&q=80'},
  {id:29, name:'Kheer',              desc:'Creamy rice pudding with saffron and pistachios',                price:90,  cat:'desserts', veg:true,  bs:false, cs:true,  spice:0, img:'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=300&q=80'},
  {id:30, name:'Kulfi Falooda',      desc:'Pistachio kulfi with rose falooda and basil seeds',              price:120, cat:'desserts', veg:true,  bs:false, cs:false, spice:0, img:'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=300&q=80'},
  {id:31, name:'Mango Lassi',        desc:'Thick yogurt shake with fresh Alphonso mango pulp',              price:100, cat:'drinks',   veg:true,  bs:true,  cs:false, spice:0, img:'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=300&q=80'},
  {id:32, name:'Sweet Lassi',        desc:'Chilled thick yogurt blended smooth with sugar',                 price:80,  cat:'drinks',   veg:true,  bs:true,  cs:false, spice:0, img:'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=300&q=80'},
  {id:33, name:'Masala Chai',        desc:'Strong tea brewed with ginger and cardamom',                     price:40,  cat:'drinks',   veg:true,  bs:false, cs:false, spice:1, img:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=300&q=80'},
  {id:34, name:'Fresh Lime Soda',    desc:'Sparkling lime — sweet, salted or mixed',                        price:60,  cat:'drinks',   veg:true,  bs:false, cs:false, spice:0, img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80'},
];

/* ══════════════════════
   STATE
══════════════════════ */
let currentPage = 'home';
let activeCat   = 'all';
let menuBuilt   = false;
let homeBuilt   = false;

/* ══════════════════════
   BOOT
══════════════════════ */
function boot() {
  document.getElementById('splash').style.display = 'none';
  document.getElementById('app').style.display    = 'flex';
  buildHome();
  buildMenu();
  buildCatBar();
  initSearch();
}

/* ══════════════════════
   NAVIGATION
══════════════════════ */
function goTo(page) {
  if (page === currentPage) {
    // scroll to top of current page
    document.getElementById('page-' + page).scrollTo({top:0, behavior:'smooth'});
    return;
  }

  // Deactivate old page
  const oldPage = document.getElementById('page-' + currentPage);
  oldPage.classList.remove('active');
  oldPage.classList.add('left');

  // Activate new page
  const newPage = document.getElementById('page-' + page);
  newPage.classList.remove('left');
  newPage.classList.add('active');

  // Update nav buttons
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('nav-' + page).classList.add('active');

  // If going to search, focus input
  if (page === 'search') {
    setTimeout(() => {
      const inp = document.getElementById('searchInput');
      inp.focus();
    }, 320);
  }

  currentPage = page;
}

/* ══════════════════════
   HOME PAGE
══════════════════════ */
function buildHome() {
  // Bestseller strip
  const bestsellers = DISHES.filter(d => d.bs).slice(0, 8);
  document.getElementById('bsStrip').innerHTML = bestsellers.map(d => `
    <div class="bs-card" onclick="goTo('menu')">
      <div class="bs-card-img">
        <img src="${d.img}" alt="${d.name}" loading="lazy">
        <div class="bs-card-img-overlay"></div>
        <div class="bs-veg ${d.veg?'veg':'nv'}"></div>
        <div class="bs-badge">Bestseller</div>
      </div>
      <div class="bs-body">
        <div class="bs-name">${d.name}</div>
        <div class="bs-price">&#8377; ${d.price}</div>
      </div>
    </div>`).join('');

  // Chef's specials
  const specials = DISHES.filter(d => d.cs).slice(0, 4);
  document.getElementById('specialsList').innerHTML = specials.map(d => `
    <div class="special-row" onclick="goTo('menu')">
      <img src="${d.img}" alt="${d.name}" loading="lazy">
      <div class="special-info">
        <div>
          <div class="si-name">${d.name}</div>
          <div class="si-desc">${d.desc}</div>
        </div>
        <div class="si-bottom">
          <div class="si-price">&#8377; ${d.price}</div>
          <div class="si-tag">Chef's Special</div>
        </div>
      </div>
    </div>`).join('');
}

/* ══════════════════════
   MENU PAGE
══════════════════════ */
function buildCatBar() {
  document.getElementById('catBar').innerHTML = CATS.map(c =>
    `<button class="cat-tab ${c.id===activeCat?'active':''}" onclick="setCat('${c.id}')">${c.label}</button>`
  ).join('');
}

function setCat(id) {
  activeCat = id;
  buildCatBar();
  renderMenu();
  // scroll menu to top
  document.getElementById('page-menu').scrollTo({top:0, behavior:'smooth'});
}

function spiceHtml(n) {
  if (!n) return '';
  return `<div class="spice-dots">${[1,2,3].map(i=>`<div class="sd${i<=n?' on':''}"></div>`).join('')}</div>`;
}

function badgeHtml(d) {
  let b = '';
  if (d.bs) b += `<span class="dbadge bs">Bestseller</span>`;
  if (d.cs) b += `<span class="dbadge cs">Chef's Special</span>`;
  return b;
}

function dishRowHtml(d) {
  return `
<div class="dish-row">
  <img src="${d.img}" alt="${d.name}" loading="lazy">
  <div class="dish-body">
    <div class="dish-r1">
      <div class="veg-dot ${d.veg?'veg':'nv'}"></div>
      <div class="dish-name">${d.name}</div>
    </div>
    <div class="dish-desc">${d.desc}</div>
    <div class="dish-r3">
      <div class="dish-price">&#8377; ${d.price}</div>
      <div class="dish-badges">${badgeHtml(d)}</div>
      ${spiceHtml(d.spice)}
    </div>
  </div>
</div>`;
}

function menuFeatHtml(d) {
  return `
<div class="menu-feat">
  <img src="${d.img}" alt="${d.name}" loading="lazy">
  <div class="menu-feat-overlay">
    <div class="mf-badge">${d.cs?"Chef's Special":"Bestseller"}</div>
    <div class="mf-name">${d.name}</div>
    <div class="mf-row">
      <div class="mf-desc">${d.desc}</div>
      <div class="mf-price">&#8377; ${d.price}</div>
    </div>
  </div>
</div>`;
}

function renderMenu() {
  const items = activeCat === 'all'
    ? DISHES
    : DISHES.filter(d => d.cat === activeCat);

  if (!items.length) {
    document.getElementById('menuContent').innerHTML = `<div class="empty-state"><p>No dishes in this category.</p></div>`;
    return;
  }

  const order = ['starters','mains','breads','rice','salads','desserts','drinks'];
  const groups = {};
  items.forEach(d => { (groups[d.cat] = groups[d.cat]||[]).push(d); });

  let html = '';
  order.forEach(cat => {
    const list = groups[cat];
    if (!list || !list.length) return;
    const feat = list.find(d => d.cs) || list.find(d => d.bs);
    const rest = feat ? list.filter(d => d.id !== feat.id) : list;

    html += `<div class="sec-hdr">
      <div class="sec-hdr-title">${CAT_LABELS[cat]}</div>
      <div class="sec-hdr-line"></div>
      <div class="sec-hdr-count">${list.length} items</div>
    </div>`;

    if (feat) html += menuFeatHtml(feat);
    if (rest.length) html += `<div class="dish-list">${rest.map(dishRowHtml).join('')}</div>`;
  });

  document.getElementById('menuContent').innerHTML = html;
}

function buildMenu() { renderMenu(); }

/* ══════════════════════
   SEARCH PAGE
══════════════════════ */
function initSearch() {
  // show popular dishes by default
  doSearch('');
}

function doSearch(q) {
  q = q.trim().toLowerCase();
  const hint  = document.getElementById('searchHint');
  const results = q
    ? DISHES.filter(d => d.name.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q))
    : DISHES.filter(d => d.bs).slice(0, 8);

  hint.textContent = q ? `${results.length} result${results.length!==1?'s':''} found` : 'Popular Dishes';

  if (!results.length) {
    document.getElementById('searchResults').innerHTML = `<div class="empty-state"><p>No dishes found.<br>Try a different word.</p></div>`;
    return;
  }

  document.getElementById('searchResults').innerHTML =
    `<div class="dish-list" style="margin:0 16px 28px">${results.map(dishRowHtml).join('')}</div>`;
}
