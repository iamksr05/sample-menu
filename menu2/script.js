const menuData = [
  // STARTERS
  { id:1, name:"Veg Samosa", desc:"Crispy pastry filled with spiced potatoes and peas", price:40, cat:"starters", veg:true, badges:["bestseller"], spice:1 },
  { id:2, name:"Aloo Tikki Chaat", desc:"Golden potato patties topped with chutneys, yogurt and sev", price:80, cat:"starters", veg:true, badges:["bestseller"], spice:2 },
  { id:3, name:"Paneer Tikka", desc:"Marinated cottage cheese cubes grilled in tandoor with peppers", price:180, cat:"starters", veg:true, badges:["special"], spice:2 },
  { id:4, name:"Dahi Ke Kebab", desc:"Soft hung curd and paneer patties with mint chutney", price:160, cat:"starters", veg:true, badges:[], spice:1 },
  { id:5, name:"Hara Bhara Kabab", desc:"Spinach, peas and potato patties with a crispy crust", price:140, cat:"starters", veg:true, badges:["new-item"], spice:1 },
  { id:6, name:"Chicken Tikka", desc:"Tender chicken pieces marinated in yogurt and spices, tandoor grilled", price:200, cat:"starters", veg:false, badges:["bestseller"], spice:2 },
  { id:7, name:"Veg Seekh Kebab", desc:"Spiced vegetable mince shaped on skewers and grilled", price:150, cat:"starters", veg:true, badges:[], spice:2 },
  { id:8, name:"Mutton Seekh Kebab", desc:"Juicy minced mutton with aromatic spices, chargrilled", price:260, cat:"starters", veg:false, badges:["special"], spice:3 },

  // MAIN COURSE
  { id:9, name:"Dal Tadka", desc:"Yellow lentils tempered with ghee, cumin and garlic", price:140, cat:"mains", veg:true, badges:["bestseller"], spice:1 },
  { id:10, name:"Dal Makhani", desc:"Slow-cooked black lentils simmered overnight in tomato and cream", price:160, cat:"mains", veg:true, badges:["bestseller"], spice:1 },
  { id:11, name:"Shahi Paneer", desc:"Rich cottage cheese in a cashew-tomato gravy with cream", price:200, cat:"mains", veg:true, badges:["special"], spice:1 },
  { id:12, name:"Kadai Paneer", desc:"Paneer tossed in a spicy kadai masala with capsicum and onion", price:190, cat:"mains", veg:true, badges:[], spice:3 },
  { id:13, name:"Palak Paneer", desc:"Fresh cottage cheese in a smooth, seasoned spinach gravy", price:180, cat:"mains", veg:true, badges:[], spice:1 },
  { id:14, name:"Matar Paneer", desc:"Green peas and cottage cheese in a tangy tomato gravy", price:170, cat:"mains", veg:true, badges:[], spice:2 },
  { id:15, name:"Aloo Gobi", desc:"Potato and cauliflower stir-fried with ginger, garlic and spices", price:150, cat:"mains", veg:true, badges:[], spice:2 },
  { id:16, name:"Rajma Masala", desc:"Red kidney beans slow-cooked in a rich onion-tomato gravy", price:160, cat:"mains", veg:true, badges:["bestseller"], spice:2 },
  { id:17, name:"Kadai Vegetables", desc:"Seasonal vegetables in a bold kadai masala sauce", price:170, cat:"mains", veg:true, badges:[], spice:3 },
  { id:18, name:"Butter Chicken", desc:"Tender chicken in a silky, mildly spiced tomato-butter sauce", price:260, cat:"mains", veg:false, badges:["bestseller","special"], spice:1 },
  { id:19, name:"Chicken Curry", desc:"Home-style chicken curry in a robust onion-tomato masala", price:240, cat:"mains", veg:false, badges:[], spice:2 },
  { id:20, name:"Mutton Rogan Josh", desc:"Slow-cooked mutton in a Kashmiri-style aromatic gravy", price:320, cat:"mains", veg:false, badges:["special"], spice:2 },
  { id:21, name:"Chicken Korma", desc:"Chicken braised in a creamy yogurt and nut-based sauce", price:270, cat:"mains", veg:false, badges:[], spice:1 },

  // BREADS
  { id:22, name:"Tandoori Roti", desc:"Whole wheat bread baked fresh in the tandoor", price:20, cat:"breads", veg:true, badges:[], spice:0 },
  { id:23, name:"Butter Naan", desc:"Soft leavened bread brushed with butter, baked in tandoor", price:40, cat:"breads", veg:true, badges:["bestseller"], spice:0 },
  { id:24, name:"Garlic Naan", desc:"Fluffy naan topped with minced garlic and coriander", price:50, cat:"breads", veg:true, badges:["bestseller"], spice:0 },
  { id:25, name:"Lachha Paratha", desc:"Flaky multi-layered whole wheat bread from the tawa", price:50, cat:"breads", veg:true, badges:[], spice:0 },
  { id:26, name:"Missi Roti", desc:"Spiced chickpea flour bread, a Kanpur specialty", price:35, cat:"breads", veg:true, badges:["special"], spice:1 },
  { id:27, name:"Puri (2 pcs)", desc:"Deep-fried puffed whole wheat bread, served hot", price:30, cat:"breads", veg:true, badges:[], spice:0 },
  { id:28, name:"Cheese Naan", desc:"Stuffed with mozzarella cheese, baked till golden", price:70, cat:"breads", veg:true, badges:["new-item"], spice:0 },

  // RICE & BIRYANI
  { id:29, name:"Steamed Rice", desc:"Plain basmati rice, perfectly cooked", price:80, cat:"rice", veg:true, badges:[], spice:0 },
  { id:30, name:"Jeera Rice", desc:"Fragrant basmati rice tempered with cumin and ghee", price:100, cat:"rice", veg:true, badges:[], spice:0 },
  { id:31, name:"Veg Pulao", desc:"Basmati rice cooked with mixed vegetables and whole spices", price:150, cat:"rice", veg:true, badges:[], spice:1 },
  { id:32, name:"Veg Biryani", desc:"Dum-cooked basmati with vegetables, saffron and fried onions", price:180, cat:"rice", veg:true, badges:["special"], spice:2 },
  { id:33, name:"Chicken Biryani", desc:"Fragrant basmati layered with spiced chicken, slow dum-cooked", price:260, cat:"rice", veg:false, badges:["bestseller","special"], spice:2 },
  { id:34, name:"Mutton Biryani", desc:"Royal dum biryani with tender mutton and aromatic spices", price:320, cat:"rice", veg:false, badges:["special"], spice:2 },

  // SALADS & RAITA
  { id:35, name:"Green Salad", desc:"Fresh cucumber, tomato, onion with lemon and chaat masala", price:60, cat:"salads", veg:true, badges:[], spice:0 },
  { id:36, name:"Kachumber Salad", desc:"Diced vegetables with coriander, green chilli and lime", price:60, cat:"salads", veg:true, badges:[], spice:1 },
  { id:37, name:"Boondi Raita", desc:"Chilled yogurt with crispy boondi, cumin and coriander", price:70, cat:"salads", veg:true, badges:[], spice:0 },
  { id:38, name:"Veg Raita", desc:"Fresh yogurt with grated cucumber, tomato and spices", price:70, cat:"salads", veg:true, badges:[], spice:0 },
  { id:39, name:"Onion Raita", desc:"Thick yogurt with crispy onions, mint and roasted cumin", price:60, cat:"salads", veg:true, badges:[], spice:1 },

  // DESSERTS
  { id:40, name:"Gulab Jamun (2 pcs)", desc:"Soft milk-solid dumplings soaked in rose-cardamom syrup", price:80, cat:"desserts", veg:true, badges:["bestseller"], spice:0 },
  { id:41, name:"Kheer", desc:"Creamy rice pudding with saffron, cardamom and nuts", price:90, cat:"desserts", veg:true, badges:["special"], spice:0 },
  { id:42, name:"Gajar Halwa", desc:"Slow-cooked carrot pudding with ghee, sugar and milk", price:100, cat:"desserts", veg:true, badges:["special"], spice:0 },
  { id:43, name:"Rasmalai", desc:"Soft cottage cheese patties in saffron-flavored sweetened milk", price:110, cat:"desserts", veg:true, badges:[], spice:0 },
  { id:44, name:"Kulfi Falooda", desc:"Pistachio kulfi with rose falooda, basil seeds and vermicelli", price:120, cat:"desserts", veg:true, badges:["new-item"], spice:0 },

  // BEVERAGES
  { id:45, name:"Sweet Lassi", desc:"Thick chilled yogurt blended smooth with sugar", price:80, cat:"beverages", veg:true, badges:["bestseller"], spice:0 },
  { id:46, name:"Mango Lassi", desc:"Creamy yogurt shake with Alphonso mango pulp", price:100, cat:"beverages", veg:true, badges:["bestseller"], spice:0 },
  { id:47, name:"Salted Lassi", desc:"Refreshing yogurt drink with rock salt, cumin and mint", price:70, cat:"beverages", veg:true, badges:[], spice:0 },
  { id:48, name:"Masala Chai", desc:"Strong tea brewed with ginger, cardamom and spices", price:40, cat:"beverages", veg:true, badges:[], spice:1 },
  { id:49, name:"Cold Coffee", desc:"Chilled blended coffee with milk and ice cream", price:100, cat:"beverages", veg:true, badges:[], spice:0 },
  { id:50, name:"Fresh Lime Soda", desc:"Sparkling lime soda — sweet, salted or mixed", price:60, cat:"beverages", veg:true, badges:[], spice:0 },
  { id:51, name:"Rooh Afza Sharbat", desc:"Classic rose and herb drink, chilled with milk or water", price:60, cat:"beverages", veg:true, badges:[], spice:0 },
];

const categories = [
  { id:"all", label:"All Items" },
  { id:"starters", label:" Starters" },
  { id:"mains", label:" Main Course" },
  { id:"breads", label:" Breads" },
  { id:"rice", label:" Rice & Biryani" },
  { id:"salads", label:" Salads & Raita" },
  { id:"desserts", label:" Desserts" },
  { id:"beverages", label:" Beverages" },
];

let activeCategory = "all";
let activeFilter = "all";

function buildTabs() {
  const el = document.getElementById("catTabs");
  el.innerHTML = categories.map(c => `
    <button class="cat-tab ${c.id === activeCategory ? 'active' : ''}" onclick="setCategory('${c.id}', this)">${c.label}</button>
  `).join('');
}

function setCategory(cat, el) {
  activeCategory = cat;
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  filterMenu();
}

function setFilter(f, el) {
  activeFilter = f;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  filterMenu();
}

function filterMenu() {
  const q = document.getElementById("searchInput").value.toLowerCase();
  let items = menuData;
  if (activeCategory !== "all") items = items.filter(i => i.cat === activeCategory);
  if (activeFilter === "veg") items = items.filter(i => i.veg);
  if (activeFilter === "nonveg") items = items.filter(i => !i.veg);
  if (activeFilter === "special") items = items.filter(i => i.badges.includes("special"));
  if (q) items = items.filter(i => i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q));
  renderCards(items);
}

function spiceHtml(level) {
  return [1,2,3].map(i => `<span class="chilli ${i <= level ? 'hot' : ''}"></span>`).join('');
}

function badgeHtml(badges) {
  return badges.map(b => {
    if (b === "bestseller") return `<span class="badge bestseller">Bestseller</span>`;
    if (b === "special") return `<span class="badge special">Chef's Special</span>`;
    if (b === "new-item") return `<span class="badge new-item">New</span>`;
    return '';
  }).join('');
}

function renderCards(items) {
  const grid = document.getElementById("menuGrid");
  if (!items.length) {
    grid.innerHTML = `<div class="no-results"><span></span>No dishes found. Try a different search!</div>`;
    return;
  }
  grid.innerHTML = items.map(item => `
    <div class="menu-card">
      <div class="card-top">
        <div class="badges">${badgeHtml(item.badges)}</div>
        <div class="veg-dot ${item.veg ? 'veg' : 'nonveg'}"></div>
      </div>
      <div class="dish-name">${item.name}</div>
      <div class="dish-desc">${item.desc}</div>
      <div class="card-bottom">
        <div class="dish-price">₹${item.price}</div>
        <div class="spice">${item.spice > 0 ? spiceHtml(item.spice) : '<span style="font-size:0.72rem;color:rgba(92,61,34,0.3)">Mild</span>'}</div>
      </div>
    </div>
  `).join('');
}

// Init
buildTabs();
filterMenu();

// Navbar scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('backTop').classList.toggle('show', window.scrollY > 300);
});

// Intersection observer for fade-ins
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
