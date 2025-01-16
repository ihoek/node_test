const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");

minus.addEventListener("click", () => {
  console.log("마이너스 버튼 실행");
  alert("마이너스 실행중");
});

plus.addEventListener("click", () => {
  console.log("플러스 버튼 실행");
  alert("플러스 실행중");
});
