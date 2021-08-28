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

let photoTemplate = document.querySelector("#photo").content;

let edit = document.querySelector(".profile__edit-button");

let add = document.querySelector(".profile__add-button");

let popupEdit = document.querySelector(".popup_type_edit");

let popupAdd = document.querySelector(".popup_type_add");

let clsEditPop = popupEdit.querySelector(".popup__close-button");

let clsAddPop = popupAdd.querySelector(".popup__close-button");

let editFormElement = popupEdit.querySelector(".popup__container");

let addFormElement = popupAdd.querySelector(".popup__container");

let profileName = document.querySelector(".profile__name");

let profileAbout = document.querySelector(".profile__description");

let nameInput = document.querySelector(".popup__input_type_name");

let jobInput = document.querySelector(".popup__input_type_about");

let placeTitleInput = document.querySelector(".popup__input_type_title");

let imageUrlInput = document.querySelector(".popup__input_type_url");

function createPhoto(photo) {

    const photoElement = photoTemplate.querySelector(".photo").cloneNode(true);

    photoElement.querySelector(".photo__title").textContent = photo.name;

    photoElement.querySelector(".photo__image").src = photo.link;

  return photoElement;
}

function addPhoto(photo) {

  document.querySelector(".photos__grid").prepend(createPhoto(photo));

}

function loadPhotos() {

  initialCards.forEach((photo) => {

    addPhoto(photo);

  });

}

function openEditPopup() {

  popupEdit.classList.add("popup_opened");

  nameInput.value = profileName.textContent;

  jobInput.value = profileAbout.textContent;

}

function closeEditPopup() {

  popupEdit.classList.remove("popup_opened");

}

function openAddPopup() {

  popupAdd.classList.add("popup_opened")

}

function clsAddPopup() {

  popupAdd.classList.remove("popup_opened")

}

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

loadPhotos();

edit.addEventListener("click", openEditPopup);

clsEditPop.addEventListener("click", closeEditPopup);

clsAddPop.addEventListener("click", clsAddPopup);

add.addEventListener("click", openAddPopup);

editFormElement.addEventListener("submit", handleEditFormSubmit);

addFormElement.addEventListener("submit", handleAddFormSubmit);
