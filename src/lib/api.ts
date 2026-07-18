import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";
import type { Project, BlogPost, ContactFormValues } from "@/types";

const LATENCY_MS = 350;

function delay<T>(value: T, ms = LATENCY_MS): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export const api = {
  getProjects: (): Promise<Project[]> => delay(projects),

  getProjectById: (id: string): Promise<Project | undefined> =>
    delay(projects.find((p) => p.id === id)),

  getBlogPosts: (): Promise<BlogPost[]> => delay(blogPosts),

  getBlogPostBySlug: (slug: string): Promise<BlogPost | undefined> =>
    delay(blogPosts.find((p) => p.slug === slug)),

  /** Simulates submitting the contact form to a backend. */
  submitContactForm: (values: ContactFormValues): Promise<{ success: true }> =>
    delay(null, 900).then(() => {
      // eslint-disable-next-line no-console
      console.info("Contact form submitted:", values);
      return { success: true as const };
    }),
};
