// -------------------------------------1-----------------------------------

// 1 - отримай body елемент і виведи його в консоль;

const body = document.querySelector("body");
console.log(body);

// 2 - отримай елемент id="title" і виведи його в консоль;

const title = document.querySelector("#title");
console.log(title);

// 3 - отримай елемент class="list" і виведи його в консоль;

const list = document.querySelector(".list");
console.log(list);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

const dataTopicElements = document.querySelectorAll("[data-topic]");
console.log(dataTopicElements);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const firstDataTopicElement = document.querySelector("[data-topic]");
console.log(firstDataTopicElement);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const lastDataTopicElement = dataTopicElements[dataTopicElements.length - 1];
console.log(lastDataTopicElement);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

const neighborOfH1 = title.nextElementSibling;
console.log(neighborOfH1);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

const subTitle = document.querySelectorAll("h3");
console.log(subTitle);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

subTitle.forEach((element) => {
  element.classList.add("active");
});

const subTitleActive = document.querySelectorAll(".active");
subTitleActive.forEach((element) => {
  element.style.color = "red";
});

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

const liNav = document.querySelector("[data-topic='navigation']");
console.log(liNav);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

liNav.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

const liText = liNav.querySelector("p");
liText.textContent = "Я змінив тут текст!";

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

const currentTopic = "manipulation";
const manipulationElement = document.querySelector(
  `[data-topic='${currentTopic}']`,
);
console.log(manipulationElement);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

manipulationElement.style.backgroundColor = "lightblue";

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

const completedTitle = document.querySelector(".completed");
console.log(completedTitle);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

const element = completedTitle.closest("li");

element.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

const newText = document.createElement("p");
newText.textContent = "Об'єктна модель документа (Document Object Model)";
title.insertAdjacentElement("afterend", newText);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

const newLi = document.createElement("li");
const newH3 = document.createElement("h3");
newH3.textContent = "Властивість innerHTML";
const newP = document.createElement("p");
newP.textContent =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

newLi.appendChild(newH3);
newLi.appendChild(newP);
list.insertAdjacentElement("beforeend", newLi);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

const newLiHTMLTitle = "Властивість innerHTML";

const newLiHTMLText =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

const markup = `<li>
  <h3>${newLiHTMLTitle}</h3>
  <p>${newLiHTMLText}</p>
</li>`;
list.insertAdjacentHTML("beforeend", markup);

// 20 - очисти список

const listItems = list.querySelectorAll("li");
listItems.forEach((element) => {
  element.remove();
});

// _-------------------------------------2-----------------------------------
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// --------------------------------------3-----------------------------------
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// --------------------------------------4-----------------------------------
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
