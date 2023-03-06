const popupCloseBtns = document.querySelectorAll('.popup__close-btn');

const profile = document.querySelector('.profile');
const editProfileBtn = profile.querySelector('.profile__edit-btn');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const editProfileForm = document.forms.editProfileForm;
const nameInput = editProfileForm.elements.profileName;
const jobInput = editProfileForm.elements.profileJob;

const cardsContainer = document.querySelector('.cards');
const cardTemplate = cardsContainer.querySelector('#card').content;
const addCardBtn = profile.querySelector('.profile__add-btn');
const popupAddCard = document.querySelector('.popup_type_add-card');
const addCardForm = document.forms.addCardForm;
const titleInput = addCardForm.elements.cardTitle;
const linkInput = addCardForm.elements.cardLink;

const popupImage = document.querySelector('.popup_type_image');
const imageLink = popupImage.querySelector('.popup__image');
const imageName = popupImage.querySelector('.popup__image-name');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function createCard (name, link) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__title').textContent = name;
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = link;
  cardImage.alt = name;
  return cardElement;
}

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  cardsContainer.prepend(createCard(titleInput.value, linkInput.value));
  closePopup(popupAddCard);
  addCardForm.reset();
}

function openedPopupSearch() {
  const openedPopup = document.querySelector('.popup_opened');
  return openedPopup;
}

initialCards.forEach ((item) => cardsContainer.prepend(createCard(item.name, item.link)));

popupCloseBtns.forEach((item) => {
  item.addEventListener('click', () => {closePopup(item.closest('.popup'))});
})

document.addEventListener('keydown', (evt) => {
  const openedPopup = openedPopupSearch();
  if (evt.key === 'Escape' && openedPopup) {
    closePopup(openedPopup);
  }
})

document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup')) {
    const openedPopup = openedPopupSearch();
    if (!evt.target.closest('.popup__container')) {
    closePopup(openedPopup);
  }
  }
})

editProfileBtn.addEventListener('click', () => {
  openPopup(popupEditProfile); 
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
});

addCardBtn.addEventListener('click', () => openPopup(popupAddCard));

cardsContainer.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('card__heart-btn')) {
    evt.target.classList.toggle('card__heart-btn_active');
  }
  if (evt.target.classList.contains('card__trash-btn')) {
    evt.target.closest('.card').remove();
  }
  if (evt.target.classList.contains('card__image')) {
    openPopup(popupImage);
    imageLink.src = evt.target.src;
    imageLink.alt = evt.target.alt;
    imageName.textContent = evt.target.closest('.card').querySelector('.card__title').textContent;
  }
})

editProfileForm.addEventListener('submit', handleEditProfileFormSubmit);

addCardForm.addEventListener('submit', handleAddCardFormSubmit);