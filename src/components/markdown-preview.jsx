"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"

export default function MarkdownPreview({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />,
        h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-5 mb-3" {...props} />,
        h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,
        p: ({ node, ...props }) => <p className="my-3" {...props} />,
        ul: ({ node, ...props }) => <ul className="list-disc pl-6 my-3" {...props} />,
        ol: ({ node, ...props }) => <ol className="list-decimal pl-6 my-3" {...props} />,
        li: ({ node, ...props }) => <li className="my-1" {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 my-4 italic" {...props} />
        ),
        hr: () => <hr className="my-6 border-t border-gray-300 dark:border-gray-700" />,
        a: ({ node, ...props }) => <a className="text-primary hover:underline" {...props} />,
        code: ({ node, inline, ...props }) =>
          inline ? (
            <code className="bg-muted px-1 py-0.5 rounded text-sm" {...props} />
          ) : (
            <code className="block bg-muted p-3 rounded-md text-sm overflow-x-auto my-4" {...props} />
          ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
