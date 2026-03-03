import { redirect } from 'next/navigation';
import { getNotesByCategory } from '@/lib/mdx';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const notes = getNotesByCategory(category);

    if (notes.length > 0) {
        redirect(`/notes/${category}/${notes[0].slug}`);
    } else {
        redirect('/notes');
    }
}
