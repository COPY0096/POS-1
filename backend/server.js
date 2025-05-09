import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productoRoutes from "./routes/producto.route.js";

dotenv.config();

const app = express();

app.use(express.json());

const PORT= process.env.PORT || 5000;

app.use("/api/productos", productoRoutes);

//console.log(process.env.MONGO_URI);


app.listen(PORT, () => {
    connectDB();
    console.log("Seridor iniciado en http://localhost:" + PORT);
});

