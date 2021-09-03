/** Importing the resetValidation function from validate.js */

import { resetValidation, assignEditValues } from './validate.js'

/** Exporting vars to use in validate.js */

export const profileName = document.querySelector(".profile__name");

export const profileAbout = document.querySelector(".profile__description");

export const nameInput = document.querySelector(".popup__input_type_name");

export const jobInput = document.querySelector(".popup__input_type_about");

/** Functions to load initial photos */

function createPhoto(photo) {

  const photoElement = photoTemplate.querySelector(".photo").cloneNode(true);

  photoElement.querySelector(".photo__title").textContent = photo.name;

  photoElement.querySelector(".photo__image").src = photo.link;

  photoElement.querySelector(".photo__image").alt = `A photo of ${photo.name}`;

  /** Listener and function for like button */

  photoElement.querySelector(".photo__like").addEventListener("click", function (evt) {

    evt.target.classList.toggle("photo__like_active");

  });

  /** Listener and function for delete button */

  photoElement.querySelector(".photo__delete").addEventListener("click", function (evt) {

    let photoItem = evt.target.closest(".photo");

    photoItem.remove();

    photoItem = null;

  });

  /** Listener and function for image popup */

  photoElement.querySelector(".photo__image").addEventListener("click", function () {

    popupImage.src = photo.link;

    popupImage.alt = `Full screen image of ${photo.name}`;

    popupImageTitle.textContent = photo.name;

    openPopup(popupTypeImage);

  })

  return photoElement;

}

/** Function to load the photos form initial-cards.js */

function loadPhotos() {

  initialCards.forEach(addPhoto);

}

/** Calling the loadPhotos function */

loadPhotos();

/** Function to add photos */

function addPhoto(photo) {

  photoGrid.prepend(createPhoto(photo));

}

/** Functions for open and close popups */

function openPopup(popupType) {

  /** Adding the key-down and the click listener to close the popup */

  document.addEventListener("keydown", escapeKeyHandler);

  document.addEventListener("click", popupClickHandler);

  popupType.classList.add("popup_opened");

}

function closePopup(popupType) {

  /** Removing the key-down and the click listener after popup is closed */

  document.removeEventListener("keydown", escapeKeyHandler);

  document.removeEventListener("click", popupClickHandler);

  popupType.classList.remove("popup_opened");

  if (popupType.classList.contains("popup_type_add")) { popupAddForm.reset(); }

  if (popupType.classList.contains("popup_type_edit")) { assignEditValues(); }

  resetValidation(formList);

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
