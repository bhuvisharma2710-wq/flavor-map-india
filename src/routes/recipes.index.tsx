import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { RecipeCard } from "@/components/RecipeCard";
import { recipes } from "@/data/content";

const title = "Regional Indian Recipes — FlavorMap India";
const description =
  "Traditional Indian recipes with ingredients, step-by-step method and the cultural background behind each dish.";

export const Route = createFileRoute("/recipes/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RecipesPage,
});

function RecipesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Recipe Library"
        title="Recipes from Across India"
        description="Every recipe includes what goes in it, how it is made, and why it is cooked that way."
        crumbs={[{ label: "Recipes" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
