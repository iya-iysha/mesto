export default class Card {
  constructor(name, link, templateSelector, handleCardClick) {
    this._name = name; 
    this._link = link;
    this._template = templateSelector;
    this._handleCardClick = handleCardClick;
  
    this._cardElement = this._getCardTemplate();
  
    this._cardImage = this._cardElement.querySelector('.card__image');
  }
  
  _getCardTemplate() {
    return document.querySelector(this._template)
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
    this._cardElement.querySelector('.card__trash-btn').addEventListener('click', () => this._cardElement.remove());
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    })
  }
  
  createCard() {
    this._fillTemplate();
    this._setEventListeners();
    return this._cardElement;
  }
}