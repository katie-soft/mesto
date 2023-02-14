// Загрузка стартовых карточек

const initialCards = [
    {
        name: 'Orange',
        link: 'https://images.unsplash.com/photo-1667807028697-5b192af93bcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=60'
    },
    {
        name: 'Ice',
        link: 'https://images.unsplash.com/photo-1675538071574-2afecb89e2a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=60'
    },
    {
        name: 'City',
        link: 'https://images.unsplash.com/photo-1668460223474-a3cd5e145b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8aVVJc25WdGpCMFl8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=60'
    },
    {
        name: 'Forest',
        link: 'https://images.unsplash.com/photo-1675423750263-94f7ea499f4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=60'
    },
    {
        name: 'Lines',
        link: 'https://images.unsplash.com/photo-1675259308300-72ce08596068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=60'
    },
    {
        name: 'Blue',
        link: 'https://images.unsplash.com/photo-1675563628868-82e6762de993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=60'
    }
];

const cardTemplate = document.querySelector('#template__card').content;
const gallery = document.querySelector('.gallery');

function appendCard(cards) {
    for (key in cards) {
        const initCard = cardTemplate.querySelector('.gallery__card').cloneNode(true);
        initCard.querySelector('.card__img').src = cards[key].link;
        initCard.querySelector('.card__text').textContent = cards[key].name;

        gallery.append(initCard);
    }
}

appendCard(initialCards);

// Открытие попапа

function openPopup(popupType) {
    document.querySelector(popupType).classList.add('popup_opened');
}

document.querySelector('.user-profile .btn_edit').addEventListener('click', () => {
    openPopup('.popup_edit-profile');
});

document.querySelector('.user-profile .btn_add').addEventListener('click', () => {
    openPopup('.popup_add-card');
});

// Закрытие попапа

function closePopup() {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
}

document.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('btn_close') || evt.target === document.querySelector('.popup_opened')) {
        closePopup();
    }
})

document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
        closePopup();
    }
})

// Обработчик отправки формы (profile edit)

const formEditProfile = document.querySelector('.form_edit-profile');
function handleFormSubmit(evt) {
    evt.preventDefault();

    if (formIsValid(formEditProfile)) {
        document.querySelector('.user-profile__name').textContent = formEditProfile.querySelector('.popup__input_name').value;
        document.querySelector('.user-profile__description').textContent = formEditProfile.querySelector('.popup__input_job').value;
        closePopup();
    }
}

formEditProfile.addEventListener('submit', handleFormSubmit);

// Обработчик отправки формы (add card)

const formAddCard = document.querySelector('.form_add-card');
const cardName = formAddCard.querySelector('.popup__input_card-name');
const cardLink = formAddCard.querySelector('.popup__input_card-link');

function addNewCard(evt) {

    evt.preventDefault();

    if (formIsValid(formAddCard)) {

        let obj = { name: cardName.value, link: cardLink.value };
        initialCards.unshift(obj);
        gallery.innerHTML = '';
        cardLink.value = '';
        cardName.value = '';
        setSubmitButtonState(formAddCard, false);
        appendCard(initialCards);
        closePopup();
    }
}

formAddCard.addEventListener('submit', addNewCard);

// действия с карточками (open, like, delete)

gallery.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('btn_like')) {
        like(evt.target);
    } else if (evt.target.classList.contains('btn_trash')) {
        deleteCard(evt.target);
    } else if (evt.target.classList.contains('card__img')) {
        openFullImg(evt.target);
    }
});

function like(item) {
    item.classList.toggle('btn_like_active');
};

function deleteCard(item) {
    item.closest('.gallery__card').remove();

    //дописать удаление из initialCards
};

function openFullImg(item) {
    const fullImgPopup = document.querySelector('.popup_full-img');
    fullImgPopup.querySelector('.popup__img').src = item.src;
    fullImgPopup.querySelector('.popup__img').alt = item.nextElementSibling.nextElementSibling.children[0].innerText;
    fullImgPopup.querySelector('.full-img__title').innerText = item.nextElementSibling.nextElementSibling.children[0].innerText;

    openPopup('.popup_full-img');
}