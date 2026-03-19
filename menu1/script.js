/* ═══════════════════════════
   IMAGE MAP
═══════════════════════════ */
const IMGS = {
  combo:        'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
  naan:         'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600&q=80',
  kulcha:       'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80',
  paratha:      'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600&q=80',
  thali:        'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
  platter:      'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80',
  paneertikka:  'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80',
  mushroom:     'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
  kabab:        'https://images.unsplash.com/photo-1544025162-d76538977a0e?w=600&q=80',
  soyachaap:    'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80',
  hara:         'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80',
  dalmakhani:   'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
  shahipaneer:  'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80',
  palakpaneer:  'https://images.unsplash.com/photo-1620964849168-4e25bcc9aaa0?w=600&q=80',
  kadhaipaneer: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80',
  paneermasala: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80',
  chole:        'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
  curry:        'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
  malaikofta:   'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80',
  saag:         'https://images.unsplash.com/photo-1620964849168-4e25bcc9aaa0?w=600&q=80',
  roti:         'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80',
  biryani:      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80',
  rice:         'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=600&q=80',
  friedrice:    'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80',
  noodles:      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80',
  tikki:        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80',
  salad:        'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80',
  raita:        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80',
  papad:        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80',
  curd:         'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80',
  gulabjamun:   'https://images.unsplash.com/photo-1666984970900-60c6b83be3d0?w=600&q=80',
  icecream:     'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80',
  lassi:        'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80',
  chai:         'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
  lemon:        'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
};

/* ═══════════════════════════
   MENU DATA
═══════════════════════════ */
const menuData = [

  // COMBOS
  { id:1,  name:'Chur Chur Naan Combo',    desc:'2 Chur Chur Naan + Dal Makhani + Raita',                                    cat:'combos',  veg:true,  badges:['bestseller'], spice:1, img:IMGS.naan },
  { id:2,  name:'Kulcha Combo',            desc:'2 Tandoori Kulcha + Chole + Raita',                                         cat:'combos',  veg:true,  badges:['bestseller'], spice:2, img:IMGS.kulcha },
  { id:3,  name:'Naan Combo',              desc:'2 Butter Naan + Paneer Gravy + Raita',                                      cat:'combos',  veg:true,  badges:[],             spice:1, img:IMGS.naan },
  { id:4,  name:'Paneer Paratha Combo',    desc:'2 Paneer Paratha + Dal Makhani + Salad',                                    cat:'combos',  veg:true,  badges:['special'],    spice:1, img:IMGS.paratha },
  { id:5,  name:'Stuffed Kulcha Combo',    desc:'2 Tandoori Stuffed Kulcha + Chole + Raita',                                 cat:'combos',  veg:true,  badges:[],             spice:2, img:IMGS.kulcha },
  { id:6,  name:'Stuffed Paratha Combo',   desc:'2 Tandoori Mixed Paratha + Dal Makhani + Raita',                            cat:'combos',  veg:true,  badges:[],             spice:1, img:IMGS.paratha },

  // PLATTERS
  { id:7,  name:'Assorted Chaap Platter',  desc:'Afghani + Achari + Malai Soya Chaap — 4 pieces each, served with chutneys', cat:'platters',veg:true,  badges:['special'],    spice:2, img:IMGS.soyachaap },
  { id:8,  name:'Chaap Platter (Mini)',    desc:'Afghani + Achari Soya Chaap — assorted grilled chaap selection',             cat:'platters',veg:true,  badges:[],             spice:2, img:IMGS.soyachaap },
  { id:9,  name:'Paneer Tikka Platter',    desc:'Afghani + Achari + Malai + Amritsari Paneer Tikka — 5 pieces each',         cat:'platters',veg:true,  badges:['special'],    spice:2, img:IMGS.paneertikka },
  { id:10, name:'Tandoori Platter',        desc:'Corn Tikki + Hara Bhara Kebab + Veg Seekh Kebab + Achari Mushroom Tikka',   cat:'platters',veg:true,  badges:[],             spice:2, img:IMGS.platter },

  // MEALS
  { id:11, name:'Chole Chawal',            desc:'Classic chickpea curry served with fragrant steamed rice',                   cat:'meals',   veg:true,  badges:['bestseller'], spice:2, img:IMGS.chole },
  { id:12, name:'Dal Makhani Chawal',      desc:'Overnight slow-cooked dal makhani with steamed basmati rice',               cat:'meals',   veg:true,  badges:['bestseller'], spice:1, img:IMGS.dalmakhani },
  { id:13, name:'Dal Makhani With Roti',   desc:'Dal Makhani + 2 Butter Tandoori Roti',                                      cat:'meals',   veg:true,  badges:[],             spice:1, img:IMGS.dalmakhani },
  { id:14, name:'Dal Tadka Chawal',        desc:'Yellow lentil dal tempered with ghee and cumin, with steamed rice',         cat:'meals',   veg:true,  badges:[],             spice:1, img:IMGS.dalmakhani },
  { id:15, name:'Dal Tadka With Roti',     desc:'Dal Tadka + 2 Butter Tandoori Roti',                                        cat:'meals',   veg:true,  badges:[],             spice:1, img:IMGS.dalmakhani },

  // THALI
  { id:16, name:'Bhaukal Thali',           desc:'Paneer Gravy + Dry Sabzi + Dal + 1 Laccha Paratha + 1 Butter Naan + Rice + Gulab Jamun', cat:'thali', veg:true, badges:['bestseller'], spice:1, img:IMGS.thali },
  { id:17, name:'Chaukas Thali',           desc:'Paneer Gravy + Dal Makhani or Dal Tadka + 2 Tandoori Roti + Steamed Rice',  cat:'thali',   veg:true,  badges:[],             spice:1, img:IMGS.thali },
  { id:18, name:'Maharaja Thali',          desc:'Paneer Gravy + Dry Sabzi + Dal + Paratha + Naan + Rice + Gulab Jamun + Kebab', cat:'thali', veg:true,  badges:['special'],    spice:1, img:IMGS.thali },

  // STARTERS
  { id:19, name:'Achari Mushroom',         desc:'Tangy, pickle-spiced mushrooms grilled in the tandoor',                     cat:'starters',veg:true,  badges:[],             spice:2, img:IMGS.mushroom },
  { id:20, name:'Achari Paneer Tikka',     desc:'Cottage cheese marinated in tangy achari spices, tandoor grilled',          cat:'starters',veg:true,  badges:[],             spice:2, img:IMGS.paneertikka },
  { id:21, name:'Achari Soya Chaap',       desc:'Soya chaap marinated in pickling spices, grilled till smoky and tender',    cat:'starters',veg:true,  badges:[],             spice:2, img:IMGS.soyachaap },
  { id:22, name:'Afghani Paneer Tikka',    desc:'Soft paneer in a creamy white Afghani marinade, delicately grilled',        cat:'starters',veg:true,  badges:['special'],    spice:1, img:IMGS.paneertikka },
  { id:23, name:'Afghani Soya Chaap',      desc:'Soya chunks in aromatic Afghani marinade — succulent, rich and smoky',      cat:'starters',veg:true,  badges:['bestseller'], spice:1, img:IMGS.soyachaap },
  { id:24, name:'Amritsari Paneer Tikka',  desc:'Paneer cubes in tangy Amritsari gram flour marinade, char-grilled',         cat:'starters',veg:true,  badges:[],             spice:2, img:IMGS.paneertikka },
  { id:25, name:'Hara Bhara Kebab',        desc:'Spinach, green peas and potato patties with a crisp golden crust',          cat:'starters',veg:true,  badges:[],             spice:1, img:IMGS.hara },
  { id:26, name:'Hariyali Paneer Tikka',   desc:'Paneer marinated in green herb chutney and grilled in the tandoor',         cat:'starters',veg:true,  badges:[],             spice:2, img:IMGS.paneertikka },
  { id:27, name:'Hariyali Soya Chaap',     desc:'Green herb-marinated soya chaap, veg tikka style',                          cat:'starters',veg:true,  badges:[],             spice:2, img:IMGS.soyachaap },
  { id:28, name:'Kali Mirch Paneer Tikka', desc:'Paneer tikka with bold black pepper marinade, smoky and peppery',           cat:'starters',veg:true,  badges:[],             spice:3, img:IMGS.paneertikka },
  { id:29, name:'Malai Paneer Tikka',      desc:'Melt-in-mouth paneer in a rich cream and cheese marinade',                  cat:'starters',veg:true,  badges:['special'],    spice:1, img:IMGS.paneertikka },
  { id:30, name:'Malai Soya Chaap',        desc:'Tender soya chunks in a rich, creamy malai marinade',                       cat:'starters',veg:true,  badges:[],             spice:1, img:IMGS.soyachaap },
  { id:31, name:'Panch Mirch Paneer Tikka',desc:'Paneer tikka marinated with five types of pepper — bold and distinctive',   cat:'starters',veg:true,  badges:[],             spice:3, img:IMGS.paneertikka },
  { id:32, name:'Tandoori Soya Chaap',     desc:'Crispy soya chaap cooked in the tandoor, topped with mint chutney',         cat:'starters',veg:true,  badges:['bestseller'], spice:2, img:IMGS.soyachaap },
  { id:33, name:'Tandoori Stuffed Mushroom',desc:'Large mushrooms stuffed with spiced filling and grilled in the tandoor',   cat:'starters',veg:true,  badges:[],             spice:2, img:IMGS.mushroom },
  { id:34, name:'Veg Seekh Kebab',         desc:'Spiced vegetable mince shaped on skewers and grilled over coal',            cat:'starters',veg:true,  badges:[],             spice:2, img:IMGS.kabab },

  // MAIN COURSE
  { id:35, name:'Aloo Gobi',              desc:'Potato and cauliflower stir-fried with ginger, garlic and whole spices',     cat:'mains',   veg:true,  badges:[],             spice:2, img:IMGS.curry },
  { id:36, name:'Aloo Jeera',             desc:'Potatoes tossed with cumin seeds, green chilli and fresh coriander',         cat:'mains',   veg:true,  badges:[],             spice:1, img:IMGS.curry },
  { id:37, name:'Aloo Matar',             desc:'Green peas and potato cooked in a tangy onion-tomato masala',                cat:'mains',   veg:true,  badges:[],             spice:2, img:IMGS.curry },
  { id:38, name:'Amritsari Paneer',       desc:'Paneer cooked in a rich, aromatic Amritsari-style gravy',                    cat:'mains',   veg:true,  badges:[],             spice:2, img:IMGS.paneermasala },
  { id:39, name:'Baingan Bharta',         desc:'Smoke-roasted aubergine mashed and cooked with onion, tomato and spices',    cat:'mains',   veg:true,  badges:[],             spice:2, img:IMGS.curry },
  { id:40, name:'Chole Masala',           desc:'Chickpeas slow-cooked in a rich and aromatic blend of traditional spices',   cat:'mains',   veg:true,  badges:['bestseller'], spice:2, img:IMGS.chole },
  { id:41, name:'Dal Fry',               desc:'Yellow lentils tempered with ghee, mustard seeds, cumin and dried red chilli', cat:'mains',  veg:true,  badges:[],             spice:1, img:IMGS.dalmakhani },
  { id:42, name:'Dal Makhani',            desc:'Overnight slow-cooked black lentils simmered in tomato, butter and cream',   cat:'mains',   veg:true,  badges:['bestseller'], spice:1, img:IMGS.dalmakhani },
  { id:43, name:'Dal Manchurian',         desc:'Indo-Chinese style lentil koftas tossed in a bold manchurian sauce',         cat:'mains',   veg:true,  badges:[],             spice:3, img:IMGS.curry },
  { id:44, name:'Dal Panchratan',         desc:'A nutritious blend of five lentils cooked together with aromatic spices',    cat:'mains',   veg:true,  badges:[],             spice:1, img:IMGS.dalmakhani },
  { id:45, name:'Double Dal Tadka',       desc:'Double-tempered yellow lentils with ghee, cumin and fried garlic',           cat:'mains',   veg:true,  badges:['special'],    spice:2, img:IMGS.dalmakhani },
  { id:46, name:'Dum Aloo',              desc:'Baby potatoes slow-cooked in a rich, spiced gravy with paneer stuffing',      cat:'mains',   veg:true,  badges:[],             spice:2, img:IMGS.curry },
  { id:47, name:'Gravy Chaap',            desc:'Soya chaap cooked in a rich, thick masala gravy',                            cat:'mains',   veg:true,  badges:[],             spice:2, img:IMGS.soyachaap },
  { id:48, name:'Hariyali Mushroom Masala',desc:'Mushrooms cooked in a fresh green herb masala sauce',                       cat:'mains',   veg:true,  badges:[],             spice:2, img:IMGS.mushroom },
  { id:49, name:'Hing Dhaniya Aloo',      desc:'Potatoes tempered with asafoetida, coriander and whole spices',              cat:'mains',   veg:true,  badges:[],             spice:1, img:IMGS.curry },
  { id:50, name:'Kadai Chaap',            desc:'Soya chaap tossed in bold kadai masala with capsicum and onions',            cat:'mains',   veg:true,  badges:[],             spice:3, img:IMGS.soyachaap },
  { id:51, name:'Kadai Paneer',           desc:'Tender paneer with mixed bell peppers in a bold, fragrant kadai masala',     cat:'mains',   veg:true,  badges:['bestseller'], spice:3, img:IMGS.kadhaipaneer },
  { id:52, name:'Kadhi Pakoda',           desc:'Crispy pakodas dunked in a thick, tangy yogurt-based kadhi curry',           cat:'mains',   veg:true,  badges:[],             spice:1, img:IMGS.curry },
  { id:53, name:'Kaju Masala',            desc:'Cashews in a rich, creamy tomato-based gravy with aromatic spices',          cat:'mains',   veg:true,  badges:['special'],    spice:1, img:IMGS.malaikofta },
  { id:54, name:'Kaju Paneer',            desc:'Paneer and cashews in a decadent, creamy curry',                             cat:'mains',   veg:true,  badges:[],             spice:1, img:IMGS.malaikofta },
  { id:55, name:'Malai Kofta',            desc:'Soft cottage cheese dumplings in a velvety, mildly spiced cream gravy',      cat:'mains',   veg:true,  badges:['special'],    spice:1, img:IMGS.malaikofta },
  { id:56, name:'Matar Mushroom',         desc:'Green peas and mushrooms in a rich, savory tomato-based gravy',              cat:'mains',   veg:true,  badges:[],             spice:2, img:IMGS.mushroom },
  { id:57, name:'Matar Paneer',           desc:'Green peas and paneer in a creamy cashew and tomato gravy',                  cat:'mains',   veg:true,  badges:[],             spice:2, img:IMGS.paneermasala },
  { id:58, name:'Methi Matar Malai',      desc:'Rich and creamy dish with the aromatic twist of fenugreek and green peas',   cat:'mains',   veg:true,  badges:[],             spice:1, img:IMGS.malaikofta },
  { id:59, name:'Mix Vegetable',          desc:'Seasonal vegetables cooked together in a spiced onion-tomato masala',        cat:'mains',   veg:true,  badges:[],             spice:2, img:IMGS.curry },
  { id:60, name:'Mixed Dal Tadka',        desc:'Combination of lentils tempered with ghee and a generous garnish of spices', cat:'mains',   veg:true,  badges:[],             spice:1, img:IMGS.dalmakhani },
  { id:61, name:'Mushroom Masala',        desc:'Mushrooms cooked in a flavorful blend of tomatoes, onions and whole spices', cat:'mains',   veg:true,  badges:[],             spice:2, img:IMGS.mushroom },
  { id:62, name:'Palak Corn Lehsuni Tadka',desc:'Spinach and corn in a garlic-tempered smooth gravy',                        cat:'mains',   veg:true,  badges:[],             spice:1, img:IMGS.palakpaneer },
  { id:63, name:'Palak Paneer',           desc:'Fresh cottage cheese in a smooth, perfectly seasoned spinach gravy',         cat:'mains',   veg:true,  badges:['bestseller'], spice:1, img:IMGS.palakpaneer },
  { id:64, name:'Paneer Amritsari',       desc:'Paneer cubes in bold Amritsari spices, rich and flavourful',                 cat:'mains',   veg:true,  badges:[],             spice:2, img:IMGS.paneermasala },
  { id:65, name:'Paneer Bhurji',          desc:'Crumbled paneer with onions, tomatoes and spices — flavourful and homestyle',cat:'mains',   veg:true,  badges:[],             spice:2, img:IMGS.paneermasala },
  { id:66, name:'Paneer Butter Masala',   desc:'Tender cottage cheese in a rich and creamy tomato-butter sauce',             cat:'mains',   veg:true,  badges:['bestseller'], spice:1, img:IMGS.shahipaneer },
  { id:67, name:'Paneer Chatpata',        desc:'Paneer in a tangy, piquant masala — sharp flavours, bold character',         cat:'mains',   veg:true,  badges:[],             spice:3, img:IMGS.paneermasala },
  { id:68, name:'Paneer Do Pyaaza',       desc:'Paneer cooked in a rich, double-onion gravy with aromatic spices',           cat:'mains',   veg:true,  badges:[],             spice:2, img:IMGS.kadhaipaneer },
  { id:69, name:'Paneer Lababdar',        desc:'Paneer in a silky, luscious tomato cream sauce with fenugreek',              cat:'mains',   veg:true,  badges:['special'],    spice:1, img:IMGS.shahipaneer },
  { id:70, name:'Paneer Lahori',          desc:'Paneer in a rich, creamy Lahori-style masala with aromatic whole spices',    cat:'mains',   veg:true,  badges:[],             spice:2, img:IMGS.paneermasala },
  { id:71, name:'Paneer Makhani',         desc:'Classic cottage cheese in a rich, velvety tomato-butter-cream sauce',        cat:'mains',   veg:true,  badges:['bestseller'], spice:1, img:IMGS.shahipaneer },
  { id:72, name:'Paneer Matar Malai',     desc:'Paneer and green peas in a silky malai gravy',                               cat:'mains',   veg:true,  badges:[],             spice:1, img:IMGS.malaikofta },
  { id:73, name:'Paneer Mushroom Masala', desc:'Paneer and mushrooms cooked together in a spiced tomato gravy',              cat:'mains',   veg:true,  badges:[],             spice:2, img:IMGS.mushroom },
  { id:74, name:'Paneer Tikka Masala',    desc:'Grilled paneer tikka pieces simmered in a rich, tangy masala gravy',         cat:'mains',   veg:true,  badges:['special'],    spice:2, img:IMGS.kadhaipaneer },
  { id:75, name:'Punjabi Chole',          desc:'Classic chickpeas with aromatic spices — a beloved North Indian staple',     cat:'mains',   veg:true,  badges:['bestseller'], spice:2, img:IMGS.chole },
  { id:76, name:'Rai Wali Bhindi',        desc:'Okra cooked with mustard seeds, onion and a touch of amchur',                cat:'mains',   veg:true,  badges:[],             spice:1, img:IMGS.curry },
  { id:77, name:'Rajma',                  desc:'Red kidney beans slow-cooked in a thick, bold onion-tomato masala',          cat:'mains',   veg:true,  badges:['bestseller'], spice:2, img:IMGS.chole },
  { id:78, name:'Sarso Ka Saag',          desc:'Traditional Punjabi mustard greens slow-cooked with spices and makhan',      cat:'mains',   veg:true,  badges:['special'],    spice:2, img:IMGS.saag },
  { id:79, name:'Shahi Paneer',           desc:'Cottage cheese in a royal blend of cashews, cream and aromatic spices',      cat:'mains',   veg:true,  badges:['special'],    spice:1, img:IMGS.shahipaneer },
  { id:80, name:'Stuffed Capsicum',       desc:'Capsicum stuffed with a spiced paneer filling, cooked in masala gravy',      cat:'mains',   veg:true,  badges:[],             spice:2, img:IMGS.curry },
  { id:81, name:'Stuffed Tomato',         desc:'Tomatoes stuffed with spiced paneer and cooked in a rich gravy',             cat:'mains',   veg:true,  badges:[],             spice:2, img:IMGS.curry },
  { id:82, name:'Tawa Chaap Masala',      desc:'Soya chaap cooked on a tawa with bold masala and onion-tomato base',         cat:'mains',   veg:true,  badges:[],             spice:2, img:IMGS.soyachaap },
  { id:83, name:'Tawa Paneer',            desc:'Paneer cooked flat on a tawa with onions, tomatoes and spices',              cat:'mains',   veg:true,  badges:[],             spice:2, img:IMGS.paneermasala },
  { id:84, name:'Veg Jalfrezi',           desc:'Mixed vegetables stir-fried in a tangy, semi-dry spiced sauce',              cat:'mains',   veg:true,  badges:[],             spice:3, img:IMGS.curry },
  { id:85, name:'Veg Kofta',              desc:'Soft vegetable dumplings in a rich, spiced tomato-cream gravy',              cat:'mains',   veg:true,  badges:[],             spice:1, img:IMGS.malaikofta },

  // BREADS
  { id:86, name:'Assorted Bread Basket',  desc:'A selection of freshly baked tandoor breads served warm',                   cat:'breads',  veg:true,  badges:['special'],    spice:0, img:IMGS.naan },
  { id:87, name:'Butter Kulcha',          desc:'Soft, leavened kulcha brushed with butter and baked in tandoor',            cat:'breads',  veg:true,  badges:[],             spice:0, img:IMGS.kulcha },
  { id:88, name:'Butter Naan',            desc:'Soft leavened bread brushed generously with butter, baked in tandoor',      cat:'breads',  veg:true,  badges:['bestseller'], spice:0, img:IMGS.naan },
  { id:89, name:'Butter Tandoori Roti',   desc:'Whole wheat bread baked fresh in the tandoor, finished with butter',        cat:'breads',  veg:true,  badges:[],             spice:0, img:IMGS.roti },
  { id:90, name:'Cheese Naan',            desc:'Leavened naan stuffed with cheese and herbs, baked till golden',            cat:'breads',  veg:true,  badges:['new-item'],   spice:0, img:IMGS.naan },
  { id:91, name:'Chur Chur Naan',         desc:'Crispy, layered, crumbled naan — a Punjabi classic served with butter',     cat:'breads',  veg:true,  badges:['bestseller'], spice:0, img:IMGS.naan },
  { id:92, name:'Garlic Naan',            desc:'Fluffy naan topped with minced garlic and fresh coriander',                 cat:'breads',  veg:true,  badges:['bestseller'], spice:0, img:IMGS.naan },
  { id:93, name:'Laccha Naan',            desc:'Layered, flaky naan with a light buttery finish from the tandoor',          cat:'breads',  veg:true,  badges:[],             spice:0, img:IMGS.naan },
  { id:94, name:'Laccha Paratha',         desc:'Multi-layered flaky whole wheat paratha cooked on the tawa',                cat:'breads',  veg:true,  badges:[],             spice:0, img:IMGS.paratha },
  { id:95, name:'Makki Ki Roti',          desc:'Traditional corn flour flatbread, best paired with Sarso Ka Saag',          cat:'breads',  veg:true,  badges:[],             spice:0, img:IMGS.roti },
  { id:96, name:'Methi Paratha',          desc:'Whole wheat paratha kneaded with fresh fenugreek leaves',                   cat:'breads',  veg:true,  badges:[],             spice:1, img:IMGS.paratha },
  { id:97, name:'Methi Roti',             desc:'Soft tandoori roti with fresh fenugreek, earthy and fragrant',              cat:'breads',  veg:true,  badges:[],             spice:1, img:IMGS.roti },
  { id:98, name:'Missi Roti',             desc:'Spiced chickpea flour bread, a beloved North Indian specialty',             cat:'breads',  veg:true,  badges:['special'],    spice:1, img:IMGS.roti },
  { id:99, name:'Naan',                   desc:'Classic plain leavened bread, soft and pillowy from the tandoor',           cat:'breads',  veg:true,  badges:[],             spice:0, img:IMGS.naan },
  { id:100,name:'Paneer Paratha with Curd',desc:'Whole wheat paratha stuffed with spiced paneer, served with fresh curd',   cat:'breads',  veg:true,  badges:['bestseller'], spice:1, img:IMGS.paratha },
  { id:101,name:'Pudina Paratha',         desc:'Refreshing mint-infused paratha, crisp on the outside, soft inside',        cat:'breads',  veg:true,  badges:[],             spice:1, img:IMGS.paratha },
  { id:102,name:'Rumali Roti',            desc:'Paper-thin, handkerchief-style soft roti — light and delicate',             cat:'breads',  veg:true,  badges:[],             spice:0, img:IMGS.roti },
  { id:103,name:'Tandoori Aloo Paratha',  desc:'Paratha stuffed with spiced potato filling, baked in tandoor, with curd',   cat:'breads',  veg:true,  badges:[],             spice:1, img:IMGS.paratha },
  { id:104,name:'Tandoori Gobi Paratha',  desc:'Paratha stuffed with spiced cauliflower, baked in tandoor, with curd',      cat:'breads',  veg:true,  badges:[],             spice:1, img:IMGS.paratha },
  { id:105,name:'Tandoori Hari Mirch Paratha',desc:'Green chilli paratha baked in the tandoor — for the bold palate',      cat:'breads',  veg:true,  badges:[],             spice:3, img:IMGS.paratha },
  { id:106,name:'Tandoori Lal Mirch Paratha',desc:'Red chilli paratha prepared in the tandoor — fiery and distinctive',    cat:'breads',  veg:true,  badges:[],             spice:3, img:IMGS.paratha },
  { id:107,name:'Tandoori Mixed Paratha', desc:'Mixed stuffed paratha baked in tandoor, served with fresh curd',            cat:'breads',  veg:true,  badges:[],             spice:1, img:IMGS.paratha },
  { id:108,name:'Tandoori Pyaaz Paratha', desc:'Paratha stuffed with spiced onion, baked in tandoor, served with curd',     cat:'breads',  veg:true,  badges:[],             spice:2, img:IMGS.paratha },
  { id:109,name:'Tandoori Roti',          desc:'Plain whole wheat bread baked in the tandoor, no butter',                   cat:'breads',  veg:true,  badges:[],             spice:0, img:IMGS.roti },

  // RICE & BIRYANI
  { id:110,name:'Steamed Rice',           desc:'Plain basmati rice, perfectly cooked — light and fluffy',                   cat:'rice',    veg:true,  badges:[],             spice:0, img:IMGS.rice },
  { id:111,name:'Mushroom Biryani',       desc:'Fragrant basmati dum-cooked with mushrooms and whole spices',               cat:'rice',    veg:true,  badges:[],             spice:2, img:IMGS.biryani },
  { id:112,name:'Paneer Tikka Biryani',   desc:'Classic basmati biryani layered with paneer tikka, spices and vegetables',  cat:'rice',    veg:true,  badges:['special'],    spice:2, img:IMGS.biryani },
  { id:113,name:'Vegetable Biryani',      desc:'Saffron basmati dum-cooked with seasonal vegetables and fried onions',      cat:'rice',    veg:true,  badges:['bestseller'], spice:2, img:IMGS.biryani },

  // FRIED RICE & NOODLES
  { id:114,name:'Chilli Garlic Fried Rice',desc:'Wok-tossed rice with fresh garlic and green chilli',                      cat:'friedrice',veg:true, badges:[],             spice:3, img:IMGS.friedrice },
  { id:115,name:'Chilli Garlic Noodles',  desc:'Hakka noodles stir-fried with bold garlic and chilli flavours',             cat:'friedrice',veg:true, badges:[],             spice:3, img:IMGS.noodles },
  { id:116,name:'Mushroom Fried Rice',    desc:'Fragrant fried rice tossed with mushrooms and Indo-Chinese sauces',         cat:'friedrice',veg:true, badges:[],             spice:2, img:IMGS.friedrice },
  { id:117,name:'Mushroom Noodles',       desc:'Stir-fried noodles with mushrooms in a soy and pepper sauce',               cat:'friedrice',veg:true, badges:[],             spice:2, img:IMGS.noodles },
  { id:118,name:'Paneer Fried Rice',      desc:'Wok-tossed basmati with paneer and Indo-Chinese seasonings',                cat:'friedrice',veg:true, badges:[],             spice:2, img:IMGS.friedrice },
  { id:119,name:'Paneer Noodles',         desc:'Hakka noodles with paneer cubes tossed in bold oriental sauces',            cat:'friedrice',veg:true, badges:[],             spice:2, img:IMGS.noodles },
  { id:120,name:'Schezwan Fried Rice',    desc:'Spicy Schezwan sauce-tossed rice — bold and flavour-packed',                cat:'friedrice',veg:true, badges:['bestseller'], spice:3, img:IMGS.friedrice },
  { id:121,name:'Schezwan Noodles',       desc:'Noodles tossed in fiery Schezwan sauce — a crowd favourite',                cat:'friedrice',veg:true, badges:['bestseller'], spice:3, img:IMGS.noodles },
  { id:122,name:'Veg Hakka Noodles',      desc:'Classic hakka noodles stir-fried with mixed vegetables',                    cat:'friedrice',veg:true, badges:[],             spice:2, img:IMGS.noodles },
  { id:123,name:'Vegetable Fried Rice',   desc:'Wok-tossed basmati rice with fresh mixed vegetables',                       cat:'friedrice',veg:true, badges:[],             spice:1, img:IMGS.friedrice },

  // SNACKS
  { id:124,name:'Aloo Stuffed Kulcha',    desc:'Kulcha stuffed with spiced potato and cooked on a tawa',                    cat:'snacks',  veg:true,  badges:[],             spice:1, img:IMGS.kulcha },
  { id:125,name:'Amritsari Kulcha',       desc:'The iconic Amritsari kulcha — crispy, buttered and irresistible',           cat:'snacks',  veg:true,  badges:['bestseller'], spice:1, img:IMGS.kulcha },
  { id:126,name:'Corn Tikki',             desc:'Crispy corn patties spiced with green chilli and coriander',                cat:'snacks',  veg:true,  badges:[],             spice:2, img:IMGS.tikki },
  { id:127,name:'Gobi Stuffed Kulcha',    desc:'Kulcha stuffed with spiced cauliflower, cooked on a tawa',                  cat:'snacks',  veg:true,  badges:[],             spice:1, img:IMGS.kulcha },

  // SALADS
  { id:128,name:'Green Salad',            desc:'Cucumber, tomato, carrot, onion, green chilli and a squeeze of lemon',      cat:'salads',  veg:true,  badges:[],             spice:0, img:IMGS.salad },
  { id:129,name:'Kachumber Salad',        desc:'Finely chopped cucumber, carrot and onion with a hint of lemon',            cat:'salads',  veg:true,  badges:[],             spice:1, img:IMGS.salad },

  // ACCOMPANIMENTS
  { id:130,name:'Boondi Raita',           desc:'Chilled yogurt with crispy boondi, roasted cumin and fresh coriander',      cat:'accompaniments', veg:true, badges:[], spice:0, img:IMGS.raita },
  { id:131,name:'Masala Papad',           desc:'Crispy roasted papad topped with onion, tomato and chaat masala',           cat:'accompaniments', veg:true, badges:[], spice:1, img:IMGS.papad },
  { id:132,name:'Mix Veg Raita',          desc:'Refreshing yogurt with mixed vegetables — a perfect cooling side',          cat:'accompaniments', veg:true, badges:[], spice:0, img:IMGS.raita },
  { id:133,name:'Plain Curd',             desc:'Fresh homemade curd — plain, creamy and perfect for cooling the palate',    cat:'accompaniments', veg:true, badges:[], spice:0, img:IMGS.curd },
  { id:134,name:'Roasted Papad',          desc:'Light, crispy roasted papad served as a classic accompaniment',             cat:'accompaniments', veg:true, badges:[], spice:0, img:IMGS.papad },

  // DESSERTS
  { id:135,name:'Gulab Jamun (2 pcs)',    desc:'Soft milk-solid dumplings soaked in rose-cardamom syrup',                   cat:'desserts',veg:true,  badges:['bestseller'], spice:0, img:IMGS.gulabjamun },
  { id:136,name:'Gulab Jamun with Ice Cream',desc:'2 Gulab Jamun served warm with vanilla ice cream',                       cat:'desserts',veg:true,  badges:['special'],    spice:0, img:IMGS.gulabjamun },
  { id:137,name:'Butterscotch Ice Cream', desc:'2 generous scoops of creamy butterscotch ice cream',                        cat:'desserts',veg:true,  badges:[],             spice:0, img:IMGS.icecream },
  { id:138,name:'Vanilla Ice Cream',      desc:'2 scoops of classic, cold and creamy vanilla ice cream',                    cat:'desserts',veg:true,  badges:[],             spice:0, img:IMGS.icecream },

  // BEVERAGES
  { id:139,name:'Chaas',                  desc:'Spiced buttermilk blended with roasted cumin, black salt and mint',         cat:'beverages',veg:true, badges:[],             spice:1, img:IMGS.lassi },
  { id:140,name:'Jaljeera',               desc:'Tangy, spiced lemon and cumin water — a refreshing classic',                cat:'beverages',veg:true, badges:[],             spice:2, img:IMGS.lemon },
  { id:141,name:'Lassi',                  desc:'Chilled thick yogurt drink — smooth, fresh and satisfying',                 cat:'beverages',veg:true, badges:[],             spice:0, img:IMGS.lassi },
  { id:142,name:'Lemon Juice',            desc:'Fresh squeezed lemon juice, chilled and lightly sweetened',                 cat:'beverages',veg:true, badges:[],             spice:0, img:IMGS.lemon },
  { id:143,name:'Lemon Soda',             desc:'Sparkling lemon soda — sweet, salted or mixed, your choice',               cat:'beverages',veg:true, badges:[],             spice:0, img:IMGS.lemon },
  { id:144,name:'Mango Lassi',            desc:'Creamy yogurt shake with fresh Alphonso mango pulp',                        cat:'beverages',veg:true, badges:['bestseller'], spice:0, img:IMGS.lassi },
  { id:145,name:'Masala Shikanji',        desc:'Spiced Indian lemonade with black salt, roasted cumin and ginger',          cat:'beverages',veg:true, badges:['special'],    spice:1, img:IMGS.lemon },
];

const categories = [
  { id:'all',            label:'All Items' },
  { id:'combos',         label:'Combos' },
  { id:'platters',       label:'Platters' },
  { id:'meals',          label:'Meals' },
  { id:'thali',          label:'Thali' },
  { id:'starters',       label:'Starters' },
  { id:'mains',          label:'Main Course' },
  { id:'breads',         label:'Breads' },
  { id:'rice',           label:'Rice & Biryani' },
  { id:'friedrice',      label:'Fried Rice & Noodles' },
  { id:'snacks',         label:'Snacks' },
  { id:'salads',         label:'Salads' },
  { id:'accompaniments', label:'Accompaniments' },
  { id:'desserts',       label:'Desserts' },
  { id:'beverages',      label:'Beverages' },
];

let activeCategory = 'all';
let activeFilter   = 'all';

/* ── Build tabs ── */
function buildTabs() {
  document.getElementById('catTabs').innerHTML = categories.map(c =>
    `<button class="cat-tab ${c.id === activeCategory ? 'active' : ''}"
             onclick="setCategory('${c.id}', this)">${c.label}</button>`
  ).join('');
}

/* ── Category ── */
function setCategory(cat, el) {
  activeCategory = cat;
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  filterMenu();
}

/* ── Pill filter ── */
function setFilter(f, el) {
  activeFilter = f;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  filterMenu();
}

/* ── Combined filter ── */
function filterMenu() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  let items = menuData;

  if (activeCategory !== 'all')
    items = items.filter(i => i.cat === activeCategory);

  if (activeFilter === 'special')    items = items.filter(i => i.badges.includes('special'));
  if (activeFilter === 'bestseller') items = items.filter(i => i.badges.includes('bestseller'));
  if (activeFilter === 'new-item')   items = items.filter(i => i.badges.includes('new-item'));

  if (q) items = items.filter(i =>
    i.name.toLowerCase().includes(q) ||
    i.desc.toLowerCase().includes(q)
  );

  renderCards(items);
}

/* ── Render ── */
function spiceDots(level) {
  if (level === 0) return `<span class="spice-label">Mild</span>`;
  return `<div class="spice-dots">
    ${[1,2,3].map(i => `<div class="spice-dot ${i <= level ? 'on' : ''}"></div>`).join('')}
  </div>`;
}

function badgeHtml(badges) {
  return badges.map(b => {
    if (b === 'bestseller') return `<span class="badge bestseller">Bestseller</span>`;
    if (b === 'special')    return `<span class="badge special">Chef's Special</span>`;
    if (b === 'new-item')   return `<span class="badge new-item">New</span>`;
    return '';
  }).join('');
}

function renderCards(items) {
  const grid = document.getElementById('menuGrid');
  if (!items.length) {
    grid.innerHTML = `<div class="no-results"><p>No dishes found — try a different search or filter.</p></div>`;
    return;
  }
  grid.innerHTML = items.map(item => `
    <div class="menu-card">
      <div class="card-img-wrap">
        <img class="card-img"
             src="${item.img}"
             alt="${item.name}"
             loading="lazy"
             onerror="this.style.opacity='0'">
        <div class="card-img-overlay"></div>
        <div class="veg-flag ${item.veg ? 'veg' : 'nonveg'}"></div>
        <div class="price-chip">&#8377;${item.price}</div>
      </div>
      <div class="card-body">
        <div class="card-badges">${badgeHtml(item.badges)}</div>
        <div class="dish-name">${item.name}</div>
        <div class="dish-desc">${item.desc}</div>
        <div class="card-footer">
          ${spiceDots(item.spice)}
        </div>
      </div>
    </div>
  `).join('');
}

/* ── Init ── */
buildTabs();
filterMenu();

/* ── Navbar on scroll ── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('backTop').classList.toggle('show', window.scrollY > 400);
});

/* ── Reveal on scroll ── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
