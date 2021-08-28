// Intial photos content //

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

// Setting all Vars //

let photoTemplate = document.querySelector("#photo").content;

let editBtn = document.querySelector(".profile__edit-button");

let addBtn = document.querySelector(".profile__add-button");

let popupEdit = document.querySelector(".popup_type_edit");

let popupAdd = document.querySelector(".popup_type_add");

let popupImage = document.querySelector(".popup_type_image");

let clsEditPop = popupEdit.querySelector(".popup__close-button");

let clsAddPop = popupAdd.querySelector(".popup__close-button");

let clsImagePop = popupImage.querySelector(".popup__close-button");

let editFormElement = popupEdit.querySelector(".popup__container");

let addFormElement = popupAdd.querySelector(".popup__container");

let imagePopupContainer = popupImage.querySelector(".popup__container");

let profileName = document.querySelector(".profile__name");

let profileAbout = document.querySelector(".profile__description");

let nameInput = document.querySelector(".popup__input_type_name");

let jobInput = document.querySelector(".popup__input_type_about");

let placeTitleInput = document.querySelector(".popup__input_type_title");

let imageUrlInput = document.querySelector(".popup__input_type_url");

// Element for the popup photo //

const photoForPopup = document.createElement("img");

photoForPopup.classList.add("popup__image");

imagePopupContainer.prepend(photoForPopup);

// Functions to load initial photos //

function createPhoto(photo) {

  const photoElement = photoTemplate.querySelector(".photo").cloneNode(true);

  photoElement.querySelector(".photo__title").textContent = photo.name;

  photoElement.querySelector(".photo__image").src = photo.link;

  // Listener and function for like button //

  photoElement.querySelector(".photo__like").addEventListener("click", function(evt) {

    evt.target.classList.toggle("photo__like_active");

  });

  // Listener and function for delete button //

  photoElement.querySelector(".photo__delete").addEventListener("click", function(evt) {

    const photoItem = evt.target.closest(".photo");

    photoItem.remove();

  });

  // Listener and function for image popup //

  photoElement.querySelector(".photo__image").addEventListener("click", function() {

    photoForPopup.src = photo.link;

    popupImage.querySelector(".popup__image-title").textContent = photo.name;

    popupImage.classList.add("popup_opened");

  })

  return photoElement;

}

function loadPhotos() {

initialCards.forEach((photo) => {

  addPhoto(photo);

});

}

loadPhotos();

//^ Photos loaded ^//
//
// Function to add photos //

function addPhoto(photo) {

  document.querySelector(".photos__grid").prepend(createPhoto(photo));

}

// Functions for popups //

function openEditPopup() {

  popupEdit.classList.add("popup_opened");

  nameInput.value = profileName.textContent;

  jobInput.value = profileAbout.textContent;

}

function closeEditPopup() {

  popupEdit.classList.remove("popup_opened");

}

function openAddPopup() {

  popupAdd.classList.add("popup_opened");

}

function clsAddPopup() {

  popupAdd.classList.remove("popup_opened");

}

function clsImagePopup() {

  popupImage.classList.remove("popup_opened");

}

// Functions for submitting forms //

function handleEditFormSubmit(evt) {

  evt.preventDefault();

  profileName.textContent = nameInput.value;

  profileAbout.textContent = jobInput.value;

  closeEditPopup();

}

function handleAddFormSubmit(evt) {

  evt.preventDefault();

  const newPhoto = [{
    name: "",
    link: ""
  }];

  newPhoto.name = placeTitleInput.value;

  newPhoto.link = imageUrlInput.value;

  addPhoto(newPhoto);

  clsAddPopup();

}

// Listeners for buttons //

editBtn.addEventListener("click", openEditPopup);

clsEditPop.addEventListener("click", closeEditPopup);

addBtn.addEventListener("click", openAddPopup);

clsAddPop.addEventListener("click", clsAddPopup);

clsImagePop.addEventListener("click", clsImagePopup);

editFormElement.addEventListener("submit", handleEditFormSubmit);

addFormElement.addEventListener("submit", handleAddFormSubmit);
