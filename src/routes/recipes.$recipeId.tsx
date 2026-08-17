import { createFileRoute, notFound } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Clock, Users, ChefHat } from "lucide-react";

import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { RecipeCard } from "@/components/RecipeCard";
import { getRecipe, getState, getFestival, getIngredient, recipes } from "@/data/content";

export const Route = createFileRoute("/recipes/$recipeId")({
  loader: ({ params }) => {
    const recipe = getRecipe(params.recipeId);
    if (!recipe) throw notFound();
    return { name: recipe.name, summary: recipe.summary, region: recipe.region };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Recipe not found — FlavorMap India" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.name} Recipe — ${loaderData.region} | FlavorMap India`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.summary },
      ],
    };
  },
  component: RecipeDetail,
  errorComponent: RecipeError,
  notFoundComponent: RecipeNotFound,
});

function RecipeDetail() {
  const { recipeId } = Route.useParams();
  const recipe = getRecipe(recipeId)!;
  const state = recipe.stateId ? getState(recipe.stateId) : undefined;
  const festival = recipe.festivalId ? getFestival(recipe.festivalId) : undefined;
  const linkedIngredients = recipe.ingredientIds
    .map((id) => getIngredient(id))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));
  const related = recipes
    .filter((r) => r.id !== recipe.id && r.region === recipe.region)
    .slice(0, 3);

  return (
    <PageShell>
      <PageHeader
        eyebrow={recipe.region}
        title={recipe.name}
        description={recipe.summary}
        crumbs={[{ label: "Recipes", to: "/recipes" }, { label: recipe.name }]}
        image={recipe.image}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <img
              src={recipe.image}
              alt={recipe.name}
              loading="lazy"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full rounded-2xl border border-border object-cover"
            />

            <dl className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl border border-border bg-card p-4">
                <Clock className="mx-auto size-4 text-primary" />
                <dt className="mt-2 text-xs text-muted-foreground">Time</dt>
                <dd className="text-sm font-semibold text-foreground">{recipe.time}</dd>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <Users className="mx-auto size-4 text-primary" />
                <dt className="mt-2 text-xs text-muted-foreground">Serves</dt>
                <dd className="text-sm font-semibold text-foreground">{recipe.serves}</dd>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <ChefHat className="mx-auto size-4 text-primary" />
                <dt className="mt-2 text-xs text-muted-foreground">Level</dt>
                <dd className="text-sm font-semibold text-foreground">{recipe.difficulty}</dd>
              </div>
            </dl>

            <div className="mt-6 rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-lg font-semibold text-foreground">Ingredients</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {recipe.ingredients.map((item) => (
                  <li key={item} className="border-b border-border/60 pb-2 last:border-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {linkedIngredients.length > 0 && (
              <div className="mt-6 rounded-2xl border border-border bg-card p-6">
                <h2 className="text-base font-semibold text-foreground">In the Ingredient Guide</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {linkedIngredients.map((i) => (
                    <li key={i.id}>
                      <Link
                        to="/ingredients/$ingredientId"
                        params={{ ingredientId: i.id }}
                        className="inline-flex rounded-full border border-border px-3 py-1 text-sm font-medium text-primary hover:text-spice"
                      >
                        {i.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground">Method</h2>
            <ol className="mt-6 space-y-5">
              {recipe.steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-base leading-relaxed text-muted-foreground">{step}</p>
                </li>
              ))}
            </ol>

            {recipe.tips && recipe.tips.length > 0 && (
              <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-6">
                <h3 className="text-base font-semibold text-foreground">Cook's Notes</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {recipe.tips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            <h2 className="mt-10 text-2xl font-semibold text-foreground">Cultural Background</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {recipe.culturalBackground}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              {state && (
                <Link
                  to="/states/$stateId"
                  params={{ stateId: state.id }}
                  className="font-semibold text-primary hover:text-spice"
                >
                  More from {state.name} →
                </Link>
              )}
              {festival && (
                <Link
                  to="/festivals/$festivalId"
                  params={{ festivalId: festival.id }}
                  className="font-semibold text-primary hover:text-spice"
                >
                  Cooked for {festival.name} →
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-foreground">More from {recipe.region}</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <RecipeCard key={r.id} recipe={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </PageShell>
  );
}

function RecipeNotFound() {
  return (
    <PageShell>
      <PageHeader
        title="That recipe isn't in the library yet"
        description="Browse the full recipe collection instead."
        crumbs={[{ label: "Recipes", to: "/recipes" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Link to="/recipes" className="font-semibold text-primary hover:text-spice">
          Back to all recipes
        </Link>
      </div>
    </PageShell>
  );
}

function RecipeError() {
  return (
    <PageShell>
      <PageHeader
        title="This page didn't load"
        description="Something went wrong loading this recipe."
        crumbs={[{ label: "Recipes", to: "/recipes" }]}
      />
    </PageShell>
  );
}
