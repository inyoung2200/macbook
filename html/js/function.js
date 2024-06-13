// 오늘 날짜 시간 구하기
const dateField = document.querySelector(".wrap-header .date");
const timeField = document.querySelector(".wrap-header .time");
const ampmField = document.querySelector(".wrap-header .ampm");

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
const weekName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let nowDate = new Date(); //현재 날짜,시간
let day = weekName[nowDate.getDay()]; //요일
let month = monthNames[nowDate.getMonth()]; //월
let date = nowDate.getDate(); //일
let hours = nowDate.getHours(); //시간
let minutes = nowDate.getMinutes(); //분
var ampm = hours >= 12 ? 'pm' : 'am'; //ampm (12보다 크거나 같다 -> 참-pm 거짓-am)
hours = hours % 12; //13시로 넘어가지않게 표현
hours = hours ? hours : 12; // 0은 12로 표현
minutes = minutes < 10 ? '0' + minutes : minutes; //분이 10 이하면 앞에 0붙여서 표현

todayDate = day + " " + month + " " + date;
dateField.innerHTML = todayDate;

nowTime = hours + " : " + minutes;
timeField.innerHTML = nowTime;

ampmField.innerHTML = ampm;





// 투두 리스트
document.querySelector(".btn-addList").addEventListener("click", addList); //리스트추가
document.querySelector(".btn-deleteList").addEventListener("click", deleteList); //리스트삭제

//리스트추가
function addList() {
  const contents = document.querySelector(".textTodo");
  // console.log(contents);

  if (!contents.value) { //!contents.value : contents.value 가 비어있으면의 뜻
    contents.placeholder = "할 일을 입력해주세요!";
    contents.classList.add("no-value");
    contents.focus();
    return false;
  }

  const li = document.createElement("li");
  const input = document.createElement('input');
  const p = document.createElement('p');
  input.setAttribute('type', 'checkbox'); //setAttribute("속성이름", "속성값") : 속성값지정
  input.setAttribute('class', 'chkbox');
  p.innerHTML = contents.value;
  li.appendChild(input); //appendChild() : li에 input추가
  li.appendChild(p);

  document.querySelector('.list ol').appendChild(li);
  contents.value = ''; //추가 버튼 클릭후 인풋 창에 텍스트 안남기기
  contents.focus();
}

//선택한 리스트삭제
function deleteList() {
  const list = document.querySelector("ol");
  const chkbox = document.querySelectorAll(".list .chkbox");

  for (const i in chkbox) {
    if (chkbox[i].nodeType == 1 && chkbox[i].checked == true) {
      //nodeType : nodeType은 node의 type을 상수로 리턴 (리턴 상수 1은 element(태그)타입일때)
      //checked == true : 체크되어있는지
      //&& : 논리연산자 and - 모두 true
      list.removeChild(chkbox[i].parentNode);
      //parentNode : 부모 노드
    }
  }
}




// 날씨
const API_KEY = "7370e902c059130fc7ef3580a0b2d7df";


function onGeoOk(position) {
  const lat = position.coords.latitude; //latitude : 위도
  const lon = position.coords.longitude; //longitude : 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  // console.log(url);

  fetch(url).then(response => response.json()).then(data => {
    // html에 값 넣기
    const weather = document.querySelector("#weatherApp .weather");
    const city = document.querySelector("#weatherApp .city");
    const locationIcon = document.querySelector('.icon-weather');
    const img = document.createElement('img');

    let Icon = data.weather[0].icon;
    let iconurl = "http://openweathermap.org/img/w/" + Icon + ".png";

    img.setAttribute('src', iconurl);
    locationIcon.appendChild(img);

    city.innerText = data.name;
    weather.innerText = data.weather[0].main;


    //날씨에 따라 배경바꾸기
    const weatherMain = document.querySelector(".weather-main");

    if (data.weather[0].main == "Clear") {
      weatherMain.classList.add("sunny");
    } else if (data.weather[0].main == "Clouds") {
      weatherMain.classList.add("clouds");
    } else if (data.weather[0].main == "Few clouds") {
      weatherMain.classList.add("few_clouds");
    } else if (data.weather[0].main == "Scattered clouds") {
      weatherMain.classList.add("scattered_clouds");
    } else if (data.weather[0].main == "Broken clouds") {
      weatherMain.classList.add("broken_clouds");
    } else if (data.weather[0].main == "Shower rain") {
      weatherMain.classList.add("shower_rain");
    } else if (data.weather[0].main == "Rain") {
      weatherMain.classList.add("rain");
    } else if (data.weather[0].main == "Thunderstom") {
      weatherMain.classList.add("thunderstom");
    } else if (data.weather[0].main == "Snow") {
      weatherMain.classList.add("snow");
    } else if (data.weather[0].main == "Mist") {
      weatherMain.classList.add("mist");
    };


  });
};

function onGeoError() {
  alert("Can't find you.. No weather for you.");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //getCurrentPosition : 유저의 위치를 얻는 함수





// 계산기
const display = document.querySelector("#calculator .display");
const result = document.querySelector("#calculator .result");
const equal = document.querySelector("#calculator .equal");
const AC = document.querySelector("#calculator .ac");

// 계산기에 식 입력받기
// 식 입력 오류 막기(연산자중복입력 막기)
let numberClicked = false; // 전역 변수로 numberClicked를 설정    
function add(char) {
  if (numberClicked == false) { // 만약 이전에 연산자를 입력 했는데,            
    if (isNaN(char) == true) { // 입력 받은 값이 또 다시 연산자면,                
      // 아무것도 하지 않는다.            
    } else { // 연산자가 아니라면!                
      display.value += char; // 식 뒤에 값을 추가한다.            
    }
  } else { // 만약에 이전에 숫자를 입력 했으면,            
    display.value += char; // 식 뒤에 값을 추가한다.        
  } // 다음 입력을 위해 이번 입력에 숫자가 눌렸는지 연산자가 눌렸는지 설정한다.        
  if (isNaN(char) == true) { // "만약 숫자가 아닌게 참이라면" = "연산자를 눌렀다면"            
    numberClicked = false; // numberClicked를 false로 설정한다.        
  } else {
    numberClicked = true; // numberClicked를 true로 설정한다.        
  }
}

// 입력받은 식 계산하기
function calculate() {
  const resultValue = eval(display.value);
  result.value = resultValue;
}
equal.addEventListener("click", calculate);

// AC누르면 초기화
function allClear() {
  display.value = "";
  result.value = "";
}
AC.addEventListener("click", allClear);




// 달력
$(document).ready(function() {
  calendarInit();
});
/*
  달력 렌더링 할 때 필요한 정보 목록 

  현재 월(초기값 : 현재 시간)
  금월 마지막일 날짜와 요일
  전월 마지막일 날짜와 요일
*/

function calendarInit() {

  // 날짜 정보 가져오기
  const date = new Date(); // 현재 날짜(로컬 기준) 가져오기
  const utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000); // uct 표준시 도출
  const kstGap = 9 * 60 * 60 * 1000; // 한국 kst 기준시간 더하기
  const today = new Date(utc + kstGap); // 한국 시간으로 date 객체 만들기(오늘)

  let thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  // 달력에서 표기하는 날짜 객체

  
  let currentYear = thisMonth.getFullYear(); // 달력에서 표기하는 연
  let currentMonth = thisMonth.getMonth(); // 달력에서 표기하는 월
  let currentDate = thisMonth.getDate(); // 달력에서 표기하는 일

  // kst 기준 현재시간
  // console.log(thisMonth);

  // 캘린더 렌더링
  renderCalender(thisMonth);

  function renderCalender(thisMonth) {

      // 렌더링을 위한 데이터 정리
      currentYear = thisMonth.getFullYear();
      currentMonth = thisMonth.getMonth();
      currentDate = thisMonth.getDate();

      // 이전 달의 마지막 날 날짜와 요일 구하기
      let startDay = new Date(currentYear, currentMonth, 0);
      let prevDate = startDay.getDate();
      let prevDay = startDay.getDay();

      // 이번 달의 마지막날 날짜와 요일 구하기
      let endDay = new Date(currentYear, currentMonth + 1, 0);
      let nextDate = endDay.getDate();
      let nextDay = endDay.getDay();

      // console.log(prevDate, prevDay, nextDate, nextDay);

      // 현재 월 표기
      $('.year-month').text(currentYear + '.' + (currentMonth + 1));

      // 렌더링 html 요소 생성
      calendar = document.querySelector('.dates')
      calendar.innerHTML = '';
      
      // 지난달
      for (let i = prevDate - prevDay + 1; i <= prevDate; i++) {
          calendar.innerHTML = calendar.innerHTML + '<div class="day prev disable">' + i + '</div>'
      }
      // 이번달
      for (let i = 1; i <= nextDate; i++) {
          calendar.innerHTML = calendar.innerHTML + '<div class="day current">' + i + '</div>'
      }
      // 다음달
      for (let i = 1; i <= (7 - nextDay == 7 ? 0 : 7 - nextDay); i++) {
          calendar.innerHTML = calendar.innerHTML + '<div class="day next disable">' + i + '</div>'
      }

      // 오늘 날짜 표기
      if (today.getMonth() == currentMonth) {
          todayDate = today.getDate();
          let currentMonthDate = document.querySelectorAll('.dates .current');
          currentMonthDate[todayDate -1].classList.add('today');
      }
  }

  // 이전달로 이동
  $('.go-prev').on('click', function() {
      thisMonth = new Date(currentYear, currentMonth - 1, 1);
      renderCalender(thisMonth);
  });

  // 다음달로 이동
  $('.go-next').on('click', function() {
      thisMonth = new Date(currentYear, currentMonth + 1, 1);
      renderCalender(thisMonth); 
  });
}

// 달력에 이벤트 기록하기
