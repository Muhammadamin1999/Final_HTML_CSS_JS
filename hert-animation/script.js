// choose body element
const bodyEl = document.querySelector("body")

// add event listener to body el
// chosse x and y positon
// create span element
//style span element wit it
// create size element 
// style height and width with size
// append spanel to body
// set time to remove span el
bodyEl.addEventListener("mousemove",()=>{
    const xPos = event.offsetX
    const yPos = event.offsetY
    const spanEl = document.createElement("span")
    spanEl.style.left = xPos + "px"
    spanEl.style.top = yPos + "px"
    const size = Math.random()*100
    spanEl.style.width = size + "px"
    spanEl.style.height = size + "px"
    bodyEl.appendChild(spanEl)
    setInterval(()=>{
        spanEl.remove()
    },3000)
})