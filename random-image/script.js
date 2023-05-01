const imageContainerel = document.querySelector(".image-container")
const btnEl = document.querySelector(".btn")

btnEl.addEventListener("click",()=>{
    imageNum =10
    addnewImage()
    
})

function addnewImage(){
    const newimgEl = document.createElement("img")
    for (let index = 0; index < imageNum; index++) {
    newimgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`   
    }
    
    imageContainerel.appendChild(newimgEl)
}
