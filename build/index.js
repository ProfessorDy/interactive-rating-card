const form = document.querySelector('.rating-form')
const cards = document.querySelectorAll('.card')
const rating = document.querySelector('#rating')


const changeState = (e) => {
    e.preventDefault()
    cards.forEach(card => {
        card.classList.toggle('hide')
    });

    const data = new FormData(e.target)
    const ratingValue = data.get('rating')
    
    rating.textContent = ratingValue
}

form.addEventListener('submit', changeState)
