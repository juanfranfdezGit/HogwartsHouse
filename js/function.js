const start = document.querySelector(".start");
const portada = document.querySelector(".portada");

start.addEventListener("click",function(){
    console.log("empezamos");
    portada.classList.toggle("started")
});

