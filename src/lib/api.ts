export interface ContactPayload {
  name: string;
  phone?: string;
  email?: string;
  message: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";

/** Thrown with the raw message CODE from the backend (e.g. "MSG004"), not
 * display text — callers convert it via `getMessageText` from
 * `@/lib/messageCodes` at the point where it's actually rendered. */
export class ApiError extends Error {
  status: number;
  code: string;

  constructor(code: string, status: number) {
    super(code);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
  }
}

interface CodeResponseBody {
  code?: string;
}

/** Returns the success message code from the backend (e.g. "MSG001"). */
export async function submitContactForm(payload: ContactPayload): Promise<string> {
  const res = await fetch(`${API_BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let body: CodeResponseBody = {};
  try {
    body = await res.json();
  } catch {
    // ignore body parse failure, code stays undefined -> falls back below
  }

  if (!res.ok) {
    throw new ApiError(body.code ?? "MSG_UNKNOWN", res.status);
  }

  return body.code ?? "MSG001";
}
