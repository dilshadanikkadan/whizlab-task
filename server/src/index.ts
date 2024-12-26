import express, { Application } from "express";
import cors from 'cors'

const app: Application = express();

const corsOptions = {
  origin: ["http://localhost:5173","https://basis-ai-task.vercel.app"],

  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(express.json());
app.use(cors(corsOptions));


export default app;