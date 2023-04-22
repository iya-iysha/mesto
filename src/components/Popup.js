export default class Popup {
  constructor (popupSelector) {
    this._element = document.querySelector(popupSelector);
  }

  open() {
    this._element.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => this._escCloseBinding(evt)); 
  }

  close() {
    this._element.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => this._escCloseBinding(evt));
  }

  _escCloseBinding(evt) {
    let binding = this._handleEscClose.bind(this);
    binding(evt);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape' && document.querySelector('.popup_opened')) {
      this.close();
    }
  }

  setEventListeners() {
    this._element.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      } 
      if (evt.target.classList.contains('popup__close-btn')) {
        this.close();
      }
    })
  }
}