import * as http from "http"


http.createServer((req, res) => {




}).listen(8080, () => {
  console.log("서버가 시작되었다");
  console.log("http://localhost:8080");
})