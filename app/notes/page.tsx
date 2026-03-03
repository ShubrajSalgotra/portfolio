import { getCategories, getNotesByCategory } from "@/lib/mdx";
import Link from "next/link";
import { Folder } from "lucide-react";

export const metadata = {
  title: "Notes | My Portfolio",
  description: "My learning notes",
};

export default function NotesPage() {
  const categories = getCategories();

  return (
    <main className="min-h-screen pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand to-brand-dark mb-4">
          Learning Notes
        </h1>
        <p className="text-xl text-gray-400">
          A collection of my thoughts, tutorials, and advanced insights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category: string) => {
          const notes = getNotesByCategory(category);
          const firstNote = notes[0];

          if (!firstNote) return null;

          // Make category name pretty (e.g. 'advanced-python' -> 'Advanced Python')
          const title = category
            .split('-')
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

          return (
            <Link
              key={category}
              href={`/notes/${category}/${firstNote.slug}`}
              className="group block p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-brand/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(42,95,255,0.15)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-brand/10 rounded-xl text-brand group-hover:scale-110 transition-transform">
                  <Folder className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-semibold group-hover:text-brand transition-colors">
                  {title}
                </h2>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                {notes.length} note{notes.length === 1 ? "" : "s"}
              </p>

              <div className="text-sm text-brand flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Start reading →
              </div>
            </Link>
          );
        })}
        {categories.length === 0 && (
          <div className="col-span-full py-12 text-center text-gray-400">
            No notes found yet. Check back soon!
          </div>
        )}
      </div>
    </main>
  );
}