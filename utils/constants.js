export const initialCards = [
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
    },
    {
        name: 'Sky',
        link: 'https://images.unsplash.com/photo-1675620705848-bcab2d4d98a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Wave',
        link: 'https://images.unsplash.com/photo-1675979060221-719173aae748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Bird',
        link: 'https://images.unsplash.com/photo-1675625431865-b49f02d779c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNnw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    }

];

export const selectors = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.btn_save',
    inactiveButtonClass: 'btn_save_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'form__input-error_active'
};

export const gallery = document.querySelector('.gallery');
export const cardName = document.querySelector('#card-name-input');
export const cardLink = document.querySelector('#card-link-input');

