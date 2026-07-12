"use client";
import React, { useState } from "react";

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
    <form className="font-mono text-sm max-w-xl" onSubmit={handleSubmit} noValidate>
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

      <Field
        label="name"
        error={formData.name.error}
        input={
          <input
            type="text"
            placeholder="Ada Lovelace"
            className={inputClass(!!formData.name.error)}
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
        label="email"
        error={formData.email.error}
        input={
          <input
            type="email"
            placeholder="ada@example.com"
            className={inputClass(!!formData.email.error)}
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
        label="subject"
        error={formData.subject.error}
        input={
          <input
            type="text"
            placeholder="Let's work together"
            className={inputClass(!!formData.subject.error)}
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
        label="message"
        error={formData.message.error}
        input={
          <textarea
            placeholder="Say hello, or tell me about your project..."
            rows={8}
            className={inputClass(!!formData.message.error)}
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

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full sm:w-auto px-4 py-2 rounded border border-neutral-700 bg-neutral-900 text-neutral-300 transition duration-150 hover:border-emerald-500 hover:text-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-neutral-700 disabled:hover:text-neutral-300"
      >
        {submitting ? "$ sending..." : "$ ./send_message.sh"}
      </button>

      {status.type !== "idle" && (
        <div
          role="status"
          className={`mt-4 border-l-2 pl-3 py-1 text-sm ${
            status.type === "success"
              ? "border-emerald-500 text-emerald-400"
              : "border-red-500 text-red-400"
          }`}
        >
          <span className="select-none opacity-70">{"> "}</span>
          {status.message}
          <span className="ml-1 inline-block w-2 translate-y-[1px] animate-cursor-blink bg-current align-middle">
            &nbsp;
          </span>
        </div>
      )}
    </form>
  );
};

const inputClass = (hasError: boolean) =>
  `bg-neutral-900 focus:outline-none focus:ring-1 px-3 py-2 rounded border w-full text-neutral-200 placeholder-neutral-600 transition duration-150 ${
    hasError
      ? "border-red-500 focus:ring-red-500/50 focus:border-red-500"
      : "border-neutral-700 focus:ring-emerald-500/50 focus:border-emerald-500"
  }`;

const Field = ({
  label,
  error,
  input,
}: {
  label: string;
  error: string;
  input: React.ReactNode;
}) => (
  <div className="mt-4 first:mt-0">
    <label className="block mb-1 text-neutral-400">
      <span className="text-emerald-500">$</span> {label}
    </label>
    {input}
    {error && (
      <p className="mt-1 text-xs text-red-400">
        <span className="select-none">✗ </span>
        {error}
      </p>
    )}
  </div>
);
