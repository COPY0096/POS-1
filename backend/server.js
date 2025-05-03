import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/productos", (req, res) => {
    res.send("El servidor está funcionando");
});

console.log(process.env.MONGO_URI);


app.listen(5000, () => {
    console.log("Seridor iniciado en http://localhost:5000");
});

