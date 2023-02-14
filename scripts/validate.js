const selectors = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.btn_save',
    inactiveButtonClass: 'btn_save_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'form__input-error_active'
};

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
        return false;
    } else {
        hideInputError(formElement, inputElement);
        return true;
    }
};

const formIsValid = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
    let isValidResult = inputList.reduce((acc, inputElement) => {
        return isValid(formElement, inputElement) && acc
    }, true
    );
    setSubmitButtonState(formElement, isValidResult);
    return isValidResult;
}

function setSubmitButtonState(formElement, formIsValid) {
    if (formIsValid === true) {
        formElement.querySelector(selectors.submitButtonSelector).classList.remove(selectors.inactiveButtonClass);
        formElement.querySelector(selectors.submitButtonSelector).removeAttribute('disabled');
    } else {
        formElement.querySelector(selectors.submitButtonSelector).classList.add(selectors.inactiveButtonClass);
        formElement.querySelector(selectors.submitButtonSelector).setAttribute('disabled', true);
    }
}

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(selectors.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(selectors.errorClass);
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(selectors.inputErrorClass);
    errorElement.classList.remove(selectors.errorClass);
    errorElement.textContent = '';
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement);
        });
    });
};

const enableValidation = (selectors) => {
    const formList = Array.from(document.querySelectorAll(selectors.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('input', () => formIsValid(formElement));
        setEventListeners(formElement);
    });
}

enableValidation(selectors);



