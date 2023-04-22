const popupImage = document.querySelector('.popup_type_image');
const imageLink = popupImage.querySelector('.popup__image');
const imageName = popupImage.querySelector('.popup__image-name');

const profile = document.querySelector('.profile');
const buttonOpenPopupProfile = profile.querySelector('.profile__edit-btn');
const formEditProfile = document.forms.editProfileForm;
const inputProfileName = formEditProfile.elements.profileName;
const inputProfileJob = formEditProfile.elements.profileJob;

const buttonAddCard = profile.querySelector('.profile__add-btn');
const formAddCard = document.forms.addCardForm;

const initialCards = [
  {
    name: 'Москва',
    link: 'https://images.unsplash.com/photo-1572969176403-0d6e50b9ee5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=839&q=80'
  },
  {
    name: 'Санкт-Петербург',
    link: 'https://images.unsplash.com/photo-1555460285-763ba96917d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Сочи',
    link: 'https://images.unsplash.com/photo-1589794360421-9353dc25c668?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=883&q=80'
  },
  {
    name: 'Сулакский каньон',
    link: 'https://images.unsplash.com/photo-1624719961119-ca670af4a20b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
  },
  {
    name: 'Казань',
    link: 'https://images.unsplash.com/photo-1600421539016-cc3f0866d2b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1617835594990-7cd5a9b5d153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }
];

export {buttonOpenPopupProfile, formEditProfile, inputProfileName, inputProfileJob, buttonAddCard, formAddCard, popupImage, imageLink, imageName, initialCards};