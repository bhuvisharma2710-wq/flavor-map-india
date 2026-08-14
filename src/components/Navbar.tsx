import { useState } from "react";
import { Menu, X, UtensilsCrossed } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", active: true },
  { label: "Explore by State", href: "#states" },
  { label: "Festivals", href: "#festivals" },
  { label: "Ingredient Guide", href: "#ingredients" },
  { label: "Search", href: "#search" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <UtensilsCrossed className="size-4" />
          </span>
          <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
            FLAVORMAP <span className="text-primary">INDIA</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={
                  item.active
                    ? "border-b-2 border-primary pb-1 text-sm font-semibold text-foreground"
                    : "text-sm text-muted-foreground transition-colors hover:text-primary"
                }
              >
                {item.label}
              </a>
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
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className={
                  item.active
                    ? "block rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-secondary-foreground"
                    : "block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted"
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
