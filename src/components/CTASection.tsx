import ctaImage from "@/assets/cta-spices.jpg";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-deep">
      <img
        src={ctaImage}
        alt="Whole Indian spices scattered on a dark stone surface"
        loading="lazy"
        width={1600}
        height={700}
        className="absolute inset-0 size-full object-cover opacity-30"
      />
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <h2 className="text-3xl font-semibold text-deep-foreground sm:text-4xl">
          Ready to Explore India&apos;s Culinary Heritage?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-deep-foreground/80">
          Begin with a state, a festival or a single ingredient — and follow the story from there.
        </p>
        <a
          href="#states"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-spice"
        >
          Start Exploring
        </a>
      </div>
    </section>
  );
}
