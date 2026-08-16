import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { IngredientCard } from "@/components/IngredientCard";
import { ingredients } from "@/data/content";

const title = "Indian Ingredient Guide — Spices, Oils & Souring Agents | FlavorMap India";
const description =
  "A guide to twelve regional Indian ingredients — saffron, curry leaf, mustard oil, tamarind, kokum, jaggery and more — with flavour profiles and buying tips.";

export const Route = createFileRoute("/ingredients/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: IngredientsPage,
});

function IngredientsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Ingredient Guide"
        title="Discover Regional Ingredients"
        description="What each ingredient tastes like, where it comes from, and which dishes depend on it."
        crumbs={[{ label: "Ingredients" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ingredients.map((ingredient) => (
            <IngredientCard key={ingredient.id} ingredient={ingredient} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
