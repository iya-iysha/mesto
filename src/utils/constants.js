const popupImage = document.querySelector('.popup_type_image');
const imageLink = popupImage.querySelector('.popup__image');
const imageName = popupImage.querySelector('.popup__image-name');

const profile = document.querySelector('.profile');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const profileAvatar = profile.querySelector('.profile__avatar');
const buttonOpenPopupProfile = profile.querySelector('.profile__edit-btn');
const formEditProfile = document.forms.editProfileForm;
const inputProfileName = formEditProfile.elements.profileName;
const inputProfileJob = formEditProfile.elements.profileJob;

const buttonAddCard = profile.querySelector('.profile__add-btn');
const formAddCard = document.forms.addCardForm;

export {profileTitle, profileSubtitle, profileAvatar, buttonOpenPopupProfile, formEditProfile, inputProfileName, inputProfileJob, buttonAddCard, formAddCard, popupImage, imageLink, imageName};