import express from "express";
import { routeImc } from "./routes/imc.js";
const app = express()
app.use(express.json());
app.use(routeImc)

app.listen(1234, () =>
console.log("servidor está rodandoooo...")
) 