/*//convertir une date en chaine de cara 
.toLocalDateString()*/

// reserv.js

function addAdditionalField() {
    // Création d'un nouvel élément div
    var newDiv = document.createElement("div");

    // Ajout du contenu HTML à la div
    newDiv.innerHTML = `
        <label for="additionalInput">Champ supplémentaire:</label>
        <input type="text" id="additionalInput" name="additionalInput">`;

    // Ajout de la nouvelle div au formulaire
    document.querySelector("form").appendChild(newDiv);
}


/*function addAdditionalField() {
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
}*/