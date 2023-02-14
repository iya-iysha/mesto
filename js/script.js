let profile = document.querySelector('.profile');
let editBtn = profile.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let closeBtn = popup.querySelector('.popup__close-btn');
let nameInput = popup.querySelector('#name');
let jobInput = popup.querySelector('#job');
let profileTitle = profile.querySelector('.profile__title');
let profileSubtitle = profile.querySelector('.profile__subtitle');
let popupForm = popup.querySelector('.popup__form');

function editProfile() {
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
  popup.classList.remove('popup_opened');
}

editBtn.addEventListener('click', editProfile);
closeBtn.addEventListener('click', closePopup);
popupForm.addEventListener('submit', handleFormSubmit);
