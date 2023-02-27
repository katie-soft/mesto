// Импорт модулей
import { initialCards, selectors, gallery, cardName, cardLink } from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

// Отрисовка карточек
const popup = new PopupWithImage('.popup_full-img');
popup.setEventListeners();

const cardGallery = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item.name, item.link, '#template__card', () => popup.open(item.name, item.link));
        const cardElement = card.generateCard();
        cardGallery.addItem(cardElement);
    }
}, '.gallery');

cardGallery.renderItems();

// Валидация форм
const formEditProfileValidator = new FormValidator(selectors, '.form_edit-profile');
const formAddCardValidator = new FormValidator(selectors, '.form_add-card');

formEditProfileValidator.enableValidation();
formAddCardValidator.enableValidation();

// Форма редактирования профиля
function editProfile(evt) {
    evt.preventDefault();

    if (formEditProfileValidator.formIsValid()) {
        userInfo.setUserInfo({
            name: formEditProfileValidator.formElement.querySelector('#name-input').value,
            description: formEditProfileValidator.formElement.querySelector('#job-input').value
        });
        popupEditProfile.close();
    }
}

const userInfo = new UserInfo({ nameSelector: '.user-profile__name', descriptionSelector: '.user-profile__description' });
const popupEditProfile = new PopupWithForm('.popup_edit-profile', editProfile);
popupEditProfile.setEventListeners();

document.querySelector('.user-profile .btn_edit').addEventListener('click', () => {
    popupEditProfile._formElement.querySelector('#name-input').value = userInfo.name.textContent;
    popupEditProfile._formElement.querySelector('#job-input').value = userInfo.description.textContent;
    popupEditProfile.open();
});

// Форма добавления картинки
function addNewCard(evt) {
    evt.preventDefault();

    if (formAddCardValidator.formIsValid()) {
        let obj = { name: cardName.value, link: cardLink.value };
        initialCards.unshift(obj);
        gallery.innerHTML = '';
        cardLink.value = '';
        cardName.value = '';
        formAddCardValidator.setSubmitButtonState(false);
        cardGallery.renderItems();
        popupAddCard.close();
    }
}

const popupAddCard = new PopupWithForm('.popup_add-card', addNewCard);
popupAddCard.setEventListeners();

document.querySelector('.btn_add').addEventListener('click', () => {
    popupAddCard.open();
});

