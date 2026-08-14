import type { IngredientItem } from "@/data/homeData";

export function IngredientCard({ ingredient }: { ingredient: IngredientItem }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-4">
      <img
        src={ingredient.image}
        alt={ingredient.name}
        loading="lazy"
        width={800}
        height={800}
        className="aspect-square w-full rounded-xl object-cover"
      />
      <h3 className="mt-4 text-base font-semibold text-foreground">{ingredient.name}</h3>
      <p className="mt-1 text-xs font-medium text-accent">{ingredient.origin}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {ingredient.description}
      </p>
    </article>
  );
}
