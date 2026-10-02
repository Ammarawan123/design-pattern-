const createHttpRequestBuilder = (url) => {
  const config = {
    url,
    method: "GET",
    headers: {},
    timeout: 30,
    retries: 3,
    authToken: null,
  };

  const builder = {
    setMethod: (method) => {
      config.method = method;
      return builder;
    },
    setHeader: (key, value) => {
      config.headers[key] = value;
      return builder;
    },
    setTimeout: (seconds) => {
      config.timeout = seconds;
      return builder;
    },
    setAuthToken: (token) => {
      config.authToken = token;
      return builder;
    },
    build: () => {
      if (config.timeout <= 0) {
        throw new Error("Timeout must be positive");
      }
      return Object.freeze({ ...config, headers: Object.freeze({ ...config.headers }) });
    },
  };

  return builder;
};

// Usage:
const req = createHttpRequestBuilder("https://api.example.com/users")
  .setMethod("POST")
  .setHeader("Content-Type", "application/json")
  .setTimeout(60)
  .setAuthToken("abc123")
  .build();

console.log(req);