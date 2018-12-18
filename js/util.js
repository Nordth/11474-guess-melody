// создание DOM-элемента на основе переданной в виде строки разметки
export const createElement = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  const element = wrapper.firstChild;
  return element;
};

// функция смены экранов
const mainScreen = document.getElementById(`main`);
export const changeScreen = (element) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(element);
};
