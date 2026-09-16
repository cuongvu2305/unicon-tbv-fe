"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ApiError, submitContactForm } from "@/lib/api";
import type { Dictionary } from "@/i18n/dictionary";

export function ContactForm({ dict }: { dict: Dictionary }) {
  const { form } = dict.contact;

  const contactSchema = useMemo(
    () =>
      z
        .object({
          name: z.string().min(2, form.nameError),
          phone: z
            .string()
            .regex(/^(0|\+84)\d{9,10}$/, form.phoneError)
            .optional()
            .or(z.literal("")),
          email: z.string().email(form.emailError).optional().or(z.literal("")),
          message: z.string().min(10, form.messageError).max(2000),
        })
        .refine((data) => Boolean(data.phone) || Boolean(data.email), {
          message: form.contactMethodError,
          path: ["phone"],
        }),
    [form]
  );

  type ContactFormValues = z.infer<typeof contactSchema>;

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [messageCode, setMessageCode] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const getMessageText = (code: string | null) =>
    (code && dict.messageCodes[code]) || dict.messageCodes.MSG_UNKNOWN;

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");
    setMessageCode(null);
    try {
      const code = await submitContactForm({
        name: values.name,
        phone: values.phone || undefined,
        email: values.email || undefined,
        message: values.message,
      });
      setMessageCode(code);
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setMessageCode(err instanceof ApiError ? err.code : "MSG_UNKNOWN");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-gold-200 bg-gold-50 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-gold-600" />
        <h3 className="text-lg font-bold text-navy-900">{form.successTitle}</h3>
        <p className="text-sm text-navy-600">{getMessageText(messageCode)}</p>
        <Button variant="ghost" onClick={() => setStatus("idle")}>
          {form.sendAnother}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy-800">
          {form.nameLabel} <span className="text-gold-600">*</span>
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="w-full rounded-xl border border-navy-200 px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-200"
          placeholder={form.namePlaceholder}
        />
        {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy-800">
            {form.phoneLabel}
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="w-full rounded-xl border border-navy-200 px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-200"
            placeholder={form.phonePlaceholder}
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-600">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy-800">
            {form.emailLabel}
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full rounded-xl border border-navy-200 px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-200"
            placeholder={form.emailPlaceholder}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-800">
          {form.messageLabel} <span className="text-gold-600">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="w-full resize-none rounded-xl border border-navy-200 px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-200"
          placeholder={form.messagePlaceholder}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-700">
          {getMessageText(messageCode)}
        </p>
      )}

      <Button type="submit" disabled={isSubmitting} className="self-start">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {form.submitLoading}
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {form.submitIdle}
          </>
        )}
      </Button>
    </form>
  );
}
