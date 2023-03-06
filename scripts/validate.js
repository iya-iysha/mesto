function hideInputError(form, input) {
  const errorMessage = form.querySelector(`.${input.id}-error`);
  errorMessage.textContent = '';
  errorMessage.classList.remove('popup__input-error_active');
  input.classList.remove('popup__input_invalid');
}

function showInputError(form, input, message) {
  const errorMessage = form.querySelector(`.${input.id}-error`);
  errorMessage.textContent = message;
  errorMessage.classList.add('popup__input-error_active');
  input.classList.add('popup__input_invalid');
}

function submitBtnState(form) {
  const submitBtn = form.querySelector('.popup__submit-btn');
  if (form.checkValidity()) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }
}

function checkInputValidity (form, input) {
  submitBtnState(form);
  if (input.validity.valid) {
    hideInputError(form, input);
  } else {
    showInputError(form, input, input.validationMessage);
  }
}

function setEventListeners (form) {
  const inputsList = Array.from(form.querySelectorAll('.popup__input'));
  inputsList.forEach((input) => {input.addEventListener('input', () => checkInputValidity(form, input))})
}

function enableValidation () {
  const formsList = Array.from(document.forms);
  formsList.forEach((form) => {
    form.addEventListener('submit', (evt) => {evt.preventDefault()});
    setEventListeners(form);
  })
}

enableValidation();