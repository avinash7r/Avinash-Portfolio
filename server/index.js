import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./src/router/contact.router.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Ensure CORS is enabled
app.use("/api", router);

const PORT = process.env.PORT || 7777;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});