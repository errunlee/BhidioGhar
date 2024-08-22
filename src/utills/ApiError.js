

class ApiError extends Error {
    constructor(message, status, error, statck) {
        super(message)
        this.status = status;
        this.error = error;

        if (statck) {
            this.stack = statck
        }
        else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}