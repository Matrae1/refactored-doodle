// template_jd6ks98
// service_30z86ow
// Fn4QBvozUTlPQG-hA

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_30z86ow',
            'template_jd6ks98',
            event.target,
            'Fn4QBvozUTlPQG-hA'
        ).then(() => {
        loading.classList.remove("modal__overlay--visible");
         success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                'The email service is temporarily unavailable. Please contact me directly at matrae@ymail.com'
            );
        })
}

let isModalOpen = false;
function toggleModal(){
   if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
   }
   isModalOpen = true;
   document.body.classList += " modal--open"
}