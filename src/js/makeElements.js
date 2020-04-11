const createHTMLElement = (elementConfig) => {
  const { tagName, className, attrs } = elementConfig;
  const newElement = document.createElement(`${tagName}`);
  if (className) {
    newElement.className = className;
  }
  if (attrs) {
    Object.keys(attrs).forEach((attrKey) => {
      newElement[attrKey] = attrs[attrKey];
    });
  }
  return newElement;
};

export { createHTMLElement };
