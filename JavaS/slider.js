const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".section-slider");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btright = document.querySelector("#bt-right");
const btleft = document.querySelector("#bt-left");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next()
{
    let sliderSectionFirst = document.querySelectorAll(".section-slider")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
            slider.style.transition = "none";
            slider.insertAdjacentElement('beforeend', sliderSectionFirst);
            slider.style.marginLeft = "-100%";
    }, 500);
}

function prev(){
    let sliderSection = document.querySelectorAll(".section-slider");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

setInterval(function(){
    next();
}, 4000);

btright.addEventListener('click', function(){
    next();
});
btleft.addEventListener('click', function(){
    prev();
})