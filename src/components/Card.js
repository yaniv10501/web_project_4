/** @module Card */

/**
 * @class
 * @classdesc Creates a new card with the createCard() method
 * @constructor
 * @param {string} title - The title of the card
 * @param {string} url - The url of the image
 * @param {string} cardId - The id of the card
 * @param {string} ownerId - The id of the card owner
 * @param {string} userId - The id of the user
 * @param {array} likes - The array of the card likes
 * @param {element} template - A template for the card
 * @param {object} - An object with functions to handle image click, image delete and image like
 * @param {function} handleCardClick - A callback to the image click handler
 * @param {function} handleCardDelete - A callback to the delete card handler
 * @param {function} handleLike - A callback to the image like handler
 */

export default class Card {

  constructor(title, url, cardId, ownerId, userId, likes, template, { handleCardClick, handleCardDelete, handleLike }) {
    this._title = title;
    this._url = url;
    this._cardId = cardId;
    this._element = template.querySelector(".photo").cloneNode(true);
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._ownerId = ownerId._id;
    this._userId = userId;
    this._likeCount = likes.length;
    this._isLiked = likes.some(like => like._id == userId ? true : false);
    this._handleLike = handleLike;
  }

  /**
   * @method _setEventListeners
   * @description Private method to set the listeners for the image card
   * @private
   */

  _setEventListeners() {

    this._element.querySelector(".photo__like").addEventListener("click", this._handleLike);

    this._element.querySelector(".photo__delete").addEventListener("click", this._handleCardDelete);

    this._element.querySelector(".photo__image").addEventListener("click", this._handleCardClick);

  }

  /**
   * @method createCard
   * @description Public method to create a new image card with all of its functions
   * @public
  */

  createCard() {

    if (this._userId != this._ownerId) this._element.querySelector(".photo__delete").classList.add("photo__delete_hidden");

    if (this._isLiked) this._element.querySelector(".photo__like").classList.add("photo__like_active");

    this._setEventListeners();

    this._element.id = this._cardId;

    this._element.querySelector(".photo__title").textContent = this._title;

    this._element.querySelector(".photo__like-count").textContent = this._likeCount;

    const photoImage = this._element.querySelector(".photo__image");

    photoImage.src = this._url;

    photoImage.alt = `A photo of ${this._title}`;

    return this._element

  }

}
