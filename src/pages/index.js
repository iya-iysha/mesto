import './index.css';
import { profileTitle, profileSubtitle, profileAvatar, buttonOpenPopupProfile, formEditProfile, buttonAddCard, formAddCard, inputProfileName, inputProfileJob } from '../utils/constants.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { FormValidator, selectorsSet } from '../components/FormValidator.js';
import Api from '../components/Api.js';
import PopupDeleteCard from '../components/PopupDeleteCard.js';

const myId = '2b01e36423326e5584005ba4';


function addCard(data, sectionElement) {
  const newCard = new Card(data, "#card", myId, (name, link) => {
    popupWithImage.open({ name, link });
  },
  (cardId) => {
    popupDeleteCard.open();
    popupDeleteCard.setSubmit(() => {
      api.deleteCard(cardId).then(() => {
        newCard.deleteCard();
        popupDeleteCard.close();
      })
      .catch((err) => { alert(err); })
    })
  }, 
  (cardId) => {
    api.putLike(cardId)
    .then((data) => {
      newCard.updateLikes(data)
    })
   .catch((err) => { alert(err); })
  }, 
  (cardId) => 
  {
    api.deleteLike(cardId)
    .then((data) => {
      newCard.updateLikes(data)
   })
  .catch((err) => { alert(err); })
  })

  sectionElement.addItem(newCard.createCard());
}

const validatorEditProfile = new FormValidator(selectorsSet, formEditProfile);
validatorEditProfile.enableValidation();

const validatorAddCard = new FormValidator(selectorsSet, formAddCard);
validatorAddCard.enableValidation();

const popupDeleteCard = new PopupDeleteCard('.popup_type_delete');
popupDeleteCard.setEventListeners();

const popupUserInfo = new UserInfo({ name: '.profile__title', job: '.profile__subtitle' });

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: '020a6041-0af9-4bc3-8a98-f14edb94cfd4',
    'Content-Type': 'application/json'
  }
}); 

api.getUserInfo()
.then((result) => {
  profileTitle.textContent = result.name;
  profileSubtitle.textContent = result.about;
  profileAvatar.src = result.avatar;
})
.catch((err) => { alert(err); });

const cardsContainer = new Section((item) => {
  addCard(item, cardsContainer);
}, '.cards');

api.getCardsInfo()
.then((result) => {
  cardsContainer.renderItems(result);
})
.catch((err) => { alert(err); });

const popupEditProfile = new PopupWithForm('.popup_type_edit-profile', (inputValues) => {
  api.editUserInfo(inputValues['profileName'], inputValues['profileJob'])
  .then((result) => {
    popupUserInfo.setUserInfo(result.name, result.about);
  })
  .catch((err) => { alert(err); });
  popupEditProfile.close();
});
popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm('.popup_type_add-card', (inputValues) => {
  api.addNewCard(inputValues.cardTitle, inputValues.cardLink)
  .then ((result) => {
    addCard(result, cardsContainer);
  })
  .catch ((err) => { alert(err); });
  popupAddCard.close();
});
popupAddCard.setEventListeners();

buttonOpenPopupProfile.addEventListener('click', () => {
  formEditProfile.reset();
  popupEditProfile.open();

  const getInfo = popupUserInfo.getUserInfo();
  inputProfileName.value = getInfo.title;
  inputProfileJob.value = getInfo.subtitle;
})

buttonAddCard.addEventListener('click', () => {
  formAddCard.reset();
  popupAddCard.open();
})