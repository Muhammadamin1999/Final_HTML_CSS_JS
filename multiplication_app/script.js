// 2 ta random raqam
const num1 = Math.ceil(Math.random()*10)+1
const num2 = Math.ceil(Math.random()*10)+1

//id larni belgila
const formEl = document.getElementById("form")
const scoreEl = document.getElementById("score")
const questionEl = document.getElementById("question")
const inputEl = document.getElementById("input")

//scoreni local storage dan ol string ni int sifatida
let score = JSON.parse(localStorage.getItem("score"))

//score mavjud yoqligiini tekshir
if(!score){
    score = 0
}
// score elementni set qil ` ` foydalanib
scoreEl.innerText = `score: ${score}`

// question elemnetni set qil
questionEl.innerText = `What is result ${num1} multiply ${num2} ?`
// copaytir
const ans = num1 * num2

// form elementga event listenr qo'sh ichkairda knodirion bolsin
// update local storage
formEl.addEventListener("submit",()=>{
    const userAns = +inputEl.value
    if(ans == userAns){
        score++
        updateLocalStorage()
    }else{
        score--
        updateLocalStorage()
    }
})

// update local storage function set bn
function updateLocalStorage(){
   localStorage.setItem("score", JSON.stringify(score))
}
