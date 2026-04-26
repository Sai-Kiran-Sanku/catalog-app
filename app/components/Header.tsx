import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#2e2e2e] bg-[#0f0f0f]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/20 transition-shadow duration-300 group-hover:shadow-orange-500/40">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-[#fafafa]">
              Catalog<span className="text-orange-500">Hub</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <span className="text-sm text-[#a1a1aa]">Browse categories below</span>
          </nav>
        </div>
      </div>
    </header>
  );
}
