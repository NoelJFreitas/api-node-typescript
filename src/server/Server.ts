import express from "express";

const server = express();

server.get("/", (_, res) => {
  return res.send("Ola, dev! server rodando ");
});

export { server };
