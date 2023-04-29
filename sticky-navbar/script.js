// get navbar element
const navEl = document.querySelector(".navbar")
// get bottom container el
const bottomEl = document.querySelector(".bottom-container")
// window pastga tushgan payt add element listener
window.addEventListener('scroll',()=>{
    if(window.scrollY > bottomEl.offsetTop - navEl.offsetHeight -50){
           navEl.classList.add("active")
    }else{
          navEl.classList.remove("active")
    }
})
    // condition 
    // navbar el active else navbar element remove active

