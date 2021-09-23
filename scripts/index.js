/** Importing the Card and FormValidator classes */

import { assignEditValues, loadPhotos, openPopup, handleAddFormSubmit, handleEditFormSubmit } from './utils.js';
import FormValidator from './FormValidator.js';

/** Calling the assignEditValues function to set the edit popup input values on page start */

assignEditValues();

/** Calling the loadPhotos function */

loadPhotos();

/** Enabling validation for all the forms */

const addForm = new FormValidator(popupAddForm, settingsObject);

const editForm = new FormValidator(popupEditForm, settingsObject);

addForm.enableValidation();

editForm.enableValidation();

/** Listeners for buttons */

editButton.addEventListener("click", function () {

  openPopup(popupTypeEdit);

});

addButton.addEventListener("click", function () {

  openPopup(popupTypeAdd);

});

popupTypeAdd.addEventListener("submit", handleAddFormSubmit);

popupTypeEdit.addEventListener("submit", handleEditFormSubmit);

export { addForm, editForm};
