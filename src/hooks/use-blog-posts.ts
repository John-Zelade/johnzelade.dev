import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export const blogKeys = {
  all: ["blog-posts"] as const,
  detail: (slug: string) => ["blog-posts", slug] as const,
};

export function useBlogPosts() {
  return useQuery({
    queryKey: blogKeys.all,
    queryFn: api.getBlogPosts,
    staleTime: 5 * 60 * 1000,
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: blogKeys.detail(slug),
    queryFn: () => api.getBlogPostBySlug(slug),
    staleTime: 5 * 60 * 1000,
    enabled: Boolean(slug),
  });
}
