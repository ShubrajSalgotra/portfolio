import { getNoteContent, getCategoryTOC, getCategories, getNotesByCategory } from "@/lib/mdx";
import { CustomMDX } from "@/components/MDXComponents";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft } from "lucide-react";
import "highlight.js/styles/github-dark.css";

export async function generateStaticParams() {
    const categories = getCategories();
    const paths: { category: string; slug: string }[] = [];

    categories.forEach((category) => {
        const notes = getNotesByCategory(category);
        notes.forEach((note) => {
            paths.push({
                category,
                slug: note.slug,
            });
        });
    });

    return paths;
}

export default async function NotePage({
    params,
}: {
    params: Promise<{ category: string; slug: string }>;
}) {
    const { category, slug } = await params;
    const noteContent = getNoteContent(category, slug);

    if (!noteContent) {
        notFound();
    }

    const { frontmatter, content } = noteContent;
    const toc = getCategoryTOC(category);

    // Pretty category name
    const categoryTitle = category
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
            {/* Sidebar TOC */}
            <aside className="w-full md:w-64 shrink-0">
                <div className="sticky top-24">
                    <Link
                        href="/notes"
                        className="text-sm text-gray-400 hover:text-white flex items-center gap-1 mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Notes
                    </Link>

                    <h3 className="font-semibold text-lg mb-4 text-white">
                        {categoryTitle}
                    </h3>
                    <nav className="flex flex-col gap-2">
                        {toc.map((item, index) => {
                            const isActive = item.slug === slug;
                            return (
                                <Link
                                    key={item.slug}
                                    href={`/notes/${category}/${item.slug}`}
                                    className={`flex items-center text-sm py-2 px-3 rounded-lg transition-colors ${isActive
                                        ? "bg-brand/10 text-brand font-medium"
                                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                                        }`}
                                >
                                    <span className="opacity-50 mr-3 text-xs">{index + 1}</span>
                                    {item.title}
                                    {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0 bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
                <header className="mb-10 pb-10 border-b border-gray-800">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        {frontmatter.title}
                    </h1>
                    {frontmatter.description && (
                        <p className="text-xl text-gray-400 leading-relaxed">{frontmatter.description}</p>
                    )}
                </header>

                <article className="prose prose-invert prose-brand max-w-none 
          prose-pre:bg-gray-950 prose-pre:border prose-pre:border-gray-800 
          prose-headings:text-white prose-a:text-brand prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white prose-code:text-brand">
                    <CustomMDX source={content} />
                </article>
            </main>
        </div>
    );
}
