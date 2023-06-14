const result = document.querySelector('.result'); // контейнер для результата
const btn = document.querySelector('.btn'); // кнопка Искать

const option = document.querySelector('#form').elements['options']; // записываем select в переменную
const namber = document.querySelector('#form').elements['number']; // записываем input number в переменную

function Conclusion(e) {
  e.preventDefault();

  let activOption = option.value; // записываем значение из select-->option в переменную
  let activNamber = namber.value; // записываем значение из input number в переменную

  console.log(activOption);
  console.log(activNamber);


}

btn.addEventListener('click', Conclusion);