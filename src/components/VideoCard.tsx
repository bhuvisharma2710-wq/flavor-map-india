import { Play } from "lucide-react";
import type { VideoItem } from "@/data/homeData";

/** Visual placeholder card — no real video playback in this stage. */
export function VideoCard({ video }: { video: VideoItem }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-deep-foreground/15 bg-deep-foreground/5">
      <div className="relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          width={1000}
          height={640}
          className="aspect-video w-full object-cover"
        />
        <button
          type="button"
          aria-label={`Play preview: ${video.title}`}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-105">
            <Play className="size-5" />
          </span>
        </button>
        <span className="absolute bottom-3 right-3 rounded-md bg-deep/80 px-2 py-1 text-xs font-medium text-deep-foreground">
          {video.duration}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-deep-foreground">{video.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-deep-foreground/70">{video.description}</p>
      </div>
    </article>
  );
}
