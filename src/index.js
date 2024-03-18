import cors from "cors";
import express from "express";

import { default as tasks }    from "./routes/tasks.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tasks", tasks);

export default app;