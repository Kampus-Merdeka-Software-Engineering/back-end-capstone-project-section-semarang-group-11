import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contact.js";
import promoRoutes from "./routes/promo.js";
import loginRoutes from "./routes/login.js";

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", [contactRoutes, promoRoutes, loginRoutes]);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
