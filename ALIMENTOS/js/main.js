const imgStyle1 = document.querySelector(".imgStyle1");
const imgStyle2 = document.querySelector(".imgStyle2");
const imgStyle3 = document.querySelector(".imgStyle3");
const imgStyle4 = document.querySelector(".imgStyle4");
const imgStyle5 = document.querySelector(".imgStyle5");
const imgStyle6 = document.querySelector(".imgStyle6");

const verAlimentos = document.querySelector(".verAlimentos");

const verAlimentos1 = document.querySelector(".verAlimentos1");
const verAlimentos2 = document.querySelector(".verAlimentos2");
const verAlimentos3 = document.querySelector(".verAlimentos3");
const verAlimentos4 = document.querySelector(".verAlimentos4");
const verAlimentos5 = document.querySelector(".verAlimentos5");
const verAlimentos6 = document.querySelector(".verAlimentos6");


verAlimentos1.style.display = "none";
verAlimentos2.style.display = "none";
verAlimentos3.style.display = "none";
verAlimentos4.style.display = "none";
verAlimentos5.style.display = "none";
verAlimentos6.style.display = "none";

imgStyle1.addEventListener("click", (a) => {
    a.preventDefault();
    function my_funck(classe) {
        $("." + "verAlimentos2").slideUp();
        $("." + "verAlimentos3").slideUp();
        $("." + "verAlimentos4").slideUp();
        $("." + "verAlimentos5").slideUp();
        $("." + "verAlimentos6").slideUp();
        $("." + "verAlimentos1").slideUp();
    }
    my_funck();
})

imgStyle2.addEventListener("click", (a) => {
    a.preventDefault();
    function my_funck(classe) {
        $("." + "verAlimentos1").slideUp();
        $("." + "verAlimentos2").slideUp();
        $("." + "verAlimentos4").slideUp();
        $("." + "verAlimentos5").slideUp();
        $("." + "verAlimentos6").slideUp();
        $("." + "verAlimentos3").slideToggle();
    }
    my_funck();
})

imgStyle3.addEventListener("click", (a) => {
    a.preventDefault();
    function my_funck(classe) {
        $("." + "verAlimentos1").slideUp();
        $("." + "verAlimentos2").slideUp();
        $("." + "verAlimentos3").slideUp();
        $("." + "verAlimentos5").slideUp();
        $("." + "verAlimentos6").slideUp();
        $("." + "verAlimentos4").slideToggle();
    }
    my_funck();
})

imgStyle4.addEventListener("click", (a) => {
    a.preventDefault();
    function my_funck(classe) {
        $("." + "verAlimentos1").slideUp();
        $("." + "verAlimentos3").slideUp();
        $("." + "verAlimentos4").slideUp();
        $("." + "verAlimentos5").slideUp();
        $("." + "verAlimentos6").slideUp();
        $("." + "verAlimentos2").slideToggle();
    }
    my_funck();
})

imgStyle5.addEventListener("click", (a) => {
    a.preventDefault();
    function my_funck(classe) {
        $("." + "verAlimentos1").slideUp();
        $("." + "verAlimentos2").slideUp();
        $("." + "verAlimentos3").slideUp();
        $("." + "verAlimentos4").slideUp();
        $("." + "verAlimentos6").slideUp();
        $("." + "verAlimentos5").slideToggle();
    }
    my_funck();
})

imgStyle6.addEventListener("click", (a) => {
    a.preventDefault();
    function my_funck(classe) {
        $("." + "verAlimentos1").slideUp();
        $("." + "verAlimentos2").slideUp();
        $("." + "verAlimentos3").slideUp();
        $("." + "verAlimentos4").slideUp();
        $("." + "verAlimentos5").slideUp();
        $("." + "verAlimentos6").slideToggle();
    }
    my_funck();
})

