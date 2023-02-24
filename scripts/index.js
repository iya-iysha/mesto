const profile = document.querySelector('.profile');
const editBtn = profile.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const closeBtn = popup.querySelector('.popup__close-btn');
const nameInput = popup.querySelector('.popup__input_type_name');
const jobInput = popup.querySelector('.popup__input_type_job');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const popupForm = popup.querySelector('.popup__form');
const cards = document.querySelector('.cards');
const cardTemplate = cards.querySelector('#card').content;

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup();
}

function createCard (name, link) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').alt = name;
  cards.append(cardElement);
}

initialCards.forEach ((item) => createCard(item.name, item.link));

editBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
popupForm.addEventListener('submit', handleFormSubmit);
