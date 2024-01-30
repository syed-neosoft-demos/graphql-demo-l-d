import cors from "cors";
import express from "express";
import mongoSanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

const security = (app: any) => {
  const whitelist = ["http://localhost:3002", "http://localhost:3000"];
  app.use(
    cors({
      origin: whitelist,
      methods: "GET, POST, PUT, PATCH, DELETE",
    })
  );
  app.use(express.urlencoded({ extended: true, limit: "1024px" }));

  // RATE LIMITER: 300 REQ PER 10 MIN
  const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 300,
    standardHeaders: true,
    legacyHeaders: false,
  });
  app.use(limiter);

  // HTTP SECURITY HEADERS
  // app.use(helmet());

  // DATA SANITIZATION AGAINST NO-SQL QUERY INJECTION
  app.use(mongoSanitize());
};
export default security;
