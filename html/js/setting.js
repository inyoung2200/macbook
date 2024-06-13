//배경화면 변경하기
const aaa = document.querySelectorAll(".setting .backgroung ul li img");

aaa.forEach((currentElement, index, array) => {
  currentElement.addEventListener("click", (e) => {
    array.forEach((el) => el.classList.remove("select"));
    const currentEl = e.target;
    e.target.classList.add("select");
    console.log(currentEl);

    appWrap.style.backgroundImage = "url(" + currentEl.src + ")";
  });
});

// aaa.addEventListener("click", e => {
//   var ele = e.currentTarget;
//   console.log(ele);
// })

// 사진 업로드
const uploadButton = document.querySelector(
  ".setting .backgroung .upload .btn-upload"
);

// file input 커스텀
$(".uploadImage").on("change", function () {
  var fileName = $(".uploadImage").val();
  $(".upload-name").val(fileName);
});

// 업로드 -> 버튼클릭하면 -> 이미지 추가
uploadButton.addEventListener("click", () => {
  let selectFile = document.querySelector(
    ".setting .backgroung .upload .uploadImage"
  ).files[0];
  const file = URL.createObjectURL(selectFile);

  const li = document.createElement("li");
  const img = document.createElement("img");
  li.appendChild(img);
  img.setAttribute("src", ""); //setAttribute("속성이름", "속성값") : 속성값지정

  document.querySelector(".backgroung ul").appendChild(li);
  document.querySelector(".setting .backgroung ul li:last-child img").src =
    file;
  // console.log(file);
});
