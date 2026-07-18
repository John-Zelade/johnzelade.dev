import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, PartyPopper } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useContactForm } from "@/hooks/use-contact-form";
import { cn } from "@/lib/utils";
import type { ContactFormValues } from "@/types";

export const Route = createFileRoute("/_home/contact")({
  component: ContactPage,
});

const INITIAL_VALUES: ContactFormValues = { name: "", email: "", message: "" };

export function ContactPage() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Partial<ContactFormValues>>({});
  const mutation = useContactForm();

  function validate(v: ContactFormValues) {
    const next: Partial<ContactFormValues> = {};
    if (!v.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(v.email))
      next.email = "Please enter a valid email.";
    if (!v.message.trim()) next.message = "Please write a message.";
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    mutation.mutate(values);
  }

  if (mutation.isSuccess) {
    return (
      <div className="container flex flex-col items-center justify-center py-24 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <PartyPopper size={28} />
        </div>
        <h1 className="mt-6 text-2xl font-bold">Message Sent!</h1>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
        <Link to="/" className={cn(buttonVariants(), "mt-8")}>
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="mx-auto mb-10 max-w-xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Let's Work Together
        </h1>
        <p className="mt-3 text-muted-foreground">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[1.3fr_1fr]">
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={values.name}
              onChange={(e) =>
                setValues((v) => ({ ...v, name: e.target.value }))
              }
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name ? (
              <p className="text-xs text-destructive">{errors.name}</p>
            ) : null}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={(e) =>
                setValues((v) => ({ ...v, email: e.target.value }))
              }
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email ? (
              <p className="text-xs text-destructive">{errors.email}</p>
            ) : null}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Write your message..."
              value={values.message}
              onChange={(e) =>
                setValues((v) => ({ ...v, message: e.target.value }))
              }
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message ? (
              <p className="text-xs text-destructive">{errors.message}</p>
            ) : null}
          </div>

          <Button type="submit" size="lg" disabled={mutation.isPending}>
            {mutation.isPending ? "Sending…" : "Send Message"}
          </Button>

          {mutation.isError ? (
            <p className="text-sm text-destructive">
              Something went wrong sending your message. Please try again.
            </p>
          ) : null}
        </form>

        <div className="space-y-5 rounded-xl border border-border bg-card p-6">
          <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Get in Touch
          </h2>
          <div className="flex items-center gap-3 text-sm">
            <Mail size={16} className="text-primary" />
            johnzeladehigo@gmail.com
          </div>
          <div className="flex items-center gap-3 text-sm">
            <MapPin size={16} className="text-primary" />
            Quezon City, Philippines
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Linkedin size={16} className="text-primary" />
            linkedin.com/in/john-zelade-higo/
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Github size={16} className="text-primary" />
            github.com/John-Zelade
          </div>
        </div>
      </div>
    </div>
  );
}
