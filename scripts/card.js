import openPopup from "./index.js";

export default class Card {

  constructor(title, url) {
    this._title = title;
    this._url = url;
  }

  _getTemplate() {

    const cardElement = photoTemplate.querySelector(".photo").cloneNode(true);

    return cardElement;

  };

  createCard() {

    this._element = this._getTemplate();

    this._setEventListeners();

    this._element.querySelector(".photo__title").textContent = this._title;

    this._element.querySelector(".photo__image").src = this._url;

    this._element.querySelector(".photo__image").alt = `A photo of ${this._title}`;

    return this._element

  }

  _handleDelete(event) {

    let photoItem = event.target.closest(".photo");

    photoItem.remove();

    photoItem = null;

  }

  _handleLike(event) {

    event.target.classList.toggle("photo__like_active");

  }

  _handleImageClick() {

    popupImage.src = this._url;

    popupImage.alt = `Full screen image of ${this._title}`;

    popupImageTitle.textContent = this._title;

    openPopup(popupTypeImage);

  }

  _setEventListeners() {

    this._element.querySelector(".photo__like").addEventListener("click", (event) => {

      this._handleLike(event);

    });

    this._element.querySelector(".photo__delete").addEventListener("click", (event) => {

      this._handleDelete(event);

    });

    this._element.querySelector(".photo__image").addEventListener("click", () => {

      this._handleImageClick();

    });

  }

}
