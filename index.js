
function contact(event){
    event.preventDefault();
        const loading = document.querySelector(".modal__overlay--loading");
        const success = document.querySelector(".modal__overlay--success");
        loading.classList += " modal__overlay--visible";
        
    emailjs
      .sendForm(
        "service_t94vdqo",
        "template_e6i852b",
       event.target,
        "f4nj8ADMO_NsaWaEI"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on sarojani.powar@gmail.com"
        );
      });

        }


        let isModalOpen = false;
        function toggleModal() {
            
            if (isModalOpen) {
                return document.body.classList.remove("modal--open");
                isModalOpen=false;
            }
            isModalOpen = true;
          //toggle modal
          document.body.classList += " modal--open";
        
        }