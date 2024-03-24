import { regexName, regexPhone } from "../../assets/constants/constants";

function calculateDateNumber() {
  const date = new Date();
  const day = date.getDate().toString();
  const month = (date.getMonth() + 1).toString();
  const year = date.getFullYear().toString();

  const dateStr = day + month + year;

  let sum = 0;
  for (let digit of dateStr) {
    sum += parseInt(digit);
  }

  return sum;
}

function closePopup(e, onClose) {
  if (e.target === e.currentTarget) onClose();
}

function validateUserName(value) {
  if (value === "") {
    return { invalid: false };
  }
  if (value !== undefined) {
    if (!regexName.test(value) || value.length < 4 || value.length > 15) {
      return { invalid: false };
    }
  }
  return { invalid: true };
}

function validatePhone(value) {
  if (value === "" || !regexPhone.test(value)) {
    return { invalid: false };
  }
  return { invalid: true };
}

const validateInput = (type, value) => {
  switch (type) {
    case "text":
      return validateUserName(value);
    case "number":
      return validatePhone(value);
    default:
      return "Такого типа нет";
  }
};

export { validateInput, closePopup, calculateDateNumber };
