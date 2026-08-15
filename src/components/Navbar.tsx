import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, UtensilsCrossed } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Explore by State", to: "/states" },
  { label: "Recipes", to: "/recipes" },
  { label: "Festivals", to: "/festivals" },
  { label: "Ingredient Guide", to: "/ingredients" },
  { label: "Search", to: "/search" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <UtensilsCrossed className="size-4" />
          </span>
          <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
            FLAVORMAP <span className="text-primary">INDIA</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="text-sm text-muted-foreground transition-colors hover:text-primary data-[status=active]:border-b-2 data-[status=active]:border-primary data-[status=active]:pb-1 data-[status=active]:font-semibold data-[status=active]:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          className="flex size-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-border bg-card px-4 py-3 lg:hidden">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted data-[status=active]:bg-secondary data-[status=active]:font-semibold data-[status=active]:text-secondary-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
