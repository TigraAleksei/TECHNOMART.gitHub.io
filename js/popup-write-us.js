var link = document.querySelector(".write-us-open");
var popupTechnomart = document.querySelector(".write");
var overlayTechnomart = document.querySelector(".modal-overlay");
var close = popupTechnomart.querySelector(".close");
var closeAll = document.querySelector(".modal-overlay");

var form = popupTechnomart.querySelector(".write-us-form");
var userName = popupTechnomart.querySelector("[name=name-user]");
var userMail = popupTechnomart.querySelector("[name=e-mail]");
var userTextarea = popupTechnomart.querySelector("[name=write-letter]");
var isStorageSupport = true;
var storage = "";
 
try {
	storage = localStorage.getItem("userName");
	storage = localStorage.getItem("userMail");
	storage = localStorage.getItem("userTextarea");
} catch (err) {
	isStorageSupport = false;
} 

link.addEventListener("click", function (evt){
	evt.preventDefault();
	popupTechnomart.classList.add("modal-show");
	overlayTechnomart.classList.add("modal-show-overlay");
	if (storage) {
		userName.value = storage;
		userMail.value = storage;
		userTextarea.focus();
	} else {
		userName.focus();
	}
});

closeAll.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupTechnomart.classList.remove("modal-show");
    popupTechnomart.classList.remove("modal-error");
    overlayTechnomart.classList.remove("modal-show-overlay");
  });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupTechnomart.classList.remove("modal-show");
    overlayTechnomart.classList.remove("modal-show-overlay");
    popupTechnomart.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!userMail.value || !userTextarea.value) {
		evt.preventDefault();
		popupTechnomart.classList.remove("modal-error");
		popupTechnomart.offsetWidth = popupTechnomart.offsetWidth;
		popupTechnomart.classList.add("modal-error");
		console.log("Нужно ввести ваши данные !");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("userName", userName.value);
			localStorage.setItem("userMail", userMail.value);
			localStorage.setItem("userTextarea", userTextarea.value);
		}
	}
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupTechnomart.classList.contains("modal-show")) {
        popupTechnomart.classList.remove("modal-show");
        overlayTechnomart.classList.remove("modal-show-overlay");
        popupTechnomart.classList.remove("modal-error");
      }
    }
  });