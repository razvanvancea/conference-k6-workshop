class ErrorHandler {
  constructor(logErrorDetails) {
    this.logErrorDetails = logErrorDetails;
  }
  logError(isError, res, tags = {}) {
    if (!isError) return;
    const traceparentHeader = res.request.headers['Traceparent'];
    const errorData = Object.assign(
      {
        url: res.url,
        status: res.status,
        error_code: res.error_code,
        traceparent: traceparentHeader && traceparentHeader.toString(),
      },
      tags
    );
    this.logErrorDetails(errorData);
  }
}

export const errorHandler = new ErrorHandler((error) => {
  console.error(error);
});
