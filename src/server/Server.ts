import express from "express"
import { LoadFile } from "./modules/LoadFile";

const app = express();

//* 정적 파일 전송
app.use("/public", express.static("public"));
app.use("/dist", express.static("dist"));
//* 타입스크립트 전송 (디버깅용입니다)
app.use("/src", express.static("src"));

//* idnex Page 전송
app.get("/", (req, res) => {LoadFile("index.html", res);});

app.listen(3000, () => {
  console.log("서버 시작 되었습니다.");
  console.log("http://localhost:3000");
})