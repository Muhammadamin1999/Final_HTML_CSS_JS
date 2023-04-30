const kits = ["crash", "kick","snare","tom"]
const containerEl = document.querySelector(".container")
kits.forEach(value=>{
    const btnEl = document.createElement("button")
    btnEl.classList.add("btn")
    btnEl.innerText = value
    btnEl.style.backgroundImage = "url(images/" + value + ".png)"
    containerEl.appendChild(btnEl)
    const audioEl = document.createElement("audio")
    audioEl.src = "sounds/" + value + ".mp3"
    containerEl.appendChild(audioEl)
    btnEl.addEventListener("click",()=>{
        audioEl.play()
    })
    window.addEventListener("keydown",(event)=>{
        if(event.key === kits.slice(0,1)){
            audioEl.play()
            btnEl.style.transform="scale(0.9)"
            setTimeout(()=>{
              btnEl.style.transform = "scale(1)"
            },100)
        }
    })
})