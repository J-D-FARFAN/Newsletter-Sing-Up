const Submit = document.querySelector(".submitEmail");
const inputEmail = document.querySelector("#email");
let MessageError = document.querySelector(".errorEmail");
let txtEmail = document.querySelector(".txtEmail")
const success = document.querySelector(".contentAll__successActive")
const stay = document.querySelector(".content__all")
const dismissEmail = document.querySelector(".dismissEmail")

Submit.addEventListener("click", submitEmail);
inputEmail.addEventListener("focus", clearContent);
dismissEmail.addEventListener("click", dismissIfGreaterThan900px);

function submitEmail() {
    // Expresión regular para verificar el formato de un email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = inputEmail.value.trim();

    if (email === '' || !emailRegex.test(email)) {
        inputEmail.classList.add("error");
        MessageError.textContent = "Valid email required";
    }else {
        inputEmail.classList.remove("error");
        MessageError.textContent = "";


        if(stay.style.display = "none"){
            success.style.display = "flex"
            txtEmail.textContent = inputEmail.value
        }else if (success.style.display === "flex"){
            stay.style.display = "flex"
        }
    }

    
}

function clearContent() {
    inputEmail.classList.remove("error");
    MessageError.textContent = "";
}

function dismissIfGreaterThan900px() {
    if (window.matchMedia("(max-width: 900px)").matches) {
        success.style.display = "none";
        stay.style.display = "block";
    }else{
        stay.style.display = "flex";
        success.style.display = "none";
    }
}

window.addEventListener('load', dismissIfGreaterThan900px);

window.addEventListener('resize', dismissIfGreaterThan900px);

