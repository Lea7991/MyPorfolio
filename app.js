//template_oej1816
//service_qxc3qsv
//u_vA6AWHSCfkguxsX

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal overlay--visible";
    emailjs
        .sendForm(
           "service_qxc3qsv",
            "template_oej1816",
            event.target,
            "u_vA6AWHSCfkguxsX"
        )
        .then(() => {
            loading.classList.remove("modal overlay--visible");
            success.classList += " modal overlay--visible";
        })
        .catch (() => {
            loading.classList.remove("modal overlay--visible");
            alert(
                "The email service is temporarily unavaliable. Please contact me directly at leawork25@gmail.com"
            );
        })
}


function toggleModal() {
    if (isModelOpen) {
        isModalOpen = false;
        return document.body.classList.remove('modal--open');
    }
    isModelOpen = true;
    document.body.classList += " modal--open";

}