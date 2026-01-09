const fastify = require("fastify");

const server = fastify({ logger: true });

server.get("/health", async () => ({ status: "ok" }));

const start = async () => {
  try {
    const port = process.env.PORT || 3000;
    const host = process.env.HOST || "0.0.0.0";

    await server.listen({ port, host });

    server.log.info(`Server listening on ${host}:${port}`);
  } catch (err) {
    server.log.error(err);

    process.exit(1);
  }
};

const gracefulShutdown = async (signal) => {
  server.log.info(`Received ${signal}. Starting graceful shutdown...`);

  try {
    await server.close();

    server.log.info("Server closed successfully");

    process.exit(0);
  } catch (err) {
    server.log.error("Error during shutdown:", err);

    process.exit(1);
  }
};

module.exports = { server, start, gracefulShutdown };
