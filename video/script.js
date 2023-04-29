// create btnEl and close icon el trailer container el video elem
// btn clicked remove active class
// actovate close icon

const btnEl = document.querySelector(".btn")
const closeIconel = document.querySelector(".close-icon")
const trailerContainerEl = document.querySelector(".trailer-container ")
const videoEl = document.querySelector("video")

btnEl.addEventListener("click",()=>{
    trailerContainerEl.classList.remove("active")
})
closeIconel.addEventListener("click",()=>{
    trailerContainerEl.classList.add("active")
    videoEl.pause()
    videoEl.currentTime = 0
})