/* ─── IMAGES ─── */
const I = {
  samosa:       'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=85',
  chaat:        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=400&q=85',
  paneertikka:  'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=85',
  hbkabab:      'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=85',
  kabab:        'https://images.unsplash.com/photo-1544025162-d76538977a0e?auto=format&fit=crop&w=400&q=85',
  dalmakhani:   'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=85',
  shahipaneer:  'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=85',
  kadhaipaneer: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=85',
  palakpaneer:  'https://images.unsplash.com/photo-1620964849168-4e25bcc9aaa0?auto=format&fit=crop&w=400&q=85',
  curry:        'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=85',
  butterchicken:'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=85',
  mutton:       'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=400&q=85',
  naan:         'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=85',
  paratha:      'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=400&q=85',
  roti:         'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=85',
  biryani:      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=85',
  rice:         'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=400&q=85',
  salad:        'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=85',
  raita:        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=85',
  gulabjamun:   'https://images.unsplash.com/photo-1666984970900-60c6b83be3d0?auto=format&fit=crop&w=400&q=85',
  kheer:        'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=400&q=85',
  halwa:        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=85',
  kulfi:        'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=85',
  lassi:        'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=400&q=85',
  chai:         'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=85',
  limesoda:     'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=85',
};

/* ─── CATEGORIES ─── */
const CATS = [
  { id:'all',      label:'All' },
  { id:'starters', label:'Starters' },
  { id:'mains',    label:'Main Course' },
  { id:'breads',   label:'Breads' },
  { id:'rice',     label:'Rice & Biryani' },
  { id:'salads',   label:'Salads & Raita' },
  { id:'desserts', label:'Desserts' },
  { id:'drinks',   label:'Beverages' },
];
const CAT_LABELS = {
  starters:'Starters', mains:'Main Course', breads:'Breads',
  rice:'Rice & Biryani', salads:'Salads & Raita', desserts:'Desserts', drinks:'Beverages',
};

/* ─── DISHES ─── */
const DISHES = [
  // STARTERS
  { id:1,  name:'Veg Samosa',          desc:'Crispy pastry with spiced potato and peas',              price:40,  cat:'starters', veg:true,  bs:true,  sp:false, spice:1, img:I.samosa },
  { id:2,  name:'Aloo Tikki Chaat',    desc:'Golden patties, tamarind chutney and crispy sev',        price:80,  cat:'starters', veg:true,  bs:true,  sp:false, spice:2, img:I.chaat },
  { id:3,  name:'Paneer Tikka',        desc:'Marinated cottage cheese grilled in the tandoor',         price:180, cat:'starters', veg:true,  bs:false, sp:true,  spice:2, img:I.paneertikka },
  { id:4,  name:'Hara Bhara Kabab',    desc:'Spinach and pea patties with a crisp golden crust',      price:140, cat:'starters', veg:true,  bs:false, sp:false, spice:1, img:I.hbkabab },
  { id:5,  name:'Veg Seekh Kebab',     desc:'Spiced vegetable mince on skewers, grilled over coal',   price:150, cat:'starters', veg:true,  bs:false, sp:false, spice:2, img:I.kabab },
  { id:6,  name:'Malai Paneer Tikka',  desc:'Melt-in-mouth paneer in a rich cream marinade',          price:200, cat:'starters', veg:true,  bs:false, sp:true,  spice:1, img:I.paneertikka },

  // MAINS
  { id:7,  name:'Dal Makhani',         desc:'Overnight slow-cooked black lentils in cream and butter', price:160, cat:'mains', veg:true,  bs:true,  sp:false, spice:1, img:I.dalmakhani },
  { id:8,  name:'Shahi Paneer',        desc:'Cottage cheese in rich cashew-tomato cream gravy',       price:200, cat:'mains', veg:true,  bs:false, sp:true,  spice:1, img:I.shahipaneer },
  { id:9,  name:'Kadai Paneer',        desc:'Paneer with capsicum in a bold kadai masala',             price:190, cat:'mains', veg:true,  bs:true,  sp:false, spice:3, img:I.kadhaipaneer },
  { id:10, name:'Palak Paneer',        desc:'Cottage cheese in smooth, perfectly spiced spinach',     price:180, cat:'mains', veg:true,  bs:false, sp:false, spice:1, img:I.palakpaneer },
  { id:11, name:'Paneer Butter Masala',desc:'Tender paneer in a velvety tomato-butter sauce',         price:210, cat:'mains', veg:true,  bs:true,  sp:true,  spice:1, img:I.shahipaneer },
  { id:12, name:'Rajma Masala',        desc:'Kidney beans slow-cooked in rich onion-tomato gravy',    price:160, cat:'mains', veg:true,  bs:true,  sp:false, spice:2, img:I.curry },
  { id:13, name:'Malai Kofta',         desc:'Soft paneer dumplings in a velvety cream gravy',         price:200, cat:'mains', veg:true,  bs:false, sp:true,  spice:1, img:I.shahipaneer },
  { id:14, name:'Chole Masala',        desc:'Chickpeas in a bold blend of traditional spices',        price:160, cat:'mains', veg:true,  bs:true,  sp:false, spice:2, img:I.curry },
  { id:15, name:'Butter Chicken',      desc:'Tender chicken in silky tomato-butter sauce',             price:260, cat:'mains', veg:false, bs:true,  sp:true,  spice:1, img:I.butterchicken },
  { id:16, name:'Mutton Rogan Josh',   desc:'Slow-cooked mutton in a Kashmiri aromatic gravy',        price:320, cat:'mains', veg:false, bs:false, sp:true,  spice:2, img:I.mutton },

  // BREADS
  { id:17, name:'Butter Naan',         desc:'Soft leavened bread brushed generously with butter',     price:40,  cat:'breads', veg:true, bs:true,  sp:false, spice:0, img:I.naan },
  { id:18, name:'Garlic Naan',         desc:'Fluffy naan with minced garlic and fresh coriander',     price:50,  cat:'breads', veg:true, bs:true,  sp:false, spice:0, img:I.naan },
  { id:19, name:'Chur Chur Naan',      desc:'Crispy crumbled Punjabi naan, served warm with butter',  price:60,  cat:'breads', veg:true, bs:true,  sp:false, spice:0, img:I.naan },
  { id:20, name:'Laccha Paratha',      desc:'Flaky multi-layered whole wheat bread from the tawa',    price:50,  cat:'breads', veg:true, bs:false, sp:false, spice:0, img:I.paratha },
  { id:21, name:'Missi Roti',          desc:'Spiced chickpea flour bread, a Kanpur specialty',        price:35,  cat:'breads', veg:true, bs:false, sp:true,  spice:1, img:I.roti },
  { id:22, name:'Tandoori Roti',       desc:'Whole wheat bread baked fresh in the tandoor',           price:20,  cat:'breads', veg:true, bs:false, sp:false, spice:0, img:I.roti },

  // RICE & BIRYANI
  { id:23, name:'Veg Biryani',         desc:'Saffron basmati dum-cooked with vegetables and onions',  price:180, cat:'rice', veg:true,  bs:true,  sp:true,  spice:2, img:I.biryani },
  { id:24, name:'Chicken Biryani',     desc:'Fragrant basmati layered with spiced chicken',            price:260, cat:'rice', veg:false, bs:true,  sp:true,  spice:2, img:I.biryani },
  { id:25, name:'Mutton Biryani',      desc:'Royal dum biryani with tender slow-cooked mutton',       price:320, cat:'rice', veg:false, bs:false, sp:true,  spice:2, img:I.biryani },
  { id:26, name:'Jeera Rice',          desc:'Fragrant basmati tempered with cumin and ghee',           price:100, cat:'rice', veg:true,  bs:false, sp:false, spice:0, img:I.rice },
  { id:27, name:'Steamed Rice',        desc:'Plain basmati rice, perfectly cooked',                    price:80,  cat:'rice', veg:true,  bs:false, sp:false, spice:0, img:I.rice },

  // SALADS & RAITA
  { id:28, name:'Boondi Raita',        desc:'Chilled yogurt with crispy boondi and roasted cumin',    price:70,  cat:'salads', veg:true, bs:false, sp:false, spice:0, img:I.raita },
  { id:29, name:'Kachumber Salad',     desc:'Diced cucumber, tomato, onion with lime',                price:60,  cat:'salads', veg:true, bs:false, sp:false, spice:1, img:I.salad },
  { id:30, name:'Veg Raita',           desc:'Fresh yogurt with cucumber, tomato and spices',           price:70,  cat:'salads', veg:true, bs:false, sp:false, spice:0, img:I.raita },

  // DESSERTS
  { id:31, name:'Gulab Jamun',         desc:'Milk dumplings soaked in rose-cardamom syrup (2 pcs)',   price:80,  cat:'desserts', veg:true, bs:true,  sp:false, spice:0, img:I.gulabjamun },
  { id:32, name:'Gajar Halwa',         desc:'Slow-cooked carrot pudding with ghee and cardamom',      price:100, cat:'desserts', veg:true, bs:false, sp:true,  spice:0, img:I.halwa },
  { id:33, name:'Kheer',               desc:'Creamy rice pudding with saffron and pistachios',         price:90,  cat:'desserts', veg:true, bs:false, sp:true,  spice:0, img:I.kheer },
  { id:34, name:'Kulfi Falooda',       desc:'Pistachio kulfi with rose falooda and basil seeds',       price:120, cat:'desserts', veg:true, bs:false, sp:false, spice:0, img:I.kulfi },

  // BEVERAGES
  { id:35, name:'Mango Lassi',         desc:'Creamy yogurt shake with Alphonso mango pulp',            price:100, cat:'drinks', veg:true, bs:true,  sp:false, spice:0, img:I.lassi },
  { id:36, name:'Sweet Lassi',         desc:'Thick chilled yogurt blended smooth with sugar',          price:80,  cat:'drinks', veg:true, bs:true,  sp:false, spice:0, img:I.lassi },
  { id:37, name:'Masala Chai',         desc:'Strong tea brewed with ginger and cardamom',              price:40,  cat:'drinks', veg:true, bs:false, sp:false, spice:1, img:I.chai },
  { id:38, name:'Fresh Lime Soda',     desc:'Sparkling lime — sweet, salted or mixed',                 price:60,  cat:'drinks', veg:true, bs:false, sp:false, spice:0, img:I.limesoda },
];

/* ─── STATE ─── */
let activeCat  = 'all';
let activeQ    = 'all';
let searchQ    = '';
let searchOpen = false;

/* ─── INIT ─── */
function openApp() {
  document.getElementById('splash').style.display = 'none';
  document.getElementById('app').style.display    = 'flex';
  buildCats();
  render();
}

/* ─── TABS ─── */
function buildCats() {
  document.getElementById('catTabs').innerHTML = CATS.map(c =>
    `<button class="ct ${c.id===activeCat?'active':''}" onclick="setCat('${c.id}')">${c.label}</button>`
  ).join('');
}
function setCat(id) { activeCat = id; buildCats(); render(); }

/* ─── PILL FILTER ─── */
function setQ(v) {
  activeQ = v;
  document.getElementById('qp-all').className = 'qp' + (v==='all' ?' on':'');
  document.getElementById('qp-bs').className  = 'qp' + (v==='bs'  ?' on-bs':'');
  document.getElementById('qp-sp').className  = 'qp' + (v==='sp'  ?' on-sp':'');
  render();
}

/* ─── SEARCH ─── */
function toggleSearch() {
  searchOpen = !searchOpen;
  document.getElementById('searchWrap').classList.toggle('open', searchOpen);
  if (searchOpen) setTimeout(() => document.getElementById('searchInput').focus(), 80);
  else { document.getElementById('searchInput').value=''; searchQ=''; render(); }
}
function onSearch(v) { searchQ = v.toLowerCase(); render(); }

/* ─── FILTER LOGIC ─── */
function getItems() {
  return DISHES.filter(d => {
    if (activeCat !== 'all' && d.cat !== activeCat) return false;
    if (activeQ === 'bs' && !d.bs) return false;
    if (activeQ === 'sp' && !d.sp) return false;
    if (searchQ && !d.name.toLowerCase().includes(searchQ)
               && !d.desc.toLowerCase().includes(searchQ)) return false;
    return true;
  });
}

/* ─── HELPERS ─── */
function spiceHtml(n) {
  if (!n) return '';
  return `<div class="spice">${[1,2,3].map(i=>`<div class="sd${i<=n?' on':''}"></div>`).join('')}</div>`;
}
function badgeHtml(d) {
  let b = '';
  if (d.bs) b += `<span class="bp bp-bs">Bestseller</span>`;
  if (d.sp) b += `<span class="bp bp-sp">Chef's Special</span>`;
  return b;
}

/* ─── FEAT CARD HTML ─── */
function featCardHtml(d) {
  return `
<div class="feat-card fup">
  <img src="${d.img}" alt="${d.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=85'">
  <div class="feat-overlay">
    <div class="fo-badge">${d.sp?"Chef's Special":"Bestseller"}</div>
    <div class="fo-name">${d.name}</div>
    <div class="fo-row">
      <div class="fo-desc">${d.desc}</div>
      <div class="fo-price">&#8377;&nbsp;${d.price}</div>
    </div>
  </div>
</div>`;
}

/* ─── DISH ROW HTML ─── */
function dishRowHtml(d) {
  return `
<div class="dish-row">
  <img class="dr-img" src="${d.img}" alt="${d.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=85'">
  <div class="dr-body">
    <div class="dr-r1">
      <div class="veg-dot ${d.veg?'veg':'nv'}"></div>
      <div class="dr-name">${d.name}</div>
    </div>
    <div class="dr-desc">${d.desc}</div>
    <div class="dr-r3">
      <div class="dr-price">&#8377;&nbsp;${d.price}</div>
      <div class="dr-badges">${badgeHtml(d)}</div>
      ${spiceHtml(d.spice)}
    </div>
  </div>
</div>`;
}

/* ─── RENDER ─── */
function render() {
  const items   = getItems();
  const content = document.getElementById('menuContent');

  if (!items.length) {
    content.innerHTML = `<div class="empty"><p>No dishes found.<br>Try a different search.</p></div>`;
    return;
  }

  const catOrder = ['starters','mains','breads','rice','salads','desserts','drinks'];
  const groups   = {};
  items.forEach(d => { (groups[d.cat] = groups[d.cat]||[]).push(d); });

  let html = '';
  catOrder.forEach(cat => {
    const list = groups[cat];
    if (!list || !list.length) return;

    const feat = list.find(d => d.sp) || list.find(d => d.bs);
    const rest = feat ? list.filter(d => d.id !== feat.id) : list;

    html += `
<div class="fup">
  <div class="sec-head">
    <div class="sec-title">${CAT_LABELS[cat]}</div>
    <div class="sec-line"></div>
    <div class="sec-count">${list.length} items</div>
  </div>
</div>`;

    if (feat) html += featCardHtml(feat);

    if (rest.length) {
      html += `<div class="dish-list fup">${rest.map(dishRowHtml).join('')}</div>`;
    }
  });

  content.innerHTML = html;

  requestAnimationFrame(() => {
    document.querySelectorAll('.fup:not(.in)').forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), i * 40);
    });
  });
}
