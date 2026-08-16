import { createFileRoute, notFound, Link } from "@tanstack/react-router";

import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { RecipeCard } from "@/components/RecipeCard";
import { getState, recipesByState, getIngredient } from "@/data/content";

export const Route = createFileRoute("/states/$stateId")({
  loader: ({ params }) => {
    const state = getState(params.stateId);
    if (!state) throw notFound();
    return { name: state.name, description: state.description };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "State not found — FlavorMap India" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.name} Cuisine — Dishes, Flavours & Recipes | FlavorMap India`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.description },
      ],
    };
  },
  component: StateDetail,
  errorComponent: StateError,
  notFoundComponent: StateNotFound,
});

function StateDetail() {
  const { stateId } = Route.useParams();
  const state = getState(stateId)!;
  const dishes = recipesByState(stateId);
  const linkedIngredients = state.ingredientIds
    .map((id) => getIngredient(id))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  return (
    <PageShell>
      <PageHeader
        eyebrow={state.region}
        title={`The Cuisine of ${state.name}`}
        description={state.description}
        crumbs={[{ label: "States", to: "/states" }, { label: state.name }]}
        image={state.image}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Culinary Identity</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{state.identity}</p>

            <h3 className="mt-8 text-lg font-semibold text-foreground">Signature Flavours</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {state.signatureFlavours.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground"
                >
                  {f}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-semibold text-foreground">At the Table</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {state.diningCustom}
            </p>
          </div>

          <aside className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-base font-semibold text-foreground">Pantry Staples</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {state.staples.map((s) => (
                <li key={s} className="border-b border-border/60 pb-2 last:border-0">
                  {s}
                </li>
              ))}
            </ul>

            {linkedIngredients.length > 0 && (
              <>
                <h3 className="mt-6 text-base font-semibold text-foreground">Key Ingredients</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {linkedIngredients.map((i) => (
                    <li key={i.id}>
                      <Link
                        to="/ingredients/$ingredientId"
                        params={{ ingredientId: i.id }}
                        className="font-medium text-primary hover:text-spice"
                      >
                        {i.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">Signature Dishes</p>
          <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
            Recipes from {state.name}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dishes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function StateNotFound() {
  return (
    <PageShell>
      <PageHeader
        title="We haven't mapped that state yet"
        description="Pick a state from the list to explore its cuisine."
        crumbs={[{ label: "States", to: "/states" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Link to="/states" className="font-semibold text-primary hover:text-spice">
          Back to all states
        </Link>
      </div>
    </PageShell>
  );
}

function StateError() {
  return (
    <PageShell>
      <PageHeader
        title="This page didn't load"
        description="Something went wrong loading this state."
        crumbs={[{ label: "States", to: "/states" }]}
      />
    </PageShell>
  );
}
