class Card {
    constructor(name, link, templateSelector) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.gallery__card')
            .cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this.element = this._getTemplate();
        this._setEventListeners();
        this.element.querySelector('.card__img').src = this._link;
        this.element.querySelector('.card__text').textContent = this._name;

        return this.element;
    }

    _setEventListeners() {
        this.element.addEventListener('click', (evt) =>
            this._handleClick(evt));
    }

    _handleClick(evt) {
        if (evt.target.classList.contains('btn_like')) {
            this._like(evt.target);
        } else if (evt.target.classList.contains('btn_trash')) {
            this._deleteCard(evt.target);
        } else if (evt.target.classList.contains('card__img')) {
            this._openFullImg(evt.target);
        }
    }

    _like(item) {
        item.classList.toggle('btn_like_active');
    };

    _deleteCard(item) {
        item.closest('.gallery__card').remove();
        //дописать удаление из initialCards
    };

    _openFullImg(item) {
        const fullImgPopup = document.querySelector('.popup_full-img');
        fullImgPopup.querySelector('.popup__img').src = item.src;
        fullImgPopup.querySelector('.popup__img').alt = item.nextElementSibling.nextElementSibling.children[0].innerText;
        fullImgPopup.querySelector('.full-img__title').innerText = item.nextElementSibling.nextElementSibling.children[0].innerText;

        fullImgPopup.classList.add('popup_opened');
    };
}

export { Card };

