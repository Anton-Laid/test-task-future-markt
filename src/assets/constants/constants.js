const dateNavigate = [
  {
    name: "Обо мне",
  },
  {
    name: "Наставничество",
  },
  {
    name: "Мероприятия",
  },
  {
    name: "Кейсы",
  },
  {
    name: "Отзывы",
  },
  {
    name: "Контакты",
  },
];
const regexName = /^[a-zA-Zа-яА-Я\sё-]+$/;
const regexPhone =
  /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;
const url = "https://www.cbr-xml-daily.ru/daily_json.js";
const maskPhone = [
  "+",
  "7",
  " ",
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];

export { dateNavigate, regexName, regexPhone, url, maskPhone };
