import CategoryCard from "./components/CategoryCard";
import ItemCard from "./components/ItemCard";
import productsData from "./data/data.json";

interface ProductProperty {
  label: string;
  value: string;
}

interface ProductItem {
  itemname: string;
  category: string;
  image: string;
  itemprops: ProductProperty[];
}

interface CategoryGroup {
  name: string;
  items: Array<ProductItem & { index: number }>;
}

const categoryAccents: Record<string, string> = {
  Bikes: "from-emerald-500/15 via-emerald-500/5 to-transparent",
  Cars: "from-orange-500/15 via-orange-500/5 to-transparent",
  Computers: "from-sky-500/15 via-sky-500/5 to-transparent",
  Phones: "from-rose-500/15 via-rose-500/5 to-transparent",
};

function toSectionId(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export default function Home() {
  const products: ProductItem[] = productsData;

  const categoryList: CategoryGroup[] = Object.entries(
    products.reduce<Record<string, Array<ProductItem & { index: number }>>>(
      (acc, item, index) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push({ ...item, index });
        return acc;
      },
      {},
    ),
  )
    .map(([name, items]) => ({ name, items }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen pb-20">
      <section className="relative overflow-hidden border-b border-[#242424] py-14 sm:py-20 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.18),_transparent_30%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-orange-400">
              Dynamic Multi-Category Catalog
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[#fafafa] sm:text-5xl lg:text-6xl">
              Browse distinct product categories without hardcoding their specs.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#a1a1aa] sm:text-lg">
              Each category stays visually separated on the home screen, and every
              detail page renders its attributes directly from the JSON
              `itemprops` array.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#2e2e2e] bg-[#171717] px-4 py-2 text-sm text-[#d4d4d8]">
                {categoryList.length} categories
              </span>
              <span className="rounded-full border border-[#2e2e2e] bg-[#171717] px-4 py-2 text-sm text-[#d4d4d8]">
                {products.length} products
              </span>
              <span className="rounded-full border border-[#2e2e2e] bg-[#171717] px-4 py-2 text-sm text-[#d4d4d8]">
                Responsive overview + detail pages
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-gradient-to-b from-orange-500 to-cyan-400" />
            <div>
              <h2 className="text-2xl font-semibold text-[#fafafa] sm:text-3xl">
                Category Overview
              </h2>
              <p className="mt-1 text-sm text-[#8f8f95]">
                Jump to a category section and preview its items.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {categoryList.map((category) => (
              <CategoryCard
                key={category.name}
                category={category.name}
                itemCount={category.items.length}
                previewImage={category.items[0]?.image ?? ""}
                href={`/#${toSectionId(category.name)}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-orange-500" />
            <div>
              <h2 className="text-2xl font-semibold text-[#fafafa] sm:text-3xl">
                Products by Category
              </h2>
              <p className="mt-1 text-sm text-[#8f8f95]">
                Each section is generated from the same shared JSON dataset.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {categoryList.map((category) => (
              <section
                key={category.name}
                id={toSectionId(category.name)}
                className="catalog-section overflow-hidden rounded-[28px] border border-[#252525] bg-[#131313]"
              >
                <div
                  className={`border-b border-[#242424] bg-gradient-to-r ${categoryAccents[category.name] ?? "from-white/5 to-transparent"} px-5 py-5 sm:px-8`}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8f8f95]">
                        {category.name}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-[#fafafa]">
                        {category.items.length} curated {category.name.toLowerCase()}
                      </h3>
                    </div>
                    <p className="max-w-xl text-sm leading-6 text-[#a1a1aa]">
                      A category-specific preview with shared card behavior and
                      dynamic item detail rendering.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:p-8 xl:grid-cols-3">
                  {category.items.map((item) => (
                    <ItemCard
                      key={`${category.name}-${item.index}`}
                      item={item}
                      index={item.index}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
