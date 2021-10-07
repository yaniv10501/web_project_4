/** Setting all Vars */

export const initialCards = [];

export const content = document.querySelector(".content");

export const spinner = document.querySelector(".spinner");

export const photoTemplate = document.querySelector("#photo").content;

export const editButton = document.querySelector(".profile__edit-button");

export const addButton = document.querySelector(".profile__add-button");

export const popupAddForm = document.querySelector(".popup__form[name='add']");

export const popupEditForm = document.querySelector(".popup__form[name='editInfo']");

export const popupEditPictureForm = document.querySelector(".popup__form[name='editPicture']");

export const popupDeletePictureForm = document.querySelector(".popup__form[name='delete']");

export const photoGrid = document.querySelector(".photos__grid");

export const nameInput = document.querySelector(".popup__input_type_name");

export const jobInput = document.querySelector(".popup__input_type_about");

export const editPictureInput = document.querySelector(".popup__input_type_profile-picture");

export const profilePictureEditButton = document.querySelector(".profile__edit-pic");

export const userInfoRes = {
  name: "",
  job: "",
  picture: "",
  _id: ""
};

export const selectors = {
  photoGrid: ".photos__grid",
  popupTypeImage: ".popup_type_image",
  popupTypeEditInfo: ".popup_type_edit-info",
  popupTypeEditPicture: ".popup_type_edit-picture",
  popupTypeDeletePicture: ".popup_type_delete",
  popupTypeAdd: ".popup_type_add",
  profileName: ".profile__name",
  profileJob: ".profile__description",
  profilePicture: ".profile__pic",
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
