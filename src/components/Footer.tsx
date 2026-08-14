import { UtensilsCrossed } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Explore by State", href: "#states" },
  { label: "Festivals", href: "#festivals" },
  { label: "Ingredient Guide", href: "#ingredients" },
  { label: "Cooking Videos", href: "#videos" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <UtensilsCrossed className="size-4" />
              </span>
              <span className="font-display text-lg font-semibold">
                FlavorMap <span className="text-primary">India</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              A regional Indian food explorer built as an academic project — mapping recipes,
              festivals, ingredients and traditional cooking practices to the regions and
              communities they belong to.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} FlavorMap India. Created for educational purposes.
        </p>
      </div>
    </footer>
  );
}
