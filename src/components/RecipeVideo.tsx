import { useEffect, useState } from "react";
import { ExternalLink, Languages, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  getAlternateRecipeVideo,
  getRecipeVideo,
  getYouTubeRecipeSearchUrl,
  isVideoLanguage,
  languageLabels,
  videoLanguages,
  type VideoLanguage,
} from "@/data/recipeVideos";

const LANGUAGE_STORAGE_KEY = "flavormap-video-language";

export function RecipeVideo({ recipeId, recipeName }: { recipeId: string; recipeName: string }) {
  const [language, setLanguage] = useState<VideoLanguage>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (savedLanguage && isVideoLanguage(savedLanguage)) setLanguage(savedLanguage);
    } catch {
      // The selector remains usable if browser storage is unavailable.
    }
    setReady(true);
  }, []);

  const changeLanguage = (value: string) => {
    if (!isVideoLanguage(value)) return;
    setLanguage(value);
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, value);
    } catch {
      // The current selection still applies for this page when storage is unavailable.
    }
  };

  const video = getRecipeVideo(recipeId, language);
  const alternative = getAlternateRecipeVideo(recipeId, language);
  const searchUrl = getYouTubeRecipeSearchUrl(recipeName, language);

  return (
    <section
      aria-labelledby="recipe-video-title"
      className="mt-12 border-t border-border pt-10 sm:mt-14 sm:pt-12"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Cook Along</p>
          <h2 id="recipe-video-title" className="mt-2 text-2xl font-semibold text-foreground">
            Recipe video
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Video spoken language is listed separately from this website's language.
          </p>
        </div>
        <div className="w-full sm:w-48">
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
            <Languages className="size-4 text-primary" />
            Video language
          </label>
          <Select value={language} onValueChange={changeLanguage}>
            <SelectTrigger aria-label="Video language">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {videoLanguages.map((code) => (
                <SelectItem key={code} value={code}>
                  {languageLabels[code]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {video ? (
        <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(15rem,0.7fr)] lg:items-start">
          <div className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-deep">
            {ready && (
              <iframe
                key={`${video.videoId}-${language}`}
                src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                title={`${recipeName} cooking tutorial in ${languageLabels[language]}`}
                className="size-full border-0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            )}
          </div>
          <div className="min-w-0 border-l-2 border-primary pl-5">
            <p className="text-xs font-semibold uppercase text-primary">{languageLabels[video.language]}</p>
            <h3 className="mt-2 text-lg font-semibold text-foreground">{video.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">Video by {video.channel}</p>
            <Button asChild variant="outline" size="sm" className="mt-5">
              <a
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink className="size-4" />
                Open on YouTube
              </a>
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-4 border-l-2 border-border pl-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <h3 className="font-semibold text-foreground">
              No verified {languageLabels[language]} video for this recipe yet
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We don’t have a confirmed {languageLabels[language]} tutorial to show, so we haven’t
              substituted a video in another language.
            </p>
            {alternative && (
              <p className="mt-2 text-sm text-muted-foreground">
                A verified {languageLabels[alternative.language]} version is available if you’d like
                to switch the video language.
              </p>
            )}
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <a href={searchUrl} target="_blank" rel="noreferrer">
              <Play className="size-4" />
              Search YouTube in {languageLabels[language]}
            </a>
          </Button>
        </div>
      )}
    </section>
  );
}