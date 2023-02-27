import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._image = this._popup.querySelector('.popup__img');
        this._description = this._popup.querySelector('.full-img__title');
    }

    open(title, src) {
        this._description.textContent = title;
        this._image.src = src;
        this._image.alt = title;
        super.open();
    }
}