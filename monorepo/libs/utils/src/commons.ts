export const getRandomId = () =>
  new Date().getTime().toString() + Math.random().toString(20).slice(3);
