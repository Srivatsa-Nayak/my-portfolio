"use client";
import React, { useState } from "react";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  subject: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

type Status =
  | { type: "idle" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

function validate(formData: typeof defaultFormState) {
  const errors: Partial<Record<keyof typeof defaultFormState, string>> = {};

  if (formData.name.value.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!EMAIL_RE.test(formData.email.value.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (formData.subject.value.trim().length < 2) {
    errors.subject = "Please enter a subject.";
  }
  if (formData.message.value.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validate(formData);
    if (Object.keys(errors).length > 0) {
      setFormData((prev) => ({
        name: { ...prev.name, error: errors.name ?? "" },
        email: { ...prev.email, error: errors.email ?? "" },
        subject: { ...prev.subject, error: errors.subject ?? "" },
        message: { ...prev.message, error: errors.message ?? "" },
      }));
      return;
    }

    setSubmitting(true);
    setStatus({ type: "idle" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.value,
          email: formData.email.value,
          subject: formData.subject.value,
          message: formData.message.value,
          company: honeypot,
        }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          type: "success",
          message: `Thanks ${formData.name.value.trim()}, I'll get back to you soon.`,
        });
        setFormData(defaultFormState);
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error — please check your connection and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="max-w-3xl" onSubmit={handleSubmit} noValidate>
      {/* Honeypot field — hidden from real visitors, only bots fill it in */}
      <input
        type="text"
        name="company"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="strip flex-col md:flex-row">
        <div
          className="strip-band h-2 w-full md:h-auto md:w-3 bg-chart"
          aria-hidden="true"
        />
        <div className="grid flex-1 grid-cols-1 md:grid-cols-2">
          <Field
            label="Name"
            error={formData.name.error}
            className="border-b md:border-r"
            input={
              <input
                type="text"
                placeholder="Ada Lovelace"
                className="strip-input text-lg"
                aria-invalid={!!formData.name.error}
                value={formData.name.value}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    name: { value: e.target.value, error: "" },
                  }))
                }
              />
            }
          />

          <Field
            label="Email"
            error={formData.email.error}
            className="border-b"
            input={
              <input
                type="email"
                placeholder="ada@example.com"
                className="strip-input text-lg"
                aria-invalid={!!formData.email.error}
                value={formData.email.value}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    email: { value: e.target.value, error: "" },
                  }))
                }
              />
            }
          />

          <Field
            label="Subject"
            error={formData.subject.error}
            className="border-b md:col-span-2"
            input={
              <input
                type="text"
                placeholder="Let's work together"
                className="strip-input text-lg"
                aria-invalid={!!formData.subject.error}
                value={formData.subject.value}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    subject: { value: e.target.value, error: "" },
                  }))
                }
              />
            }
          />

          <Field
            label="Message"
            error={formData.message.error}
            className="md:col-span-2"
            input={
              <textarea
                placeholder="Tell me about the role or project..."
                rows={6}
                className="strip-input font-normal text-base resize-y"
                aria-invalid={!!formData.message.error}
                value={formData.message.value}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    message: { value: e.target.value, error: "" },
                  }))
                }
              />
            }
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={submitting} className="btn-primary">
          {submitting ? "Sending..." : "Send message"}
        </button>
        <p className="text-sm text-ink-soft">
          Or email me at <CopyEmailButton />
        </p>
      </div>

      {status.type !== "idle" && (
        <p
          role="status"
          className={`mt-4 border-l-4 bg-sheet px-4 py-3 ${
            status.type === "success"
              ? "border-go text-go"
              : "border-hold text-hold"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
};

const Field = ({
  label,
  error,
  input,
  className,
}: {
  label: string;
  error: string;
  input: React.ReactNode;
  className?: string;
}) => (
  <label
    className={`strip-cell ${error ? "bg-hold/5" : ""} ${className ?? ""}`}
  >
    <span className="strip-label">{label}</span>
    {input}
    {error && <span className="text-sm text-hold">{error}</span>}
  </label>
);
