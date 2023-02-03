// Загрузка стартовых карточек

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const cardTemplate = document.querySelector('#template__card').content;
const gallery = document.querySelector('.gallery');

function appendCard(cards) {
    for (key in cards) {
        const initCard = cardTemplate.querySelector('.gallery__card').cloneNode(true);
        initCard.querySelector('.card__img').src = cards[key].link;
        initCard.querySelector('.card__text').textContent = cards[key].name;

        initCard.querySelector('.card__img').addEventListener('click', openFullImg);

        gallery.append(initCard);
    }
}

appendCard(initialCards);

// Открытие попапа (profile edit)

const editProfileBtn = document.querySelector('.user-profile .btn_edit');
const editProfilePopup = document.querySelector('.popup_edit-profile');

editProfileBtn.addEventListener('click', () => {
    editProfilePopup.classList.add('popup_opened');
});

// Открытие попапа (add card)

const addCardBtn = document.querySelector('.btn_add');
const addCardPopup = document.querySelector('.popup_add-card');

addCardBtn.addEventListener('click', () => {
    addCardPopup.classList.add('popup_opened');
});

// Открытие попапа (full img)

const fullImgPopup = document.querySelector('.popup_full-img');

function openFullImg() {

    fullImgPopup.querySelector('.popup__img').src = this.src;
    fullImgPopup.querySelector('.popup__img').alt = this.nextElementSibling.nextElementSibling.children[0].innerText;
    fullImgPopup.querySelector('.full-img__title').innerText = this.nextElementSibling.nextElementSibling.children[0].innerText;

    fullImgPopup.classList.add('popup_opened');
}

// Закрытие попапа

const closePopupBtns = document.querySelectorAll('.popup .btn_close');
closePopupBtns.forEach((btn) => btn.addEventListener('click', closePopup));

function closePopup(evt) {
    //editProfilePopup.classList.remove('popup_opened');
    evt.target.parentElement.parentElement.classList.remove('popup_opened');
}

// Обработчик отправки формы (profile edit)

const formEditProfile = document.querySelector('.form_edit-profile');
const nameInput = formEditProfile.querySelector('.popup__input_name');
const jobInput = formEditProfile.querySelector('.popup__input_job');

function handleFormSubmit(evt) {
    evt.preventDefault();

    // Так мы можем определить свою логику отправки. О том, как это делать, расскажем позже.
    if (nameInput.value) {
        document.querySelector('.user-profile__name').textContent = nameInput.value;
    }

    if (jobInput.value) {
        document.querySelector('.user-profile__description').textContent = jobInput.value;
    }

    closePopup(evt);
}

formEditProfile.addEventListener('submit', handleFormSubmit);

// Обработчик отправки формы (add card)

const formAddCard = document.querySelector('.form_add-card');
const cardName = formAddCard.querySelector('.popup__input_card-name');
const cardLink = formAddCard.querySelector('.popup__input_card-link');

function addNewCard(evt) {

    evt.preventDefault();

    if (cardName.value && cardLink.value) {
        let obj = { name: cardName.value, link: cardLink.value };
        initialCards.push(obj);

        const newCard = cardTemplate.querySelector('.gallery__card').cloneNode(true);
        newCard.querySelector('.card__img').src = cardLink.value;
        newCard.querySelector('.card__text').textContent = cardName.value;
        newCard.querySelector('.card__img').addEventListener('click', openFullImg);
        newCard.querySelector('.btn_like').addEventListener('click', like);
        newCard.querySelector('.btn_trash').addEventListener('click', deleteCard);

        gallery.prepend(newCard);

        cardLink.value = '';
        cardName.value = '';

        closePopup(evt);
    }
}

formAddCard.addEventListener('submit', addNewCard);

// 'Like' button

const likeBtns = document.querySelectorAll('.btn_like');

likeBtns.forEach(el => el.addEventListener('click', like));

function like() {
    this.classList.toggle('btn_like_active');
};


// 'Trash' button (delete card)

const delBtns = document.querySelectorAll('.btn_trash');

delBtns.forEach(el => el.addEventListener('click', deleteCard));

function deleteCard() {
    this.closest('.gallery__card').remove();

    //дописать удаление из initialCards
};