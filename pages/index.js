import { initialCards, editProfileBtn, editProfileForm, addCardBtn, addCardForm } from '../utils/constants.js';
import { addCard } from '../utils/utils.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { FormValidator, selectorsSet } from '../components/FormValidator.js';

const cardsContainer = new Section({ items: initialCards, renderer: (item) => {
  addCard(item.name, item.link, cardsContainer);
} }, '.cards');

cardsContainer.renderItems();

const validatorEditProfile = new FormValidator(selectorsSet, editProfileForm);
validatorEditProfile.enableValidation();

const validatorAddCard = new FormValidator(selectorsSet, addCardForm);
validatorAddCard.enableValidation();

editProfileBtn.addEventListener('click', () => {
  editProfileForm.reset();
  const editProfilePopup = new PopupWithForm('.popup_type_edit-profile', (inputValues, evt) => {
    userInfo.setUserInfo(inputValues['profileName'], inputValues['profileJob']);
    editProfilePopup.close();
  });
  editProfilePopup.open();

  const userInfo = new UserInfo({ name: '.profile__title', job: '.profile__subtitle' });

  const getInfo = userInfo.getUserInfo();
  editProfileForm.elements.profileName.value = getInfo.title;
  editProfileForm.elements.profileJob.value = getInfo.subtitle;

  editProfilePopup.setEventListeners();
})

addCardBtn.addEventListener('click', () => {
  addCardForm.reset();
  const addCardPopup = new PopupWithForm('.popup_type_add-card', (inputValues, evt) => {
    addCard(inputValues.cardTitle, inputValues.cardLink, cardsContainer);
    addCardPopup.close();
  });
  addCardPopup.open();
  addCardPopup.setEventListeners();
})