/** Setting all Vars */

const photoTemplate = document.querySelector("#photo").content;

const editButton = document.querySelector(".profile__edit-button");

const addButton = document.querySelector(".profile__add-button");

const popupTypeEdit = document.querySelector(".popup_type_edit");

const popupTypeAdd = document.querySelector(".popup_type_add");

const popupTypeImage = document.querySelector(".popup_type_image");

const popupAddForm = document.querySelector(".popup__form[name='add']");

const popupEditForm = document.querySelector(".popup__form[name='edit']");

const photoGrid = document.querySelector(".photos__grid")

const popupImage = document.querySelector(".popup__image");

const popupImageTitle = document.querySelector(".popup__image-title")

const placeTitleInput = document.querySelector(".popup__input_type_title");

const imageUrlInput = document.querySelector(".popup__input_type_url");

const formList = document.querySelectorAll(".popup__form");

const profileName = document.querySelector(".profile__name");

const profileAbout = document.querySelector(".profile__description");

const nameInput = document.querySelector(".popup__input_type_name");

const jobInput = document.querySelector(".popup__input_type_about");

const settingsObject = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};
