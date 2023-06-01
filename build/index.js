const form = document.querySelector('.rating-form')
const ratingCard = document.querySelector('#rating-card')
const thankYouCard = document.querySelector('#thank-you-card')
const cards = document.querySelectorAll('.card')

console.log(ratingCard) 
console.log(thankYouCard) 
const changeState = (e) => {
    e.preventDefault()
    cards.forEach(card => {
        card.classList.toggle('hide')
    });

    const data = new FormData(e.target)
    console.log(data)
}

form.addEventListener('submit', changeState)
console.log(form);