const mode=document.querySelector(".mode")
mode.addEventListener("click",()=>{
    
})
const bars = document.querySelectorAll(".progress");

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        bars.forEach(bar => bar.classList.add("animate"));
    }
});

observer.observe(document.querySelector(".skills"));