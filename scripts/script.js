
let edit = document.querySelector(".profile__edit-button");

let popup = document.querySelector(".popup");

let cls = document.querySelector(".popup__close-button");

let formElement = document.querySelector(".popup__container");

let profileName = document.querySelector(".profile__name");

let profileAbout = document.querySelector(".profile__description");

let nameInput = document.querySelector(".popup__input_type_name");

let jobInput = document.querySelector(".popup__input_type_about");

function openPopup() {

  popup.classList.add("popup_opened");

  nameInput.value = profileName.textContent;

  jobInput.value = profileAbout.textContent;

}

function closePopup() {

  popup.classList.remove("popup_opened");

}

function handleFormSubmit(evt) {

  evt.preventDefault();

  profileName.textContent = nameInput.value;

  profileAbout.textContent = jobInput.value;

  closePopup();

}

edit.addEventListener("click", openPopup);

cls.addEventListener("click", closePopup);

formElement.addEventListener("submit", handleFormSubmit);
