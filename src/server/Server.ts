import express from "express"
import { LoadFile } from "./modules/LoadFile";
import { SavePostFunc } from "./controllers/SavePostFunc";

const app = express();

//* 정적 파일 전송
app.use("/static", express.static("public"));
app.use("/js", express.static("dist"));

//* idnex Page 전송
app.get("/", (req, res) => {LoadFile("index.html", res)});
app.get("/create", SavePostFunc);


app.listen(3000, () => {
  console.log("서버 시작 되었습니다.");
  console.log("http://localhost:3000");
})