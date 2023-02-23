class FormValidator {
    constructor(allSelectors, formSelector) {
        this._selectors = allSelectors;
        this.formElement = document.querySelector(formSelector);
        this._inputList = Array.from(this.formElement.querySelectorAll(this._selectors.inputSelector));
        this._submitButton = this.formElement.querySelector(this._selectors.submitButtonSelector);
    }

    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
            return false;
        } else {
            this._hideInputError(inputElement);
            return true;
        }
    };

    formIsValid() {
        let isValidResult = this._inputList.reduce((acc, inputElement) => {
            return this._isValid(inputElement) && acc
        }, true);
        this.setSubmitButtonState(isValidResult);
        return isValidResult;
    };

    setSubmitButtonState(formIsValid) {
        if (formIsValid === true) {
            this._submitButton.classList.remove(this._selectors.inactiveButtonClass);
            this._submitButton.removeAttribute('disabled');
        } else {
            this._submitButton.classList.add(this._selectors.inactiveButtonClass);
            this._submitButton.setAttribute('disabled', true);
        }
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._selectors.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._selectors.errorClass);
    };

    _hideInputError(inputElement) {
        const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._selectors.inputErrorClass);
        errorElement.classList.remove(this._selectors.errorClass);
        errorElement.textContent = '';
    };

    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
            });
        });
    };

    enableValidation() {
        this.formElement.addEventListener('input', () => this.formIsValid());
        this._setEventListeners();
    };
}

export { FormValidator };