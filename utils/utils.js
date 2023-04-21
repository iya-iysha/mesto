import { Card } from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';

function addCard(name, link, sectionElement) {
  const newCard = new Card(name, link, "#card", (name, link) => {
    const popupWithImage = new PopupWithImage('.popup_type_image');
    popupWithImage.open({ name, link });
    popupWithImage.setEventListeners();
  });
  sectionElement.addItem(newCard.createCard());
}

export { addCard };