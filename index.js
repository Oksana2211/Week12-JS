const result = document.querySelector('.result'); // контейнер для результата
const btn = document.querySelector('.btn'); // кнопка Искать

const option = document.querySelector('#form').elements['options']; // записываем select в переменную
const namber = document.querySelector('#form').elements['number']; // записываем input number в переменную

function Conclusion(e) {
  e.preventDefault();

  let activOption = option.value; // записываем значение из select-->option в переменную
  let activNamber = namber.value; // записываем значение из input number в переменную


  fetch(`https://swapi.nomoreparties.co/${activOption}/${activNamber}`)
    .then((response) => response.json())
    .then((response) => {

      document.querySelector(".result").innerHTML = `${response.name}`; // помещаем в div result имя объекта

      if (document.querySelector(".result").textContent == 'undefined') {
        document.querySelector(".result").innerHTML = "";
      }

      if (activNamber < 1 || activNamber > 10) {
        throw new Error( // создаем ошибку 
          "Ошибка. Введите число от 1 до 10 включительно."
        );
      };

    }).catch((error) => {
      document.querySelector(".result").innerHTML = `<p class="error">${error.message}</p>`; //выводим сообщение об ошибке

    }).finally(() => {
      console.log(activOption);
      console.log(activNamber);
      option.value = "";
      namber.value = "";
    });

}

btn.addEventListener('click', Conclusion);