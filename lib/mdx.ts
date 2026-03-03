import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content', 'notes');

export interface NoteFrontmatter {
    title: string;
    description?: string;
    order?: number;
    date?: string;
    tags?: string[];
}

export interface NoteMetadata extends NoteFrontmatter {
    slug: string;
    category: string;
}

// Ensure the directory exists
export function ensureContentDirDirExists() {
    if (!fs.existsSync(contentDir)) {
        fs.mkdirSync(contentDir, { recursive: true });
    }
}

// Get all categories (folder names inside content/notes)
export function getCategories(): string[] {
    ensureContentDirDirExists();
    const dirNames = fs.readdirSync(contentDir, { withFileTypes: true });
    return dirNames
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);
}

// Get all notes for a specific category
export function getNotesByCategory(category: string): NoteMetadata[] {
    const categoryDir = path.join(contentDir, category);
    if (!fs.existsSync(categoryDir)) {
        return [];
    }

    const fileNames = fs.readdirSync(categoryDir);
    const notes = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, '');
            const fullPath = path.join(categoryDir, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);

            return {
                slug,
                category,
                title: data.title || slug,
                description: data.description || '',
                order: data.order || 999,
                date: data.date || '',
                tags: data.tags || [],
            } as NoteMetadata;
        });

    // Sort notes by order, then by title
    return notes.sort((a, b) => {
        if (a.order !== b.order) {
            return (a.order || 999) - (b.order || 999);
        }
        return a.title.localeCompare(b.title);
    });
}

// Get raw MDX content for a specific note
export function getNoteContent(category: string, slug: string) {
    const fullPath = path.join(contentDir, category, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
        return null;
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        frontmatter: {
            title: data.title || slug,
            description: data.description || '',
            order: data.order || 999,
            date: data.date || '',
            tags: data.tags || [],
        } as NoteFrontmatter,
        content,
    };
}

// Get TOC for a category
export function getCategoryTOC(category: string) {
    return getNotesByCategory(category);
}
