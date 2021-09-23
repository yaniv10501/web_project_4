/** @module FormValidator */

/**
 * @class
 * @classdesc Enable validation on a form with the enableValidation() method,
 * reset validation when JS changes the input with the resetValidation() method.
 * @constructor
 * @param {object} form - A form element
 * @param {object} settingsObject - An object with selectors and classes
 */

export default class FormValidator {

  constructor(form, settingsObject) {
    this._form = form;
    this._settingsObject = settingsObject;
    this._inputList = Array.from(this._form.querySelectorAll(this._settingsObject.inputSelector));
    this._submitButton = this._form.querySelector(this._settingsObject.submitButtonSelector);
  }

  /**
   * @method _hasInvalidInput
   * @description Private method to check if the input-list has an invalid input
   * @private
   */

  _hasInvalidInput() {

    return this._inputList.some((inputElement) => !inputElement.validity.valid);

  }

  /**
   * @method _toggleButtonState
   * @description Private method to toggle a submit-button state according to the input validation
   * @private
   */

  _toggleButtonState() {

    if (this._hasInvalidInput(this._inputList)) {

      this._submitButton.classList.add(this._settingsObject.inactiveButtonClass);

      this._submitButton.disabled = true;

    }

    else {

      this._submitButton.classList.remove(this._settingsObject.inactiveButtonClass);

      this._submitButton.disabled = false;

    }

  }

  /**
   * @method _showInputError
   * @description Private method to make the error message visible
   * @private
  */

  _showInputError(input, errorMessage) {

    const errorElement = this._form.querySelector(`.${input.id}-error`);

    input.classList.add(this._settingsObject.inputErrorClass);

    errorElement.textContent = errorMessage;

    errorElement.classList.add(this._settingsObject.errorClass);

  }

  /**
   * @method _hideInputError
   * @description Private method to hide the error message
   * @private
  */

  _hideInputError(input) {

    const errorElement = this._form.querySelector(`.${input.id}-error`);

    input.classList.remove(this._settingsObject.inputErrorClass);

    errorElement.classList.remove(this._settingsObject.errorClass);

    errorElement.textContent = "";

  };

  /**
   * @method _checkInputValidity
   * @description Private method to check if a certain input is valid
   * @private
  */

  _checkInputValidity = (input) => {

    if (!input.validity.valid) {

      this._showInputError(input, input.validationMessage);

    }

    else {

      this._hideInputError(input);

    }

  }

  /**
   * @method _handleInput
   * @description Private method to handle the input event listener
   * @private
   */

  _handleInput(input) {

    this._checkInputValidity(input);

    this._toggleButtonState();

  }

  /**
   * @method _setEventListeners
   * @description Private method to set the event listeners for the inputs
   * @private
  */

  _setEventListeners() {

    this._toggleButtonState();

    this._inputList.forEach((input) => {

      input.addEventListener("input", () => {

        this._handleInput(input);

      })

    });

  }

  /**
   * @method resetValidation
   * @description Public method to manually reset a form after JS has changed its inputs
   * @public
  */

  resetValidation() {

    this._toggleButtonState();

    this._inputList.forEach((input) => {

      this._hideInputError(input);

    });

  };

  /**
   * @method enableValidation
   * @description Public method to enable validation on a form
   * @public
   */

  enableValidation() {

    this._form.addEventListener("submit", (event) => {

      event.preventDefault();

    });

    this._setEventListeners();

  }

}
