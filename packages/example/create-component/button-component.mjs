export const type = $.COMP;

export const tag = 'my-button';
export const temp = './my-button-template.html';

export const data = {
  count: 0,
};

export const attrs = {
    buttonText: 'Click Me',
};

export const watch = {
  count(newValue, oldValue) {
    console.log(`count changed from ${oldValue} to ${newValue}`);
  },
};
