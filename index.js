const btnEle = document.querySelector(".btn");
const trailercontainerEle = document.querySelector(".trailer-container");
const closeiconEle = document.querySelector(".close-icon");
const videoEle = document.querySelector("video");

btnEle.addEventListener("click", ()=>{
    trailercontainerEle.classList.remove("active");
});

closeiconEle.addEventListener("click", ()=>{
    trailercontainerEle.classList.add("active");
    videoEle.pause();
    videoEle.currentTime=0;
})



