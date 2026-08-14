/**
 * Static sample data for the FlavorMap India homepage.
 * These arrays are shaped like future API responses, so they can later be
 * replaced by data fetched from the Node/Express + MongoDB backend.
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

import saffronImg from "@/assets/ingredient-saffron.jpg";
import curryLeafImg from "@/assets/ingredient-curryleaf.jpg";
import mustardImg from "@/assets/ingredient-mustard.jpg";
import tamarindImg from "@/assets/ingredient-tamarind.jpg";

import videoGrindingImg from "@/assets/video-grinding.jpg";
import videoTandoorImg from "@/assets/video-tandoor.jpg";
import videoWoodfireImg from "@/assets/video-woodfire.jpg";

export type StateItem = {
  id: string;
  name: string;
  region: string;
  description: string;
  image: string;
};

export type FestivalItem = {
  id: string;
  name: string;
  season: string;
  description: string;
  image: string;
};

export type IngredientItem = {
  id: string;
  name: string;
  origin: string;
  description: string;
  image: string;
};

export type VideoItem = {
  id: string;
  title: string;
  duration: string;
  description: string;
  thumbnail: string;
};

export const states: StateItem[] = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    region: "North West",
    description:
      "Desert cooking built on ghee, millet and dried spices — dal baati churma and the fiery laal maas.",
    image: rajasthanImg,
  },
  {
    id: "gujarat",
    name: "Gujarat",
    region: "West",
    description:
      "A largely vegetarian thali tradition where sweet, salt and spice are balanced in every serving.",
    image: gujaratImg,
  },
  {
    id: "kerala",
    name: "Kerala",
    region: "South",
    description:
      "Coconut, curry leaves and coastal spice trade routes shape appam, avial and fish curry.",
    image: keralaImg,
  },
  {
    id: "punjab",
    name: "Punjab",
    region: "North",
    description:
      "Farm-fed cooking of tandoor breads, sarson da saag and slow-simmered dairy-rich gravies.",
    image: punjabImg,
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    region: "East",
    description:
      "Rice, river fish and mustard oil, closing always with a sweet — mishti doi or rosogolla.",
    image: bengalImg,
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    region: "South",
    description:
      "Temple town food of fermented batters, tamarind gravies, idli, dosa and filter coffee.",
    image: tamilNaduImg,
  },
];

export const festivals: FestivalItem[] = [
  {
    id: "diwali",
    name: "Diwali",
    season: "October – November",
    description:
      "The festival of lights, marked by trays of ladoo, barfi and freshly fried jalebi shared with neighbours.",
    image: diwaliImg,
  },
  {
    id: "holi",
    name: "Holi",
    season: "March",
    description:
      "Spring colours celebrated with stuffed gujiya, spiced thandai and a table open to everyone.",
    image: holiImg,
  },
  {
    id: "pongal",
    name: "Pongal",
    season: "January",
    description:
      "A Tamil harvest thanksgiving where the first rice and jaggery are cooked in a clay pot until it overflows.",
    image: pongalImg,
  },
  {
    id: "onam",
    name: "Onam",
    season: "August – September",
    description:
      "Kerala's harvest feast served on a banana leaf, with over twenty dishes in a fixed traditional order.",
    image: onamImg,
  },
];

export const ingredients: IngredientItem[] = [
  {
    id: "saffron",
    name: "Kashmiri Saffron",
    origin: "Kashmir",
    description:
      "Hand-picked crocus threads that lend colour and aroma to biryani, kheer and festive sweets.",
    image: saffronImg,
  },
  {
    id: "curry-leaf",
    name: "Curry Leaf & Coconut",
    origin: "South India",
    description:
      "The tempering pair of the south — bloomed in hot oil to open up their unmistakable fragrance.",
    image: curryLeafImg,
  },
  {
    id: "mustard-oil",
    name: "Mustard Oil",
    origin: "Bengal & Bihar",
    description:
      "Pungent, sharp and warming, it defines eastern fish curries and quick-pickled vegetables.",
    image: mustardImg,
  },
  {
    id: "tamarind-kokum",
    name: "Tamarind & Kokum",
    origin: "Deccan & Konkan",
    description:
      "Regional souring agents used instead of lemon, giving gravies their deep, rounded tang.",
    image: tamarindImg,
  },
];

export const videos: VideoItem[] = [
  {
    id: "stone-grinding",
    title: "Grinding Masala on Stone",
    duration: "08:24",
    description:
      "How a household spice blend is made the slow way, on a grinding stone passed down generations.",
    thumbnail: videoGrindingImg,
  },
  {
    id: "clay-tandoor",
    title: "Breads From a Clay Tandoor",
    duration: "11:05",
    description:
      "A village tandoor is fired and readied for roti, kulcha and naan through the evening.",
    thumbnail: videoTandoorImg,
  },
  {
    id: "wood-fire",
    title: "Wood-Fire Village Cooking",
    duration: "14:37",
    description:
      "A festival-day curry simmered over open wood fire in an open courtyard kitchen.",
    thumbnail: videoWoodfireImg,
  },
];
