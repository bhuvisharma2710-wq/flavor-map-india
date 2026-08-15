/**
 * Static content library for FlavorMap India.
 * Shaped like future API responses so it can be swapped for a backend later.
 */

import rajasthanImg from "@/assets/state-rajasthan.jpg";
import gujaratImg from "@/assets/state-gujarat.jpg";
import keralaImg from "@/assets/state-kerala.jpg";
import punjabImg from "@/assets/state-punjab.jpg";
import bengalImg from "@/assets/state-bengal.jpg";
import tamilNaduImg from "@/assets/state-tamilnadu.jpg";

import diwaliImg from "@/assets/festival-diwali.jpg";
import holiImg from "@/assets/festival-holi.jpg";
import pongalImg from "@/assets/festival-pongal.jpg";
import onamImg from "@/assets/festival-onam.jpg";
import baisakhiImg from "@/assets/festival-baisakhi.jpg";
import ganeshImg from "@/assets/festival-ganesh.jpg";
import eidImg from "@/assets/festival-eid.jpg";
import navratriImg from "@/assets/festival-navratri.jpg";

import saffronImg from "@/assets/ingredient-saffron.jpg";
import curryLeafImg from "@/assets/ingredient-curryleaf.jpg";
import mustardImg from "@/assets/ingredient-mustard.jpg";
import tamarindImg from "@/assets/ingredient-tamarind.jpg";
import cardamomImg from "@/assets/ingredient-cardamom.jpg";
import turmericImg from "@/assets/ingredient-turmeric.jpg";
import coconutImg from "@/assets/ingredient-coconut.jpg";
import fenugreekImg from "@/assets/ingredient-fenugreek.jpg";
import jaggeryImg from "@/assets/ingredient-jaggery.jpg";
import bajraImg from "@/assets/ingredient-bajra.jpg";
import sesameImg from "@/assets/ingredient-sesame.jpg";
import kokumImg from "@/assets/ingredient-kokum.jpg";

import dalBaatiImg from "@/assets/recipe-dal-baati.jpg";
import laalMaasImg from "@/assets/recipe-laal-maas.jpg";
import dhoklaImg from "@/assets/recipe-dhokla.jpg";
import undhiyuImg from "@/assets/recipe-undhiyu.jpg";
import appamStewImg from "@/assets/recipe-appam-stew.jpg";
import fishCurryImg from "@/assets/recipe-fish-curry.jpg";
import sarsonSaagImg from "@/assets/recipe-sarson-saag.jpg";
import butterChickenImg from "@/assets/recipe-butter-chicken.jpg";
import shorsheIlishImg from "@/assets/recipe-shorshe-ilish.jpg";
import mishtiDoiImg from "@/assets/recipe-mishti-doi.jpg";
import idliSambarImg from "@/assets/recipe-idli-sambar.jpg";
import chettinadImg from "@/assets/recipe-chettinad-chicken.jpg";
import besanLadooImg from "@/assets/recipe-besan-ladoo.jpg";
import gujiyaImg from "@/assets/recipe-gujiya.jpg";
import sakkaraiPongalImg from "@/assets/recipe-sakkarai-pongal.jpg";
import avialImg from "@/assets/recipe-avial.jpg";
import modakImg from "@/assets/recipe-modak.jpg";
import sheerKhurmaImg from "@/assets/recipe-sheer-khurma.jpg";
import sabudanaImg from "@/assets/recipe-sabudana-khichdi.jpg";

export type Recipe = {
  id: string;
  name: string;
  stateId?: string;
  festivalId?: string;
  region: string;
  type: "Vegetarian" | "Non-Vegetarian" | "Sweet";
  time: string;
  serves: string;
  difficulty: "Easy" | "Medium" | "Involved";
  summary: string;
  culturalBackground: string;
  ingredients: string[];
  steps: string[];
  tips?: string[];
  ingredientIds: string[];
  image: string;
};

export type StateItem = {
  id: string;
  name: string;
  region: string;
  description: string;
  identity: string;
  staples: string[];
  signatureFlavours: string[];
  diningCustom: string;
  ingredientIds: string[];
  image: string;
};

export type FestivalItem = {
  id: string;
  name: string;
  season: string;
  region: string;
  description: string;
  story: string;
  customs: string[];
  image: string;
};

export type IngredientItem = {
  id: string;
  name: string;
  origin: string;
  category: string;
  description: string;
  profile: string;
  usedIn: string[];
  buyingTip: string;
  image: string;
};

/* ------------------------------- Recipes -------------------------------- */

export const recipes: Recipe[] = [
  {
    id: "dal-baati-churma",
    name: "Dal Baati Churma",
    stateId: "rajasthan",
    region: "Rajasthan",
    type: "Vegetarian",
    time: "1 hr 30 min",
    serves: "4",
    difficulty: "Involved",
    summary:
      "Baked wheat dough balls dunked in ghee, served with a five-lentil dal and sweet crumbled churma.",
    culturalBackground:
      "Baati was born of the Thar desert, where hard wheat balls could be buried in hot sand and baked without fuel or water. Marwari households still serve the trio together — savoury, spiced and sweet on one plate.",
    ingredients: [
      "2 cups coarse wheat flour",
      "1/2 cup ghee, plus more for dunking",
      "1/2 cup mixed lentils (toor, chana, moong, urad, masoor)",
      "1 tsp turmeric",
      "2 tsp Rajasthani red chilli powder",
      "1/2 cup jaggery, grated",
      "Ajwain, salt and asafoetida",
    ],
    steps: [
      "Rub ghee into the wheat flour with ajwain and salt until it holds shape when pressed.",
      "Add water sparingly, knead a stiff dough, and rest it for 20 minutes.",
      "Shape into balls, press a dimple in each, and bake at 200°C for 35–40 minutes until cracked and golden.",
      "Pressure-cook the lentils with turmeric and salt, then temper with ghee, cumin, asafoetida and chilli.",
      "Crush a few baatis coarsely, mix with jaggery and ghee for churma.",
      "Dunk hot baatis in ghee and serve with dal and churma.",
    ],
    tips: ["Bake until the surface cracks — that crack is what soaks up the ghee."],
    ingredientIds: ["turmeric", "jaggery", "bajra"],
    image: dalBaatiImg,
  },
  {
    id: "laal-maas",
    name: "Laal Maas",
    stateId: "rajasthan",
    region: "Rajasthan",
    type: "Non-Vegetarian",
    time: "1 hr 10 min",
    serves: "4",
    difficulty: "Medium",
    summary: "A fiery Rajput hunting curry of mutton, Mathania chillies and smoked ghee.",
    culturalBackground:
      "Cooked in royal hunting camps, laal maas relied on chilli and garlic to preserve and flavour game meat. The final smoking with a live coal and ghee is still done tableside in Jodhpur homes.",
    ingredients: [
      "800 g mutton on the bone",
      "15 dried Mathania red chillies",
      "1 cup yoghurt",
      "6 tbsp ghee",
      "2 large onions, sliced",
      "1 whole garlic pod, crushed",
      "Cloves, cardamom, bay leaf",
    ],
    steps: [
      "Soak chillies in warm water, then blend to a smooth paste.",
      "Brown onions in ghee, add garlic and whole spices.",
      "Sear the mutton, then add chilli paste and cook until ghee separates.",
      "Whisk in yoghurt off the heat, return to the flame and simmer covered for 45 minutes.",
      "Smoke with a live coal and a spoon of ghee for two minutes before serving.",
    ],
    ingredientIds: ["turmeric"],
    image: laalMaasImg,
  },
  {
    id: "dhokla",
    name: "Khaman Dhokla",
    stateId: "gujarat",
    region: "Gujarat",
    type: "Vegetarian",
    time: "40 min",
    serves: "4",
    difficulty: "Easy",
    summary: "Steamed gram flour squares, spongy and sweet-sour, finished with a mustard tempering.",
    culturalBackground:
      "Dhokla is Gujarat's everyday snack — light, steamed rather than fried, and eaten at breakfast, at tea, or packed into a traveller's tiffin.",
    ingredients: [
      "2 cups gram flour",
      "1 tbsp lemon juice",
      "1 tsp sugar",
      "1 tsp fruit salt",
      "1 tbsp mustard seeds",
      "Curry leaves and green chillies",
      "Fresh coconut and coriander to finish",
    ],
    steps: [
      "Whisk gram flour with water, lemon juice, sugar and salt into a smooth batter.",
      "Stir in fruit salt and immediately pour into a greased tin.",
      "Steam for 18 minutes, then cool and cut into squares.",
      "Temper mustard seeds, curry leaves and chillies in oil with a splash of sweetened water.",
      "Pour over the dhokla and garnish with coconut and coriander.",
    ],
    ingredientIds: ["mustard-oil", "curry-leaf", "coconut", "turmeric"],
    image: dhoklaImg,
  },
  {
    id: "undhiyu",
    name: "Undhiyu",
    stateId: "gujarat",
    region: "Gujarat",
    type: "Vegetarian",
    time: "1 hr 20 min",
    serves: "6",
    difficulty: "Involved",
    summary: "A winter casserole of root vegetables, green beans and methi dumplings.",
    culturalBackground:
      "Named after the earthen pot (undhu, upside-down) once buried and cooked underground, undhiyu marks Surat's winter and the Uttarayan kite festival.",
    ingredients: [
      "Purple yam, sweet potato, baby potatoes, raw banana",
      "Surti papdi beans",
      "Fresh fenugreek leaves for muthiya dumplings",
      "Green paste of coriander, coconut, ginger and green chilli",
      "Carom seeds, ajwain, oil",
    ],
    steps: [
      "Make muthiya dough with gram flour and fenugreek leaves, shape and shallow-fry.",
      "Stuff the vegetables with the green coconut paste.",
      "Layer beans, vegetables and dumplings in a heavy pot with oil and spices.",
      "Cover and cook on low heat for 45 minutes, shaking rather than stirring.",
      "Rest for 10 minutes and serve with puri.",
    ],
    ingredientIds: ["fenugreek", "coconut", "sesame"],
    image: undhiyuImg,
  },
  {
    id: "appam-stew",
    name: "Appam with Vegetable Stew",
    stateId: "kerala",
    region: "Kerala",
    type: "Vegetarian",
    time: "Overnight + 30 min",
    serves: "4",
    difficulty: "Medium",
    summary: "Lacy fermented rice hoppers with a gently spiced coconut milk stew.",
    culturalBackground:
      "A Syrian Christian breakfast of central Kerala, appam is fermented with toddy or yeast and eaten with a stew that is white, mild and perfumed rather than hot.",
    ingredients: [
      "2 cups raw rice, soaked",
      "1 cup grated coconut",
      "1 tsp yeast and 2 tsp sugar",
      "Mixed vegetables, cubed",
      "Thick and thin coconut milk",
      "Curry leaves, green chilli, ginger, cardamom, cloves",
    ],
    steps: [
      "Grind rice with coconut and cooked rice to a smooth batter; ferment overnight with yeast and sugar.",
      "Swirl a ladle of batter in a hot appam pan to make a thin lace edge with a soft centre; cover and cook.",
      "Simmer vegetables in thin coconut milk with ginger, chilli and whole spices.",
      "Finish the stew with thick coconut milk and curry leaves; do not boil after adding it.",
    ],
    ingredientIds: ["coconut", "curry-leaf", "cardamom"],
    image: appamStewImg,
  },
  {
    id: "meen-curry",
    name: "Kerala Meen Curry",
    stateId: "kerala",
    region: "Kerala",
    type: "Non-Vegetarian",
    time: "45 min",
    serves: "4",
    difficulty: "Easy",
    summary: "Fish simmered in a tart kokum-and-chilli gravy in a clay pot.",
    culturalBackground:
      "Coastal households cook fish in a manchatti clay pot; the curry tastes better the next day as the kudampuli sourness settles into the fish.",
    ingredients: [
      "600 g seer fish or kingfish steaks",
      "5 pieces kudampuli (kokum), soaked",
      "2 tbsp Kashmiri chilli powder",
      "1 tsp turmeric",
      "Shallots, ginger, garlic",
      "Coconut oil and curry leaves",
    ],
    steps: [
      "Heat coconut oil in a clay pot, splutter mustard and curry leaves, add shallots, ginger and garlic.",
      "Stir in chilli and turmeric with a splash of water to make a paste; cook off the raw smell.",
      "Add soaked kokum with its water and bring to a simmer.",
      "Slide in fish, cover and cook 12 minutes without stirring; swirl the pot instead.",
      "Rest for a few hours before serving with red rice.",
    ],
    ingredientIds: ["kokum", "curry-leaf", "coconut", "turmeric"],
    image: fishCurryImg,
  },
  {
    id: "sarson-da-saag",
    name: "Sarson da Saag & Makki di Roti",
    stateId: "punjab",
    region: "Punjab",
    type: "Vegetarian",
    time: "1 hr 30 min",
    serves: "4",
    difficulty: "Medium",
    summary: "Slow-cooked mustard greens with cornmeal flatbread and white butter.",
    culturalBackground:
      "The winter dish of Punjab's farms, cooked in large pots and finished with a lump of home-churned butter that melts into the greens.",
    ingredients: [
      "1 kg mustard greens",
      "250 g spinach and bathua",
      "3 tbsp maize flour",
      "Ginger, garlic, green chilli",
      "Ghee and white butter",
      "Maize flour for roti",
    ],
    steps: [
      "Boil greens with ginger, garlic and chilli until completely soft.",
      "Mash with a wooden churner rather than a blender for texture.",
      "Stir in maize flour and simmer on low heat for 40 minutes.",
      "Temper ghee with onion, garlic and tomato and fold into the saag.",
      "Pat makki di roti by hand and cook on a hot tawa; serve with white butter and jaggery.",
    ],
    ingredientIds: ["mustard-oil", "jaggery", "turmeric"],
    image: sarsonSaagImg,
  },
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    stateId: "punjab",
    region: "Punjab",
    type: "Non-Vegetarian",
    time: "1 hr + marination",
    serves: "4",
    difficulty: "Medium",
    summary: "Tandoori chicken folded into a tomato, butter and cream gravy.",
    culturalBackground:
      "Invented in post-Partition Delhi by Punjabi restaurateurs to use leftover tandoori chicken, it became the dish that carried Indian food around the world.",
    ingredients: [
      "800 g chicken thighs",
      "1 cup yoghurt, ginger-garlic paste, Kashmiri chilli",
      "1 kg ripe tomatoes",
      "100 g butter",
      "1/2 cup cream",
      "1 tsp kasuri methi",
      "Green cardamom and cinnamon",
    ],
    steps: [
      "Marinate chicken in yoghurt, ginger-garlic and chilli for at least four hours.",
      "Grill or roast until charred at the edges.",
      "Simmer tomatoes with cardamom and cinnamon, blend and strain.",
      "Cook the purée with butter until it darkens and thickens.",
      "Add chicken, cream and crushed kasuri methi; simmer 10 minutes.",
    ],
    ingredientIds: ["fenugreek", "cardamom", "turmeric"],
    image: butterChickenImg,
  },
  {
    id: "shorshe-ilish",
    name: "Shorshe Ilish",
    stateId: "west-bengal",
    region: "West Bengal",
    type: "Non-Vegetarian",
    time: "35 min",
    serves: "4",
    difficulty: "Easy",
    summary: "Hilsa steamed in a sharp mustard paste with green chillies and mustard oil.",
    culturalBackground:
      "Monsoon in Bengal is hilsa season. The fish is never over-spiced — mustard, chilli and salt only, so the oily richness of the ilish stays in front.",
    ingredients: [
      "6 hilsa steaks",
      "4 tbsp black and yellow mustard seeds",
      "6 green chillies",
      "1/2 tsp turmeric",
      "5 tbsp mustard oil",
    ],
    steps: [
      "Grind mustard seeds with green chillies, salt and a little water into a smooth paste; rest 10 minutes.",
      "Rub fish with turmeric and salt.",
      "Mix mustard paste with mustard oil and coat the fish in a steel tiffin box.",
      "Steam in a covered pot of water for 20 minutes.",
      "Open at the table and serve with steamed rice.",
    ],
    ingredientIds: ["mustard-oil", "turmeric"],
    image: shorsheIlishImg,
  },
  {
    id: "mishti-doi",
    name: "Mishti Doi",
    stateId: "west-bengal",
    region: "West Bengal",
    type: "Sweet",
    time: "30 min + setting",
    serves: "6",
    difficulty: "Easy",
    summary: "Caramelised jaggery yoghurt set in earthen pots.",
    culturalBackground:
      "Set in unglazed clay bhaars that wick away moisture, mishti doi closes almost every Bengali celebration and every wedding feast.",
    ingredients: [
      "1 litre full-fat milk",
      "150 g date palm jaggery",
      "3 tbsp live yoghurt culture",
    ],
    steps: [
      "Reduce milk to about two-thirds over medium heat.",
      "Melt jaggery separately and stir into the warm milk.",
      "Cool to body temperature and whisk in the yoghurt culture.",
      "Pour into clay pots, cover and set in a warm place for 8 hours.",
      "Chill before serving.",
    ],
    ingredientIds: ["jaggery", "cardamom"],
    image: mishtiDoiImg,
  },
  {
    id: "idli-sambar",
    name: "Idli & Sambar",
    stateId: "tamil-nadu",
    region: "Tamil Nadu",
    type: "Vegetarian",
    time: "Overnight + 40 min",
    serves: "4",
    difficulty: "Medium",
    summary: "Steamed fermented rice cakes with a tamarind-and-lentil vegetable stew.",
    culturalBackground:
      "The fermented batter of idli is one of India's oldest food technologies, and the idli-sambar-chutney trio remains the standard Tamil breakfast.",
    ingredients: [
      "3 cups idli rice, 1 cup urad dal, 1 tsp fenugreek seeds",
      "1 cup toor dal",
      "Lemon-sized ball of tamarind",
      "Sambar powder, drumstick, shallots, tomato",
      "Mustard seeds, curry leaves, asafoetida",
    ],
    steps: [
      "Soak rice and dal with fenugreek separately for 5 hours, grind, mix and ferment overnight.",
      "Pour into idli plates and steam for 10 minutes.",
      "Cook toor dal until soft; boil vegetables with tamarind extract and sambar powder.",
      "Combine dal and vegetables and simmer.",
      "Temper mustard, curry leaves and asafoetida in oil and pour over the sambar.",
    ],
    ingredientIds: ["tamarind-kokum", "curry-leaf", "fenugreek", "turmeric"],
    image: idliSambarImg,
  },
  {
    id: "chettinad-chicken",
    name: "Chettinad Chicken",
    stateId: "tamil-nadu",
    region: "Tamil Nadu",
    type: "Non-Vegetarian",
    time: "1 hr",
    serves: "4",
    difficulty: "Medium",
    summary: "Chicken in a freshly roasted masala of star anise, stone flower and black pepper.",
    culturalBackground:
      "The Chettiar merchant community traded across Southeast Asia and brought spices home; that trade shows up in the star anise and stone flower of this masala.",
    ingredients: [
      "800 g chicken",
      "Dried red chillies, coriander seeds, fennel, black pepper",
      "Star anise, stone flower (kalpasi), cinnamon",
      "1/2 cup grated coconut",
      "Shallots, tomato, curry leaves",
    ],
    steps: [
      "Dry-roast the whole spices with coconut until fragrant, then grind to a coarse masala.",
      "Fry shallots and curry leaves in gingelly oil, add tomato and cook down.",
      "Add chicken and the ground masala; sear well.",
      "Add hot water, cover and simmer 25 minutes until the gravy clings.",
    ],
    ingredientIds: ["coconut", "curry-leaf", "sesame", "turmeric"],
    image: chettinadImg,
  },
  {
    id: "besan-ladoo",
    name: "Besan Ladoo",
    festivalId: "diwali",
    region: "Pan-India",
    type: "Sweet",
    time: "45 min",
    serves: "20 pieces",
    difficulty: "Easy",
    summary: "Roasted gram flour and ghee rolled with sugar and cardamom.",
    culturalBackground:
      "Ladoo is the first sweet offered at Diwali puja and the first shared with neighbours; the roasting of besan in ghee is the smell of the festival itself.",
    ingredients: [
      "2 cups gram flour",
      "3/4 cup ghee",
      "1 cup powdered sugar",
      "1 tsp cardamom powder",
      "Chopped pistachios",
    ],
    steps: [
      "Roast gram flour in ghee on low heat for 20–25 minutes until it turns deep gold and loosens.",
      "Cool until just warm, then mix in sugar and cardamom.",
      "Roll into balls, press a pistachio on top and let them firm up.",
    ],
    ingredientIds: ["cardamom", "jaggery"],
    image: besanLadooImg,
  },
  {
    id: "gujiya",
    name: "Gujiya",
    festivalId: "holi",
    region: "North India",
    type: "Sweet",
    time: "1 hr 15 min",
    serves: "18 pieces",
    difficulty: "Medium",
    summary: "Crescent pastries stuffed with khoya, coconut and dry fruit.",
    culturalBackground:
      "Made in batches days before Holi, gujiya is folded by whole families sitting together — one rolls, one fills, one crimps.",
    ingredients: [
      "2 cups refined flour and 4 tbsp ghee for the dough",
      "1 cup khoya",
      "1/2 cup desiccated coconut",
      "1/2 cup sugar, cardamom, raisins and almonds",
      "Oil for frying",
    ],
    steps: [
      "Rub ghee into flour, knead a stiff dough with cold water and rest it.",
      "Roast khoya, cool, then mix with coconut, sugar, cardamom and dry fruit.",
      "Roll small discs, fill, fold and crimp the edges tightly.",
      "Fry on low heat until pale gold and crisp.",
    ],
    ingredientIds: ["coconut", "cardamom"],
    image: gujiyaImg,
  },
  {
    id: "sakkarai-pongal",
    name: "Sakkarai Pongal",
    festivalId: "pongal",
    region: "Tamil Nadu",
    type: "Sweet",
    time: "45 min",
    serves: "6",
    difficulty: "Easy",
    summary: "Rice and moong dal cooked with jaggery, ghee, cashews and cardamom.",
    culturalBackground:
      "On Pongal morning the pot is allowed to boil over as a sign of abundance, and the family calls out 'Pongalo Pongal' as it does.",
    ingredients: [
      "1 cup raw rice",
      "1/4 cup moong dal",
      "1.5 cups jaggery",
      "4 tbsp ghee",
      "Cashews, raisins, cardamom, edible camphor",
    ],
    steps: [
      "Roast moong dal lightly and cook with rice until very soft.",
      "Melt jaggery with water and strain.",
      "Add jaggery syrup to the rice and cook until it thickens.",
      "Fry cashews and raisins in ghee and stir in with cardamom.",
    ],
    ingredientIds: ["jaggery", "cardamom"],
    image: sakkaraiPongalImg,
  },
  {
    id: "avial",
    name: "Avial",
    festivalId: "onam",
    stateId: "kerala",
    region: "Kerala",
    type: "Vegetarian",
    time: "40 min",
    serves: "6",
    difficulty: "Easy",
    summary: "Mixed vegetables in a coconut, cumin and curd sauce, finished with raw coconut oil.",
    culturalBackground:
      "A central dish of the Onam sadya, avial is said to have been improvised from odds and ends — which is exactly how households still make it.",
    ingredients: [
      "Ash gourd, carrot, drumstick, raw banana, yam, beans",
      "1 cup grated coconut",
      "1 tsp cumin seeds, 3 green chillies",
      "1/2 cup thick curd",
      "Curry leaves and 2 tbsp coconut oil",
    ],
    steps: [
      "Cut vegetables into equal batons and cook with turmeric and salt until just tender.",
      "Grind coconut with cumin and green chilli to a coarse paste.",
      "Fold the paste into the vegetables and cook two minutes.",
      "Take off heat, stir in curd, curry leaves and raw coconut oil.",
    ],
    ingredientIds: ["coconut", "curry-leaf", "turmeric"],
    image: avialImg,
  },
  {
    id: "ukadiche-modak",
    name: "Ukadiche Modak",
    festivalId: "ganesh-chaturthi",
    region: "Maharashtra",
    type: "Sweet",
    time: "1 hr",
    serves: "16 pieces",
    difficulty: "Involved",
    summary: "Steamed rice-flour dumplings filled with coconut and jaggery.",
    culturalBackground:
      "Modak is Ganesha's favourite offering; twenty-one are traditionally placed before the idol on Ganesh Chaturthi.",
    ingredients: [
      "1 cup rice flour",
      "1 cup grated coconut",
      "3/4 cup jaggery",
      "1/2 tsp cardamom",
      "Ghee and salt",
    ],
    steps: [
      "Cook coconut and jaggery together until thick, add cardamom, and cool.",
      "Bring water with ghee and salt to a boil, stir in rice flour, cover and steam-rest five minutes.",
      "Knead the hot dough smooth, shape small cups, fill and pleat the tops closed.",
      "Steam for 10 minutes and serve warm with ghee.",
    ],
    ingredientIds: ["coconut", "jaggery", "cardamom"],
    image: modakImg,
  },
  {
    id: "sheer-khurma",
    name: "Sheer Khurma",
    festivalId: "eid",
    region: "Deccan & North India",
    type: "Sweet",
    time: "50 min",
    serves: "6",
    difficulty: "Easy",
    summary: "Vermicelli simmered in milk with dates, saffron and dry fruit.",
    culturalBackground:
      "The first thing served on Eid morning after prayers — 'sheer khurma' literally means milk with dates.",
    ingredients: [
      "1 litre full-fat milk",
      "1 cup fine vermicelli",
      "10 dates, sliced",
      "Pistachios, almonds, chironji",
      "A pinch of saffron and cardamom",
      "Sugar and ghee",
    ],
    steps: [
      "Roast vermicelli in ghee until golden and set aside.",
      "Reduce milk with saffron and cardamom.",
      "Add dates, dry fruit and sugar and simmer.",
      "Stir in vermicelli and cook five minutes; serve warm or chilled.",
    ],
    ingredientIds: ["saffron", "cardamom"],
    image: sheerKhurmaImg,
  },
  {
    id: "sabudana-khichdi",
    name: "Sabudana Khichdi",
    festivalId: "navratri",
    region: "Maharashtra & Western India",
    type: "Vegetarian",
    time: "25 min + soaking",
    serves: "3",
    difficulty: "Easy",
    summary: "Tapioca pearls tossed with roasted peanuts, potato, chilli and lemon.",
    culturalBackground:
      "A fasting dish that avoids grain and onion, sabudana khichdi is what most of western India eats through Navratri's nine days.",
    ingredients: [
      "1 cup sabudana, soaked overnight",
      "1/2 cup roasted peanuts, coarsely ground",
      "1 boiled potato, cubed",
      "Green chillies, cumin, curry leaves",
      "Ghee, rock salt, lemon and coriander",
    ],
    steps: [
      "Drain soaked sabudana thoroughly so the pearls stay separate.",
      "Temper cumin, chilli and curry leaves in ghee, add potato and brown lightly.",
      "Toss in sabudana and peanut powder; cook until the pearls turn translucent.",
      "Finish with rock salt, lemon juice and coriander.",
    ],
    ingredientIds: ["curry-leaf", "sesame"],
    image: sabudanaImg,
  },
];

/* -------------------------------- States -------------------------------- */

export const states: StateItem[] = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    region: "North West",
    description:
      "Desert cooking built on ghee, millet and dried spices — dal baati churma and the fiery laal maas.",
    identity:
      "Scarcity shaped this kitchen. With little water and fewer fresh greens, Rajasthani cooks leaned on ghee, milk, dried lentils, millet and chilli — food that keeps, travels and stays rich without refrigeration.",
    staples: ["Bajra and wheat", "Ghee", "Gram flour", "Dried red chillies", "Buttermilk"],
    signatureFlavours: ["Smoky chilli heat", "Deep ghee richness", "Sweet-savoury pairings"],
    diningCustom:
      "A Marwari thali arrives with sweet served first, and churma is eaten alongside the dal rather than after it.",
    ingredientIds: ["bajra", "jaggery", "turmeric"],
    image: rajasthanImg,
  },
  {
    id: "gujarat",
    name: "Gujarat",
    region: "West",
    description:
      "A largely vegetarian thali tradition where sweet, salt and spice are balanced in every serving.",
    identity:
      "Gujarat's food is mostly vegetarian, often steamed rather than fried, and almost always carries a trace of sweetness that balances chilli and the salt lost to a hot climate.",
    staples: ["Gram flour", "Millet rotla", "Yoghurt and buttermilk", "Jaggery", "Sesame"],
    signatureFlavours: ["Sweet-sour-spicy balance", "Fermented and steamed textures", "Mustard tempering"],
    diningCustom:
      "The Gujarati thali is served in a fixed order and refilled endlessly; farsan snacks share the plate with the main course.",
    ingredientIds: ["sesame", "fenugreek", "jaggery"],
    image: gujaratImg,
  },
  {
    id: "kerala",
    name: "Kerala",
    region: "South",
    description:
      "Coconut, curry leaves and coastal spice trade routes shape appam, avial and fish curry.",
    identity:
      "Every part of the coconut is used here — oil, milk, grated flesh — and the spice ports of Kochi and Kozhikode left behind pepper, cardamom and clove in daily cooking.",
    staples: ["Coconut", "Red matta rice", "Kudampuli", "Fresh fish", "Curry leaves"],
    signatureFlavours: ["Coconut sweetness", "Sour kokum", "Black pepper heat"],
    diningCustom:
      "The Onam sadya is served on a banana leaf, with each dish in a fixed position and eaten in a set order.",
    ingredientIds: ["coconut", "curry-leaf", "kokum", "cardamom"],
    image: keralaImg,
  },
  {
    id: "punjab",
    name: "Punjab",
    region: "North",
    description:
      "Farm-fed cooking of tandoor breads, sarson da saag and slow-simmered dairy-rich gravies.",
    identity:
      "Wheat, dairy and the tandoor define Punjab. Food is generous and slow — dals simmered overnight, breads slapped onto clay ovens, butter churned at home.",
    staples: ["Wheat", "Mustard greens", "Paneer and butter", "Maize flour", "Whole black lentils"],
    signatureFlavours: ["Charred tandoor smoke", "Creamy tomato gravies", "Fenugreek finish"],
    diningCustom:
      "Langar in Sikh gurdwaras serves the same free vegetarian meal to everyone seated in a row, regardless of background.",
    ingredientIds: ["fenugreek", "mustard-oil", "jaggery"],
    image: punjabImg,
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    region: "East",
    description:
      "Rice, river fish and mustard oil, closing always with a sweet — mishti doi or rosogolla.",
    identity:
      "Bengali meals follow a course structure — bitter first, then dal, vegetables, fish, chutney and sweet — built around rice, river fish and pungent mustard oil.",
    staples: ["Rice", "Hilsa and rohu", "Mustard oil", "Panch phoron", "Date palm jaggery"],
    signatureFlavours: ["Sharp mustard", "Delicate five-spice", "Milk-based sweetness"],
    diningCustom:
      "Courses are served one at a time on the same plate, and the meal always ends with something sweet.",
    ingredientIds: ["mustard-oil", "jaggery", "turmeric"],
    image: bengalImg,
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    region: "South",
    description:
      "Temple town food of fermented batters, tamarind gravies, idli, dosa and filter coffee.",
    identity:
      "Fermentation and tamarind carry this cuisine — idli and dosa batters, sambar, rasam and kuzhambu — with a separate, spice-heavy Chettinad tradition alongside it.",
    staples: ["Rice and urad dal", "Tamarind", "Curry leaves", "Gingelly oil", "Coconut"],
    signatureFlavours: ["Tamarind sourness", "Black pepper and fennel", "Asafoetida tempering"],
    diningCustom:
      "Temple prasadam and community meals are served on banana leaves; the plantain leaf is folded towards you to signal a good meal.",
    ingredientIds: ["tamarind-kokum", "curry-leaf", "sesame", "coconut"],
    image: tamilNaduImg,
  },
];

/* ------------------------------- Festivals ------------------------------- */

export const festivals: FestivalItem[] = [
  {
    id: "diwali",
    name: "Diwali",
    season: "October – November",
    region: "Pan-India",
    description:
      "The festival of lights, marked by trays of ladoo, barfi and freshly fried jalebi shared with neighbours.",
    story:
      "Diwali marks the return of Rama to Ayodhya and, in the west, the start of the merchant new year. Kitchens work for days ahead, filling steel tins with sweets and savoury mixture for visitors.",
    customs: ["Sweet boxes exchanged between homes", "Lamps lit at doorways", "Fasting broken after puja"],
    image: diwaliImg,
  },
  {
    id: "holi",
    name: "Holi",
    season: "March",
    region: "North India",
    description:
      "Spring colours celebrated with stuffed gujiya, spiced thandai and a table open to everyone.",
    story:
      "Holi burns away winter with a bonfire on the eve and colour the next morning. The food is made to be handed around outdoors — dry, sweet and easy to carry.",
    customs: ["Gujiya folded days in advance", "Thandai ground on stone", "Neighbours eat standing in the street"],
    image: holiImg,
  },
  {
    id: "pongal",
    name: "Pongal",
    season: "January",
    region: "Tamil Nadu",
    description:
      "A Tamil harvest thanksgiving where the first rice and jaggery are cooked in a clay pot until it overflows.",
    story:
      "Pongal thanks the sun, the rain and the cattle for the harvest. The new rice is cooked outdoors in a decorated clay pot and deliberately allowed to boil over.",
    customs: ["Pot boiled over at sunrise", "Sugarcane and turmeric plants at the door", "Cattle honoured on Mattu Pongal"],
    image: pongalImg,
  },
  {
    id: "onam",
    name: "Onam",
    season: "August – September",
    region: "Kerala",
    description:
      "Kerala's harvest feast served on a banana leaf, with over twenty dishes in a fixed traditional order.",
    story:
      "Onam welcomes the mythical king Mahabali back to Kerala. The sadya is entirely vegetarian and served in a strict sequence from the bottom-left of the leaf.",
    customs: ["Sadya on a banana leaf", "Flower carpets at the entrance", "Payasam served last"],
    image: onamImg,
  },
  {
    id: "baisakhi",
    name: "Baisakhi",
    season: "April",
    region: "Punjab",
    description:
      "The Punjabi harvest new year, celebrated with langar, kada prasad and fresh wheat breads.",
    story:
      "Baisakhi marks both the wheat harvest and the founding of the Khalsa in 1699. Gurdwaras serve langar all day, and villages hold bhangra and gidda through the evening.",
    customs: ["Community langar", "Kada prasad of wheat, ghee and sugar", "First harvest offered at the gurdwara"],
    image: baisakhiImg,
  },
  {
    id: "ganesh-chaturthi",
    name: "Ganesh Chaturthi",
    season: "August – September",
    region: "Maharashtra",
    description:
      "Ten days of Ganesha worship where steamed modak is offered morning and evening.",
    story:
      "Households and neighbourhoods install clay idols for up to ten days. Twenty-one modak are traditionally offered, then shared as prasad before the immersion procession.",
    customs: ["Twenty-one modak offered", "Daily aarti with prasad", "Idol immersion on the final day"],
    image: ganeshImg,
  },
  {
    id: "eid",
    name: "Eid",
    season: "Lunar calendar",
    region: "Pan-India",
    description:
      "The end of Ramadan's fasting, opened with sheer khurma and followed by biryani and kebabs.",
    story:
      "After a month of fasting, Eid begins with morning prayer and a bowl of sheer khurma. The rest of the day is spent visiting, with tables kept laid for arriving guests.",
    customs: ["Sheer khurma served first", "Food shared with neighbours", "Biryani cooked in large batches"],
    image: eidImg,
  },
  {
    id: "navratri",
    name: "Navratri",
    season: "September – October",
    region: "Western & North India",
    description:
      "Nine nights of fasting and dance, with grain-free dishes like sabudana khichdi and kuttu puri.",
    story:
      "Navratri honours the goddess across nine nights. Fasting rules exclude grain, onion and garlic, which produced an entire cuisine of tapioca, buckwheat, amaranth and rock salt.",
    customs: ["Grain-free fasting food", "Rock salt instead of table salt", "Garba and dandiya each night"],
    image: navratriImg,
  },
];

/* ------------------------------ Ingredients ------------------------------ */

export const ingredients: IngredientItem[] = [
  {
    id: "saffron",
    name: "Kashmiri Saffron",
    origin: "Kashmir",
    category: "Aromatic",
    description:
      "Hand-picked crocus threads that lend colour and aroma to biryani, kheer and festive sweets.",
    profile: "Honeyed, faintly bitter, with a deep orange-red bleed when soaked in warm milk.",
    usedIn: ["Biryani", "Kheer and phirni", "Sheer khurma"],
    buyingTip: "Real saffron releases colour slowly; instant bright yellow water means it is dyed.",
    image: saffronImg,
  },
  {
    id: "curry-leaf",
    name: "Curry Leaf",
    origin: "South India",
    category: "Fresh herb",
    description:
      "The tempering leaf of the south — bloomed in hot oil to open up its unmistakable fragrance.",
    profile: "Citrus-resinous and nutty once fried; almost flavourless raw.",
    usedIn: ["Sambar", "Meen curry", "Sabudana khichdi"],
    buyingTip: "Buy on the stem and freeze; dried curry leaves lose almost all aroma.",
    image: curryLeafImg,
  },
  {
    id: "mustard-oil",
    name: "Mustard Oil & Seeds",
    origin: "Bengal & Bihar",
    category: "Oil / Spice",
    description:
      "Pungent, sharp and warming, it defines eastern fish curries and quick-pickled vegetables.",
    profile: "Sinus-clearing pungency that mellows into nuttiness when heated to smoking point.",
    usedIn: ["Shorshe ilish", "Sarson da saag", "Pickles"],
    buyingTip: "Heat to smoking and cool slightly before cooking to soften the raw bite.",
    image: mustardImg,
  },
  {
    id: "tamarind-kokum",
    name: "Tamarind",
    origin: "Deccan & South India",
    category: "Souring agent",
    description: "The primary souring agent of southern gravies, used instead of lemon or vinegar.",
    profile: "Dark, fruity sourness with a molasses undertone.",
    usedIn: ["Sambar", "Rasam", "Puliyodarai"],
    buyingTip: "Choose soft, sticky seedless blocks over dry bricks or concentrate paste.",
    image: tamarindImg,
  },
  {
    id: "cardamom",
    name: "Green Cardamom",
    origin: "Kerala & Karnataka",
    category: "Aromatic",
    description: "The queen of spices, grown in the Western Ghats and used in both sweet and savoury cooking.",
    profile: "Cooling, floral, faintly eucalyptus.",
    usedIn: ["Besan ladoo", "Butter chicken", "Masala chai"],
    buyingTip: "Buy whole green pods, not powder — the volatile oils fade within weeks of grinding.",
    image: cardamomImg,
  },
  {
    id: "turmeric",
    name: "Turmeric",
    origin: "Tamil Nadu & Telangana",
    category: "Spice",
    description: "The yellow root at the base of almost every Indian gravy, used as much for medicine as flavour.",
    profile: "Earthy and slightly bitter; harsh if used raw or in excess.",
    usedIn: ["Almost every curry", "Marinades", "Pongal rituals"],
    buyingTip: "Erode and Salem turmeric carries higher curcumin and a deeper colour.",
    image: turmericImg,
  },
  {
    id: "coconut",
    name: "Coconut",
    origin: "Kerala & Coastal India",
    category: "Base ingredient",
    description: "Used as oil, milk, grated flesh and paste — the backbone of coastal southern cooking.",
    profile: "Sweet, milky and rich; thickens gravies without cream.",
    usedIn: ["Avial", "Appam stew", "Chettinad masala"],
    buyingTip: "A heavy nut that sloshes when shaken is fresh; use grated coconut the same day.",
    image: coconutImg,
  },
  {
    id: "fenugreek",
    name: "Fenugreek",
    origin: "Rajasthan & Gujarat",
    category: "Spice / Leaf",
    description: "Used as seed for tempering, as fresh methi leaves, and as dried kasuri methi for finishing.",
    profile: "Maple-sweet aroma with a firm bitterness underneath.",
    usedIn: ["Undhiyu", "Butter chicken", "Idli batter"],
    buyingTip: "Crush kasuri methi between your palms over the pan to release its aroma.",
    image: fenugreekImg,
  },
  {
    id: "jaggery",
    name: "Jaggery",
    origin: "Maharashtra, Bengal & Tamil Nadu",
    category: "Sweetener",
    description: "Unrefined cane or date-palm sugar, sold in blocks and used across sweets and savoury dals.",
    profile: "Caramel, mineral and less cloying than white sugar.",
    usedIn: ["Sakkarai pongal", "Mishti doi", "Gujarati dal"],
    buyingTip: "Bengal's winter date-palm nolen gur is seasonal and worth seeking out.",
    image: jaggeryImg,
  },
  {
    id: "bajra",
    name: "Bajra (Pearl Millet)",
    origin: "Rajasthan & Gujarat",
    category: "Grain",
    description: "A drought-hardy millet ground into flour for winter rotlas and khichdi.",
    profile: "Nutty, dense and warming; best eaten hot with ghee.",
    usedIn: ["Bajra rotla", "Raab", "Khichdi"],
    buyingTip: "Grind in small batches — bajra flour turns bitter within a few weeks.",
    image: bajraImg,
  },
  {
    id: "sesame",
    name: "Sesame & Gingelly Oil",
    origin: "Tamil Nadu & Gujarat",
    category: "Seed / Oil",
    description: "Roasted seeds for sweets and chikki, and cold-pressed gingelly oil for southern cooking.",
    profile: "Toasty and rounded; the oil adds body to tamarind gravies.",
    usedIn: ["Chettinad chicken", "Til laddoo", "Pickles"],
    buyingTip: "Use light gingelly oil for cooking, not dark East Asian toasted sesame oil.",
    image: sesameImg,
  },
  {
    id: "kokum",
    name: "Kokum & Kudampuli",
    origin: "Konkan & Kerala",
    category: "Souring agent",
    description: "Sun-dried fruit rinds that sour coastal curries without clouding them.",
    profile: "Clean, bright sourness with a faint smoky note in the Kerala variety.",
    usedIn: ["Meen curry", "Solkadhi", "Konkani fish dishes"],
    buyingTip: "Soak in warm water before use and add the soaking liquid to the pot.",
    image: kokumImg,
  },
];

/* -------------------------------- Lookups -------------------------------- */

export const getState = (id: string) => states.find((s) => s.id === id);
export const getFestival = (id: string) => festivals.find((f) => f.id === id);
export const getIngredient = (id: string) => ingredients.find((i) => i.id === id);
export const getRecipe = (id: string) => recipes.find((r) => r.id === id);

export const recipesByState = (stateId: string) => recipes.filter((r) => r.stateId === stateId);
export const recipesByFestival = (festivalId: string) =>
  recipes.filter((r) => r.festivalId === festivalId);
export const recipesByIngredient = (ingredientId: string) =>
  recipes.filter((r) => r.ingredientIds.includes(ingredientId));
