import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');

populateForm();

const localObject = {
  email: '',
  message: '',
};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(localObject);
}
form.addEventListener('input', throttle(addLocalStorage, 500));

function addLocalStorage(event) {
  localObject[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(localObject));
}

function populateForm() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    textarea.value = JSON.parse(savedMessage).message;
    input.value = JSON.parse(savedMessage).email;
  }
}
