import express from "express"
import bodyParser from "body-parser";
import { LoadFile } from "./modules/LoadFile";
import { SavePostFunc } from "./controllers/SavePostFunc";
import { SearchFunc } from "./controllers/SearchFunc";
import { UserInfoFunc } from "./controllers/UserInfoFunc";

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//* 정적 파일 전송
app.use("/public", express.static("public"));

//* 타입스크립트 전송 (디버깅용입니다)
app.use("/src", express.static("src"));
app.use("/dist", express.static("dist"));

//* idnex Page 전송
app.get("/", (req, res) => {LoadFile("index.html", res);});
app.post("/create",SavePostFunc);
app.post("/search", SearchFunc);
app.post("/userinfo",UserInfoFunc);

app.listen(3000, () => {
  console.log("서버 시작 되었습니다.");
  console.log("http://localhost:3000");
})