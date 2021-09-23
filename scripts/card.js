/** Importing the openPopup() function so i can use it in the _handleImageClick() method */

import openPopup from "./index.js";

/** The Card Class
 * Public method createCard() to create a new image card with all of its functions
 */

export default class Card {

  /** Constructor take image title and url
   * Constructor clone the template from HTML to make a new card element
   */

  constructor(title, url) {
    this._title = title;
    this._url = url;
    this._element = photoTemplate.querySelector(".photo").cloneNode(true);
  }

  /** Public method to create a new image card with all of its functions */

  createCard() {

    this._setEventListeners();

    this._element.querySelector(".photo__title").textContent = this._title;

    this._element.querySelector(".photo__image").src = this._url;

    this._element.querySelector(".photo__image").alt = `A photo of ${this._title}`;

    return this._element

  }

  /** Private method to handle a click on the delete icon */

  _handleDelete(event) {

    let photoItem = event.target.closest(".photo");

    photoItem.remove();

    photoItem = null;

  }

  /** Private method to handle a click on the like icon */

  _handleLike(event) {

    event.target.classList.toggle("photo__like_active");

  }

  /** Private method to handle a click on the image and opening a popup */

  _handleImageClick() {

    popupImage.src = this._url;

    popupImage.alt = `Full screen image of ${this._title}`;

    popupImageTitle.textContent = this._title;

    openPopup(popupTypeImage);

  }

  /** Private method to set the listeners for the image card */

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
