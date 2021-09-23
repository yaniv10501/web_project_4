/** Importing the Card and FormValidator classes */

import Card from './Card.js';
import FormValidator from './FormValidator.js';

/** A function to assign the values for the edit popup */

const assignEditValues = () => {

  nameInput.value = profileName.textContent;

  jobInput.value = profileAbout.textContent;

};

/** Calling the assignEditValues function to set the edit popup input values on page start */

assignEditValues();

/** Function to load the photos form initial-cards.js */

function loadPhotos() {

  initialCards.forEach(addPhoto);

}

/** Calling the loadPhotos function */

loadPhotos();

/** Function to add photos */

function addPhoto(photo) {

  const card = new Card(photo.name, photo.link);

  const cardElement = card.createCard();

  photoGrid.prepend(cardElement);

}

/** Functions for submitting forms */

function handleEditFormSubmit(evt) {

  evt.preventDefault();

  profileName.textContent = nameInput.value;

  profileAbout.textContent = jobInput.value;

  closePopup(popupTypeEdit);

}

function handleAddFormSubmit(evt) {

  evt.preventDefault();

  const newPhoto = {};

  newPhoto.name = placeTitleInput.value;

  newPhoto.link = imageUrlInput.value;

  addPhoto(newPhoto);

  closePopup(popupTypeAdd);

  popupAddForm.reset();

}

/** A function to open a popup,
 * This function is being exported to the Card class for the _handleImageClick method
 */

export default function openPopup(popupType) {

  /** Adding the key-down and the click listener to close the popup */

  document.addEventListener("keydown", escapeKeyHandler);

  document.addEventListener("click", popupClickHandler);

  popupType.classList.add("popup_opened");

}

/** A function to close a popup */

function closePopup(popupType) {

  /** Removing the key-down and the click listener after popup is closed */

  document.removeEventListener("keydown", escapeKeyHandler);

  document.removeEventListener("click", popupClickHandler);

  popupType.classList.remove("popup_opened");

  /** If the popup type is image then no form actions are required */

  if (popupType.classList.contains("popup_type_image")) return;

  /** Making a new form instance to call the resetValidation method */

  const form = new FormValidator(popupType.querySelector(".popup__form"), settingsObject);

  if (popupType.classList.contains("popup_type_add")) {

    popupAddForm.reset();
    form.resetValidation();

  }

  if (popupType.classList.contains("popup_type_edit")) {

    assignEditValues();
    form.resetValidation();

  }

}

/** Function for the key-down listener to close to popup when the user press the "escape" key */

function escapeKeyHandler(event) {

  if (event.key === "Escape") {

    closePopup(document.querySelector(".popup_opened"));

  }

}

/** Function for the click listener to close to popup when the user click the overlay or the close button */

function popupClickHandler(event) {

  if (!event.target.classList.contains("popup") && !event.target.classList.contains("popup__close-button")) return;

  else {

    closePopup(document.querySelector(".popup_opened"));

  }

}

/** Listeners for buttons */

editButton.addEventListener("click", function () {

  openPopup(popupTypeEdit);

});

addButton.addEventListener("click", function () {

  openPopup(popupTypeAdd);

});

popupTypeAdd.addEventListener("submit", handleAddFormSubmit);

popupTypeEdit.addEventListener("submit", handleEditFormSubmit);

/** Enabling validation for all the forms */

formList.forEach((form) => {

  const formValidator = new FormValidator(form, settingsObject);

  formValidator.enableValidation();

});
