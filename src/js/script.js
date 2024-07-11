// comment is not andifayned
const chatId = -1002173135461;
const telegramBotId = "7214628321:AAHVYLKbQ3ZzyFlQq5yXuMp7ngp1EutB9uM";
const url = "https://api.telegram.org/bot" + telegramBotId + "/sendMessage";

// form elements
const elComment = document.querySelector(".js-comment");
const elLastName = document.querySelector(".js-last-name");
const elFirstName = document.querySelector(".js-first-name");
const elPhoneNumber = document.querySelector(".js-phone-number");
const elRegisterForm = document.querySelector(".js-register-form");
const elTelegramUserName = document.querySelector(".js-telegram-username");

// get input value
const getInputValue = (input) => {
  return input.value.trim();
};

// send request
const sendRequest = (e) => {
  e.preventDefault();

  // message
  const message = `👤 Ismi: ${getInputValue(elFirstName)}
👥 Familiyasi: ${getInputValue(elLastName)}
☎️ Telefon raqami: ${getInputValue(elPhoneNumber)}
🔑 Telegram foydalanuvchi nomi: @${getInputValue(elTelegramUserName)}
✉️ Izoh: ${getInputValue(elComment)}`;

  // form data
  const formData = {
    chat_id: chatId,
    text: message,
  };

  axios
    .post(url, formData)
    .then(() => {
      alert("So'rov muvaffaqiyatli yuborildi!");
    })
    .catch(() => {
      alert("Nimadir xato ketdi!");
    });

  elComment.value = "";
  elFirstName.value = "";
  elLastName.value = "";
  elPhoneNumber.value = "";
  elTelegramUserName.value = "";
};

elRegisterForm.addEventListener("submit", sendRequest);

// input masks
IMask(elPhoneNumber, {
  mask: "+{998} (00) 000-00-00",
});