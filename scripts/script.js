
let edit = document.querySelector(".profile__edit-rectangle");

let popup = document.querySelector(".popup");

let cls = document.querySelector(".popup__close-button");

let formElement = document.querySelector(".popup__save-button");

let profileName = document.querySelector(".profile__name");

let profileAbout = document.querySelector(".profile__description");

function openPopup() {

  popup.classList.add("popup_opened");

  document.querySelector(".popup__name-input").value = profileName.textContent;

  console.log(profileName.textContent);

  document.querySelector(".popup__about-input").value = profileAbout.textContent;

}

function closePopup() {

  popup.classList.remove("popup_opened");

}

function handleFormSubmit(evt) {

  evt.preventDefault();

  let nameInput = document.querySelector(".popup__name-input").value;

  let jobInput = document.querySelector(".popup__about-input").value;

  if (!nameInput && !jobInput) {

    popup.classList.remove("popup_opened");

  }

  else if (nameInput && !jobInput) {

    profileName.textContent = nameInput;

    popup.classList.remove("popup_opened");

  }

  else if (!nameInput && jobInput) {

    profileAbout.textContent = jobInput;

    popup.classList.remove("popup_opened");

  }

  else {

    profileName.textContent = nameInput;

    profileAbout.textContent = jobInput;

    popup.classList.remove("popup_opened");

  }

}

edit.addEventListener("click", openPopup);

cls.addEventListener("click", closePopup);

formElement.addEventListener("click", handleFormSubmit);




