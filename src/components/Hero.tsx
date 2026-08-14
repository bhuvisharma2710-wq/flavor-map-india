import heroImage from "@/assets/hero-indian-feast.jpg";

export function Hero() {
  return (
    <section id="home" className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <p className="eyebrow">A Regional Indian Food Explorer</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            Explore the Flavours of India
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Discover regional recipes, culinary traditions, cultural stories, festivals and
            ingredients from across India.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#states"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-spice"
            >
              Explore Indian Cuisine
            </a>
            <a
              href="#states"
              className="inline-flex items-center justify-center rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Discover by State
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            {[
              { value: "28+", label: "States & regions" },
              { value: "50+", label: "Festival recipes" },
              { value: "100+", label: "Local ingredients" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-semibold text-foreground">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <img
            src={heroImage}
            alt="Traditional Indian thali with curries, saffron rice, breads and chutneys served in brass bowls"
            width={1600}
            height={1104}
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
          />
          <div className="mt-4 rounded-xl border border-border bg-card p-4 sm:absolute sm:-bottom-8 sm:left-6 sm:mt-0 sm:max-w-xs">
            <p className="text-sm font-semibold text-foreground">Food with a story</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Every dish carries the region, festival and community it came from.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
