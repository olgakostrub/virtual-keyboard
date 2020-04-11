import { BUTTON_ANIMATION_DURATION } from './constants';
import { keyboardConfig } from './config';

const triggerEvent = (el, eventName, bubbles) => {
  const event = new Event(eventName, { bubbles });
  el.dispatchEvent(event);
};

const updateTextPosition = (textarea, startDelta, endDelta) => {
  if (textarea.dataset.start) {
    textarea.dataset.start = Number(textarea.dataset.start) + startDelta;
    textarea.selectionStart = textarea.dataset.start;
  }
  if (textarea.dataset.end) {
    if (endDelta === undefined) {
      textarea.dataset.end = textarea.dataset.start;
    } else {
      textarea.dataset.end = Number(textarea.dataset.end) + endDelta;
    }
    textarea.selectionEnd = textarea.dataset.end;
  }
};

const saveTextPositionOnTextareaEvents = () => {
  const textarea = document.querySelector('.user-input');
  const saveCursorPosition = () => {
    textarea.dataset.start = textarea.selectionStart;
    textarea.dataset.end = textarea.selectionEnd;
  };
  textarea.addEventListener('blur', () => saveCursorPosition());
  textarea.addEventListener('focus', () => saveCursorPosition());
  textarea.addEventListener('click', () => saveCursorPosition());
};

const toggleCapsLockMode = () => {
  document.querySelector('.keyboard').classList.toggle('capslock-active');
};

const addLetterToText = (textarea, letter) => {
  const start = Number(textarea.dataset.start);
  const end = Number(textarea.dataset.end);
  const text = textarea.value;
  if (start === end) {
    textarea.value = text.substring(0, start) + letter + text.substring(start);
    updateTextPosition(textarea, 1, 1);
    return;
  }

  // insert into textarea instead of selection
  textarea.value = text.substring(0, start) + letter + text.substring(end);
  updateTextPosition(textarea, 0);
};

const handleRegularKeys = (keyElement, textarea) => {
  let addedLetter = keyElement.querySelector('.base').innerHTML;

  // handle pressed Shift
  const shiftKeys = document.querySelectorAll("div[class^='key Shift']");
  const shiftPressed = Array.from(shiftKeys).filter((el) =>
    el.classList.contains('pressed')
  ).length;
  if (shiftPressed) {
    const extraElement = keyElement.querySelector('.extra');
    if (extraElement) addedLetter = extraElement.innerHTML;
    addLetterToText(textarea, addedLetter);
    return;
  }

  // handle CapsLock mode
  const capsLockPressed = document
    .querySelector('.keyboard')
    .classList.contains('capslock-active');
  if (capsLockPressed) {
    addedLetter = addedLetter.toUpperCase();
  }

  addLetterToText(textarea, addedLetter);
};

const handleDeleteKeys = (code, textarea) => {
  const start = Number(textarea.dataset.start);
  const end = Number(textarea.dataset.end);
  const text = textarea.value;
  if (start !== end) {
    textarea.value = text.substring(0, start) + text.substring(end);
    updateTextPosition(textarea, 0);
    return;
  }
  if (code === 'Delete' && end !== text.length) {
    textarea.value = text.substring(0, start) + text.substring(start + 1);
    updateTextPosition(textarea, 0, 0);
    return;
  }
  if (code === 'Backspace' && start !== 0) {
    textarea.value = text.substring(0, start - 1) + text.substring(start);
    updateTextPosition(textarea, -1, -1);
  }
};

const handleKeyLogic = (keyElement) => {
  const textarea = document.querySelector('.user-input');
  let code = keyElement.className;
  code = code.replace(/key|pressed|functional| /g, '');

  const isFunctionalKey = keyboardConfig[code].functional;
  if (!isFunctionalKey) {
    handleRegularKeys(keyElement, textarea);
    return;
  }

  if (code === 'CapsLock') {
    toggleCapsLockMode();
    return;
  }

  if (code === 'Backspace' || code === 'Delete') {
    handleDeleteKeys(code, textarea);
    return;
  }

  if (code === 'Tab') {
    addLetterToText(textarea, '\t');
  }

  if (code === 'Enter') {
    addLetterToText(textarea, '\n');
  }
};

const screenKeyClickHandler = () => {
  const keyboard = document.querySelector('.keyboard');

  keyboard.addEventListener('mousedown', (evt) => {
    const keyPressed = evt.target.closest('.key');
    if (keyPressed) {
      keyPressed.classList.add('pressed');
    }
  });

  keyboard.addEventListener('mouseup', (evt) => {
    const keyPressed = evt.target.closest('.key');
    if (keyPressed) {
      document.querySelector('.user-input').focus();
      handleKeyLogic(keyPressed);
      setTimeout(() => {
        keyPressed.classList.remove('pressed');
      }, BUTTON_ANIMATION_DURATION);
    }
  });
  // ensure that cursor position is preserved
  saveTextPositionOnTextareaEvents();
};

const keyboardKeyClickHandler = () => {
  document.addEventListener('keydown', (evt) => {
    const keyPressed = document.querySelector(`.${evt.code}`);
    if (keyPressed) {
      triggerEvent(keyPressed, 'mousedown', true);
    }
    evt.preventDefault();
  });

  document.addEventListener('keyup', (evt) => {
    const keyPressed = document.querySelector(`.${evt.code}`);
    if (keyPressed) {
      triggerEvent(keyPressed, 'mouseup', true);
      evt.preventDefault();
    }
  });

  document.addEventListener('keypress', (evt) => {
    evt.preventDefault();
  });
};

export { screenKeyClickHandler, keyboardKeyClickHandler };
