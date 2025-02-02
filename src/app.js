import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function () {
  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  let symbols = ["spades", "clubs", "diams", "hearts"];
  let numbercards = document.querySelector("#numbercards");
  let btnDraw = document.querySelector("#btndraw");
  let btnSort = document.querySelector("#btnsort");
  let cardscontainer = document.querySelector("#cards-container");
  let sortedcards = document.querySelector("#sorted-cards");
  let Cards = [];

  btnDraw.addEventListener("click", getCards);
  btnSort.addEventListener("click", () => orderedCards(Cards));

  function getCards() {
    if (numbercards.value < 1 || numbercards.value > 14) {
      alert("Please select other number between 1 to 14");
      return;
    }
    Cards = [];
    cardscontainer.innerHTML = "";
    for (let i = 1; i <= numbercards.value; i++) {
      let randomnum = getRandom(numbers);
      let randomsym = getRandom(symbols);
      //Go to my function getRandom and back:
      let defnum = numbers[randomnum];
      let defsym = symbols[randomsym];

      Cards.push({ defnum, defsym });
      let tinycard = drawCards(defnum, defsym);
      //Go to my function DrawCards and back:
      cardscontainer.appendChild(tinycard);
    }
  }
  //Ejecute and back:
  function drawCards(defnum, defsym) {
    let box = document.createElement("div");
    box.classList.add("cards", defsym);
    box.innerHTML = changenum(defnum);
    //Go to my function changenum and back:
    return box;
  }
  //Bubble Sort:
  /*function orderedCards(arr = []) {
    sortedcards.innerHTML = ""; // Limpiar el contenedor de resultados
    let size = arr.length;
    let logContainer = document.createElement("div"); // Contenedor de logs
    logContainer.classList.add("bubble-log");

    for (let i = 0; i < size - 1; i++) {
      let swapped = false;

      for (let j = 0; j < size - 1 - i; j++) {
        if (arr[j].defnum > arr[j + 1].defnum) {
          // Intercambiar elementos si están desordenados
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;

          // Crear una nueva línea de log SOLO cuando hay intercambio
          let stepBox = document.createElement("div");
          stepBox.classList.add("step-box");

          // Registrar el estado actual después del intercambio
          arr.forEach(({ defnum, defsym }) => {
            let tinycard = drawCards(defnum, defsym);
            stepBox.appendChild(tinycard);
          });

          logContainer.appendChild(stepBox);
        }
      }

      // Si no hubo intercambios en toda la pasada, el array ya está ordenado
      if (!swapped) break;
    }

    sortedcards.appendChild(logContainer); // Mostrar todos los cambios en el HTML
  }*/

  //Selection Sort:
  function orderedCards(arr = []) {
    sortedcards.innerHTML = "";
    let size = arr.length;
    for (let i = 0; i < size - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < size; j++) {
        if (arr[j].defnum < arr[minIndex].defnum) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
      let box = document.createElement("div");
      box.classList.add("container-box");
      arr.forEach(({ defnum, defsym }) => {
        let tinycard = drawCards(defnum, defsym);
        box.appendChild(tinycard);
      });
      sortedcards.appendChild(box);
    }
  }

  //Ejecute and back:
  function getRandom(arr = []) {
    return Math.floor(Math.random() * arr.length);
  }

  //Ejecute and back:
  function changenum(defnum) {
    switch (defnum) {
      case 11:
        return "J";
      case 12:
        return "Q";
      case 13:
        return "K";
      case 14:
        return "A";
      default:
        return defnum;
    }
  }
};
