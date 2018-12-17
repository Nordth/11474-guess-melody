// создание DOM-элемента на основе переданной в виде строки разметки
export const createElmt = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

// функция смены экранов
const mainScreen = document.getElementById(`main`);
export const screenChange = (element) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(element);
};
