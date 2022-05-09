import Key from './key.js';
import languages from './languages.js';
import {
  setLang, getLang, setCharCase, getCharCase,
} from './lockalstorage.js';

let startSwitchLang = false;

function handler(keycode, value, textarea) {
  const textField = textarea;
  const pos = textField.dataset.position;
  switch (keycode) {
    case 'Space':
      textField.value = `${textField.value.slice(0, pos)}${' '}${textField.value.slice(pos)}`;
      textField.dataset.position = +textField.dataset.position + 1;
      break;
    case 'Backspace':
      textField.value = `${textField.value.slice(0, pos - 1)}${textField.value.slice(pos)}`;
      textField.dataset.position = textField.dataset.position > 0
        ? +textField.dataset.position - 1 : 0;
      break;
    case 'Tab':
		textField.value = `${textField.value.slice(0, pos)}${'    '}${textField.value.slice(pos)}`;
      textField.dataset.position = +textField.dataset.position + 4;
      break;
    case 'Delete':
	textField.value = `${textField.value.slice(0, pos)}${textField.value.slice(pos)}`;
      textField.dataset.position = textField.dataset.position > 0
      ? +textField.dataset.position + 1 : 0;
      break;
    case 'Enter':
		textField.value = `${textField.value.slice(0, pos)}${'\n'}${textField.value.slice(pos)}`;
      textField.dataset.position = +textField.dataset.position + 4;
      break;
	case 'CapsLock':
    case 'MetaLeft':
    case 'ShiftLeft':
    case 'ShiftRight':
    case 'ControlLeft':
    case 'ControlRight':
    case 'AltLeft':
    case 'AltRight':
      break;
	case 'ArrowUp':
	case 'ArrowDown':
	case 'ArrowLeft':
   case 'ArrowRight':
   default:
      textField.value = `${textField.value.slice(0, pos)}${value}${textField.value.slice(pos)}`;
      textField.dataset.position = +textField.dataset.position + 1;
  }
}

function switchLang(keyboard) {
  const keyboardElem = keyboard;
  let lng = getLang();
  if (lng === 'eng') {
    setLang('rus');
    lng = 'rus';
  } else {
    setLang('eng');
    lng = 'eng';
  }
  const newCharsArray = languages[lng];
  keyboardElem.innerHTML = '';

  newCharsArray.forEach((keyboardRow) => {
    const row = document.createElement('div');
    row.classList.add('keyboard__row');

    keyboardRow.forEach((key) => {
      const keyboardKey = new Key(key);
      row.append(keyboardKey.generateKey('small'));
    });

    keyboard.append(row);
  });
}

function switchCase(keyboard) {
  const keyboardElem = keyboard;
  const lng = getLang();
  let charCase = getCharCase();

  if (charCase === 'small') {
    setCharCase('shift');
    charCase = 'shift';
  } else {
    setCharCase('small');
    charCase = 'small';
  }
  const newCharsArray = languages[lng];
  keyboardElem.innerHTML = '';

  newCharsArray.forEach((keyboardRow) => {
    const row = document.createElement('div');
    row.classList.add('keyboard__row');

    keyboardRow.forEach((key) => {
      const keyboardKey = new Key(key);
      row.append(keyboardKey.generateKey(charCase));
    });

    keyboard.append(row);
  });
}

// генерация клавиатуры
export default (textarea) => {
  const lng = getLang();
  const charsArray = languages[lng];

  const keyboard = document.createElement('div');

  keyboard.classList.add('keyboard');
  charsArray.forEach((keyboardRow) => {
    const row = document.createElement('div');
    row.classList.add('keyboard__row');

    keyboardRow.forEach((key) => {
      const keyboardKey = new Key(key);
      row.append(keyboardKey.generateKey('small'));
    });
    keyboard.append(row);
  });

  keyboard.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.dataset.keycode) {
      const { keycode } = event.target.dataset;
      const value = event.target.innerText;
      handler(keycode, value, textarea);
    }
  });

  window.addEventListener('keydown', (event) => {
    event.preventDefault();

    if (event.code === 'CapsLock') {
      switchCase(keyboard);
    }

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      switchCase(keyboard);
    }

    if (event.code === 'ShiftLeft' || event.code === 'AltLeft') {
      if (startSwitchLang) {
        switchLang(keyboard);
        startSwitchLang = false;
      } else {
        startSwitchLang = true;
      }
    }

    const key = document.querySelector(`[data-keycode=${event.code}]`);
    if (key) {
      key.classList.add('active');
      const { keycode } = key.dataset;
      const value = key.innerText;
      handler(keycode, value, textarea);
    }
  });

  window.addEventListener('keyup', (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      switchCase(keyboard);
    }

    if (event.code === 'ShiftLeft' || event.code === 'AltLeft') {
      startSwitchLang = false;
    }

    const key = document.querySelector(`[data-keycode=${event.code}]`);
    if (key) {
      key.classList.remove('active');
    }
  });

  return keyboard;
};
