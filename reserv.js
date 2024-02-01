/*//convertir une date en chaine de cara 
.toLocalDateString()*/

let bouton_ajout = document.querySelector("#bouton_ajout");

bouton_ajout.addEventListener("click", addAdditionalField);

function addAdditionalField() {
    var additionalField = document.createElement('div');
    additionalField.className = 'additional-field';

    var dateLabel = document.createElement('label');
    dateLabel.textContent = 'Sélectionnez une date:';

    var dateSelect = document.createElement('select');
    dateSelect.name = 'additionalDate';
    dateSelect.required = true;

    var dateOption = document.createElement('option');
    dateOption.value = '2024-01-23';
    dateOption.textContent = '23 janvier 2024';
    dateSelect.appendChild(dateOption);

    // Ajoutez d'autres options au besoin

    var numberLabel = document.createElement('label');
    numberLabel.textContent = 'Nombre:';

    var numberInput = document.createElement('input');
    numberInput.type = 'number';
    numberInput.name = 'additionalNumber';
    numberInput.min = '1';
    numberInput.value = '1';
    numberInput.required = true;

    additionalField.appendChild(dateLabel);
    additionalField.appendChild(dateSelect);
    additionalField.appendChild(numberLabel);
    additionalField.appendChild(numberInput);

    var form = document.querySelector('form');
    form.appendChild(additionalField);
}