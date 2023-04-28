const popupImage = document.querySelector('.popup_type_image');
const imageLink = popupImage.querySelector('.popup__image');
const imageName = popupImage.querySelector('.popup__image-name');

const profile = document.querySelector('.profile');
const buttonEditAvatar = profile.querySelector('.profile__edit-avatar');
const buttonOpenPopupProfile = profile.querySelector('.profile__edit-btn');
const formEditProfile = document.forms.editProfileForm;
const formEditAvatar = document.forms.editAvatarForm;
const inputProfileName = formEditProfile.elements.profileName;
const inputProfileJob = formEditProfile.elements.profileJob;

const buttonAddCard = profile.querySelector('.profile__add-btn');
const formAddCard = document.forms.addCardForm;

export {buttonEditAvatar, formEditAvatar, buttonOpenPopupProfile, formEditProfile, inputProfileName, inputProfileJob, buttonAddCard, formAddCard, popupImage, imageLink, imageName};