/** @module PopupWithForm */

import Popup from "./Popup.js";

/**
 * @class
 * @classdesc A child class of the popup class with modified methods for a popup witn a form
 * @constructor
 * @param {string} popupSelector - A selector for the popup
 * @param {object} - An object with functions to submit and reset the form
 * @property {function} handleSubmit - A callback to the form submit function
 * @property {function} formReset - A callback to the form reset function
 */

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleSubmit, formReset }) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._formReset = formReset;
  }

  /**
   * @method _getInputValues
   * @description A private method to collect the values from the input fields of the form
   * @private
   */

  _getInputValues() {

    const inputValues = {};

    const inputList = this._popup.querySelectorAll(".popup__input");

    inputList.forEach(input => {

      inputValues[input.name] = input.value;

    })

    return inputValues;

  }

  /**
   * @method setEventListeners
   * @description A modified method from the parent Popup to set the close and submit handlers to the form
   * @public
   */

  setEventListeners() {

    super.setEventListeners();

    this._popup.addEventListener("submit", (event) => {

      event.preventDefault();

      this._handleSubmit(this._getInputValues());

    });

  }

  /**
   * @method closePopup
   * @description A public method to close a popup
   * @public
   */

  closePopup() {

    super.closePopup();

    this._formReset();

  }

}
