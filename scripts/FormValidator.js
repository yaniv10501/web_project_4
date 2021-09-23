/** The FormValidator class
 * Public method enableValidation() to enable validation on the form
 * Public method resetValidation() to reset validation when JS changes the input
 */

export default class FormValidator {

  /** Constructor take form element and settings Object
   * Constructor build an input-list and finds the submit-button
   */

  constructor(form, settingsObject) {
    this._form = form;
    this._settingsObject = settingsObject;
    this._inputList = Array.from(this._form.querySelectorAll(this._settingsObject.inputSelector));
    this._submitButton = this._form.querySelector(this._settingsObject.submitButtonSelector);
  }

  /** Private method to check if the input-list has an invalid input */

  _hasInvalidInput() {

    return this._inputList.some(inputElement => {

      return !inputElement.validity.valid;

    });

  }

  /** Private method to toggle a submit-button state according to the input validation */

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

  /** Private method to make the error message visible */

  _showInputError(input, errorMessage) {

    const errorElement = this._form.querySelector(`.${input.id}-error`);

    input.classList.add(this._settingsObject.inputErrorClass);

    errorElement.textContent = errorMessage;

    errorElement.classList.add(this._settingsObject.errorClass);

  }

  /** Private method to hide the error message */

  _hideInputError(input) {

    const errorElement = this._form.querySelector(`.${input.id}-error`);

    input.classList.remove(this._settingsObject.inputErrorClass);

    errorElement.classList.remove(this._settingsObject.errorClass);

    errorElement.textContent = "";

  };

  /** Private method to check if a certain input is valid */

  _isValid = (input) => {

    if (!input.validity.valid) {

      this._showInputError(input, input.validationMessage);

    }

    else {

      this._hideInputError(input);

    }

  }

  /** Private method to handle the input event listener */

  _handleInput(input) {

    this._isValid(input);

    this._toggleButtonState();

  }

  /** Private method to set the event listeners for the inputs */

  _setEventListeners() {

    this._toggleButtonState();

    this._inputList.forEach((input) => {

      input.addEventListener("input", () => {

        this._handleInput(input);

      })

    });

  }

  /** Public method to manually reset a form after JS has changed its inputs */

  resetValidation() {

    this._toggleButtonState();

    this._inputList.forEach((input) => {

      this._hideInputError(input);

    });

  };

  /** Public method to enable validation on a form */

  enableValidation() {

    this._form.addEventListener("submit", (event) => {

      event.preventDefault();

    });

    this._setEventListeners();

  }

}
