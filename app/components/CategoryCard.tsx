import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  category: string;
  itemCount: number;
  previewImage: string;
  href: string;
}

const categoryStyles: Record<string, string> = {
  Cars: "from-orange-500/20 to-amber-400/10 border-orange-500/30 text-orange-300",
  Bikes: "from-emerald-500/20 to-lime-400/10 border-emerald-500/30 text-emerald-300",
  Phones: "from-rose-500/20 to-fuchsia-400/10 border-rose-500/30 text-rose-300",
  Computers: "from-sky-500/20 to-cyan-400/10 border-sky-500/30 text-sky-300",
};

export default function CategoryCard({
  category,
  itemCount,
  previewImage,
  href,
}: CategoryCardProps) {
  const colorClass =
    categoryStyles[category] ??
    "from-zinc-500/20 to-zinc-400/10 border-zinc-500/30 text-zinc-300";
  const initials = category.slice(0, 2).toUpperCase();

  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br ${colorClass} transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f]`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.14),_transparent_30%)]" />
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="relative h-44 overflow-hidden">
        <Image
          src={previewImage}
          alt={category}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/35 to-transparent" />
        <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]/80 text-sm font-semibold tracking-[0.2em] text-white backdrop-blur-sm">
          {initials}
        </div>
      </div>

      <div className="relative p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full border border-white/10 bg-black/15 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#d4d4d8]">
            Category
          </span>
          <span className="text-sm text-[#d4d4d8]">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </span>
        </div>
        <h3 className="text-2xl font-semibold text-[#fafafa] transition-colors group-hover:text-white">
          {category}
        </h3>
        <p className="mt-2 text-sm leading-6 text-[#d4d4d8]">
          Preview the collection and jump into category-specific product details.
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white">
          Explore section
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/8">
          <div
            className="h-full rounded-full bg-white/70 transition-all duration-500 group-hover:w-full"
            style={{ width: `${Math.min(100, 18 + itemCount * 12)}%` }}
          />
        </div>
      </div>
    </Link>
  );
}
