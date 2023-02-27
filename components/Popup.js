export default class Popup {
    constructor(selector) {
        this._popup = document.querySelector(selector);
        this._closeOnEsc = this._closeOnEsc.bind(this);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._closeOnEsc);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closeOnEsc);
    }

    _closeOnEsc(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('btn_close') || evt.target === document.querySelector('.popup_opened')) {
                this.close();
            }
        })
    }
}