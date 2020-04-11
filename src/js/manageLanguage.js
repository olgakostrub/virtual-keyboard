import { DEFAULT_LANGUAGE } from './constants';
import { updateKeyboard } from './makeKeyboard';

const storage = window.localStorage;
const LANGUAGE_KEY = 'virtual-keyboard-language';

const getLanguage = () => storage.getItem(LANGUAGE_KEY);
const setLanguage = (language) => storage.setItem(LANGUAGE_KEY, language);

const setStartLanguage = () => {
  let currentLanguage = getLanguage();
  if (!currentLanguage) {
    currentLanguage = DEFAULT_LANGUAGE;
    setLanguage(currentLanguage);
  }
  return currentLanguage;
};

const changeLanguage = () => {
  if (getLanguage() === 'en') {
    setLanguage('ru');
  } else {
    setLanguage('en');
  }
  // refresh keyboard view
  updateKeyboard(getLanguage());
};

const changeLanguageHandler = () => {
  document.addEventListener('keydown', (evt) => {
    if (evt.ctrlKey && evt.shiftKey) {
      changeLanguage();
    }
  });
};

export { changeLanguageHandler, setStartLanguage, getLanguage };
