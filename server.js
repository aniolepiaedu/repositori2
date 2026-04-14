const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: "https://repositoriofavorito.vercel.app",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
};

// ✔ usar MISMO corsOptions en todo
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());

const apiRoutes = require("./api/main");
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
    res.send("Main API Gateway running 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});