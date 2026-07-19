import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, PartyPopper } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useContactForm } from "@/hooks/use-contact-form";
import { cn } from "@/lib/utils";
import type { ContactFormValues } from "@/types";
import { toast } from "sonner";

export const Route = createFileRoute("/_home/contact")({
  component: ContactPage,
});

const INITIAL_VALUES: ContactFormValues = { name: "", email: "", message: "" };

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ContactPage() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Partial<ContactFormValues>>({});
  const mutation = useContactForm();
  const shouldReduceMotion = useReducedMotion();

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
    mutation.mutate(values, {
      onError: () => {
        toast.error("Can't send your message right now", {
          description:
            "Please check the contact info beside this form and reach out to me directly - thank you!",
          duration: 6000,
        });
      },
    });
  }

  return (
    <div className="container relative ">
      {" "}
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-30 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-30 bottom-30 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl" />
      <AnimatePresence mode="wait">
        {mutation.isSuccess ? (
          <motion.div
            key="success"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <motion.div
              initial={shouldReduceMotion ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "backOut", delay: 0.1 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary"
            >
              <PartyPopper size={28} />
            </motion.div>
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-6 text-2xl font-bold"
            >
              Message Sent!
            </motion.h1>
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-2 max-w-sm text-muted-foreground"
            >
              Thank you for reaching out. I'll get back to you as soon as
              possible.
            </motion.p>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Link to="/" className={cn(buttonVariants(), "mt-8")}>
                Back to Home
              </Link>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mb-10 max-w-xl text-center"
            >
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Let's Work Together
              </h1>
              <p className="mt-3 text-muted-foreground">
                Have a project in mind or an opportunity you'd like to discuss?
                I'd be happy to connect.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial={shouldReduceMotion ? "visible" : "hidden"}
              animate="visible"
              className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[1.3fr_1fr]"
            >
              <motion.form
                variants={item}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
              >
                <FormField
                  id="name"
                  label="Name"
                  placeholder="Your name"
                  value={values.name}
                  error={errors.name}
                  onChange={(v) => setValues((prev) => ({ ...prev, name: v }))}
                />

                <FormField
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="you@example.com"
                  value={values.email}
                  error={errors.email}
                  onChange={(v) => setValues((prev) => ({ ...prev, email: v }))}
                />

                <div className="space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Write your message..."
                    value={values.message}
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    aria-invalid={Boolean(errors.message)}
                  />
                  <FieldError
                    message={errors.message}
                    shouldReduceMotion={shouldReduceMotion}
                  />
                </div>

                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  className="inline-block"
                >
                  <Button
                    className={"cursor-pointer"}
                    type="submit"
                    size="lg"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Sending…" : "Send Message"}
                  </Button>
                </motion.div>

                {mutation.isError ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-destructive"
                  >
                    Something went wrong sending your message. Please try again.
                  </motion.p>
                ) : null}
              </motion.form>

              <motion.div
                variants={item}
                className="space-y-5 rounded-xl border border-border bg-card p-6"
              >
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
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  type?: string;
  onChange: (value: string) => void;
}

function FormField({
  id,
  label,
  placeholder,
  value,
  error,
  type = "text",
  onChange,
}: FormFieldProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
      />
      <FieldError message={error} shouldReduceMotion={shouldReduceMotion} />
    </div>
  );
}

function FieldError({
  message,
  shouldReduceMotion,
}: {
  message?: string;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <AnimatePresence mode="wait">
      {message ? (
        <motion.p
          key={message}
          initial={shouldReduceMotion ? false : { opacity: 0, x: 0 }}
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 1, x: [0, -6, 6, -4, 4, 0] }
          }
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs text-destructive"
        >
          {message}
        </motion.p>
      ) : null}
    </AnimatePresence>
  );
}
