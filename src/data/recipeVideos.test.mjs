import { expect, test } from "bun:test";
import {
  getAlternateRecipeVideo,
  getRecipeVideo,
  getYouTubeRecipeSearchUrl,
  isVideoLanguage,
} from "./recipeVideos.ts";

test("verified English and Hindi videos are selected only for their recorded languages", () => {
  expect(getRecipeVideo("dal-baati-churma", "en")?.videoId).toBe("mZ4xTelTAGk");
  expect(getRecipeVideo("dal-baati-churma", "hi")?.videoId).toBe("N3_R51ZXn7g");
  expect(getRecipeVideo("dhokla", "en")).toBeNull();
  expect(getRecipeVideo("dhokla", "hi")?.videoId).toBe("FL2OAE9py_8");
});

test("unsupported languages and unavailable recipe-language combinations have no video", () => {
  expect(isVideoLanguage("en")).toBe(true);
  expect(isVideoLanguage("hi")).toBe(true);
  expect(isVideoLanguage("ta")).toBe(false);
  expect(getRecipeVideo("laal-maas", "hi")).toBeNull();
});

test("a missing language has an explicit alternate but no silent substitution", () => {
  expect(getRecipeVideo("appam-stew", "hi")).toBeNull();
  expect(getAlternateRecipeVideo("appam-stew", "hi")?.language).toBe("en");
});

test("fallback search links use the selected recipe-video language", () => {
  expect(getYouTubeRecipeSearchUrl("Khaman Dhokla", "hi")).toContain("Hindi");
  expect(getYouTubeRecipeSearchUrl("Khaman Dhokla", "en")).toContain("English");
});