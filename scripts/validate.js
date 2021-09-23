/** Assign name and about info for edit popup */

export const assignEditValues = () => {

  nameInput.value = profileName.textContent;

  jobInput.value = profileAbout.textContent;

};

assignEditValues();

/** Function to show input error */

const showInputError = (form, input, errorMessage, settingsObject) => {

  const errorElement = form.querySelector(`.${input.id}-error`);

  input.classList.add(settingsObject.inputErrorClass);

  errorElement.textContent = errorMessage;

  errorElement.classList.add(settingsObject.errorClass);

};

/** Function to hide input error */

const hideInputError = (form, input, settingsObject) => {

  const errorElement = form.querySelector(`.${input.id}-error`);

  input.classList.remove(settingsObject.inputErrorClass);

  errorElement.classList.remove(settingsObject.errorClass);

  errorElement.textContent = "";

};

/** Function to toggle the submit button state */

const toggleButtonState = (inputList, submitButton, settingsObject) => {

  if (hasInvalidInput(inputList)) {

    submitButton.classList.add(settingsObject.inactiveButtonClass);

    submitButton.disabled = true;

  }

  else {

    submitButton.classList.remove(settingsObject.inactiveButtonClass);

    submitButton.disabled = false;

  }

}

/** Function to check if a specific input is valid */

const isValid = (form, input, settingsObject) => {

  if (!input.validity.valid) {

    showInputError(form, input, input.validationMessage, settingsObject);

  }

  else {

    hideInputError(form, input, settingsObject);

  }

};

/** Function to check if an input list has an invalid input,
 * Some method is used to return as soon as an invalid input is found
 */

const hasInvalidInput = (inputList) => {

  return inputList.some(inputElement => {

    return !inputElement.validity.valid;

  });

};

/** Function to set the event listeners for the form inputs */

const setEventListeners = (form, settingsObject) => {

  const inputList = Array.from(form.querySelectorAll(settingsObject.inputSelector));

  const submitButton = form.querySelector(settingsObject.submitButtonSelector);

  toggleButtonState(inputList, submitButton, settingsObject);

  inputList.forEach((input) => {

    input.addEventListener("input", function () {

      isValid(form, input, settingsObject);

      toggleButtonState(inputList, submitButton, settingsObject);

    })

  })

}

/** Function to enable validation for the forms */

const enableValidation = (settingsObject) => {

  const formList = Array.from(document.querySelectorAll(settingsObject.formSelector));

  formList.forEach((form) => {

    form.addEventListener("submit", function (event) {

      event.preventDefault();

    });

    setEventListeners(form, settingsObject);

  })

};

/** Calling the enableValidation function and passing the settings object */

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});

/** Exporting the resetValidation so i can use it in index.js for the closePopup function */

export const resetValidation = (formList) => {

  formList.forEach((form) => {

    const inputList = Array.from(form.querySelectorAll(".popup__input"));

    const submitButton = form.querySelector(".popup__save-button");

    toggleButtonState(inputList, submitButton, { inactiveButtonClass: "popup__save-button_disabled" });

    inputList.forEach((input) => {

      hideInputError(form, input, {
        inputErrorClass: "popup__input_type_error",
        errorClass: "popup__error_visible"
      });

    });

  });

};
