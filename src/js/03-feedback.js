import throttle from 'lodash.throttle';

// Variables

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

const INPUT_DATA_NAME = 'feedback-form-state';

// Conditions

if (localStorage.getItem(INPUT_DATA_NAME)) {
  const { email, message } = JSON.parse(localStorage.getItem(INPUT_DATA_NAME)); // Destructuring
  inputEl.value = email;
  textareaEl.value = message;
}

// Data

const formDataInput = {
  email: inputEl.value,
  message: textareaEl.value,
};

// Functions

const onInputForm = evt => {
  if (evt.target === inputEl) {
    formDataInput.email = evt.target.value;
  } else {
    formDataInput.message = evt.target.value;
  }
  localStorage.setItem(INPUT_DATA_NAME, JSON.stringify(formDataInput)); // Push to local Storage
};

// Listeners

inputEl.addEventListener('input', throttle(onInputForm, 1000));

textareaEl.addEventListener('input', throttle(onInputForm, 1000));

formEl.addEventListener('submit', evt => {
  evt.preventDefault();
  if (inputEl.value && textareaEl.value) {
    formEl.reset();
    localStorage.removeItem(INPUT_DATA_NAME);
  }
});
