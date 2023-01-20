// Открытие попапа

let editProfileBtn = document.querySelector('.user-profile .btn_edit');
let editProfilePopup = document.querySelector('.popup_edit-profile');

editProfileBtn.addEventListener('click', editProfile);

function editProfile() {
    editProfilePopup.classList.add('popup_opened');
}

// Закрытие попапа

let closePopupBtn = document.querySelector('.popup .btn_close');

closePopupBtn.addEventListener('click', closePopup);

function closePopup() {
    editProfilePopup.classList.remove('popup_opened');
}

// Обработчик отправки формы

let formElement = document.querySelector('.form_edit-profile');
let nameInput = formElement.querySelector('.popup__input_name');
let jobInput = formElement.querySelector('.popup__input_job');

function handleFormSubmit(evt) {
    evt.preventDefault();

    // Так мы можем определить свою логику отправки. О том, как это делать, расскажем позже.

    document.querySelector('.user-profile__name').textContent = nameInput.value;
    document.querySelector('.user-profile__description').textContent = jobInput.value;

    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);



