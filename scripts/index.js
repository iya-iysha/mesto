const popupCloseBtns = document.querySelectorAll('.popup__close-btn');

const profile = document.querySelector('.profile');
const editProfileBtn = profile.querySelector('.profile__edit-btn');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const nameInput = popupEditProfile.querySelector('.popup__input_type_name');
const jobInput = popupEditProfile.querySelector('.popup__input_type_job');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const editProfileForm = popupEditProfile.querySelector('.popup__form');

const cardsContainer = document.querySelector('.cards');
const cardTemplate = cardsContainer.querySelector('#card').content;
const addCardBtn = profile.querySelector('.profile__add-btn');
const popupAddCard = document.querySelector('.popup_type_add-card');
const titleInput = popupAddCard.querySelector('.popup__input_type_title');
const linkInput = popupAddCard.querySelector('.popup__input_type_link');
const addCardForm = popupAddCard.querySelector('.popup__form');

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

  cardElement.querySelector('.card__heart-btn').addEventListener('click', (evt) => evt.target.classList.toggle('card__heart-btn_active'))

  cardElement.querySelector('.card__trash-btn').addEventListener('click', (evt) => evt.target.closest('.card').remove())

  cardImage.addEventListener('click', (evt) => {
    openPopup(popupImage);
    imageLink.src = evt.target.src;
    imageLink.alt = evt.target.alt;
    imageName.textContent = evt.target.closest('.card').querySelector('.card__title').textContent;
  } )

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

initialCards.forEach ((item) => cardsContainer.prepend(createCard(item.name, item.link)));
popupCloseBtns.forEach((item) => {
  item.addEventListener('click', () => {closePopup(item.closest('.popup'))});
})

editProfileBtn.addEventListener('click', () => {
  openPopup(popupEditProfile); 
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
});
addCardBtn.addEventListener('click', () => openPopup(popupAddCard));

editProfileForm.addEventListener('submit', handleEditProfileFormSubmit);
addCardForm.addEventListener('submit', handleAddCardFormSubmit);