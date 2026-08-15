/**
 * Homepage data. Content now lives in `content.ts`; this module re-exports the
 * slices the homepage needs plus the video placeholders.
 */

import videoGrindingImg from "@/assets/video-grinding.jpg";
import videoTandoorImg from "@/assets/video-tandoor.jpg";
import videoWoodfireImg from "@/assets/video-woodfire.jpg";

export type { StateItem, FestivalItem, IngredientItem } from "./content";
export { states, festivals, ingredients } from "./content";

import { festivals as allFestivals, ingredients as allIngredients } from "./content";

/** Homepage shows the four classic festivals only. */
export const homeFestivals = allFestivals.slice(0, 4);
/** Homepage shows four highlighted ingredients. */
export const homeIngredients = allIngredients.slice(0, 4);

export type VideoItem = {
  id: string;
  title: string;
  duration: string;
  description: string;
  thumbnail: string;
};

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
