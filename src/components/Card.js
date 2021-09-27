/** @module Card */

/**
 * @class
 * @classdesc Creates a new card with the createCard() method
 * @constructor
 * @param {string} title - The title of the card
 * @param {string} url - The url of the image
 * @param {element} template - A template for the card
 * @param {object} - An object with a function to handle image click
 * @param {function} handleCardClick - A callback to the image click handler
 */

export default class Card {

  constructor(title, url, template, { handleCardClick }) {
    this._title = title;
    this._url = url;
    this._element = template.querySelector(".photo").cloneNode(true);
    this._handleCardClick = handleCardClick;
  }

  /**
   * @method _handleDelete
   * @description Private method to handle a click on the delete icon
   * @private
   */

  _handleDelete = () => {

    this._element.remove();

    this._element = null;

  }

  /**
   * @method _handleLike
   * @description Private method to handle a click on the like icon
   * @private
   */

  _handleLike = () => {

    this._element.querySelector(".photo__like").classList.toggle("photo__like_active");

  }

  /**
   * @method _handleImageClick
   * @description Private method to handle a click on the image and opening a popup
   * @private
   */

  _handleImageClick = () => {

    this._handleCardClick();

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

    const photoImage = this._element.querySelector(".photo__image");

    photoImage.src = this._url;

    photoImage.alt = `A photo of ${this._title}`;

    return this._element

  }

}
