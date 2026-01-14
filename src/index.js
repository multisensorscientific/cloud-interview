const { server, start, gracefulShutdown } = require("./server");

if (require.main === module) {
  start();

  process.on("SIGINT", () => gracefulShutdown("SIGINT"));
  process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));

  process.on("uncaughtException", (err) => {
    server.log.error("Uncaught exception:", err);

    gracefulShutdown("uncaughtException");
  });

  process.on("unhandledRejection", (reason, promise) => {
    server.log.error("Unhandled rejection at:", promise, "reason:", reason);

    gracefulShutdown("unhandledRejection");
  });
}

module.exports = { server, start };
