// import { gallery } from "../data/data";

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

// responsive header menu
const elHamburgerBtn = document.querySelector(".js-hamburger-btn");
const elCloseMenuBtn = document.querySelector(".js-close-menu-btn");
const elResponsiveMenuRegisterBtn = document.querySelector(
  ".js-responsive-menu-register-btn"
);
const elResponsiveHeaderMenu = document.querySelector(
  ".js-responsive-header-menu"
);

elHamburgerBtn.addEventListener("click", () => {
  elResponsiveHeaderMenu.style.display = "block";
});

const closeMenu = () => {
  elResponsiveHeaderMenu.style.display = "none";
};

elCloseMenuBtn.addEventListener("click", closeMenu);
elResponsiveMenuRegisterBtn.addEventListener("click", closeMenu);

// photogallery
let isExpand = false;
const elGallery = document.querySelector(".js-photogallery");
const elOverlay = document.querySelector(".js-gallery-overlay");
const elExpandBtn = document.querySelector(".js-toggle-expand-gallery-btn");

const setGallery = (data) => {
  elGallery.innerHTML = "";

  data.map(
    (item) =>
      (elGallery.innerHTML += `<li>
                <img
                  width="397"
                  height="397"
                  alt="image"
                  src="${item.image}"
                  class="w-full h-auto aspect-square object-cover"
                />
              </li>`)
  );
};

setGallery(gallery.slice(0, 9));

elExpandBtn.addEventListener("click", () => {
  isExpand = !isExpand;
  if (isExpand) {
    setGallery(gallery);
    elOverlay.style.display = "none";
    elExpandBtn.style.bottom = "-24px";
    elExpandBtn.textContent = "Qisqartirish";
  } else {
    setGallery(gallery.slice(0, 9));
    elExpandBtn.style.bottom = "0px";
    elOverlay.style.display = "block";
    elExpandBtn.textContent = "Barchasini ko'rsatish";
  }
});
