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

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')) {
        let forms = document.querySelectorAll('.beverage');
        const count = forms.length;
        if (count <= 1) {
            return;
        }
        event.target.closest('.beverage').remove();
        forms = document.querySelectorAll('.beverage');
        let index = 1;
        for (const form of forms) {
            form.querySelector('.beverage-count').textContent = `Напиток №${index}`;
            index += 1;
        }
    }
});

document.querySelector('.submit-button').addEventListener('click', (event) => {
    event.preventDefault();
    const modal = document.querySelector('.modal');
    modal.textContent = getText();
    modal.style.display = 'flex';
})

const modalExit = document.querySelector('.modal-close-button');
if(modalExit) {
    modalExit.addEventListener('click', (event) => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
    })
}

function getText() {
    const number = document.querySelectorAll('.beverage').length;
    const y = number % 10;
    const x = number % 100 - y;
    if (y === 5 || y === 6 || y === 7 || y === 8 || y === 9 || y === 0 || x === 10 ) {
        return `Вы заказали ${number} напитков`;
    }
    if (y === 1){
        return `Вы заказали ${number} напиток`;
    }
    return `Вы заказали ${number} напитка`;
}