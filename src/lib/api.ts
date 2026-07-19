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

  submitContactForm: async (
    values: ContactFormValues,
  ): Promise<{ success: true }> => {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_KEY,
        subject: `Portfolio contact from ${values.name}`,
        from_name: values.name,
        email: values.email,
        message: values.message,
      }),
    });

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message ?? "Failed to send message");
    }

    return { success: true };
  },
};
