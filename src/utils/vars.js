/** Setting all Vars */

export const photoTemplate = document.querySelector("#photo").content;

export const editButton = document.querySelector(".profile__edit-button");

export const addButton = document.querySelector(".profile__add-button");

export const popupAddForm = document.querySelector(".popup__form[name='add']");

export const popupEditForm = document.querySelector(".popup__form[name='edit']");

export const photoGrid = document.querySelector(".photos__grid")

export const nameInput = document.querySelector(".popup__input_type_name");

export const jobInput = document.querySelector(".popup__input_type_about");

export const selectors = {
  photoGrid: ".photos__grid",
  popupTypeImage: ".popup_type_image",
  popupTypeEdit: ".popup_type_edit",
  popupTypeAdd: ".popup_type_add",
  profileName: ".profile__name",
  profileJob: ".profile__description",
  imageSelectorInPopup: ".popup__image",
  titleSelectorInPopup: ".popup__image-title"
};

export const settingsObject = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};
