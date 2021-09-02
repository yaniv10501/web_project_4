/** Setting all Vars */

const photoTemplate = document.querySelector("#photo").content;

const editButton = document.querySelector(".profile__edit-button");

const addButton = document.querySelector(".profile__add-button");

const popupTypeEdit = document.querySelector(".popup_type_edit");

const popupTypeAdd = document.querySelector(".popup_type_add");

const popupTypeImage = document.querySelector(".popup_type_image");

const popupAddForm = popupTypeAdd.querySelector(".popup__form");

const closeEditPopup = popupTypeEdit.querySelector(".popup__close-button");

const closeAddPopup = popupTypeAdd.querySelector(".popup__close-button");

const closeImagePopup = popupTypeImage.querySelector(".popup__close-button");

const photoGrid = document.querySelector(".photos__grid")

const popupImage = document.querySelector(".popup__image");

const popupImageTitle = document.querySelector(".popup__image-title")

const profileName = document.querySelector(".profile__name");

const profileAbout = document.querySelector(".profile__description");

const nameInput = document.querySelector(".popup__input_type_name");

const jobInput = document.querySelector(".popup__input_type_about");

const placeTitleInput = document.querySelector(".popup__input_type_title");

const imageUrlInput = document.querySelector(".popup__input_type_url");

const popups = document.querySelectorAll(".popup");

const page = document.querySelector(".page");

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

    document.addEventListener("keydown", escapeKeyHandler);

    popupImage.src = photo.link;

    popupImage.alt = `Full screen image of ${photo.name}`;

    popupImageTitle.textContent = photo.name;

    openPopup(popupTypeImage);

  })

  return photoElement;

}

function loadPhotos() {

  initialCards.forEach(addPhoto);

}

/** Calling the loadPhotos function */

loadPhotos();

/** Function to add photos */

function addPhoto(photo) {

  photoGrid.prepend(createPhoto(photo));

}

/** Assign name and about info for edit popup */

nameInput.value = profileName.textContent;

jobInput.value = profileAbout.textContent;

/** Functions for open and close popups */

function openPopup(popupType) {

  document.addEventListener("click", popupClickHandler);

  popupType.classList.add("popup_opened");

}

function closePopup(popupType) {

  document.removeEventListener("keydown", escapeKeyHandler);

  popupType.classList.remove("popup_opened");

  popupAddForm.reset();

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

}

function escapeKeyHandler(event) {

  if (event.key === "Escape") {

    closePopup(document.querySelector(".popup_opened"));

  }

  else return;

}

function popupClickHandler(event) {

  if (!event.target.classList.contains("popup") && !event.target.classList.contains("popup__close-button")) return;

  else {

    document.removeEventListener("keydown", escapeKeyHandler);

    closePopup(document.querySelector(".popup_opened"));

  }

}

/** Listeners for buttons */

editButton.addEventListener("click", function () {

  document.addEventListener("keydown", escapeKeyHandler);

  openPopup(popupTypeEdit);

});

addButton.addEventListener("click", function () {

  document.addEventListener("keydown", escapeKeyHandler);

  openPopup(popupTypeAdd);

});
