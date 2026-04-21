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
        const drinksCount = document.querySelectorAll('.beverage').length;
        if (drinksCount > 1) {
            event.target.closest('.beverage').remove();
        }
    }
});

document.querySelector('.submit-button').addEventListener('click', (event) => {
    event.preventDefault();
    const modal = document.querySelector('.modal');
    modal.style.display = 'flex';
})

const modalExit = document.querySelector('.modal-close-button');
if(modalExit) {
    modalExit.addEventListener('click', (event) => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
    })
}

document.querySelector('.submit-button').addEventListener('click', (event) => {
    event.preventDefault();

    const modal = document.querySelector('.modal');
    const tableBody = modal.querySelector('tbody');

    tableBody.innerHTML = '';

    const forms = document.querySelectorAll('.beverage');

    forms.forEach(form => {
        const name = form.querySelector('select').selectedOptions[0].text;

        const milk = form.querySelector('input[type="radio"]:checked').parentElement.textContent.trim();

        const extras = Array.from(form.querySelectorAll('input[type="checkbox"]:checked'))
            .map(cb => cb.parentElement.textContent.trim())
            .join(', ');

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${milk}</td>
            <td>${extras || 'нет'}</td>
        `;

        tableBody.appendChild(row);
    });

    modal.style.display = 'flex';
});
