const initialCont = document.getElementById("initial-page");
const afterCont = document.getElementById("after-page");
const submitButton = document.getElementById("submit-btn");
const rateAgain = document.getElementById("rate-again");
const ratings = document.getElementsByTagName('li');
const alert = document.getElementById('alert');
const closeBtn = document.getElementById('close-btn');
let clickFlag = false;
let selectedRate = null;
submitButton.addEventListener("click", () => {
    if(clickFlag){
        afterCont.classList.remove("hidden");
        initialCont.classList.add("hidden");
        alert.classList.add('hidden');
        alert.classList.remove('animate-slide-in');
        alert.classList.remove('animate-close');
    } else {
        alert.classList.remove('hidden');
        alert.classList.remove('animate-close');
        alert.classList.add('animate-slide-in');
        setTimeout(() => {
            if(!alert.classList.contains('hidden')){
                alert.classList.add('animate-close');
                alert.classList.remove('animate-slide-in');
            }
        }, 5000);
    }
});
alert.addEventListener('animationend', () => {
    if(alert.classList.contains('animate-close')){
        alert.classList.add('hidden');
        alert.classList.remove('animate-close');
    }
});

closeBtn.addEventListener('click', () => {
    alert.classList.remove('animate-slide-in');
    alert.classList.add('animate-close');
});

rateAgain.addEventListener("click", () => {
    initialCont.classList.remove("hidden");
    afterCont.classList.add("hidden");
    console.log("clicking is working");
    clickFlag = false;
});

for (const rate of ratings) {
    rate.addEventListener('click', () => {
        document.getElementsByTagName('span')[0].innerHTML = rate.innerText;
        clickFlag = true;
    });
}