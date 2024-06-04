import express from "express"
import { LoadFile } from "./modules/LoadFile";

const app = express();

app.get("/", (req, res) => {LoadFile("index.html", res)});

app.listen(3000, () => {
  console.log("서버 시작 되었습니다.");
  console.log("http://localhost:3000");
})