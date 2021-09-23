/** Importing the Card and FormValidator classes */

import Card from './Card.js';
import { openPopup, closePopup } from './utils.js';
import FormValidator from './FormValidator.js';

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

/** Calling the assignEditValues function to set the edit popup input values on page start */

assignEditValues();

/** Calling the loadPhotos function */

loadPhotos();

/** Enabling validation for all the forms */

const addForm = new FormValidator(popupAddForm, settingsObject);

const editForm = new FormValidator(popupEditForm, settingsObject);

addForm.enableValidation();

editForm.enableValidation();

/** Listeners for buttons */

editButton.addEventListener("click", function () {

  openPopup(popupTypeEdit);

});

addButton.addEventListener("click", function () {

  openPopup(popupTypeAdd);

});

popupTypeAdd.addEventListener("submit", handleAddFormSubmit);

popupTypeEdit.addEventListener("submit", handleEditFormSubmit);

export { addForm, editForm};
