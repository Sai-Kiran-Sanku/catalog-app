import Image from "next/image";
import Link from "next/link";

interface ItemProperty {
  label: string;
  value: string;
}

interface Item {
  itemname: string;
  category: string;
  image: string;
  itemprops?: ItemProperty[];
}

interface ItemCardProps {
  item: Item;
  index: number;
}

const categoryColors: Record<string, string> = {
  Cars: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Bikes: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Phones: "bg-rose-500/20 text-rose-300 border-rose-500/30",
  Computers: "bg-sky-500/20 text-sky-300 border-sky-500/30",
};

export default function ItemCard({ item, index }: ItemCardProps) {
  const badgeClass =
    categoryColors[item.category] ??
    "bg-gray-500/20 text-gray-400 border-gray-500/30";
  const previewProps = item.itemprops?.slice(0, 2) ?? [];

  return (
    <Link
      href={`/item/${index}`}
      className="group relative overflow-hidden rounded-3xl border border-[#2e2e2e] bg-[#181818] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-xl hover:shadow-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f]"
    >
      <div className="relative h-48 overflow-hidden sm:h-56">
        <Image
          src={item.image}
          alt={item.itemname}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/45 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center bg-[#0f0f0f]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
            View Details
          </span>
        </div>
      </div>

      <div className="p-5">
        <span
          className={`mb-3 inline-block rounded-full border px-3 py-1 text-xs font-medium ${badgeClass}`}
        >
          {item.category}
        </span>

        <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-[#fafafa] transition-colors group-hover:text-orange-400">
          {item.itemname}
        </h3>

        {previewProps.length > 0 && (
          <div className="space-y-2 border-t border-[#252525] pt-3">
            {previewProps.map((property) => (
              <div
                key={`${property.label}-${property.value}`}
                className="flex items-start justify-between gap-3 text-sm"
              >
                <span className="text-[#8f8f95]">{property.label}</span>
                <span className="max-w-[58%] text-right text-[#e4e4e7]">
                  {property.value}
                </span>
              </div>
            ))}
          </div>
        )}

        <p className="mt-4 flex items-center gap-1 text-xs text-[#a1a1aa]">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
            />
          </svg>
          Click to view specifications
        </p>
      </div>
    </Link>
  );
}
