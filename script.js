const bars = document.querySelectorAll(".progress");

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        bars.forEach(bar => bar.classList.add("animate"));
    }
});
const anchors=document.querySelectorAll(".links a")

observer.observe(document.querySelector(".skills"));
const hamburger=document.querySelector(".hamburger")
const hide=document.querySelector(".hidelinks")
hamburger.addEventListener("click",()=>{
    hide.classList.toggle("hidelinks")
       if(hide.classList.contains("hidelinks"))
    {
        hamburger.innerHTML=`<img src="hamburger.svg" alt="">`
    }
    else{
        hamburger.innerHTML="X"
        hamburger.style.fontSize="28px"
    }
 

})
anchors.forEach(a=>{
    a.addEventListener("click",()=>{
        hide.classList.toggle("hidelinks");
           if(hide.classList.contains("hidelinks"))
    {
        hamburger.innerHTML=`<img src="hamburger.svg" alt="">`
    }
    else{
        hamburger.innerHTML="X"
    }
    })
})
const invert=document.querySelector(".inverter")
const  mode=document.querySelector(".mode")
if(localStorage.getItem("theme")==="dark-theme")
{
    document.body.classList.add("dark-theme");
     mode.textContent="☀️"
}

mode.addEventListener("click",()=>{
   document.body.classList.toggle("dark-theme");
   invert.classList.toggle("invert")
   if(document.body.classList.contains("dark-theme"))
   {
    mode.textContent="☀️"
      localStorage.setItem("theme","dark-theme")
   }
   else{
    mode.textContent="🌙"
    localStorage.setItem("theme","light")
   }
 
})
