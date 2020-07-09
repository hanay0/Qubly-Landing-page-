document.querySelector(".custom-control-input").addEventListener("click", function(){
    if(document.querySelector("#inputPassword6").getAttribute("type") === "password" || document.querySelector("#password").getAttribute("type") === "password"){
        document.querySelector("#inputPassword6").setAttribute("type", "text");
        document.querySelector("#password").setAttribute("type", "text");
    } else {
        document.querySelector("#inputPassword6").setAttribute("type", "password");
        document.querySelector("#password").setAttribute("type", "password");
    }
    
});