let noJS = document.querySelector("html");
noJS.classList.remove("no-js");

let mapCity = document.querySelector(".map__city-img");
mapCity.classList.add("visually-hidden");

let containerSearchHotels = document.querySelector(".search-hotels__container");
containerSearchHotels.classList.remove("hidden");

let btnSearchHotels = document.querySelector(".search-hotels__open-form");
let formSearchHotels = containerSearchHotels.querySelector(".search-hotels__form");
let inpDateChekIn = formSearchHotels.querySelector("#check-in");
let inpDateChekOut = formSearchHotels.querySelector("#check-out");
let inpAdults = formSearchHotels.querySelector("#adults");
let inpChildren = formSearchHotels.querySelector("#children");
let isStorageSupport = true;
let storageAdults = "";
let storageChildren = "";

try {
  storageAdults = localStorage.getItem("adults");
  storageChildren = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

btnSearchHotels.addEventListener("click", function(evt) {
  evt.preventDefault();
  containerSearchHotels.classList.toggle("search-hotels__container--slide-in");

  if (storageAdults) {
    inpAdults.value = storageAdults;
  } else {
    inpAdults.focus();
  }

  if (storageChildren) {
    inpChildren.value = storageChildren;
  } else {
    inpChildren.focus();
  }
});

formSearchHotels.addEventListener("submit", function(evt) {
  if (!inpDateChekIn.value || !inpDateChekOut.value || !inpAdults.value) {
    evt.preventDefault();
    formSearchHotels.classList.remove("modal-error");
    formSearchHotels.offsetWidth = formSearchHotels.offsetWidth;
    formSearchHotels.classList.add("modal-error");

    if (!inpDateChekIn.value) {
      inpDateChekIn.style.borderColor = "red";
    }

    if (!inpDateChekOut.value) {
      inpDateChekOut.style.borderColor = "red";
    }

    if (!inpAdults.value) {
      inpAdults.style.borderColor = "red";
    }
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", inpAdults.value)
      localStorage.setItem("children", inpChildren.value)
    }
  }

  inpDateChekIn.addEventListener("input", function () {
    inpDateChekIn.style.borderColor = "#f2f2f2";
  })
  inpDateChekOut.addEventListener("input", function () {
    inpDateChekOut.style.borderColor = "#f2f2f2";
  })
  inpAdults.addEventListener("input", function () {
    inpAdults.style.borderColor = "#f2f2f2";
  })

});
