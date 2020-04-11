import { createHTMLElement } from './makeElements';
import { keyboardConfig } from './config';
import { getLanguage } from './manageLanguage';

const makeKeyboardKeys = (config, language) => {
  const keyboard = createHTMLElement({ tagName: 'div', className: 'keyboard' });
  const configKeys = Object.keys(config);
  configKeys.forEach((configKey) => {
    const configItem = config[configKey];
    const keyWrapper = createHTMLElement({
      tagName: 'div',
      className: `key ${configKey}`,
    });
    const keyElement = createHTMLElement({
      tagName: 'span',
      className: 'base',
    });
    keyElement.innerHTML = configItem[language];
    if (configItem.functional) {
      keyWrapper.classList.add('functional');
    }
    if (configItem['grid-column-start']) {
      keyWrapper.style.gridColumnStart = configItem['grid-column-start'];
      keyWrapper.style.gridColumnEnd = configItem['grid-column-end'];
    }
    keyWrapper.appendChild(keyElement);
    if (configItem.extraSymbol) {
      const keyExtra = createHTMLElement({
        tagName: 'span',
        className: 'extra',
      });
      const extraSymbol = configItem.extraSymbol[language];
      if (extraSymbol) keyExtra.innerHTML = extraSymbol;
      keyWrapper.appendChild(keyExtra);
    }
    keyboard.appendChild(keyWrapper);
  });
  return keyboard;
};

const makeKeyboard = (language = 'en') => {
  const main = createHTMLElement({ tagName: 'main', className: 'main' });

  const note = createHTMLElement({ tagName: 'p' });
  note.innerHTML = 'Please note: The task was implemented on Windows.';
  main.appendChild(note);

  // info panel with current language
  const info = createHTMLElement({ tagName: 'div', className: 'info' });
  const languageWrapper = createHTMLElement({
    tagName: 'div',
    className: 'language-wrapper',
  });
  const languageLabel = createHTMLElement({
    tagName: 'span',
    className: 'language-label',
  });
  languageLabel.innerHTML = 'Current language: ';
  const currentLanguage = createHTMLElement({
    tagName: 'span',
    className: 'language',
  });
  currentLanguage.innerHTML = language;
  languageWrapper.appendChild(languageLabel);
  languageWrapper.appendChild(currentLanguage);

  const languageChange = createHTMLElement({
    tagName: 'div',
    className: 'language-change',
  });
  languageChange.innerHTML = 'You can change language by pressing Ctrl + Shift';

  info.appendChild(languageWrapper);
  info.appendChild(languageChange);
  main.appendChild(info);

  // textarea for text input
  const textarea = createHTMLElement({
    tagName: 'textarea',
    className: 'user-input',
    attrs: {
      id: 'user-input',
      cols: '30',
      rows: '10',
      autofocus: true,
    },
  });
  main.appendChild(textarea);

  // keyboard keys
  const keyboardWrapper = createHTMLElement({
    tagName: 'div',
    className: 'keyboard-wrapper',
  });
  const keyboardKeys = makeKeyboardKeys(keyboardConfig, language);
  keyboardWrapper.appendChild(keyboardKeys);
  main.appendChild(keyboardWrapper);
  return main;
};

const updateLanguageLabel = () => {
  const language = document.querySelector('.language');
  language.innerHTML = getLanguage();
};

const updateKeyboard = (language = 'en') => {
  const keyboard = document.querySelector('.keyboard');
  const configKeys = Object.keys(keyboardConfig);
  configKeys.forEach((configKey) => {
    const configItem = keyboardConfig[configKey];
    const baseSpan = keyboard.querySelector(`.${configKey} .base`);
    baseSpan.innerHTML = configItem[language];
    if (configItem.extraSymbol) {
      const extraSpan = keyboard.querySelector(`.${configKey} .extra`);
      extraSpan.innerHTML = configItem.extraSymbol[language];
    }
  });
  updateLanguageLabel();
};

export { makeKeyboard, updateKeyboard };
