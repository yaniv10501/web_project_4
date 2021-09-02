const showInputError = (form, input, errorMessage, settingsObject) => {

  const errorElement = form.querySelector(`.${input.id}-error`);

  input.classList.add(settingsObject.inputErrorClass);

  errorElement.textContent = errorMessage;

  errorElement.classList.add(settingsObject.errorClass);

};

const hideInputError = (form, input, settingsObject) => {

  const errorElement = form.querySelector(`.${input.id}-error`);

  input.classList.remove(settingsObject.inputErrorClass);

  errorElement.classList.remove(settingsObject.errorClass);

  errorElement.textContent = "";

};

const toggleButtonState = (form, inputList, submitButton, settingsObject) => {

  if (hasInvalidInput(inputList)) {

    submitButton.classList.add(settingsObject.inactiveButtonClass);

    form.removeEventListener("submit", handleEditFormSubmit);

    form.removeEventListener("submit", handleAddFormSubmit);

  }

  else {

    submitButton.classList.remove(settingsObject.inactiveButtonClass);

    form.addEventListener("submit", handleEditFormSubmit);

    form.addEventListener("submit", handleAddFormSubmit);

  }

}

const isValid = (form, input, settingsObject) => {

  if (!input.validity.valid) {

    showInputError(form, input, input.validationMessage, settingsObject);

  }

  else {

    hideInputError(form, input, settingsObject)

  }

};

const hasInvalidInput = (inputList) => {

  return inputList.some(inputElement => {

    return !inputElement.validity.valid;

  });

};

const setEventListeners = (form, settingsObject) => {

  const inputList = Array.from(form.querySelectorAll(settingsObject.inputSelector));

  const submitButton = form.querySelector(settingsObject.submitButtonSelector);

  toggleButtonState(form, inputList, submitButton, settingsObject);

  inputList.forEach((input) => {

    input.addEventListener("input", function () {

      isValid(form, input, settingsObject);

      toggleButtonState(form, inputList, submitButton, settingsObject);

    })

  })

}

const enableValidation = (settingsObject) => {

  const formList = Array.from(document.querySelectorAll(settingsObject.formSelector));

  formList.forEach((form) => {

    form.addEventListener("submit", function (event) {

      event.preventDefault();

    });

    setEventListeners(form, settingsObject);

  })

};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});
