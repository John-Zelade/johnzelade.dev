import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api";
import type { ContactFormValues } from "@/types";

export function useContactForm() {
  return useMutation({
    mutationFn: (values: ContactFormValues) => api.submitContactForm(values),
  });
}
