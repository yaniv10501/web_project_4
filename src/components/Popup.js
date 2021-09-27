/** @module Popup */

/**
 * @class
 * @classdesc A parent class to the popups with the openPopup, closePopup and setEventListeners methods
 * @method openPopup - A public method to open a popup
 * @method closePopup - A public method to close a popup
 * @method setEventListeners - A public method to set the click and key-down event listeners to close the popup
 * @constructor
 * @param {string} popupSelector - A selector for the popup
 */

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
  }

  /**
   * @method closePopup
   * @description A public method to close a popup
   * @public
   */

  closePopup() {

    this._popup.classList.remove("popup_opened");

  }

  /**
   * @method _escapeKeyHandler
   * @description A private method for the key-down listener to close to popup when the user press the "escape" key
   * @private
   */

  _escapeKeyHandler = (event) => {

    if (event.key === "Escape") {

      this.closePopup();

    }

  }

  /**
   * @method _popupClickHandler
   * @description A private method for the click listener to close to popup when the user click the overlay or the close button
   * @private
   */

  _popupClickHandler = (event) => {

    if (!event.target.classList.contains("popup") && !event.target.classList.contains("popup__close-button")) return;

    this.closePopup();

  }

  /**
   * @method setEventListeners
   * @description A public method to set the click and key-down event listeners to close the popup
   * @public
   */

  setEventListeners() {

    document.addEventListener("click", this._popupClickHandler);

    document.addEventListener("keydown", this._escapeKeyHandler);

  }

  /**
   * @method openPopup
   * @description A public method to open a popup
   * @public
   */

  openPopup() {

    this._popup.classList.add("popup_opened");

  }

}
