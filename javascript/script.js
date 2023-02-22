lightGallery(document.querySelector(".gallery-container"));


let bar=document.querySelector("#menu-btn");
let navbar=document.querySelector(".links");

bar.onclick = () =>{
    bar.classList.toggle("fa-times");
    navbar.classList.toggle("active")
}

window.onscroll = () =>{
    bar.classList.remove("fa-times");
    navbar.classList.remove("active")
    
    if(window.scrollY>60){
        document.querySelector(".navbar").classList.add("active");
    }else{
        document.querySelector(".navbar").classList.remove("active");
    }
}

