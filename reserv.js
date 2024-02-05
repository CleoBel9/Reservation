// Sélection des éléments du DOM
let bouton_ajout = document.getElementById("bouton_ajout");
let additionalFieldsContainer = document.getElementById("additionalFields");
let reservationForm = document.getElementById("reservationForm");

// Variable pour compter le nombre de réservations
let reservationsCount = 0;
var availableDates = ["20 janvier 2024", "21 février 2024", "22 mars 2024", "23 avril 2024", "24 mai 2024", "25 juin 2024", "19 janvier 2021"];

// Événement déclenché lorsque la page est chargée
document.addEventListener("DOMContentLoaded", function () {
    // Remplit les options de la liste déroulante des dates
    addAdditionalField();
});

function getAvailableDates() {
    // Filtrer dates déjà sélectionnées
    var selects = additionalFieldsContainer.querySelectorAll("select[name='additionalDate']");
    selects.forEach(function (select) {
        var selectedDate = select.value;
    });
}

function isDateSelected(date) {
    var selects = additionalFieldsContainer.querySelectorAll("select[name='additionalDate']");
    var selectedDates = Array.from(selects).map(select => select.value);
    return selectedDates.includes(date);
}
// Événement déclenché lorsqu'on clique sur le bouton d'ajout
bouton_ajout.addEventListener("click", function () {
    // Vérifie si le nombre de réservations est inférieur à 5
    if (reservationsCount < 5) {
        // Ajoute un nouvel encadrement de réservation
        addAdditionalField();
        // Incrémente le compteur de réservations
        reservationsCount++;
    } else {
        // Désactive le bouton d'ajout s'il y a déjà 5 réservations
        bouton_ajout.disabled = true;
    }
});

// Fonction pour ajouter un nouvel encadrement de réservation
function addAdditionalField() {

    // Crée un nouvel élément div
    var additionalField = document.createElement('div');
    // Ajoute des classes à la div
    additionalField.className = 'additional-field reservation-container';

    // Crée un label pour la date
    var dateLabel = document.createElement('label');
    dateLabel.textContent = 'Sélectionnez une date de réservation:';
    var dateSelect = document.createElement('select');

    dateSelect.name = 'additionalDate';
    dateSelect.required = true;

    dateSelect.addEventListener('change', function () {
        disableSelectedDates();
    });

    // Remplit la liste déroulante avec les dates disponibles
    availableDates.forEach(function (date) {
        var option = document.createElement('option');
        option.value = date;
        option.textContent = date;
        option.id = "dateInput";
        dateSelect.appendChild(option);
    });

    getAvailableDates();

    // Crée un label pour le nombre
    var numberLabel = document.createElement('label');
    numberLabel.textContent = 'Nombre:';

    // Crée un champ de saisie pour le nombre
    var numberInput = document.createElement('input');
    numberInput.type = 'number';
    numberInput.name = 'additionalNumber';
    numberInput.min = '1';
    numberInput.value = '1';
    numberInput.required = true;

    // Crée un bouton de suppression
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function () {
        // Supprime l'encadrement de réservation
        additionalField.remove();
        // Décrémente le compteur de réservations
        reservationsCount--;

        // Réactive le bouton d'ajout s'il y a moins de 5 réservations
        if (reservationsCount < 5) {
            bouton_ajout.disabled = false;
        }
    });

    dateSelect.addEventListener('change', function () {
        disableSelectedDates();
    });

    // Ajoute les éléments à l'encadrement de réservation
    additionalField.appendChild(dateLabel);
    additionalField.appendChild(dateSelect);
    additionalField.appendChild(numberLabel);
    additionalField.appendChild(numberInput);
    additionalField.appendChild(deleteButton);

    // Ajoute l'encadrement de réservation au conteneur
    additionalFieldsContainer.appendChild(additionalField);

    // Ajoute un événement au survol pour le dernier champ
    additionalField.addEventListener('mouseenter', function () {
        reservationForm.querySelector("input[type=submit]").style.backgroundColor = "green";
    });

    // Ajoute un événement lorsque la souris quitte le champ
    additionalField.addEventListener('mouseleave', function () {
        reservationForm.querySelector("input[type=submit]").style.backgroundColor = "";
    });

    // Ajoute le bouton "+" après le nouvel encadrement
    additionalFieldsContainer.appendChild(bouton_ajout);
}

// Fonction pour désactiver les options déjà sélectionnées
function disableSelectedDates() {
    var selects = document.querySelectorAll("select[name='additionalDate']");
    var allOptions = document.querySelectorAll("option#dateInput");
    var selects_array = [...selects];

    selects_array.forEach(function (select) {
        var selectedDate = select.value;

        allOptions.forEach(function (option) {
            if (option.value === selectedDate) {
                option.disabled = true;
            }
        });
    });
}