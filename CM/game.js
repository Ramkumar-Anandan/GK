var score = 0;
const state=document.getElementById("state");
const answer=document.getElementById("answer");
const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const option3=document.getElementById("option3");
const option4=document.getElementById("option4");
const button=document.getElementById("button");

var staticGK=[
  {
    state:"Andhra Pradesh",
  capital:"Amaravati",
  governor:"Shri Biswa Bhusan Harichandan",
  cheifMinister:"Shri YS Jagan Mohan Reddy"
  },
  {
    state:"Arunachal Pradesh",
  capital:"Itanagar",
  governor:"Brig. (Dr.) B. D. Mishra (Retd.)",
  cheifMinister:"Shri Pema Khandu"
  },
  {
    state:"Assam",
  capital:"Dispur",
  governor:"Prof. Jagdish Mukhi",
  cheifMinister:"Shri Sarbananda Sonowal"
  },
  {
    state:"Bihar",
  capital:"Patna" ,
  governor: "Shri Phagu Chauhan",
  cheifMinister:"Shri Nitish Kumar"
  },
  {
    state:"Chhattisgarh",
  capital:"Raipur"  ,
  governor:"Sushri Anusuiya Uikey",
  cheifMinister:"Shri Bhupesh Baghel"
  },
  {
    state:"Delhi",
  capital:"New Delhi" ,
  governor: "",
  cheifMinister:"Shri Arvind Kejriwal"
  },
  {
    state:"Goa",
  capital:"Panaji" ,
  governor: "Shri Bhagat Singh Koshyari",
  cheifMinister:"Shri Pramod Sawant"
  },
  {
    state:"Gujarat",
  capital:"Gandhinagar",
  governor:  "Shri Acharya Dev Vrat",
  cheifMinister:"Shri Vijaybhai R. Rupani"
  },
  {
    state:"Haryana",
  capital:"Chandigarh"  ,
  governor:"Shri Satyadeo Narain Arya",
  cheifMinister:"Shri Manohar Lal"
  },
  {
    state:"Himachal Pradesh",
  capital:"Shimla"  ,
  governor:"Shri Bandaru Dattatraya",
  cheifMinister:"Shri Jairam Thakur"
  },
  {
    state:"Jharkhand",
  capital:"Ranchi"  ,
  governor:"Shrimati Droupadi Murmu",
  cheifMinister:"Shri Hemant Soren"
  },
  {
    state:"Karnataka",
  capital:"Bengaluru" ,
  governor: "Shri Vajubhai Vala",
  cheifMinister:"Sri B. S. Yediyurappa"
  },
  {
    state:"Kerala",
  capital:"Thiruvananthapuram"  ,
  governor:"Shri Arif Mohammed Khan",
  cheifMinister:"Shri Pinarayi Vijayan"
  },
  {
    state:"Madhya Pradesh",
  capital:"Bhopal"  ,
  governor:"Smt. Anandiben Patel",
  cheifMinister:"Shri Shivraj Singh Chouhan"
  },
  {
    state:"Maharashtra",
  capital:"Mumbai"  ,
  governor:"Shri Bhagat Singh Koshyari",
  cheifMinister:"Shri Uddhav Thackeray"
  },
  {
    state:"Manipur",
  capital:"Imphal"  ,
  governor:"Dr. Najma Heptulla",
  cheifMinister:"Shri N. Biren Singh"
  },
  {
    state:"Meghalaya",
  capital:"Shillong" ,
  governor: "Shri Satya Pal Malik",
  cheifMinister:"Shri Conrad Kongkal Sangma"
  },
  {
    state:"Mizoram",
  capital:"Aizawl"  ,
  governor:"Shri P.S. Sreedharan Pillai",
  cheifMinister:"Shri Pu Zoramthanga"
  },
  {
    state:"Nagaland",
  capital:"Kohima"  ,
  governor:"Shri R. N. Ravi",
  cheifMinister:"Shri Neiphiu Rio"
  },
  {
    state:"Odisha",
  capital:"Bhubaneswar" ,
  governor: "Prof. Ganeshi Lal",
  cheifMinister:"Shri Naveen Patnaik"
  },
  {
    state:"Puducherry (UT)",
  capital:"Pondicherry" ,
  governor: "",
  cheifMinister:"Shri. V. Narayanasamy"
  },
  {
    state:"Punjab",
  capital:"Chandigarh" ,
  governor: "Shri V.P. Singh Badnore",
  cheifMinister:"Shri Capt. Amarinder Singh"
  },
  {
    state:"Rajasthan",
  capital:"Jaipur"  ,
  governor:"Shri Kalraj Mishra",
  cheifMinister:"Shri Ashok Gehlot"
  },
  {
    state:"Sikkim",
  capital:"Gangtok"  ,
  governor:"Shri Ganga Prasad",
  cheifMinister:"Shri PS Golay"
  },
  {state:"Tamil Nadu",
  capital:"Chennai",
  governor:"Shri Banwarilal Purohit",
  cheifMinister:"Thiru Edappadi K. Palaniswami"
  },
  {
    state:"Telangana",
  capital:"Hyderabad"  ,
  governor:"Dr. Tamilisai Soundararajan",
  cheifMinister:"Shri K Chandrasekhar Rao"
  },
  {
    state:"Tripura",
  capital:"Agartala"  ,
  governor:"Shri Ramesh Bais",
  cheifMinister:"Shri Biplab Kumar Deb"
  },
  {
    state:"Uttar Pradesh",
  capital:"Lucknow"  ,
  governor:"Smt. Anandiben Patel",
  cheifMinister:"Shri Yogi Aditya Nath"
  },
  {
    state:"Uttarakhand",
  capital:"Dehradun (Winter) Gairsain (Summer)" ,
  governor: "Smt. Baby Rani Maurya",
  cheifMinister:"Shri Trivendra Singh Rawat"
  },
  {
    state:"West Bengal",
  capital:"Kolkata"  ,
  governor:"Shri Jagdeep Dhankhar",
  cheifMinister:"Km. Mamata Banerjee"
  }
]

var i=0;
function randomise(){
  console.log(i);
    var j = Math.round(Math.random() * 27);
    var k = Math.round(Math.random() * 27);
    var l = Math.round(Math.random() * 27);
    
    if(i==j||i==k ||i==l || j==k || j==l || k==l || j==0 || k==0 ||l==0){
      answer.innerHTML="";
      randomise();
  }else{
    console.log(staticGK[i].state);
      state.innerHTML=staticGK[i].state; 
      option1.innerHTML=staticGK[i].cheifMinister;
      option2.innerHTML=staticGK[j].cheifMinister;
      option3.innerHTML=staticGK[k].cheifMinister;
      option4.innerHTML=staticGK[l].cheifMinister;
      var m = Math.round(Math.random() * 100);
option1.style.order=m;
answer.innerHTML="";
  }
}
  option1.onclick=()=>{
    score++;
    if(i==27){
      answer.style.display="block";
      answer.innerHTML="You have mastered all the State Cheif Minister's name, Awesome 🤩"
    }else{
      i++;
      randomise();
      resetTime(timerId)
    }
}

option2.onclick=()=>{
  answer.innerHTML="Sorry 😅 the answer is" +" "+ staticGK[i].cheifMinister;
  button.style.display="block";
 
}

option3.onclick=()=>{
  answer.innerHTML="Sorry 😅 the answer is" +" "+ staticGK[i].cheifMinister;
  button.style.display="block";
 
}

option4.onclick=()=>{
  answer.innerHTML="Sorry 😅 the answer is" +" " + staticGK[i].cheifMinister;
  button.style.display="block";

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
