const uni = document.querySelector("*");
const navTitle = document.querySelector(".top");
const navs = document.getElementById("navs");
const openNav = document.getElementById("open-nav");
const closeNav = document.getElementById("close-nav");
const nav = document.getElementById("navs");
const mode = document.querySelector(".mode");
const modeCover = document.querySelector(".cover");
const swicth1 = document.getElementById("sign-up-btn");
const swicth2 = document.getElementById("log-in-btn");
const logIn = document.getElementById("login");
const signUp = document.getElementById("signup");

var night = true;

openNav.onclick = () => nav.style.width = "100%";
closeNav.onclick = () => nav.style.width = "0";

mode.onclick = () =>{
    if(night){
        navTitle.style.background = "#000";
        navTitle.style.boxShadow = " 0 0 5px #fff ";
        navs.style.boxShadow = " 0 0 5px #fff ";
        navs.style.background = "#222";
        modeCover.style.left = "110%";
        mode.style.overflow = "hidden";
        document.body.style.background = "#000";
        uni.style.color = "#fff";
        logIn.style.background = "#000";
        signUp.style.background = "#000";
        logIn.style.boxShadow = " 0 0 5px #fff ";
        signUp.style.boxShadow = " 0 0 5px #fff ";
        night = false;
    }
    else{
        navTitle.style.background = "#fff";
        navTitle.style.boxShadow = " 0 0 5px #000 ";
        navs.style.boxShadow = " 0 0 5px #000 ";
        navs.style.background = "#eee";
        mode.style.overflow = "visible";
        modeCover.style.left ="10px";
        uni.style.color ="#000";
        document.body.style.background = "#fff";
        logIn.style.background = "#fff";
        signUp.style.background = "#fff";
        logIn.style.boxShadow = " 0 0 5px #000";
        signUp.style.boxShadow = " 0 0 5px #000 ";
        night = true;
    }
}
swicth1.onclick = () =>{
    signUp.style.left = "5px";
    logIn.style.left = "105%";
}

swicth2.onclick = () =>{
    logIn.style.left = "5px";
    signUp.style.left = "105%";
  
}
