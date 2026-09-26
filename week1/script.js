heartButton = document.querySelector('#heart')

heartButton.addEventListener('click',() => {
    heartButton.textContent = '❤️';
})

heartButton.addEventListener('mouseleave',() => {
    heartButton.textContent = '🤍';
})