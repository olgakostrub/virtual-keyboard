import { makeKeyboard } from './makeKeyboard';
import { screenKeyClickHandler, keyboardKeyClickHandler } from './handlers';
import { changeLanguageHandler, setStartLanguage } from './manageLanguage';

const language = setStartLanguage();
const keyboard = makeKeyboard(language);
document.querySelector('body').prepend(keyboard);

screenKeyClickHandler();
keyboardKeyClickHandler();
changeLanguageHandler();
