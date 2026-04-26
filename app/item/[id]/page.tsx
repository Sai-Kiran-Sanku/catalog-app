import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PropertyRow from "../../components/PropertyRow";
import productsData from "../../data/data.json";

interface ProductItem {
  itemname: string;
  category: string;
  image: string;
  itemprops: Array<{ label: string; value: string }>;
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const products: ProductItem[] = productsData;

  return products.map((_, index) => ({
    id: String(index),
  }));
}

export default async function ItemPage({ params }: PageProps) {
  const { id } = await params;
  const products: ProductItem[] = productsData;
  const item = products[Number(id)];

  if (!item) {
    notFound();
  }

  const categoryColors: Record<string, string> = {
    Cars: "from-orange-500 to-amber-400",
    Bikes: "from-emerald-500 to-lime-400",
    Phones: "from-rose-500 to-fuchsia-400",
    Computers: "from-sky-500 to-cyan-400",
  };

  const categoryBadgeColors: Record<string, string> = {
    Cars: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    Bikes: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    Phones: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    Computers: "bg-sky-500/20 text-sky-300 border-sky-500/30",
  };

  const gradientClass = categoryColors[item.category] ?? "from-gray-500 to-gray-600";
  const badgeClass =
    categoryBadgeColors[item.category] ??
    "bg-gray-500/20 text-gray-400 border-gray-500/30";

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-br ${gradientClass} opacity-10 blur-3xl`}
        />
        <div
          className={`absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-tr ${gradientClass} opacity-10 blur-3xl`}
        />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-2 text-[#a1a1aa] transition-colors hover:text-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f]"
        >
          <svg
            className="h-5 w-5 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-medium">Back to Catalog</span>
        </Link>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#2e2e2e] bg-[#1a1a1a]">
            <Image
              src={item.image}
              alt={item.itemname}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            <div className="absolute left-4 top-4">
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium ${badgeClass}`}
              >
                <span className="h-2 w-2 rounded-full bg-current" />
                {item.category}
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8f8f95]">
              Item detail
            </p>
            <h1 className="mt-3 text-2xl font-bold text-[#fafafa] sm:text-3xl lg:text-4xl">
              {item.itemname}
            </h1>
            <p className="mt-4 text-base leading-7 text-[#a1a1aa]">
              This page renders every specification dynamically from the
              `itemprops` array, so each category can expose a different set of
              attributes without changing the UI code.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-[#2e2e2e] bg-[#171717] px-4 py-2 text-[#d4d4d8]">
                {item.itemprops.length} specifications
              </span>
              <span className="rounded-full border border-[#2e2e2e] bg-[#171717] px-4 py-2 text-[#d4d4d8]">
                Category: {item.category}
              </span>
            </div>

            <div className="mt-6 flex-1 rounded-2xl border border-[#2e2e2e] bg-[#1a1a1a] p-6">
              <div className="mb-6 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradientClass}`}
                >
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-[#fafafa]">
                  Specifications
                </h2>
              </div>

              <div className="space-y-1">
                {item.itemprops.map((property, index) => (
                  <PropertyRow
                    key={`${property.label}-${index}`}
                    property={property}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
