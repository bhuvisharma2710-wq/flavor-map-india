export const videoLanguages = ["en", "hi"] as const;

export type VideoLanguage = (typeof videoLanguages)[number];

export type RecipeVideo = {
  videoId: string;
  title: string;
  channel: string;
  language: VideoLanguage;
};

const verifiedRecipeVideos: Partial<Record<string, Partial<Record<VideoLanguage, RecipeVideo>>>> = {
  "dal-baati-churma": {
    en: {
      videoId: "mZ4xTelTAGk",
      title: "Dal Baati Churma Recipe | Chef Sanjyot Keer",
      channel: "Your Food Lab",
      language: "en",
    },
    hi: {
      videoId: "N3_R51ZXn7g",
      title: "Rajasthani Dal Baati Churma Recipe",
      channel: "Kabita's Kitchen",
      language: "hi",
    },
  },
  dhokla: {
    hi: {
      videoId: "FL2OAE9py_8",
      title: "Soft & Spongy Market Style Khaman Dhokla",
      channel: "Ajay Chopra",
      language: "hi",
    },
  },
  "appam-stew": {
    en: {
      videoId: "QorQkhqdAi4",
      title: "Kerala Appam and Vegetable Stew",
      channel: "Ajay Chopra",
      language: "en",
    },
  },
  "sarson-da-saag": {
    hi: {
      videoId: "VgF53Kqvjdg",
      title: "Punjabi Sarson da Saag Recipe",
      channel: "Kabita's Kitchen",
      language: "hi",
    },
  },
};

export const languageLabels: Record<VideoLanguage, string> = {
  en: "English",
  hi: "Hindi",
};

export function isVideoLanguage(value: string): value is VideoLanguage {
  return videoLanguages.some((language) => language === value);
}

export function getRecipeVideo(recipeId: string, language: VideoLanguage) {
  return verifiedRecipeVideos[recipeId]?.[language] ?? null;
}

export function getAlternateRecipeVideo(recipeId: string, language: VideoLanguage) {
  const videos = verifiedRecipeVideos[recipeId];
  return videoLanguages
    .filter((candidate) => candidate !== language)
    .map((candidate) => videos?.[candidate])
    .find((video): video is RecipeVideo => video !== undefined) ?? null;
}

export function getYouTubeRecipeSearchUrl(recipeName: string, language: VideoLanguage) {
  const languageName = languageLabels[language];
  const query = `${recipeName} recipe tutorial ${languageName}`;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}