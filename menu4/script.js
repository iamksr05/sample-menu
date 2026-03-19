/* ══════════════════════
       DATA
    ══════════════════════ */
    const CATS = [
      { id: 'all', label: 'All' },
      { id: 'starters', label: 'Starters' },
      { id: 'mains', label: 'Main Course' },
      { id: 'breads', label: 'Breads' },
      { id: 'rice', label: 'Rice & Biryani' },
      { id: 'salads', label: 'Salads' },
      { id: 'desserts', label: 'Desserts' },
      { id: 'drinks', label: 'Beverages' },
    ];

    const CAT_LABELS = {
      starters: 'Starters', mains: 'Main Course', breads: 'Breads',
      rice: 'Rice & Biryani', salads: 'Salads & Raita', desserts: 'Desserts', drinks: 'Beverages',
    };

    const SEC_IMGS = {
      starters: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80',
      mains: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80',
      breads: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80',
      rice: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
      salads: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
      desserts: 'https://images.unsplash.com/photo-1666984970900-60c6b83be3d0?auto=format&fit=crop&w=600&q=80',
      drinks: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80',
    };

    const DISHES = [
      { id: 1, name: 'Veg Samosa', desc: 'Crispy pastry with spiced potato and peas', price: 40, cat: 'starters', veg: true, bs: true, cs: false, spice: 1, img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=300&q=80' },
      { id: 2, name: 'Paneer Tikka', desc: 'Marinated cottage cheese grilled in tandoor', price: 180, cat: 'starters', veg: true, bs: false, cs: true, spice: 2, img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=300&q=80' },
      { id: 3, name: 'Aloo Tikki Chaat', desc: 'Golden patties, tamarind chutney and sev', price: 80, cat: 'starters', veg: true, bs: true, cs: false, spice: 2, img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=300&q=80' },
      { id: 4, name: 'Hara Bhara Kabab', desc: 'Spinach and pea patties, crisp golden crust', price: 140, cat: 'starters', veg: true, bs: false, cs: false, spice: 1, img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=300&q=80' },
      { id: 5, name: 'Veg Seekh Kebab', desc: 'Spiced vegetable mince on skewers, coal-grilled', price: 150, cat: 'starters', veg: true, bs: false, cs: false, spice: 2, img: 'https://images.unsplash.com/photo-1544025162-d76538977a0e?auto=format&fit=crop&w=300&q=80' },
      { id: 6, name: 'Dal Makhani', desc: 'Overnight slow-cooked lentils in cream and butter', price: 160, cat: 'mains', veg: true, bs: true, cs: false, spice: 1, img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80' },
      { id: 7, name: 'Shahi Paneer', desc: 'Cottage cheese in rich cashew-tomato cream gravy', price: 200, cat: 'mains', veg: true, bs: false, cs: true, spice: 1, img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80' },
      { id: 8, name: 'Kadai Paneer', desc: 'Paneer with capsicum in bold kadai masala', price: 190, cat: 'mains', veg: true, bs: true, cs: false, spice: 3, img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=300&q=80' },
      { id: 9, name: 'Palak Paneer', desc: 'Cottage cheese in smooth spiced spinach gravy', price: 180, cat: 'mains', veg: true, bs: false, cs: false, spice: 1, img: 'https://images.unsplash.com/photo-1620964849168-4e25bcc9aaa0?auto=format&fit=crop&w=300&q=80' },
      { id: 10, name: 'Paneer Butter Masala', desc: 'Tender paneer in velvety tomato-butter sauce', price: 210, cat: 'mains', veg: true, bs: true, cs: true, spice: 1, img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80' },
      { id: 11, name: 'Rajma Masala', desc: 'Kidney beans in rich onion-tomato gravy', price: 160, cat: 'mains', veg: true, bs: true, cs: false, spice: 2, img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=300&q=80' },
      { id: 12, name: 'Malai Kofta', desc: 'Soft paneer dumplings in velvety cream gravy', price: 200, cat: 'mains', veg: true, bs: false, cs: true, spice: 1, img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80' },
      { id: 13, name: 'Butter Naan', desc: 'Soft leavened bread, butter-brushed', price: 40, cat: 'breads', veg: true, bs: true, cs: false, spice: 0, img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=300&q=80' },
      { id: 14, name: 'Garlic Naan', desc: 'Fluffy naan with garlic and coriander', price: 50, cat: 'breads', veg: true, bs: true, cs: false, spice: 0, img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=300&q=80' },
      { id: 15, name: 'Chur Chur Naan', desc: 'Crispy crumbled Punjabi naan with butter', price: 60, cat: 'breads', veg: true, bs: true, cs: false, spice: 0, img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=300&q=80' },
      { id: 16, name: 'Laccha Paratha', desc: 'Flaky multi-layered whole wheat bread', price: 50, cat: 'breads', veg: true, bs: false, cs: false, spice: 0, img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=300&q=80' },
      { id: 17, name: 'Missi Roti', desc: 'Spiced chickpea flour bread, Kanpur specialty', price: 35, cat: 'breads', veg: true, bs: false, cs: true, spice: 1, img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=300&q=80' },
      { id: 18, name: 'Veg Biryani', desc: 'Saffron basmati dum-cooked with vegetables', price: 180, cat: 'rice', veg: true, bs: true, cs: true, spice: 2, img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=300&q=80' },
      { id: 19, name: 'Chicken Biryani', desc: 'Fragrant basmati layered with spiced chicken', price: 260, cat: 'rice', veg: false, bs: true, cs: true, spice: 2, img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=300&q=80' },
      { id: 20, name: 'Mutton Biryani', desc: 'Royal dum biryani with slow-cooked mutton', price: 320, cat: 'rice', veg: false, bs: false, cs: true, spice: 2, img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=300&q=80' },
      { id: 21, name: 'Jeera Rice', desc: 'Fragrant basmati tempered with cumin and ghee', price: 100, cat: 'rice', veg: true, bs: false, cs: false, spice: 0, img: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=300&q=80' },
      { id: 22, name: 'Boondi Raita', desc: 'Chilled yogurt with crispy boondi and cumin', price: 70, cat: 'salads', veg: true, bs: false, cs: false, spice: 0, img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=300&q=80' },
      { id: 23, name: 'Kachumber Salad', desc: 'Diced cucumber, tomato and onion with lime', price: 60, cat: 'salads', veg: true, bs: false, cs: false, spice: 1, img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=300&q=80' },
      { id: 24, name: 'Gulab Jamun', desc: 'Milk dumplings in rose-cardamom syrup, 2 pcs', price: 80, cat: 'desserts', veg: true, bs: true, cs: false, spice: 0, img: 'https://images.unsplash.com/photo-1666984970900-60c6b83be3d0?auto=format&fit=crop&w=300&q=80' },
      { id: 25, name: 'Gajar Halwa', desc: 'Slow-cooked carrot pudding with ghee', price: 100, cat: 'desserts', veg: true, bs: false, cs: true, spice: 0, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&q=80' },
      { id: 26, name: 'Kheer', desc: 'Creamy rice pudding with saffron and pistachios', price: 90, cat: 'desserts', veg: true, bs: false, cs: true, spice: 0, img: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=300&q=80' },
      { id: 27, name: 'Kulfi Falooda', desc: 'Pistachio kulfi with rose falooda', price: 120, cat: 'desserts', veg: true, bs: false, cs: false, spice: 0, img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=300&q=80' },
      { id: 28, name: 'Mango Lassi', desc: 'Thick yogurt shake with Alphonso mango pulp', price: 100, cat: 'drinks', veg: true, bs: true, cs: false, spice: 0, img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=300&q=80' },
      { id: 29, name: 'Sweet Lassi', desc: 'Chilled thick yogurt blended with sugar', price: 80, cat: 'drinks', veg: true, bs: true, cs: false, spice: 0, img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=300&q=80' },
      { id: 30, name: 'Masala Chai', desc: 'Strong tea brewed with ginger and cardamom', price: 40, cat: 'drinks', veg: true, bs: false, cs: false, spice: 1, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=300&q=80' },
      { id: 31, name: 'Fresh Lime Soda', desc: 'Sparkling lime, sweet or salted your choice', price: 60, cat: 'drinks', veg: true, bs: false, cs: false, spice: 0, img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80' },
    ];

    /* ══════════════════════
       STATE
    ══════════════════════ */
    let currentPage = 'home';
    let activeCat = 'all';

    /* ══════════════════════
       BOOT
    ══════════════════════ */
    function boot() {
      document.getElementById('splash').style.display = 'none';
      document.getElementById('app').style.display = 'flex';
      buildHome();
      buildCatBar();
      renderMenu();
      doSearch('');
    }

    /* ══════════════════════
       NAVIGATION
    ══════════════════════ */
    function goTo(page) {
      if (page === currentPage) {
        document.getElementById('page-' + page).scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const old = document.getElementById('page-' + currentPage);
      old.classList.remove('active');
      old.classList.add('left');

      const next = document.getElementById('page-' + page);
      next.classList.remove('left');
      next.classList.add('active');

      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.getElementById('nav-' + page).classList.add('active');

      if (page === 'search') {
        setTimeout(() => document.getElementById('searchInput').focus(), 320);
      }
      currentPage = page;
    }

    /* ══════════════════════
       HOME
    ══════════════════════ */
    function buildHome() {
      // Bestsellers scroll
      const bsList = DISHES.filter(d => d.bs).slice(0, 8);
      document.getElementById('bsScroll').innerHTML = bsList.map(d => `
    <div class="bs-card" onclick="goTo('menu')">
      <div class="bs-card-img">
        <img src="${d.img}" alt="${d.name}" loading="lazy">
        <div class="bs-card-ribbon">Best</div>
        <div class="bs-veg ${d.veg ? 'veg' : 'nv'}"></div>
      </div>
      <div class="bs-body">
        <div class="bs-name">${d.name}</div>
        <div class="bs-price">&#8377; ${d.price}</div>
      </div>
    </div>`).join('');

      // Chef's specials
      const specials = DISHES.filter(d => d.cs).slice(0, 4);
      document.getElementById('specialsList').innerHTML = specials.map(d => `
    <div class="special-card" onclick="goTo('menu')">
      <img src="${d.img}" alt="${d.name}" loading="lazy">
      <div class="sc-body">
        <div>
          <div class="sc-name">${d.name}</div>
          <div class="sc-desc">${d.desc}</div>
        </div>
        <div class="sc-row">
          <div class="sc-price">&#8377; ${d.price}</div>
          <div class="sc-tag">Chef's Special</div>
        </div>
      </div>
    </div>`).join('');
    }

    /* ══════════════════════
       MENU
    ══════════════════════ */
    function buildCatBar() {
      document.getElementById('catBar').innerHTML = CATS.map(c =>
        `<button class="cat-pill ${c.id === activeCat ? 'active' : ''}" onclick="setCat('${c.id}')">${c.label}</button>`
      ).join('');
    }

    function setCat(id) {
      activeCat = id;
      buildCatBar();
      renderMenu();
      document.getElementById('page-menu').scrollTo({ top: 0, behavior: 'smooth' });
    }

    function spiceHtml(n) {
      if (!n) return '';
      return `<div class="dg-spice">${[1, 2, 3].map(i => `<div class="dg-sd${i <= n ? ' on' : ''}"></div>`).join('')}</div>`;
    }

    function cardHtml(d) {
      return `
<div class="dg-card">
  ${d.bs ? '<div class="dg-ribbon">Best</div>' : ''}
  <img class="dg-img" src="${d.img}" alt="${d.name}" loading="lazy">
  <div class="dg-body">
    <div class="dg-top">
      <div class="dg-veg ${d.veg ? 'veg' : 'nv'}"></div>
      ${d.bs || d.cs ? `<span class="dg-badge ${d.cs ? 'cs' : 'bs'}">${d.cs ? "Chef's" : 'Bestseller'}</span>` : '<span></span>'}
    </div>
    <div class="dg-name">${d.name}</div>
    <div class="dg-desc">${d.desc}</div>
    <div class="dg-foot">
      <div class="dg-price">&#8377; ${d.price}</div>
      ${spiceHtml(d.spice)}
    </div>
  </div>
</div>`;
    }

    function renderMenu() {
      const items = activeCat === 'all' ? DISHES : DISHES.filter(d => d.cat === activeCat);
      const order = ['starters', 'mains', 'breads', 'rice', 'salads', 'desserts', 'drinks'];
      const groups = {};
      items.forEach(d => { (groups[d.cat] = groups[d.cat] || []).push(d); });

      let html = '';
      order.forEach(cat => {
        const list = groups[cat];
        if (!list || !list.length) return;
        html += `
    <div class="menu-sec-hdr">
      <img src="${SEC_IMGS[cat]}" alt="${cat}" loading="lazy">
      <div class="menu-sec-hdr-overlay">
        <div class="menu-sec-title">${CAT_LABELS[cat]}</div>
      </div>
    </div>
    <div class="dish-grid">${list.map(cardHtml).join('')}</div>`;
      });

      document.getElementById('menuContent').innerHTML = html || `<div style="padding:40px 20px;text-align:center;color:var(--ink3);font-weight:700">No dishes found</div>`;
    }

    /* ══════════════════════
       SEARCH
    ══════════════════════ */
    function doSearch(q) {
      q = q.trim().toLowerCase();
      const results = q
        ? DISHES.filter(d => d.name.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q))
        : DISHES.filter(d => d.bs).slice(0, 8);

      document.getElementById('searchHint').textContent = q
        ? `${results.length} result${results.length !== 1 ? 's' : ''} found`
        : 'Popular Dishes';

      document.getElementById('searchGrid').innerHTML = results.length
        ? results.map(cardHtml).join('')
        : `<p style="grid-column:1/-1;text-align:center;padding:40px 0;color:var(--ink3);font-weight:700">No dishes found.<br><span style="font-size:0.85rem;font-weight:400">Try a different word.</span></p>`;
    }
