const newFormButton = document.querySelector('.add-button');
if (newFormButton) {
    newFormButton.addEventListener('click', () => {
        const forms = document.querySelectorAll('.beverage');
        const lastForm = forms[forms.length - 1];
        const newForm = lastForm.cloneNode(true);

        const index = forms.length +1;
        newForm.querySelector('.beverage-count').textContent = `Напиток №${index}`;

        newForm.querySelectorAll('input, select').forEach(el => {
            el.name = `${el.name.split(' ')[0]} ${index}`
            if (el.type === 'radio' || el.type === 'checkbox') {
                el.checked = false;
            }
        });

        newForm.querySelector('input[type="radio"]').checked = true;

        lastForm.parentNode.insertBefore(newForm, lastForm.nextSibling);
        console.log(lastForm);
    })
}

document.querySelectorAll('.delete-button').forEach((el) => {
    el.addEventListener('click', (x) => {
        const drinksCount = document.querySelectorAll(`.beverage`).length;
        if (drinksCount > 1) {
            x.target.parentElement.remove();
        }
    });
});