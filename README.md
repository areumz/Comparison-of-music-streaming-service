# :pushpin: 음원 스트리밍 서비스 비교
>국내, 외 다양한 음원 스트리밍 서비스를 한 눈에 비교해보는 웹페이지입니다

>https://irrpl-ar.github.io/Comparison-of-music-streaming-service/

</br>

## 1. 제작 기간 & 참여 인원
- 2021년 11월 16일 ~ ing
- 개인 프로젝트

</br>

## 2. 사용 기술
#### `Front-end`
  - Javascript
  - HTML/CSS

</br>

## 3. 핵심 기능

<details>
<summary><b>핵심 기능 설명 펼치기</b></summary>
<div markdown="1">

### 인삿말
- 접속 시 현재 시간대를 기준하여 아침 / 오후 / 저녁이 바뀌며 인삿말이 나오도록 구현했습니다

### 반응형 웹페이지
- 부트스트랩 그리드 시스템을 활용하여 레이아웃을 잡았습니다
- 모바일 퍼스트로 작업하였고, 모바일 / 태블릿 / 데스크탑에서 반응하는 웹 페이지를 구현했습니다

### 그 외 HTML & CSS
- HTML 마크업 시 최대한 시맨틱한 마크업이 되도록 신경을 썼고,
CSS 작업이나 유지 보수에 용이하도록 class명을 일관되게 주고자 노력했습니다

</div>
</details>

</br>

## 4. 디버깅

### 4-1. 각종 디버깅
<details>
<summary>화살표 함수 내 if문</summary>
<div markdown="1">

좋은, 입니다 만 미리 만들어 두고 시간대별로 중간에 다른 문구가 들어가도록 구현하려함
기왕이면 ES6 문법을 사용하고싶어서 화살표 함수로 조건문을 만들었을 때
시간대에 상관 없이 else 부분만 출력됨 (아래 코드)
```
const date = new Date();
const hours = date.getHours();

const greeting = () => {
if  (hours > 6 && hours < 12) {
    times.innerText = `아침`;
}
else if (hours > 12 && hours < 17) {
    times.innerText = `오후`;
 }
 else if (hours > 17 && hours < 21) {
    times.innerText = `저녁`;
}
    else {
    times.innerText = `밤`;
    }
}
```
const를 let으로 바꿔도 보고, && 연산자가 문제인가 바꿔도 보고 return을 적어도 봤지만
다 아니었음.
hours는 콘솔로 찍어봤을 때 정상적인 값이 나옴

```
function greeting() {
     if  (hours > 6 && hours <= 12) {
         return times.innerText = `아침`;
     }
    else if (hours > 12 && hours <= 17) {
         return times.innerText = `오후`;
     }
     else if (hours > 17 && hours < 21) {
         return times.innerText = `저녁`;
     }
     else return times.innerText = `밤`;
 }
```
이렇게 기존 함수 형태로 바꿨을 때는 무리 없이 잘 작동됨
화살표 함수로는 if 문을 못 쓰는건지 구글링 해봤을 때 만족할만한 답을 얻지 못함

```
let greetings = () => {
    if (hours > 6 && hours <= 12) {
        times.innerText = `아침`;
    }
    else if (hours > 12  && hours <= 17) {
        times.innerText = `오후`;
    }
    else if (hours > 17 && hours < 21) {
        times.innerText = `저녁`;
    }
    else {
        times.innerText = `밤`;
    }
}
```
이렇게 고치니 작동함.
위에 hours라는 변수를 이미 선언했는데, 함수 내에 매개변수로 같은 이름을 전달하니
충돌이 일어난듯 함

</div>
</details>
    
</br>

<details>
<summary>quotes(랜덤 명언).js 파일이 화면에 안 나타남</summary>
<div markdown="1">

id가 quote인 div 의 span을 가져올 때
document.getElementsbyId(“quote span:first-child”)로 가져오니 화면에 안 나타남

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

위와 같이 수정하니 작동함
</div>
</details>
    
</br>

<details>
<summary>.classlist.add 로 여러개 클래스 추가시 잘 안되는 문제</summary>
<div markdown="1">

000.classlist.add(“class1 class2”); 공백으로 구분하니 적용 안됨
000.classlist.add(“class1”, “class2”); 로 해결

</div>
</details>
    
</br>

<details>
<summary>D-day가 화면에 출력 안 되는 문제</summary>
<div markdown="1">

const dday = document.querySelector("#xmasdday span:first-child");
const hms = document.querySelector("#xmasdday span:last-child");

▼기존 코드
function ddayCounter() {
    const dday = new Date("Dec 25,2021,00:00:00").getTime();

▼수정한 코드
function ddayCounter() {
    const xmas = new Date("2021-12-25T00:00:00+0900");
    const now = new Date();
    const distance = xmas.getTime() - now.getTime();

날짜 표시 방식을 수정하고 getTime을 밑으로 내리니 해결이 됨.
이 부분에 대해서는 왜 그런지 더 고민해봐야할듯함.

</div>
</details>
    
</br>

<details>
<summary>dday라는 변수가 두 개 있어서 생긴 문제</summary>
<div markdown="1">

HTML의 span 요소를 가져오는 변수와 함수 내 변수명이 동일해서 작동이 잘 안됨.
ddayCounter 함수 안의 변수 xmas 로 변수명 바꿔주니 해결됨

</div>
</details>
    
</br>

<details>
<summary>dday counter가 제대로 안되는 문제</summary>
<div markdown="1">

    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
여기에 1000 부분을 10000으로 해서 날짜가 이상하게 나옴
console.log(xmas, now, distance) 로 찍어보고 이상한 부분 발견함

</div>
</details>
    
</br>

<details>
<summary>padStart 적용 문제</summary>
<div markdown="1">

const hours = String(Math.floor((distance % (1000*60*60*24))/(1000*60*60))).padStart(2, "0");

괄호를 잘못 사용해서 문제가 생겼음. String 적용은 Math부터 *60까지의 숫자에만 해야하는데, padStart까지 적용시켜서 제대로 작동 안함. 괄호 수정 후 제대로 작동함

</div>
</details>
    
</br>

<details>
<summary>todo list가 나타나지 않는 문제</summary>
<div markdown="1">

맨 처음 to do list를 만들 때는 form을 썼다가, 이번에는 입력폼에 css 애니메이션이 들어가서 div로 묶었었다. 그러니까 설치한 submit 이벤트가 전혀 안먹힘.
form으로 바꾸니 해결

</div>
</details>
    
</br>


## 5. 회고 / 느낀점
>완료되면 적기

