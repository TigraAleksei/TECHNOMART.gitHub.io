var link = document.querySelector(".img-map-one");
var popupMap = document.querySelector(".map");
var overlayTechnomart = document.querySelector(".modal-overlay");
var close = popupMap.querySelector(".close");
var closeAll = document.querySelector(".modal-overlay");

link.addEventListener("click", function (evt){
	evt.preventDefault();
	popupMap.classList.add("modal-show");
	overlayTechnomart.classList.add("modal-show-overlay");
});

closeAll.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
    popupMap.classList.remove("modal-error");
    overlayTechnomart.classList.remove("modal-show-overlay");
  });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
    overlayTechnomart.classList.remove("modal-show-overlay");
    popupTechnomart.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupMap.classList.contains("modal-show")) {
        popupMap.classList.remove("modal-show");
        overlayTechnomart.classList.remove("modal-show-overlay");
      }
    }
  });