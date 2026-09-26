import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import InlineImage from "@/app/blog/_components/inline-image";
import type { BlogPostDetail } from "@/lib/api/blog";

type Toc = BlogPostDetail["toc"];
type MarkdownNode = {
  type: string;
  depth?: number;
  value?: string;
  children?: MarkdownNode[];
  data?: {
    hName?: string;
    hProperties?: { id?: string; open?: boolean; "data-level"?: number };
  };
};

function collapsibleSections(toc: Toc) {
  return (tree: MarkdownNode) => {
    const root: MarkdownNode[] = [];
    let section = root;
    let current = root;
    let tocIndex = 0;
    let sectionNumber = 0;
    let subsectionNumber = 0;

    for (const node of tree.children ?? []) {
      if (node.type !== "heading" || (node.depth !== 2 && node.depth !== 3)) {
        current.push(node);
        continue;
      }

      if (node.depth === 2) {
        sectionNumber++;
        subsectionNumber = 0;
      } else {
        subsectionNumber++;
      }

      const number =
        node.depth === 2 ? `${sectionNumber}. ` : `${sectionNumber}.${subsectionNumber}. `;
      node.children = [{ type: "text", value: number }, ...(node.children ?? [])];
      const entry = toc[tocIndex++];
      node.data = {
        ...node.data,
        hProperties: {
          ...node.data?.hProperties,
          ...(entry?.level === node.depth ? { id: entry.id } : {}),
        },
      };

      const content: MarkdownNode[] = [
        { type: "sectionSummary", data: { hName: "summary" }, children: [node] },
      ];
      const details: MarkdownNode = {
        type: "sectionDetails",
        data: { hName: "details", hProperties: { open: true, "data-level": node.depth } },
        children: content,
      };

      if (node.depth === 2) {
        root.push(details);
        section = content;
      } else {
        section.push(details);
      }
      current = content;
    }

    tree.children = root;
  };
}

const components: Components = {
  details: ({ node: _node, ...props }) => (
    <details
      {...props}
      className="article-section mt-10 first:mt-0 data-[level=3]:mt-8 [&[open]>summary>span]:rotate-[225deg]"
    />
  ),
  summary: ({ node: _node, children, ...props }) => (
    <summary
      {...props}
      className="flex cursor-pointer list-none items-center gap-4 rounded-sm text-secondary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring [&::-webkit-details-marker]:hidden"
    >
      {children}
      <span
        aria-hidden="true"
        className="ml-auto size-2 shrink-0 rotate-45 border-r-2 border-b-2 border-ring transition-transform duration-200 motion-reduce:transition-none"
      />
    </summary>
  ),
  h2: ({ node: _node, children, ...props }) => (
    <h2 {...props} className="scroll-mt-[calc(var(--header-height)+2rem)]">
      {children}
    </h2>
  ),
  h3: ({ node: _node, children, ...props }) => (
    <h3 {...props} className="scroll-mt-[calc(var(--header-height)+2rem)]">
      {children}
    </h3>
  ),
  a: ({ node: _node, children, ...props }) => (
    <a {...props} data-underline="">
      {children}
    </a>
  ),
  ul: ({ node: _node, ...props }) => <ul {...props} className="mt-5 list-disc pl-6" />,
  ol: ({ node: _node, ...props }) => <ol {...props} className="mt-5 list-decimal pl-6" />,
  li: ({ node: _node, ...props }) => <li {...props} className="mt-2" />,
  blockquote: ({ node: _node, ...props }) => (
    <blockquote {...props} className="mt-6 border-l-[3px] border-primary pl-5 italic" />
  ),
  code: ({ node: _node, ...props }) => (
    <code {...props} className="rounded bg-muted px-1 py-0.5 font-mono text-[0.85em]" />
  ),
  pre: ({ node: _node, ...props }) => (
    <pre
      {...props}
      className="mt-6 overflow-x-auto rounded-lg bg-secondary-foreground p-5 font-mono text-sm leading-7 text-background [&_code]:rounded-none [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-[1em] [&_code]:text-inherit"
    />
  ),
  img: ({ node: _node, src, alt, title }) =>
    typeof src === "string" ? <InlineImage alt={alt} src={src} title={title} /> : null,
  table: ({ node: _node, ...props }) => (
    <table
      {...props}
      className="mt-6 block max-w-full overflow-x-auto border-collapse text-[0.9375rem]"
    />
  ),
  th: ({ node: _node, ...props }) => (
    <th {...props} className="border border-border px-3 py-2 text-left" />
  ),
  td: ({ node: _node, ...props }) => (
    <td {...props} className="border border-border px-3 py-2 text-left" />
  ),
  hr: ({ node: _node, ...props }) => (
    <hr {...props} className="my-8 border-0 border-t border-border" />
  ),
};

export default function ArticleMarkdown({ markdown, toc }: { markdown: string; toc: Toc }) {
  return (
    <article className="mt-7 flow-root text-[1.0625rem] leading-[1.85] text-secondary-foreground [overflow-wrap:anywhere]">
      <ReactMarkdown
        components={components}
        remarkPlugins={[remarkGfm, [collapsibleSections, toc]]}
        skipHtml
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
