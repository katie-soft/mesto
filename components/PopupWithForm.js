import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(selector, handleFormSubmit) {
        super(selector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));
    }

    _getInputValues() {
        this.inputValues = {};
        this._inputList.forEach(input => this.inputValues[input.id] = input.value);
        return this.inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', this._handleFormSubmit);
    }

    close() {
        super.close();
        this._formElement.reset();
    }
}