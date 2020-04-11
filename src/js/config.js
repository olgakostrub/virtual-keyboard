const keyboardConfig = {
  // first row
  Backquote: {
    en: '`',
    ru: 'ё',
  },
  Digit1: {
    en: '1',
    ru: '1',
    extraSymbol: {
      en: '!',
      ru: '!',
    },
  },
  Digit2: {
    en: '2',
    ru: '2',
    extraSymbol: {
      en: '@',
      ru: '"',
    },
  },
  Digit3: {
    en: '3',
    ru: '3',
    extraSymbol: {
      en: '#',
      ru: '№',
    },
  },
  Digit4: {
    en: '4',
    ru: '4',
    extraSymbol: {
      en: '$',
      ru: ';',
    },
  },
  Digit5: {
    en: '5',
    ru: '5',
    extraSymbol: {
      en: '%',
      ru: '%',
    },
  },
  Digit6: {
    en: '6',
    ru: '6',
    extraSymbol: {
      en: '^',
      ru: ':',
    },
  },
  Digit7: {
    en: '7',
    ru: '7',
    extraSymbol: {
      en: '&',
      ru: '?',
    },
  },
  Digit8: {
    en: '8',
    ru: '8',
    extraSymbol: {
      en: '*',
      ru: '*',
    },
  },
  Digit9: {
    en: '9',
    ru: '9',
    extraSymbol: {
      en: '(',
      ru: '(',
    },
  },

  Digit0: {
    en: '0',
    ru: '0',
    extraSymbol: {
      en: ')',
      ru: ')',
    },
  },
  Minus: {
    en: '-',
    ru: '-',
    extraSymbol: {
      en: '_',
      ru: '_',
    },
  },
  Equal: {
    en: '=',
    ru: '+',
    extraSymbol: {
      en: '+',
      ru: '+',
    },
  },
  Backspace: {
    en: 'BackSp',
    ru: 'BackSp',
    'grid-column-start': '14',
    'grid-column-end': 'span 2',
    functional: true,
  },
  // second row
  Tab: {
    displayed: '  ',
    en: 'Tab',
    ru: 'Tab',
    functional: true,
  },
  KeyQ: {
    en: 'q',
    ru: 'й',
  },
  KeyW: {
    en: 'w',
    ru: 'ц',
  },
  KeyE: {
    en: 'e',
    ru: 'у',
  },
  KeyR: {
    en: 'r',
    ru: 'к',
  },
  KeyT: {
    en: 't',
    ru: 'е',
  },
  KeyY: {
    en: 'y',
    ru: 'н',
  },
  KeyU: {
    en: 'u',
    ru: 'г',
  },
  KeyI: {
    en: 'i',
    ru: 'ш',
  },
  KeyO: {
    en: 'o',
    ru: 'щ',
  },
  KeyP: {
    en: 'p',
    ru: 'з',
  },
  BracketLeft: {
    en: '[',
    ru: 'х',
    extraSymbol: {
      en: '{',
      ru: '',
    },
  },
  BracketRight: {
    en: ']',
    ru: 'ъ',
    extraSymbol: {
      en: '}',
      ru: '',
    },
  },
  Backslash: {
    en: '\\',
    ru: '\\',
    extraSymbol: {
      en: '|',
      ru: '/',
    },
  },
  Delete: {
    en: 'Del',
    ru: 'Del',
    functional: true,
  },
  // third row
  CapsLock: {
    en: 'CapsLock',
    ru: 'CapsLock',
    'grid-column-start': 1,
    'grid-column-end': 'span 2',
    functional: true,
  },
  KeyA: {
    en: 'a',
    ru: 'ф',
  },
  KeyS: {
    en: 's',
    ru: 'ы',
  },
  KeyD: {
    en: 'd',
    ru: 'в',
  },
  KeyF: {
    en: 'f',
    ru: 'а',
  },
  KeyG: {
    en: 'g',
    ru: 'п',
  },
  KeyH: {
    en: 'h',
    ru: 'р',
  },
  KeyJ: {
    en: 'j',
    ru: 'о',
  },
  KeyK: {
    en: 'k',
    ru: 'л',
  },
  KeyL: {
    en: 'l',
    ru: 'д',
  },
  Semicolon: {
    en: ';',
    ru: 'ж',
    extraSymbol: {
      en: ':',
      ru: '',
    },
  },
  Quote: {
    en: "'",
    ru: 'э',
    extraSymbol: {
      en: '"',
      ru: '',
    },
  },
  Enter: {
    en: 'Enter',
    ru: 'Enter',
    'grid-column-start': 14,
    'grid-column-end': 'span 2',
    functional: true,
  },
  // fourth row
  ShiftLeft: {
    en: 'Shift',
    ru: 'Shift',
    'grid-column-start': 1,
    'grid-column-end': 'span 3',
    functional: true,
  },
  KeyZ: {
    en: 'z',
    ru: 'я',
  },
  KeyС: {
    en: 'с',
    ru: 'c',
  },
  KeyV: {
    en: 'v',
    ru: 'м',
  },
  KeyB: {
    en: 'b',
    ru: 'и',
  },
  KeyN: {
    en: 'n',
    ru: 'т',
  },
  KeyM: {
    en: 'm',
    ru: 'ь',
  },
  Comma: {
    en: ',',
    ru: 'б',
    extraSymbol: {
      en: '<',
      ru: '',
    },
  },
  Period: {
    en: '.',
    ru: 'ю',
    extraSymbol: {
      en: '>',
      ru: '',
    },
  },
  Slash: {
    en: '/',
    ru: '.',
    extraSymbol: {
      en: '.',
      ru: ',',
    },
  },
  ArrowUp: {
    en: '&#x25B2',
    ru: '&#x25B2',
    // functional: true,
  },
  ShiftRight: {
    en: 'Shift',
    ru: 'Shift',
    'grid-column-start': 14,
    'grid-column-end': 'span 2',
    functional: true,
  },

  // fifth row
  ControlLeft: {
    en: 'Ctrl',
    ru: 'Ctrl',
    functional: true,
  },
  MetaLeft: {
    en: 'Win',
    ru: 'Win',
    functional: true,
  },
  AltLeft: {
    en: 'Alt',
    ru: 'Alt',
    functional: true,
  },
  Space: {
    en: ' ',
    ru: ' ',
    'grid-column-start': 4,
    'grid-column-end': 'span 7',
  },
  AltRight: {
    en: 'Alt',
    ru: 'Alt',
    functional: true,
  },
  ArrowLeft: {
    en: '&#x25C0',
    ru: '&#x25C0',
    // functional: true,
  },
  ArrowDown: {
    en: '&#x25BC',
    ru: '&#x25BC',
    // functional: true,
  },
  ArrowRight: {
    en: '&#x25B6',
    ru: '&#x25B6',
    // functional: true,
  },
  ControlRight: {
    en: 'Ctrl',
    ru: 'Ctrl',
    functional: true,
  },
};

export { keyboardConfig };
