import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import bannerImg from "@/assets/page-banner-spices.jpg";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs">
      <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
        Home
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1">
          <ChevronRight className="size-3 text-muted-foreground/60" />
          {item.to ? (
            <Link to={item.to} className="text-muted-foreground transition-colors hover:text-primary">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-foreground">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  image?: string;
};

/** Editorial page header used by every list and detail page. */
export function PageHeader({ eyebrow, title, description, crumbs, image }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden border-b border-border bg-surface">
      <img
        src={image ?? bannerImg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1600}
        height={700}
        className="absolute inset-0 size-full object-cover opacity-20"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {crumbs && <Breadcrumbs items={crumbs} />}
        {eyebrow && <p className="eyebrow mt-6">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
