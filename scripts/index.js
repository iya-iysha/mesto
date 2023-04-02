import { cardsContainer } from '../utils/constants.js';
import { openPopup, closePopup } from '../utils/utils.js';
import { Card } from './Card.js';
import { FormValidator, selectorsSet } from './FormValidator.js';

const popups = document.querySelectorAll('.popup');

const profile = document.querySelector('.profile');
const editProfileBtn = profile.querySelector('.profile__edit-btn');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const editProfileForm = document.forms.editProfileForm;
const nameInput = editProfileForm.elements.profileName;
const jobInput = editProfileForm.elements.profileJob;

const addCardBtn = profile.querySelector('.profile__add-btn');
const popupAddCard = document.querySelector('.popup_type_add-card');
const addCardForm = document.forms.addCardForm;
const titleInput = addCardForm.elements.cardTitle;
const linkInput = addCardForm.elements.cardLink;

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  createCard(titleInput.value, linkInput.value);
  closePopup(popupAddCard);
}

function createCard(name, link) {
  const newCard = new Card(name, link, "#card");
  cardsContainer.prepend(newCard.createCard());
}

initialCards.forEach ((item) => {
  createCard(item.name, item.link);
});

Array.from(popups).forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    } 
    if (evt.target.classList.contains('popup__close-btn')) {
      closePopup(popup);

    }
  })
})

const validatorEditProfile = new FormValidator(selectorsSet, editProfileForm);
validatorEditProfile.enableValidation();

const validatorAddCard = new FormValidator(selectorsSet, addCardForm);
validatorAddCard.enableValidation();

editProfileBtn.addEventListener('click', () => {
  editProfileForm.reset();
  openPopup(popupEditProfile); 
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
});

addCardBtn.addEventListener('click', () => {
  addCardForm.reset();
  openPopup(popupAddCard);
});

editProfileForm.addEventListener('submit', handleEditProfileFormSubmit);

addCardForm.addEventListener('submit', handleAddCardFormSubmit);