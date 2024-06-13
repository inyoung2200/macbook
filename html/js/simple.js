// 제이쿼리 UI
// $(window).resize(function () {
// if (window.innerWidth > 1023) { // 다바이스 크기가 1024이상일때
// 제이쿼리 UI : 대시보드 드래그 이동
$(function () {
  $(".dashboard").draggable({
    scroll: false,
    containment: ".wrap-main",
    handle: ".dashboard-header",
  });
  $(".setting").draggable({
    scroll: false,
    containment: ".wrap-main",
    handle: ".setting-header",
  });
  $("#todoList").draggable({
    scroll: false,
    containment: ".wrap-main",
    handle: ".todo-header",
  });
  $("#weatherApp").draggable({
    scroll: false,
    containment: ".wrap-main",
    handle: ".weather-header",
  });
  $("#calculator").draggable({
    scroll: false,
    containment: ".wrap-main",
    handle: ".calculator-header",
  });
  $("#calendar").draggable({
    scroll: false,
    containment: ".wrap-main",
    handle: ".calendar-header",
  });
});

$("#sortable").disableSelection(); //핸들영역에서 글씨 드래그방지

// 제이쿼리 UI : 대시보드 크기조절
$(function () {
  $(".dashboard").resizable({
    animate: true,
    maxWidth: 1450,
    maxHeight: 800,
    minWidth: 916,
    minHeight: 175,
  });
  $(".setting").resizable({
    animate: true,
    maxWidth: 1000,
    maxHeight: 800,
    minWidth: 250,
    minHeight: 175,
  });
  $("#todoList").resizable({
    animate: true,
    // maxWidth: 930,
    // maxHeight: 630,
    minWidth: 668,
    minHeight: 400,
  });
  $("#weatherApp").resizable({
    animate: true,
    minWidth: 331,
    minHeight: 300,
  });
  $("#calculator").resizable({
    animate: true,
    minWidth: 300,
    minHeight: 599,
    maxWidth: 400,
    maxHeight: 599,
  });
  $("#calendar").resizable({
    animate: true,
    minWidth: 695,
    minHeight: 695,
  });
});

// } else {
//   // 제이쿼리 UI : 대시보드 드래그 이동
//   $(function () {
//     $(".dashboard").draggable("disable");
//     $(".setting").draggable("disable");
//     $("#todoList").draggable("disable");
//     $("#weatherApp").draggable("disable");
//     $("#calculator").draggable("disable");
//     $("#calendar").draggable("disable");
//   });

//   // 제이쿼리 UI : 대시보드 크기조절
//   $(function () {
//     $(".dashboard").resizable("disable");
//     $(".setting").resizable("disable");
//     $("#todoList").draggable("disable");
//     $("#weatherApp").draggable("disable");
//     $("#calculator").draggable("disable");
//     $("#calendar").draggable("disable");
//   });
// }

// }).resize();

// 창 열고 닫기
// 대시보드 창닫기
const dashboardCloseBtn = document.querySelector(".dashboard-header .btn.red");

function dashboardCloseBtnEvent() {
  dashboard.classList.add("closeScreenAction");
  dashboard.classList.remove("openScreenAction");
}

dashboardCloseBtn.addEventListener("click", dashboardCloseBtnEvent);

// 셋팅 창닫기
const setting = document.querySelector(".setting");
const settingCloseBtn = document.querySelector(".setting-header .btn.red");

function settingCloseBtnEvent() {
  setting.classList.add("closeScreenAction");
  setting.classList.remove("openScreenAction");
}

settingCloseBtn.addEventListener("click", settingCloseBtnEvent);

// 투두리스트 창닫기
const todoList = document.querySelector("#todoList");
const todoListCloseBtn = document.querySelector(".todo-header .btn.red");

function todoListCloseBtnEvent() {
  todoList.classList.add("closeScreenAction");
  todoList.classList.remove("openScreenAction");
}

todoListCloseBtn.addEventListener("click", todoListCloseBtnEvent);

// 날씨 창닫기
const weather = document.querySelector("#weatherApp");
const weatherCloseBtn = document.querySelector(".weather-header .btn.red");

function weatherCloseBtnEvent() {
  weather.classList.add("closeScreenAction");
  weather.classList.remove("openScreenAction");
}

weatherCloseBtn.addEventListener("click", weatherCloseBtnEvent);

// 계산기 창닫기
const calculator = document.querySelector("#calculator");
const calculatorCloseBtn = document.querySelector(
  ".calculator-header .btn.red"
);

function calculatorCloseBtnEvent() {
  calculator.classList.add("closeScreenAction");
  calculator.classList.remove("openScreenAction");
}

calculatorCloseBtn.addEventListener("click", calculatorCloseBtnEvent);

// 달력 창닫기
const calendarW = document.querySelector("#calendar");
const calendarCloseBtn = document.querySelector(".calendar-header .btn.red");

function calendarCloseBtnEvent() {
  calendarW.classList.add("closeScreenAction");
  calendarW.classList.remove("openScreenAction");
}

calendarCloseBtn.addEventListener("click", calendarCloseBtnEvent);

// 모바일메뉴 창닫기
const moblieMenu = document.querySelector("#mobile-menu");
const moblieMenuCloseBtn = document.querySelector(
  ".mobile-menu-header .btn.red"
);

function moblieMenuCloseBtnEvent() {
  moblieMenu.classList.add("closeScreenAction");
  moblieMenu.classList.remove("openScreenAction");
}

moblieMenuCloseBtn.addEventListener("click", moblieMenuCloseBtnEvent);

// 푸터 메뉴 클릭 이벤트
const settingsIcon = document.querySelector(
  ".wrap-footer ul li a.ico-settings"
);
const favoritesIcon = document.querySelector(
  ".wrap-footer ul li a.ico-favorites"
);
const todoListIcon = document.querySelector(".wrap-footer ul li a.ico-todo");
const weatherIcon = document.querySelector(".wrap-footer ul li a.ico-weather");
const calculatorIcon = document.querySelector(
  ".wrap-footer ul li a.ico-calculator"
);
const calendarIcon = document.querySelector(
  ".wrap-footer ul li a.ico-calender"
);
const moblieMenuIcon = document.querySelector(".wrap-footer ul li a.ico-munu");

function favoritesOpenScreenEvent() {
  dashboard.classList.add("openScreenAction");
  dashboard.classList.remove("closeScreenAction");
}

function settingsOpenScreenEvent() {
  setting.classList.add("openScreenAction");
  setting.classList.remove("closeScreenAction");
}

function todoListOpenScreenEvent() {
  todoList.classList.add("openScreenAction");
  todoList.classList.remove("closeScreenAction");
}

function weatherOpenScreenEvent() {
  weather.classList.add("openScreenAction");
  weather.classList.remove("closeScreenAction");
}

function calculatorOpenScreenEvent() {
  calculator.classList.add("openScreenAction");
  calculator.classList.remove("closeScreenAction");
}

function calendarOpenScreenEvent() {
  calendarW.classList.add("openScreenAction");
  calendarW.classList.remove("closeScreenAction");
}

function moblieMenuScreenEvent() {
  moblieMenu.classList.add("openScreenAction");
  moblieMenu.classList.remove("closeScreenAction");
}

favoritesIcon.addEventListener("click", favoritesOpenScreenEvent);
settingsIcon.addEventListener("click", settingsOpenScreenEvent);
todoListIcon.addEventListener("click", todoListOpenScreenEvent);
weatherIcon.addEventListener("click", weatherOpenScreenEvent);
calculatorIcon.addEventListener("click", calculatorOpenScreenEvent);
calendarIcon.addEventListener("click", calendarOpenScreenEvent);
moblieMenuIcon.addEventListener("click", moblieMenuScreenEvent);

const appWrap = document.querySelector(".wrap");

// header 메뉴 클릭효과
const headerMenu = document.querySelectorAll(".dashboard-header .menu ul li a");
const acHeaderMenu = document.querySelector(
  ".dashboard-header .menu ul li:nth-child(1) a"
);
let currentMenu;

const headerMenuBtnAction = (e) => {
  e.preventDefault();
  acHeaderMenu.classList.remove("active");

  if (currentMenu) {
    currentMenu.classList.remove("active");
  }
  e.target.classList.add("active");
  currentMenu = e.target;
};

headerMenu.forEach((items) => {
  items.addEventListener("click", headerMenuBtnAction);
});

// dashboard-header searchbox 클릭효과
const searchField = document.querySelector(
  ".dashboard-header .searchbox .search-input"
);
const searchBtn = document.querySelector(
  ".dashboard-header .searchbox .search-btn"
);
const headerWrap = document.querySelector(".dashboard-header");
const mainCont = document.querySelector("main .main-cont");
const mainContTit = document.querySelector(
  "main .main-cont .main-titheader .tit"
);

searchField.onfocus = function () {
  headerWrap.classList.add("serchFocus");
};

searchField.onblur = function () {
  if (searchField.value) {
    mainCont.classList.add("search-screen");
    mainContTit.innerText = "Search Results";
  } else {
    mainCont.classList.remove("search-screen");
    mainContTit.innerText = "All Apps";
    headerWrap.classList.remove("serchFocus");
  }
};

// nav 메뉴 클릭효과
// 탭에 필요한 리스트 아이템
const TAB_LI = document.querySelectorAll("nav ul li");
let currentTab; // 클릭이벤트가 전달된 엘리먼트

const tabAction = (e) => {
  //화살표함수
  e.preventDefault();

  if (currentTab) {
    currentTab.classList.remove("active");
  }
  e.currentTarget.classList.add("active");
  currentTab = e.currentTarget;
};

TAB_LI.forEach((items) => {
  items.addEventListener("click", tabAction);
});

// 로그인 & 로그아웃
const login = document.querySelector("#login");
const loginText = document.querySelector("#login .login-text");
const loginBtn = document.querySelector("#login .login-btn");
const logoutBtn = document.querySelector(
  ".dashboard-header .login-info .logout"
);
const userNameField = document.querySelector(
  ".dashboard-header .login-info .username"
);
const dashboard = document.querySelector(".dashboard");

// dashboard-header 로그아웃 버튼 클릭 이벤트
function logoutEvent() {
  login.classList.remove("displayNone");
  appWrap.classList.add("displayNone");
}

logoutBtn.addEventListener("click", logoutEvent);

// 로그인 버튼 클릭 이벤트(페이지전환)
function loginEvent(e) {
  e.preventDefault();

  if (loginText.value) {
    login.classList.add("displayNone");
    appWrap.classList.remove("displayNone");
  } else {
    loginText.placeholder = "Please enter your name!";
    loginText.classList.add("no-value");
  }
}

loginBtn.addEventListener("click", loginEvent);

// input 텍스트 대시보드에 출력하기
function printName() {
  let userName = loginText.value;
  userNameField.innerText = userName;
}

// 클릭한 창 맨위로오게 하기

// 설정창-화면모드 변경하기

const lightModeBtn = document.querySelector(
  ".setting-main .container .mode .light .img"
);
const darkModeBtn = document.querySelector(
  ".setting-main .container .mode .dark .img"
);

function changeLightMode() {
  appWrap.classList.add("light-mode");
  appWrap.classList.remove("dark-mode");
  lightModeBtn.classList.add("select");
  darkModeBtn.classList.remove("select");
}

function changeDarkMode() {
  appWrap.classList.add("dark-mode");
  appWrap.classList.remove("light-mode");
  darkModeBtn.classList.add("select");
  lightModeBtn.classList.remove("select");
}

lightModeBtn.addEventListener("click", changeLightMode);
darkModeBtn.addEventListener("click", changeDarkMode);

// 투두리스트
// 폴더 펼치고 닫기
$(document).ready(function () {
  $(".my-list .title").on("click", function () {
    $(".my-list .title").toggleClass("open");
    $(".my-list ul").toggleClass("open");
  });
});

// 선택한 마이리스트에 active 효과
const myList = document.querySelectorAll(".my-list ul li");
let currentMyList;

const myListActive = (e) => {
  e.preventDefault();
  document.querySelector(".my-list ul li.bookmark").classList.remove("active");

  if (currentMyList) {
    currentMyList.classList.remove("active");
  }
  e.target.classList.add("active");
  currentMyList = e.target;
};

myList.forEach((items) => {
  items.addEventListener("click", myListActive);
});
