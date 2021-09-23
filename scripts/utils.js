/** Importing the Card class and the addForm and editForm validators */

import Card from './Card.js';
import { addForm, editForm } from './index.js';

/** @module utils */

/**
 * @function assignEditValues
 * @description Function to assign the values for the edit popup
*/

const assignEditValues = () => {

  nameInput.value = profileName.textContent;

  jobInput.value = profileAbout.textContent;

};

/**
 * @function addPhoto
 * @description Function to add photos
 */

function addPhoto(photo) {

  const card = new Card(photo.name, photo.link, photoTemplate);

  const cardElement = card.createCard();

  photoGrid.prepend(cardElement);

}

/**
 * @function loadPhotos
 * @description Function to load the photos form initial-cards.js
*/

function loadPhotos() {

  initialCards.forEach(addPhoto);

}

/**
 * @function closePopup
 * @description Function to close a popup
 */

function closePopup(popupType) {

  /** Removing the key-down and the click listener after popup is closed */

  document.removeEventListener("keydown", escapeKeyHandler);

  document.removeEventListener("click", popupClickHandler);

  popupType.classList.remove("popup_opened");

  /** If the popup type is image then no form actions are required */

  if (popupType.classList.contains("popup_type_image")) return;

  /** Making a new form instance to call the resetValidation method */

  if (popupType.classList.contains("popup_type_add")) {

    popupAddForm.reset();
    addForm.resetValidation();

  }

  if (popupType.classList.contains("popup_type_edit")) {

    assignEditValues();
    editForm.resetValidation();

  }

}

/**
 * @function escapeKeyHandler
 * @description Function for the key-down listener to close to popup when the user press the "escape" key
 */

function escapeKeyHandler(event) {

  if (event.key === "Escape") {

    closePopup(document.querySelector(".popup_opened"));

  }

}

/**
 * @function popupClickHandler
 * @description Function for the click listener to close to popup when the user click the overlay or the close button
 */

function popupClickHandler(event) {

  if (!event.target.classList.contains("popup") && !event.target.classList.contains("popup__close-button")) return;

  closePopup(document.querySelector(".popup_opened"));

}

/**
 * @function handleEditFormSubmit
 * @function handleAddFormSubmit
 * @description Functions for submitting forms
 */

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

/**
 * @function openPopup
 * @description Function to open a popup
 */

function openPopup(popupType) {

  /** Adding the key-down and the click listener to close the popup */

  document.addEventListener("keydown", escapeKeyHandler);

  document.addEventListener("click", popupClickHandler);

  popupType.classList.add("popup_opened");

}

/** Exporting functions to use in other modules */

export { assignEditValues, loadPhotos, openPopup, handleAddFormSubmit, handleEditFormSubmit };
