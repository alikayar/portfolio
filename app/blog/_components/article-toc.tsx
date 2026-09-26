import type { BlogPostDetail } from "@/lib/api/blog";

type Toc = BlogPostDetail["toc"];
type TocEntry = Toc[number];

export default function ArticleToc({ toc }: { toc: Toc }) {
  const sections: (TocEntry & { children: TocEntry[] })[] = [];

  for (const entry of toc) {
    if (entry.level === 2) {
      sections.push({ ...entry, children: [] });
    } else {
      sections.at(-1)?.children.push(entry);
    }
  }

  if (sections.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="mt-8 border-y border-border/60 py-4 [overflow-wrap:anywhere]"
    >
      <ul className="space-y-2">
        {sections.map((section, sectionIndex) => (
          <li key={section.id}>
            <span className="mr-2">{sectionIndex + 1}.</span>
            <a data-underline="" href={`#${section.id}`}>
              {section.text}
            </a>
            {section.children.length > 0 && (
              <ul className="mt-1 ml-5 list-disc space-y-1 pl-5">
                {section.children.map((entry) => (
                  <li key={entry.id}>
                    <a data-underline="" href={`#${entry.id}`}>
                      {entry.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
