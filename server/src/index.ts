import express, { Application } from "express";
import cors from "cors";
import inventroyRoutes from "./apps/inventory/api/routes";
import { errorHandler } from "./lib/exception/global.error";

const app: Application = express();

const corsOptions = {
  origin: ["http://localhost:5173", "https://whizlab-task.vercel.app"],

  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
 
app.use(express.json());
app.use(cors(corsOptions));

app.use('/inventory',inventroyRoutes)

app.get('/',(_,res)=>{
  res.send('server is on!!!')
})

app.use(errorHandler)

export default app;
