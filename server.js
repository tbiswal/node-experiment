import express from "express";
import morgan from "morgan";
import cors from "cors";
import { readFile } from "fs/promises";

const app = express();
app.use(express.json());

app.use(morgan("tiny"));
app.use(cors());

app.use(express.json());

app.get("/", async (req, res) => {
  const events = JSON.parse(
    await readFile(new URL("event-content.json", import.meta.url))
  );
  res.json(events) 
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
