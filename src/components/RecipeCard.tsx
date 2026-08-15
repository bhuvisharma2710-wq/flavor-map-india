import { Link } from "@tanstack/react-router";
import { Clock, Users } from "lucide-react";
import type { Recipe } from "@/data/content";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      to="/recipes/$recipeId"
      params={{ recipeId: recipe.id }}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
    >
      <img
        src={recipe.image}
        alt={recipe.name}
        loading="lazy"
        width={1200}
        height={900}
        className="aspect-[4/3] w-full object-cover"
      />
      <div className="p-5">
        <p className="eyebrow">{recipe.region}</p>
        <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary">
          {recipe.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{recipe.summary}</p>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" /> {recipe.time}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users className="size-3.5" /> Serves {recipe.serves}
          </span>
          <span className="rounded-full bg-secondary px-2 py-0.5 font-medium text-secondary-foreground">
            {recipe.type}
          </span>
        </div>
      </div>
    </Link>
  );
}
