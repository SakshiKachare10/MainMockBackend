const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");

require("dotenv").config();

const app = express();
app.use(express.json());

connectDB();

app.use("/api", authRoutes);
app.use("/api", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(Server running on port ${PORT}));