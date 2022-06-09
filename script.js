const rate = document.querySelectorAll(".rate a");
let rating = 0;

rate.forEach((RateChoice, ClickedNumber) => {
    RateChoice.addEventListener('click', () => {
        rate.forEach((otherRating, OtherClickedNumber) => {
            if (OtherClickedNumber <= ClickedNumber) {
                otherRating.classList.add("active");
            }else{
                otherRating.classList.remove("active");
            }
        })
        rating = ClickedNumber + 1;
    });
});

const before = document.querySelector('.rating-box')
const after = document.querySelector('.result')

document.getElementById("submit").onclick = function () {
    before.classList.add('hidden');
    after.classList.remove('hidden');
    document.getElementById("rating").innerText = rating;
};