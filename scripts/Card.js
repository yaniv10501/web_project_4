/** Importing the openPopup() function so i can use it in the _handleImageClick() method */

import { openPopup } from "./utils.js";

/** @module Card */

/**
 * @class
 * @classdesc Creates a new card with the createCard() method
 * @constructor
 * @param {string} title - the title of the card
 * @param {string} url - the url of the image
 * @param {object} template - a template for the card
 */

export default class Card {

  constructor(title, url, template) {
    this._title = title;
    this._url = url;
    this._element = template.querySelector(".photo").cloneNode(true);
  }

  /**
   * @method _handleDelete
   * @description Private method to handle a click on the delete icon
   * @private
   */

  _handleDelete() {

    let photoItem = this._element.closest(".photo");

    photoItem.remove();

    photoItem = null;

  }

  /**
   * @method _handleLike
   * @description Private method to handle a click on the like icon
   * @private
   */

  _handleLike() {

    this._element.classList.toggle("photo__like_active");

  }

  /**
   * @method _handleImageClick
   * @description Private method to handle a click on the image and opening a popup
   * @private
   */

  _handleImageClick() {

    popupImage.src = this._url;

    popupImage.alt = `Full screen image of ${this._title}`;

    popupImageTitle.textContent = this._title;

    openPopup(popupTypeImage);

  }

  /**
   * @method _setEventListeners
   * @description Private method to set the listeners for the image card
   * @private
   */

  _setEventListeners() {

    this._element.querySelector(".photo__like").addEventListener("click", this._handleLike);

    this._element.querySelector(".photo__delete").addEventListener("click", this._handleDelete);

    this._element.querySelector(".photo__image").addEventListener("click", this._handleImageClick);

  }

  /**
   * @method createCard
   * @description Public method to create a new image card with all of its functions
   * @public
  */

  createCard() {

    this._setEventListeners();

    this._element.querySelector(".photo__title").textContent = this._title;

    this._element.querySelector(".photo__image").src = this._url;

    this._element.querySelector(".photo__image").alt = `A photo of ${this._title}`;

    return this._element

  }

}
