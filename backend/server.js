import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productoRoutes from "./routes/producto.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/productos", productoRoutes);

//console.log(process.env.MONGO_URI);


app.listen(5000, () => {
    connectDB();
    console.log("Seridor iniciado en http://localhost:5000");
});

