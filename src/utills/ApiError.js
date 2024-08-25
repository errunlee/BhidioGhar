class ApiError extends Error {
  constructor(message, status, error, stack) {
    super(message);
    this.status = status;
    this.error = error;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
