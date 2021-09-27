/** @module PopupWithImage */

import Popup from "./Popup.js";

/**
 * @class
 * @classdesc A child class of the popup class with modified methods for a popup witn an image
 * @constructor
 * @param {string} popupSelector - A selector for the popup
 */

export default class PopupWithImage extends Popup {
  constructor(popupSelector, { imageSelector, titleSelector}) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector(imageSelector);
    this._popupImageTitle = this._popup.querySelector(titleSelector);
  }

  /**
   * @method openPopup
   * @description A modified method to open a popup with the image being clicked
   * @public
   */

  openPopup({ name, link }) {

    this._popupImage.alt = `Full screen image of ${name}`;

    this._popupImageTitle.textContent = name;

    this._popupImage.src = link;

    super.openPopup();

  }

}
