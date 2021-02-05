var score = 0;
const state=document.getElementById("state");
const answer=document.getElementById("answer");
const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const option3=document.getElementById("option3");
const option4=document.getElementById("option4");
const button=document.getElementById("button");

var staticGK=[
  {state:"Tamil Nadu",
  capital:"Chennai"
  },
  {
    state:"Andhra Pradesh",
  capital:"Amaravati"  
  },
  {
    state:"Arunachal Pradesh",
  capital:"Itanagar"  
  },
  {
    state:"Assam",
  capital:"Dispur"  
  },
  {
    state:"Bihar",
  capital:"Patna"  
  },
  {
    state:"Chhattisgarh",
  capital:"Raipur"  
  },
  {
    state:"Goa",
  capital:"Panaji"  
  },
  {
    state:"Gujarat",
  capital:"Gandhinagar"  
  },
  {
    state:"Haryana",
  capital:"Chandigarh"  
  },
  {
    state:"Himachal Pradesh",
  capital:"Shimla"  
  },
  {
    state:"Jharkhand",
  capital:"Ranchi"  
  },
  {
    state:"Karnataka",
  capital:"Bengaluru"  
  },
  {
    state:"Kerala",
  capital:"Thiruvananthapuram"  
  },
  {
    state:"Madhya Pradesh",
  capital:"Bhopal"  
  },
  {
    state:"Maharashtra",
  capital:"Mumbai"  
  },
  {
    state:"Manipur",
  capital:"Imphal"  
  },
  {
    state:"Meghalaya",
  capital:"Shillong"  
  },
  {
    state:"Mizoram",
  capital:"Aizawl"  
  },
  {
    state:"Nagaland",
  capital:"Kohima"  
  },
  {
    state:"Odisha",
  capital:"Bhubaneswar"  
  },
  {
    state:"Punjab",
  capital:"Chandigarh"  
  },
  {
    state:"Rajasthan",
  capital:"Jaipur"  
  },
  {
    state:"Sikkim",
  capital:"Gangtok"  
  },
  {
    state:"Telangana",
  capital:"Hyderabad"  
  },
  {
    state:"Tripura",
  capital:"Agartala"  
  },
  {
    state:"Uttar Pradesh",
  capital:"Lucknow"  
  },
  {
    state:"Uttarakhand",
  capital:"Dehradun (Winter) Gairsain (Summer)"  
  },
  {
    state:"West Bengal",
  capital:"Kolkata"  
  }
]

function randomise() {
  
var i = Math.round(Math.random() * 28);
var j = Math.round(Math.random() * 28);
var k = Math.round(Math.random() * 28);
var l = Math.round(Math.random() * 28);
var m = Math.round(Math.random() * 100);


if(i==j||i==k ||i==l || j==k || j==l || k==l){
    randomise();
    answer.innerHTML="";
}else{
    state.innerHTML=staticGK[i].state; 
    option1.innerHTML=staticGK[i].capital;
    option2.innerHTML=staticGK[j].capital;
    option3.innerHTML=staticGK[k].capital;
    option4.innerHTML=staticGK[l].capital;
}
option1.style.order=m;
answer.innerHTML="";

if(i==0 || j==0 || k==0 || l==0){
  randomise();
}
  
  option1.onclick=()=>{
  score++;
  randomise();
  resetTime(timerId)
}

option2.onclick=()=>{
  answer.innerHTML="Sorry 😅 the answer is" +" "+ staticGK[i].capital;
  // location.href = "gameover.html?score=" + score;
  button.style.display="block";
}

option3.onclick=()=>{
  answer.innerHTML="Sorry 😅 the answer is" +" "+ staticGK[i].capital;
  // location.href = "gameover.html?score=" + score;
  button.style.display="block";
}

option4.onclick=()=>{
  answer.innerHTML="Sorry 😅 the answer is" +" " + staticGK[i].capital;
  // location.href = "gameover.html?score=" + score;
  button.style.display="block";
}
}  

button.onclick=()=>{
  location.href = "gameover.html?score=" + score;
}
randomise();

var time = 20;
var timerId;

function startTimer() {
    time = 20;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if (time == 0) location.href = "./gameover.html?score=" + score;
        timer.innerHTML = time;
    }, 1000);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();
