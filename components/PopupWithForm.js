import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor (popupSelector, handleSubmit) {
    super(popupSelector);
    this._formElement = this._element.querySelector('.popup__form');
    this._handleSubmit = handleSubmit;
    this._inputValues = {};
  }

  _getInputValues () {
    Array.from(this._formElement.elements).forEach((input) => {
      this._inputValues[input.name] = input.value;
    })
    console.log(this._inputValues);
  }

  close () {
    super.close();
    this._formElement.reset();
  }

  setEventListeners () {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      console.log('submit');
      this._getInputValues();
      this._handleSubmit(this._inputValues, evt);
    }, { once: true});
  }
}