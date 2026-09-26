const messages: Record<number, string> = {
  400: "The request could not be processed.",
  404: "The requested content was not found.",
  405: "This request is not allowed.",
  429: "Too many requests. Please try again shortly.",
  500: "The service could not complete the request.",
  503: "The service is temporarily unavailable.",
};

export class APIError extends Error {
  constructor(public readonly status: number | null) {
    super(
      status === null
        ? "The service could not complete the request."
        : (messages[status] ?? "The service returned an unexpected error."),
    );
    this.name = "APIError";
  }
}

export function toAPIError(error: unknown): APIError {
  return error instanceof APIError ? error : new APIError(null);
}
