
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;

emailjs.init("u_vA6AWHSCfkguxsX"); 


function moveBackground(event) {
    const shapes = document.querySelectorAll(".shapes");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`;
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList.add("dark-theme"); 
    } else {
        document.body.classList.remove("dark-theme");
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");

    if (!loading || !success) return;

    loading.classList.add("modal__overlay--visible");

    emailjs
        .sendForm(
            "service_qxc3qsv",
            "template_12ai72j",
            event.target
        )
        .then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList.add("modal__overlay--visible");
            event.target.reset();
        })
        .catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at leawork25@gmail.com"
            );
        });
}

function toggleModal(event) {
    if (event) event.preventDefault();

    if (isModalOpen) {
        isModalOpen = false;
        document.body.classList.remove("modal--open");
    } else {
        isModalOpen = true;
        document.body.classList.add("modal--open");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}
