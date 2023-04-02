import {cardsContainer, popupImage, imageName, imageLink} from "../utils/constants.js";
import {openPopup} from "../utils/utils.js";

class Card {
  constructor(name, link, templateSelector) {
    this._name = name; 
    this._link = link;
    this._template = templateSelector;
  
    this._cardElement = this._getCardTemplate();
  
    this._cardImage = this._cardElement.querySelector('.card__image');
  }
  
  _getCardTemplate() {
    return cardsContainer.querySelector(this._template)
    .content
    .querySelector('.card')
    .cloneNode(true);
  }

  _fillTemplate() {
    this._cardElement.querySelector('.card__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
  }
  
  _setEventListeners() {
    this._cardElement.querySelector('.card__heart-btn').addEventListener('click', (evt) => evt.target.classList.toggle('card__heart-btn_active'));
    this._cardElement.querySelector('.card__trash-btn').addEventListener('click', (evt) => evt.target.closest('.card').remove());
    this._cardImage.addEventListener('click', (evt) => {
      openPopup(popupImage);
      imageLink.src = evt.target.src;
      imageLink.alt = evt.target.alt;
      imageName.textContent = evt.target.closest('.card').querySelector('.card__title').textContent;
    })
  }
  
  createCard() {
    this._fillTemplate();
    this._setEventListeners();
    return this._cardElement;
  }
}

export {Card};