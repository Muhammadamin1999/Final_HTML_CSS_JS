// btn class ni tanla
const btnEl = document.querySelector(".btn")

// add event qilasan mouseover bolganida
// x va y ni top
//btnEl orqali set item qil style sifatida
btnEl.addEventListener("mouseover",()=>{
    const x = (event.pageX - btnEl.offsetLeft)
    const y = (event.pageY - btnEl.offsetTop)
    btnEl.style.setProperty("--xPos", x + "px")
    btnEl.style.setProperty("--yPos", y + "px")
})