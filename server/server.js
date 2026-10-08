// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import helmet from "helmet";
// import rateLimit from "express-rate-limit";

// import connectDB from "./config/db.js";
// import contactRoutes from "./routes/contactRoutes.js";

// dotenv.config();

// const app = express();

// const PORT = process.env.PORT || 5000;

// /*
// |--------------------------------------------------------------------------
// | SECURITY
// |--------------------------------------------------------------------------
// */

// app.use(helmet());

// /*
// |--------------------------------------------------------------------------
// | CORS
// |--------------------------------------------------------------------------
// */

// app.use(
//   cors({
//     origin: process.env.CLIENT_URL || "http://localhost:5173",
//     methods: ["GET", "POST"],
//     credentials: true,
//   }),
// );

// /*
// |--------------------------------------------------------------------------
// | BODY PARSER
// |--------------------------------------------------------------------------
// */

// app.use(express.json({ limit: "10kb" }));
// app.use(express.urlencoded({ extended: true }));

// /*
// |--------------------------------------------------------------------------
// | RATE LIMIT
// |--------------------------------------------------------------------------
// */

// const contactLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 20,
//   message: {
//     success: false,
//     message: "Too many requests. Please try again later.",
//   },
// });

// /*
// |--------------------------------------------------------------------------
// | HEALTH CHECK
// |--------------------------------------------------------------------------
// */

// app.get("/api/health", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Dental Clinic API is running",
//   });
// });

// /*
// |--------------------------------------------------------------------------
// | CONTACT ROUTES
// |--------------------------------------------------------------------------
// */

// app.use("/api/contact", contactLimiter, contactRoutes);

// /*
// |--------------------------------------------------------------------------
// | 404
// |--------------------------------------------------------------------------
// */

// app.use((req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "API route not found",
//   });
// });

// /*
// |--------------------------------------------------------------------------
// | GLOBAL ERROR HANDLER
// |--------------------------------------------------------------------------
// */

// app.use((error, req, res, next) => {
//   console.error("Server Error:", error);

//   res.status(error.statusCode || 500).json({
//     success: false,
//     message: error.message || "Internal server error",
//   });
// });

// /*
// |--------------------------------------------------------------------------
// | START SERVER
// |--------------------------------------------------------------------------
// */

// const startServer = async () => {
//   try {
//     await connectDB();

//     app.listen(PORT, () => {
//       console.log(`🚀 Dental Clinic API running on http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error(
//       "❌ Server startup failed because MongoDB could not connect.",
//     );

//     process.exit(1);
//   }
// };

// startServer();

// import "dotenv/config";

// import express from "express";
// import cors from "cors";
// import helmet from "helmet";
// import rateLimit from "express-rate-limit";

// import connectDB from "./config/db.js";
// import contactRoutes from "./routes/contactRoutes.js";

// const app = express();

// const PORT = process.env.PORT || 5000;

// /*
// |--------------------------------------------------------------------------
// | SECURITY
// |--------------------------------------------------------------------------
// */

// app.use(helmet());

// /*
// |--------------------------------------------------------------------------
// | CORS
// |--------------------------------------------------------------------------
// */

// app.use(
//   cors({
//     origin: process.env.CLIENT_URL || "http://localhost:5173",
//     methods: ["GET", "POST"],
//     credentials: true,
//   }),
// );

// /*
// |--------------------------------------------------------------------------
// | BODY PARSER
// |--------------------------------------------------------------------------
// */

// app.use(express.json({ limit: "10kb" }));
// app.use(express.urlencoded({ extended: true }));

// /*
// |--------------------------------------------------------------------------
// | RATE LIMIT
// |--------------------------------------------------------------------------
// */

// const contactLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 20,
//   message: {
//     success: false,
//     message: "Too many requests. Please try again later.",
//   },
// });

// /*
// |--------------------------------------------------------------------------
// | HEALTH CHECK
// |--------------------------------------------------------------------------
// */

// app.get("/api/health", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Dental Clinic API is running",
//   });
// });

// /*
// |--------------------------------------------------------------------------
// | CONTACT ROUTES
// |--------------------------------------------------------------------------
// */

// app.use("/api/contact", contactLimiter, contactRoutes);

// /*
// |--------------------------------------------------------------------------
// | 404
// |--------------------------------------------------------------------------
// */

// app.use((req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "API route not found",
//   });
// });

// /*
// |--------------------------------------------------------------------------
// | GLOBAL ERROR HANDLER
// |--------------------------------------------------------------------------
// */

// app.use((error, req, res, next) => {
//   console.error("Server Error:", error);

//   res.status(error.statusCode || 500).json({
//     success: false,
//     message: error.message || "Internal server error",
//   });
// });

// /*
// |--------------------------------------------------------------------------
// | START SERVER
// |--------------------------------------------------------------------------
// */

// const startServer = async () => {
//   try {
//     await connectDB();

//     app.listen(PORT, () => {
//       console.log(`🚀 Dental Clinic API running on http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error(
//       "❌ Server startup failed because MongoDB could not connect.",
//     );

//     process.exit(1);
//   }
// };

// startServer();

import "dotenv/config";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

const PORT = process.env.PORT || 5000;

/*
|--------------------------------------------------------------------------
| SECURITY
|--------------------------------------------------------------------------
*/

app.use(helmet());

/*
|--------------------------------------------------------------------------
| CORS
|--------------------------------------------------------------------------
*/

const allowedOrigins = [
  "http://localhost:5173",
  "https://thesmilemax.vercel.app",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without an Origin header
      // such as Postman or server-to-server requests.
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.warn(`Blocked CORS origin: ${origin}`);

      return callback(new Error("Not allowed by CORS"));
    },

    methods: ["GET", "POST", "OPTIONS"],

    allowedHeaders: ["Content-Type", "Authorization"],

    credentials: true,
  }),
);

/*
|--------------------------------------------------------------------------
| BODY PARSER
|--------------------------------------------------------------------------
*/

app.use(express.json({ limit: "10kb" }));

app.use(
  express.urlencoded({
    extended: true,
  }),
);

/*
|--------------------------------------------------------------------------
| RATE LIMIT
|--------------------------------------------------------------------------
*/

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,

  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },

  standardHeaders: true,
  legacyHeaders: false,
});

/*
|--------------------------------------------------------------------------
| HEALTH CHECK
|--------------------------------------------------------------------------
*/

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Dental Clinic API is running",
  });
});

/*
|--------------------------------------------------------------------------
| CONTACT ROUTES
|--------------------------------------------------------------------------
*/

app.use("/api/contact", contactLimiter, contactRoutes);

/*
|--------------------------------------------------------------------------
| 404
|--------------------------------------------------------------------------
*/

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

/*
|--------------------------------------------------------------------------
| GLOBAL ERROR HANDLER
|--------------------------------------------------------------------------
*/

app.use((error, req, res, next) => {
  console.error("Server Error:", error);

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Internal server error",
  });
});

/*
|--------------------------------------------------------------------------
| START SERVER
|--------------------------------------------------------------------------
*/

// const startServer = async () => {
//   try {
//     await connectDB();

//     app.listen(PORT, () => {
//       console.log(`🚀 Dental Clinic API running on http://localhost:${PORT}`);

//       console.log("🌐 Allowed CORS origins:", allowedOrigins);
//     });
//   } catch (error) {
//     console.error(
//       "❌ Server startup failed because MongoDB could not connect.",
//     );

//     process.exit(1);
//   }
// };
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Dental Clinic API running on port ${PORT}`);
      console.log("🌐 Allowed CORS origins:", allowedOrigins);
    });
  } catch (error) {
    console.error(
      "❌ Server startup failed because MongoDB could not connect.",
    );

    process.exit(1);
  }
};

startServer();
