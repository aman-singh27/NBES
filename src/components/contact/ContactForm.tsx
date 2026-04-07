"use client";

import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Lock,
} from "lucide-react";
import { FormEvent, useState } from "react";

type ContactFormData = {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  state: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const serviceOptions = [
  "Electrical Works",
  "Earthing Solutions",
  "Security Systems",
  "Technical Manpower",
  "Multiple Services",
  "Not Sure Yet",
] as const;

const initialFormData: ContactFormData = {
  name: "",
  company: "",
  phone: "",
  email: "",
  service: "",
  state: "",
  message: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClassName =
  "w-full h-[52px] rounded-[3px] border border-border px-4 font-body text-[15px] text-charcoal placeholder:font-light placeholder:text-mid-grey transition-colors duration-200 focus:border-accent focus:outline-none";

function getFieldError(
  field: keyof ContactFormData,
  value: string,
): string | undefined {
  const trimmedValue = value.trim();

  if (field === "message") {
    return undefined;
  }

  if (!trimmedValue) {
    return "This field is required.";
  }

  if (field === "email" && !emailRegex.test(trimmedValue)) {
    return "Please enter a valid email address.";
  }

  if (field === "phone") {
    const digitsOnly = trimmedValue.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      return "Phone number must have at least 10 digits.";
    }
  }

  return undefined;
}

function getAllErrors(formData: ContactFormData): ContactFormErrors {
  const nextErrors: ContactFormErrors = {};

  (Object.keys(formData) as Array<keyof ContactFormData>).forEach((field) => {
    const error = getFieldError(field, formData[field]);
    if (error) {
      nextErrors[field] = error;
    }
  });

  return nextErrors;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      const fieldError = getFieldError(field, value);
      setErrors((prev) => {
        if (!fieldError) {
          const { [field]: _removed, ...rest } = prev;
          return rest;
        }
        return { ...prev, [field]: fieldError };
      });
    }
  };

  const handleBlur = (field: keyof ContactFormData) => {
    const fieldError = getFieldError(field, formData[field]);

    setErrors((prev) => {
      if (!fieldError) {
        const { [field]: _removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [field]: fieldError };
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = getAllErrors(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="py-16 text-center">
        <CheckCircle2
          className="mx-auto mb-6 h-16 w-16 text-accent"
          aria-hidden="true"
        />
        <h3 className="font-display text-[28px] font-bold uppercase text-black">
          Message Sent!
        </h3>
        <p className="body-light mt-3">
          Thanks! We&apos;ll review your project details and be in touch within
          24 hours.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-btn border border-border px-5 py-3 font-display text-[13px] font-bold uppercase tracking-[0.06em] text-black transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-5 flex flex-col">
        <label
          htmlFor="name"
          className="mb-[6px] block font-body text-[13px] font-medium text-charcoal"
        >
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={formData.name}
          onChange={(event) => handleChange("name", event.target.value)}
          onBlur={() => handleBlur("name")}
          className={`${fieldClassName} ${errors.name ? "border-[#E24B4A]" : ""}`}
          placeholder="Enter your full name"
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? (
          <p className="mt-1 flex items-center gap-1 text-[12px] text-[#E24B4A]">
            <AlertCircle className="h-3 w-3" aria-hidden="true" />
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="mb-5 flex flex-col">
        <label
          htmlFor="company"
          className="mb-[6px] block font-body text-[13px] font-medium text-charcoal"
        >
          Company Name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={(event) => handleChange("company", event.target.value)}
          onBlur={() => handleBlur("company")}
          className={`${fieldClassName} ${errors.company ? "border-[#E24B4A]" : ""}`}
          placeholder="Enter your company name"
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.company)}
        />
        {errors.company ? (
          <p className="mt-1 flex items-center gap-1 text-[12px] text-[#E24B4A]">
            <AlertCircle className="h-3 w-3" aria-hidden="true" />
            {errors.company}
          </p>
        ) : null}
      </div>

      <div className="mb-5 grid grid-cols-2 gap-4 sm:grid-cols-1">
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="mb-[6px] block font-body text-[13px] font-medium text-charcoal"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
            onBlur={() => handleBlur("phone")}
            className={`${fieldClassName} ${errors.phone ? "border-[#E24B4A]" : ""}`}
            placeholder="+91 00000 00000"
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone ? (
            <p className="mt-1 flex items-center gap-1 text-[12px] text-[#E24B4A]">
              <AlertCircle className="h-3 w-3" aria-hidden="true" />
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-[6px] block font-body text-[13px] font-medium text-charcoal"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={(event) => handleChange("email", event.target.value)}
            onBlur={() => handleBlur("email")}
            className={`${fieldClassName} ${errors.email ? "border-[#E24B4A]" : ""}`}
            placeholder="you@company.com"
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? (
            <p className="mt-1 flex items-center gap-1 text-[12px] text-[#E24B4A]">
              <AlertCircle className="h-3 w-3" aria-hidden="true" />
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mb-5 flex flex-col">
        <label
          htmlFor="service"
          className="mb-[6px] block font-body text-[13px] font-medium text-charcoal"
        >
          Service Needed
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={(event) => handleChange("service", event.target.value)}
            onBlur={() => handleBlur("service")}
            className={`${fieldClassName} appearance-none ${errors.service ? "border-[#E24B4A]" : ""}`}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.service)}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mid-grey"
            aria-hidden="true"
          />
        </div>
        {errors.service ? (
          <p className="mt-1 flex items-center gap-1 text-[12px] text-[#E24B4A]">
            <AlertCircle className="h-3 w-3" aria-hidden="true" />
            {errors.service}
          </p>
        ) : null}
      </div>

      <div className="mb-5 flex flex-col">
        <label
          htmlFor="state"
          className="mb-[6px] block font-body text-[13px] font-medium text-charcoal"
        >
          State / Location
        </label>
        <input
          id="state"
          name="state"
          type="text"
          value={formData.state}
          onChange={(event) => handleChange("state", event.target.value)}
          onBlur={() => handleBlur("state")}
          className={`${fieldClassName} ${errors.state ? "border-[#E24B4A]" : ""}`}
          placeholder="Enter your state or city"
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.state)}
        />
        {errors.state ? (
          <p className="mt-1 flex items-center gap-1 text-[12px] text-[#E24B4A]">
            <AlertCircle className="h-3 w-3" aria-hidden="true" />
            {errors.state}
          </p>
        ) : null}
      </div>

      <div className="mb-5 flex flex-col">
        <label
          htmlFor="message"
          className="mb-[6px] block font-body text-[13px] font-medium text-charcoal"
        >
          Project Description
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(event) => handleChange("message", event.target.value)}
          onBlur={() => handleBlur("message")}
          className={`${fieldClassName} h-[140px] resize-y pt-4`}
          placeholder="Tell us about your project scope, timeline, and goals"
          disabled={isSubmitting}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-btn bg-accent py-[16px] font-display text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors duration-200 hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>

      <p className="mt-3 flex items-center justify-center gap-1 font-body text-[12px] text-mid-grey">
        <Lock className="h-3 w-3" aria-hidden="true" />
        We do not share your information with third parties.
      </p>
    </form>
  );
}
