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
    this._isLikedByMe = likes.some(like => like._id == userId ? true : false);
    this._handleLike = handleLike;
    this._likeCountElement = this._element.querySelector(".photo__like-count");
    this._likeElement = this._element.querySelector(".photo__like");
    this._imageElement = this._element.querySelector(".photo__image");
    this._deleteElement = this._element.querySelector(".photo__delete");
  }

  /**
   * @method _setEventListeners
   * @description Private method to set the listeners for the image card
   * @private
   */

  _setEventListeners() {

    this._likeElement.addEventListener("click", this._handleLike);

    this._deleteElement.addEventListener("click", this._handleCardDelete);

    this._imageElement.addEventListener("click", this._handleCardClick);

  }

  /**
   * @method assignLikeCount
   * @description A public method to assign the new like count for the picture
   * @param {number} likeCount - The number of likes the picture has
   * @public
   */

  assignLikeCount(likeCount) {

    this._likeCountElement.textContent = likeCount;

    this._likeElement.classList.toggle("photo__like_active");

  }

  isLiked() {

    return this._likeElement.classList.contains("photo__like_active") ? true : false;

  }

  /**
   * @method createCard
   * @description Public method to create a new image card with all of its functions
   * @public
  */

  createCard() {

    if (this._userId != this._ownerId) this._deleteElement.classList.add("photo__delete_hidden");

    if (this._isLikedByMe) this._likeElement.classList.add("photo__like_active");

    this._setEventListeners();

    this._element.id = this._cardId;

    this._element.querySelector(".photo__title").textContent = this._title;

    this._likeCountElement.textContent = this._likeCount;

    const photoImage = this._imageElement;

    photoImage.src = this._url;

    photoImage.alt = `A photo of ${this._title}`;

    return this._element

  }

}
