const express = require("express"); //express 모듈 세팅
const app = express();
const port = 3000;

// 페이지 로딩 함수
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
