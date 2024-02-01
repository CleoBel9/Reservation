let bouton_ajout = document.getElementById("bouton_ajout");
let additionalFieldsContainer = document.getElementById("additionalFields");
let reservationForm = document.getElementById("reservationForm");
document.addEventListener("DOMContentLoaded", function () {
    fillDateOptions();
});

function fillDateOptions() {
    var availableDates = ["20 janvier 2024", "21 février 2024", "22 mars 2024", "23 avril 2024", "24 mai 2024", "25 juin 2024"];

    var dateSelect = document.getElementById("dateInput");

    availableDates.forEach(function (date) {
        var option = document.createElement("option");
        option.value = date;
        option.textContent = date;
        dateSelect.appendChild(option);
    });
} 
function addAdditionalField() {
    var additionalField = document.createElement('div');
    additionalField.className = 'additional-field reservation-container';
    additionalField.setAttribute('data-locked', 'false');
}

let reservationsCount = 1; 
bouton_ajout.addEventListener("click", function () {
    if (reservationsCount < 5) {
        addAdditionalField();
        reservationsCount++;
    } else {
        bouton_ajout.disabled = true;
    }
});

function addAdditionalField() {
    additionalField.setAttribute('data-locked', 'false');
    updateDateOptions();
    reservationForm.appendChild(bouton_ajout);
    var additionalField = document.createElement('div');
    additionalField.className = 'additional-field reservation-container';

    var dateLabel = document.createElement('label');
    dateLabel.textContent = 'Sélectionnez une date de réservation:';

    var dateSelect = document.createElement('select');
    dateSelect.name = 'additionalDate';
    dateSelect.required = true;

    var availableDates = getAvailableDates();

    availableDates.forEach(function (date) {
        var option = document.createElement('option');
        option.value = date;
        option.textContent = date;
        dateSelect.appendChild(option);
    });

    var numberLabel = document.createElement('label');
    numberLabel.textContent = 'Nombre:';

    var numberInput = document.createElement('input');
    numberInput.type = 'number';
    numberInput.name = 'additionalNumber';
    numberInput.min = '1';
    numberInput.value = '1';
    numberInput.required = true;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function () {
        additionalField.remove();
        reservationsCount--;

        if (reservationsCount < 5) {
            bouton_ajout.disabled = false;
        }
    });

    additionalField.appendChild(dateLabel);
    additionalField.appendChild(dateSelect);
    additionalField.appendChild(numberLabel);
    additionalField.appendChild(numberInput);
    additionalField.appendChild(deleteButton);

    additionalFieldsContainer.appendChild(additionalField);

    // Ajouter un événement au survol pour le dernier champ
    additionalField.addEventListener('mouseenter', function () {
        reservationForm.querySelector("input[type=submit]").style.backgroundColor = "green";
    });

    additionalField.addEventListener('mouseleave', function () {
        reservationForm.querySelector("input[type=submit]").style.backgroundColor = "";
    });

    // Déplacer le bouton "+" au-dessus du bouton de soumission
    reservationForm.appendChild(bouton_ajout);
}

function getAvailableDates() {
    var allDates = ["20 janvier 2024", "21 fevrier 2024", "22 mars 2024", "23 avril 2024", "24 mai 2024", "25 juin 2024"];

    // Ajouter l'option "Choisir une date"
    allDates.unshift("Choisir une date");

    // Filtrer dates déjà sélectionnées
    var selects = additionalFieldsContainer.querySelectorAll("select[name='additionalDate']");
    selects.forEach(function (select) {
        var selectedDate = select.value;
        allDates = allDates.filter(date => date !== selectedDate);
    });

    return allDates;
}

// ...

function updateDateOptions() {
    var selects = additionalFieldsContainer.querySelectorAll("select[name='additionalDate']");
    var selectedDates = [];

    selects.forEach(function (select) {
        selectedDates.push(select.value);
    });

    selects.forEach(function (select) {
        var options = select.querySelectorAll("option");

        options.forEach(function (option) {
            if (selectedDates.includes(option.value)) {
                option.disabled = true;
            } else {
                option.disabled = false;
            }
        });
    });
    var additionalFields = additionalFieldsContainer.querySelectorAll(".additional-field");
    additionalFields.forEach(function (field) {
        var locked = field.getAttribute('data-locked') === 'true';
        if (locked) {
            var dateSelect = field.querySelector("select[name='additionalDate']");
            dateSelect.disabled = true;
        }
    });
}
