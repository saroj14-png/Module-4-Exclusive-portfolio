
function contact(){
    //event.preventDefault();
    //emailjs
    //  .sendForm(
    //    "service_t94vdqo",
    //    "template_e6i852b",
    //    event.target,
     //   "f4nj8ADMO_NsaWaEI"
     // )
     // .then(() => {
     //   console.log("SUCCESS!");
     // });
     const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading .classList += "  modal__overlay--visible"
     setTimeout(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += "  modal__overlay--visible";
        console.log("Set a time out from mail!")}, 500);
        }