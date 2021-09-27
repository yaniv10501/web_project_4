/** Importing the Card and FormValidator classes */

import './styles/index.css';
import { initialCards } from './utils/initial-cards.js';
import {
  photoTemplate,
  editButton,
  addButton,
  popupAddForm,
  popupEditForm,
  photoGrid,
  nameInput,
  jobInput,
  settingsObject,
  selectors
} from './utils/vars.js';

import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';

const userInfo = new UserInfo({ name: selectors.profileName, job: selectors.profileJob });

/**
 * @function assignEditValues
 * @description Function to assign the values for the edit popup
*/

const assignEditValues = () => {

  const { name, job } = userInfo.getUserInfo();

  nameInput.value = name;

  jobInput.value = job;

};

/** Calling the assignEditValues function to set the edit popup input values on page start */

assignEditValues();

/** Adding event listeneres to the image popup */

const popupWithImage = new PopupWithImage(selectors.popupTypeImage, {
  imageSelector: selectors.imageSelectorInPopup,
  titleSelector: selectors.titleSelectorInPopup
});

popupWithImage.setEventListeners();

/**
 * @function addPhoto
 * @description Function to add photos
 */

function addPhoto({ name, link }) {

  const card = new Card(name, link, photoTemplate, {
    handleCardClick: () => {
      popupWithImage.openPopup({ name, link });
    }
  });

  const cardElement = card.createCard();

  photoGrid.prepend(cardElement);

}

/** Creating and rendering the photoGrid section */

const photoGridSection = new Section({
  items: initialCards,
  renderer: (item) => {
    addPhoto(item);
  }
}, selectors.photoGrid);

photoGridSection.renderSection();

/** Enabling validation for all the forms */

const addFormValidator = new FormValidator(popupAddForm, settingsObject);

const editFormValidator = new FormValidator(popupEditForm, settingsObject);

addFormValidator.enableValidation();

editFormValidator.enableValidation();

/** Adding event listeneres to the add form popup */

const popupWithAddForm = new PopupWithForm(selectors.popupTypeAdd, {
  handleSubmit: ({ title, url }) => {

    const newPhoto = {};

    newPhoto.name = title;

    newPhoto.link = url;

    addPhoto(newPhoto);

    popupWithAddForm.closePopup();

  },

  formReset: () => {

    popupAddForm.reset();

    addFormValidator.resetValidation();

  }

});

popupWithAddForm.setEventListeners();

/** Adding event listeneres to the edit form popup */

const popupWithEditForm = new PopupWithForm(selectors.popupTypeEdit, {
  handleSubmit: ({ name, job }) => {

    userInfo.setUserInfo({ name, job });

    popupWithEditForm.closePopup();

  },

  formReset: () => {

    assignEditValues();

    editFormValidator.resetValidation();

  }
});

popupWithEditForm.setEventListeners();

/** Adding listeners for the add and edit buttons */

editButton.addEventListener("click", () => { popupWithEditForm.openPopup(); });

addButton.addEventListener("click", () => { popupWithAddForm.openPopup(); });
