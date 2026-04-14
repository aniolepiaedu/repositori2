const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: "https://repositoriofavorito.vercel.app",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
}));

app.options("*", cors());

app.use(express.json());

const apiRoutes = require("./api/main");
app.use("/api", apiRoutes);

app.listen(process.env.PORT || 3000);