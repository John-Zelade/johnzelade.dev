import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "getting-started-with-tanstack-query",
    title: "Getting Started with TanStack",
    excerpt:
      "Learn the core concepts of TanStack and how it simplifies data fetching in React.",
    content: [
      "TanStack is a powerful data-fetching library for React that manages server state so you don't have to hand-roll loading, error, and caching logic.",
      "Instead of storing fetched data in useState and refetching manually, you describe queries declaratively and let the library handle caching, background refetching, and stale data.",
      "Why TanStack: automatic caching and background updates, out-of-the-box pagination and infinite scrolling, mutations made easy, and great devtools.",
    ],
    tag: "TanStack",
    coverImage: "tanstack-query",
    publishedAt: "2024-05-12",
    readMinutes: 5,
  },
  {
    id: "2",
    slug: "building-a-dark-mode-with-tailwind-css",
    title: "Building a Dark Mode with Tailwind CSS",
    excerpt:
      "A simple approach to implement dark mode in your React applications.",
    content: [
      "Tailwind's class-based dark mode strategy toggles a `dark` class on the root element and lets utility classes like `dark:bg-black` respond automatically.",
      "Persisting the user's preference in localStorage, and falling back to the OS-level `prefers-color-scheme`, gives a dark mode that feels native.",
    ],
    tag: "Tailwind CSS",
    coverImage: "dark-mode",
    publishedAt: "2024-04-28",
    readMinutes: 4,
  },
  {
    id: "3",
    slug: "optimizing-performance-in-react-apps",
    title: "Optimizing Performance in React Apps",
    excerpt: "Tips and techniques to make your React apps faster and smoother.",
    content: [
      "Start by measuring with React DevTools Profiler before optimizing — most performance issues come from a handful of components re-rendering too often.",
      "Memoization (`useMemo`, `useCallback`, `React.memo`), code-splitting with `React.lazy`, and virtualization for long lists are the highest-leverage tools.",
    ],
    tag: "React",
    coverImage: "performance",
    publishedAt: "2024-04-15",
    readMinutes: 6,
  },
  {
    id: "4",
    slug: "understanding-react-server-components",
    title: "Understanding React Server Components",
    excerpt:
      "A look at how server components change the way we build React apps.",
    content: [
      "Server Components render on the server and send serialized output to the client, avoiding shipping component code to the browser.",
      "They pair well with Client Components for interactivity, letting you choose the right execution environment per component.",
    ],
    tag: "React",
    coverImage: "server-components",
    publishedAt: "2024-03-30",
    readMinutes: 7,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
