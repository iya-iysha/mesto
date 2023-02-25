const popupCloseBtn = document.querySelectorAll('.popup__close-btn');

const profile = document.querySelector('.profile');
const editProfileBtn = profile.querySelector('.profile__edit-btn');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const nameInput = popupEditProfile.querySelector('.popup__input_type_name');
const jobInput = popupEditProfile.querySelector('.popup__input_type_job');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const editProfileForm = popupEditProfile.querySelector('.popup__form');

const cards = document.querySelector('.cards');
const cardTemplate = cards.querySelector('#card').content;
const addCardBtn = profile.querySelector('.profile__add-btn');
const popupAddCard = document.querySelector('.popup_type_add-card');
const titleInput = popupAddCard.querySelector('.popup__input_type_title');
const linkInput = popupAddCard.querySelector('.popup__input_type_link');
const addCardForm = popupAddCard.querySelector('.popup__form');

const popupImage = document.querySelector('.popup_type_image');
const imageLink = popupImage.querySelector('.popup__image');
const imageName = popupImage.querySelector('.popup__image-name');

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

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

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
  addCardForm.reset();
}

function createCard (name, link) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').alt = name;

  cardElement.querySelector('.card__heart-btn').addEventListener('click', (evt) => evt.target.classList.toggle('card__heart-btn_active'))

  cardElement.querySelector('.card__trash-btn').addEventListener('click', (evt) => evt.target.closest('.card').remove())

  cardElement.querySelector('.card__image').addEventListener('click', (evt) => {
    openPopup(popupImage);
    imageLink.src = evt.target.src;
    imageName.textContent = evt.target.closest('.card').querySelector('.card__title').textContent;
  } )

  cards.append(cardElement);
}

initialCards.forEach ((item) => createCard(item.name, item.link));
popupCloseBtn.forEach((item) => {
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