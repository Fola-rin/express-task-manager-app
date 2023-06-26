import express from "express";
import tasks from "./routes/tasks.js";

const app = express();

app.use(express.json());
app.use("/api/v1/tasks", tasks);

app.get("/", (req, res) => {});

const port = 3000;

app.listen(port, () => {
	console.log("Server running on port 3000");
});
