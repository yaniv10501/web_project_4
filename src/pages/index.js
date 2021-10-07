/** Importing the Card and FormValidator classes */

import './index.css';
import {
  content,
  spinner,
  photoTemplate,
  editButton,
  addButton,
  popupAddForm,
  popupEditForm,
  popupEditPictureForm,
  photoGrid,
  nameInput,
  jobInput,
  editPictureInput,
  settingsObject,
  selectors,
  userInfoInitRes,
  profilePictureEditButton,
  popupDeletePictureForm,
  popupDeletePictureSubmitButton,
  popupAddSubmitButton,
  popupEditPictureSubmitButton,
  popupEditSubmitButton
} from '../utils/vars.js';

import Api from '../components/Api';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  authorization: "12be1991-4f28-449f-a9a9-71d4704b25a2"
})

const userInfo = new UserInfo({ name: selectors.profileName, job: selectors.profileJob, picture: selectors.profilePicture });

const addFormValidator = new FormValidator(popupAddForm, settingsObject);

const editFormValidator = new FormValidator(popupEditForm, settingsObject);

const editPictureFormValidator = new FormValidator(popupEditPictureForm, settingsObject);

/**
 * @function assignEditValues
 * @description Function to assign the values for the edit popup
*/

const assignEditValues = () => {

  const { name, job } = userInfo.getUserInfo();

  nameInput.value = name;

  jobInput.value = job;

};

/**
 * @function assignEditPictureValues
 * @description Function to assign the values for the edit picture popup
*/

const assignEditPictureValues = () => {

  editPictureInput.value = "";

}

/** Adding event listeneres to the image popup */

const popupWithImage = new PopupWithImage(selectors.popupTypeImage, {
  imageSelector: selectors.imageSelectorInPopup,
  titleSelector: selectors.titleSelectorInPopup
});

popupWithImage.setEventListeners();

/** Enabling validation for the add form */

addFormValidator.enableValidation();

/** Adding event listeners to the edit picture form */

const popupWithEditPictureForm = new PopupWithForm(selectors.popupTypeEditPicture, {
  handleSubmit: ({ picture }) => {

    popupEditPictureSubmitButton.textContent = "Saving...";

    api.setUserPicture(picture)
      .then(() => {
        userInfo.setUserPicture(picture);
      })
      .then(() => {
        popupWithEditPictureForm.closePopup()
        setTimeout(() => { popupEditPictureSubmitButton.textContent = "Save" }, 600);
      })
      .catch(err => console.log(err))
  },
  formReset: () => {
    assignEditPictureValues();
    editPictureFormValidator.resetValidation();
  }
})

popupWithEditPictureForm.setEventListeners();

/** Adding event listeneres to the add form popup */

const popupWithAddForm = new PopupWithForm(selectors.popupTypeAdd, {
  handleSubmit: ({ title, url }) => {

    popupAddSubmitButton.textContent = "Creating...";

    const newPhoto = {};

    api.addCard({ name: title, link: url })
      .then((res) => {
        newPhoto._id = res._id;
        newPhoto.owner = res.owner;
        newPhoto.likes = res.likes;
      })
      .then(() => {

        newPhoto.name = title;

        newPhoto.link = url;

        addPhoto(newPhoto);

        popupWithAddForm.closePopup();

        setTimeout(() => { popupAddSubmitButton.textContent = "Create" }, 600);

      })
      .catch(err => console.log(err))

  },

  formReset: () => {

    popupAddForm.reset();

    addFormValidator.resetValidation();

  }

});

popupWithAddForm.setEventListeners();

/** Adding event listeneres to the edit form popup */

const popupWithEditForm = new PopupWithForm(selectors.popupTypeEditInfo, {
  handleSubmit: ({ name, job }) => {

    popupEditSubmitButton.textContent = "Saving...";

    api.setUserinfo({ name: name, about: job })
      .then(() => {
        userInfo.setUserInfo({ name, job });
      })
      .then(() => {
        popupWithEditForm.closePopup();
        setTimeout(() => { popupEditSubmitButton.textContent = "Save" }, 600);
      })
      .catch(err => console.log(err))

  },

  formReset: () => {

    assignEditValues();

    editFormValidator.resetValidation();

  }
});

popupWithEditForm.setEventListeners();

/** Adding event listeners to the delete form */

const popupWithDeleteForm = new PopupWithForm(selectors.popupTypeDeletePicture, {
  handleSubmit: () => {

    popupDeletePictureSubmitButton.textContent = "Deleting...";

    api.deleteCard(popupDeletePictureForm._id)
      .then(() => {
        let deletedPicture = document.querySelector(`.photo[id='${popupDeletePictureForm._id}']`);
        deletedPicture.remove();
        deletedPicture = null;
        popupDeletePictureForm._id = ""
      })
      .then(() => {
        popupWithDeleteForm.closePopup();
        setTimeout(() => { popupDeletePictureSubmitButton.textContent = "Yes" }, 600);
      })
      .catch(err => console.log(err))
  },
  formReset: () => popupDeletePictureForm._id = ""
})

popupWithDeleteForm.setEventListeners();

function createCard({ name, link, _id, owner, likes }) {

  const card = new Card(name, link, _id, owner, userInfoInitRes._id, likes, photoTemplate, {
    handleCardClick: () => {
      popupWithImage.openPopup({ name, link });
    },
    handleCardDelete: () => {
      popupWithDeleteForm.openPopup();
      popupDeletePictureForm._id = _id;
    },
    handleLike: () => {

      if (card.isLiked()) {

        api.removeLike(_id)
          .then(res => card.assignLikeCount(res.likes.length))
          .catch(err => console.log(err))

      }

      else {

        api.addLike(_id)
          .then(res => card.assignLikeCount(res.likes.length))
          .catch(err => console.log(err))

      }

    }

  });

  return card.createCard();

}

/**
 * @function addPhoto
 * @description Function to add photos
 */

function addPhoto({ name, link, _id, owner, likes }) {

  const cardElement = createCard({ name, link, _id, owner, likes });

  photoGrid.prepend(cardElement);

}

/** Getting the user info and initial cards from the API and rendering the website */

Promise.all([api.getUserInfo(), api.getIntialCard()])
  .then((values) => {
    userInfoInitRes.name = values[0].name;
    userInfoInitRes.job = values[0].about;
    userInfoInitRes.picture = values[0].avatar;
    userInfoInitRes._id = values[0]._id;

    const photoGridSection = new Section({
      items: values[1],
      renderer: addPhoto

    }, selectors.photoGrid);
    photoGridSection.renderSection()
  })
  .then(() => {
    userInfo.setUserInfo({ name: userInfoInitRes.name, job: userInfoInitRes.job });
    userInfo.setUserPicture(userInfoInitRes.picture);
    assignEditValues();
    assignEditPictureValues();
    editFormValidator.enableValidation();
    editPictureFormValidator.enableValidation();
    spinner.classList.add("spinner_hidden");
    content.classList.remove("content_hidden");
  })
  .catch(err => console.log(err))

/** Adding listeners for the add, edit and edit picture buttons */

editButton.addEventListener("click", () => { popupWithEditForm.openPopup(); });

addButton.addEventListener("click", () => { popupWithAddForm.openPopup(); });

profilePictureEditButton.addEventListener("click", () => { popupWithEditPictureForm.openPopup(); });
