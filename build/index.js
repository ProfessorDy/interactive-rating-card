const submitBtn = document.querySelector('.submit-btn')
const ratingCard = document.getElementById('rating-card')
const thankYouCard = document.getElementById('thank-you-card')




submitBtn.addEventListener('click', () => {
    ratingCard.classList.add('hide')
    thankYouCard.classList.remove('hide')
})