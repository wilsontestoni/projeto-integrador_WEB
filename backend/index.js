import express from "express";
import cors from "cors";
import userRoute from "./src/routes/user.js";
import coursesRoute from "./src/routes/courses.js"

import path from 'path';
import { fileURLToPath } from 'url';

const port = 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors())
app.use(express.json());

app.use('/home', express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'src/images')));

app.use("/", userRoute);
app.use("/cursos", coursesRoute);

app.listen(port, console.log(`Servidor rodando na porta ${port}`));
