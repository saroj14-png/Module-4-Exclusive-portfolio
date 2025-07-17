
function contact(event){
    event.preventDefault();
    emailjs
    .sendform(
        'service_t94vdqo', 
        'template_e6i852b', 
        event.target, 
        'user_f4nj8ADMO_NsaWaEI'
    ).then(() => {
            console.log('SUCCESS!')})
        }