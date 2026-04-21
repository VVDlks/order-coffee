document.querySelectorAll('.delete-button').forEach((el) => {
    el.addEventListener('click', (x) => {
        const drinksCount = document.querySelectorAll(`.beverage`).length;
        if (drinksCount > 1) {
            x.target.parentElement.remove();
        }
    });
});