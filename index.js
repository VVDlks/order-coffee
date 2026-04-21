document.querySelectorAll('.delete-button').forEach((el) => {
    el.addEventListener('click', (x) => {
        const drinksCount = document.querySelectorAll(`.beverage`).length;
        if (drinksCount > 1) {
            x.target.parentElement.remove();
        }
    });
});

document.querySelector('.submit-button').addEventListener('click', (event) => {
    event.preventDefault();
    const modal = document.querySelector('.modal');
    modal.style.display = 'flex';
})