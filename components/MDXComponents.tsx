import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
// Import highlight.js CSS (we can also do this in global layout)
// import "highlight.js/styles/github-dark.css";

// You can create custom components to map to HTML tags
const components = {
    h1: (props: any) => (
        <h1 className="text-4xl font-bold mt-8 mb-4 text-brand" {...props} />
    ),
    h2: (props: any) => (
        <h2
            className="text-2xl font-semibold mt-8 mb-4 border-b border-gray-700 pb-2"
            {...props}
        />
    ),
    h3: (props: any) => (
        <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />
    ),
    p: (props: any) => <p className="leading-7 mb-4 text-gray-300" {...props} />,
    a: (props: any) => (
        <a className="text-brand hover:underline" {...props} />
    ),
    blockquote: (props: any) => (
        <blockquote
            className="border-l-4 border-brand pl-4 italic my-4 text-gray-400"
            {...props}
        />
    ),
    code: (props: any) => {
        // Check if it's an inline code block or a code block from pre
        const isInline = !props.className?.includes("hljs");
        if (isInline) {
            return (
                <code className="bg-gray-800 text-brand px-1.5 py-0.5 rounded text-sm" {...props} />
            );
        }
        return <code {...props} />;
    },
    pre: (props: any) => (
        <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto my-6 border border-gray-800" {...props} />
    ),
};

export function CustomMDX(props: any) {
    return (
        <div className="mdx-content">
            <MDXRemote
                {...props}
                components={{ ...components, ...(props.components || {}) }}
                options={{
                    mdxOptions: {
                        rehypePlugins: [rehypeHighlight],
                    },
                }}
            />
        </div>
    );
}
