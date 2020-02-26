let btnSearchHotels = document.querySelector(".search-hotels__open-form");
let formSearchHotels = document.querySelector(".search-hotels__form");
let btnSubmitForm = formSearchHotels.querySelector(".submit-form");
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

btnSearchHotels.addEventListener("click", function (evt) {
  evt.preventDefault();
  formSearchHotels.classList.toggle("search-hotels__form--slide-in");

  if (storageAdults) {
    inpAdults.value = storageAdults;
    btnSubmitForm.focus();
  } else {
    inpAdults.focus();
  }

  if (storageChildren) {
    inpChildren.value = storageChildren;
    btnSubmitForm.focus();
  } else {
    inpChildren.focus();
  }
});

btnSubmitForm.addEventListener("click", function (evt) {
  if (!inpDateChekIn.value || !inpDateChekOut.value || !inpAdults.value) {
    evt.preventDefault();
    formSearchHotels.classList.remove("modal-error");
    formSearchHotels.offsetWidth = formSearchHotels.offsetWidth;
    formSearchHotels.classList.add("modal-error");

    if (!inpDateChekIn.value) {
      // evt.preventDefault();
      inpDateChekIn.style.borderColor = "red";
    }

    if (!inpDateChekOut.value) {
      // evt.preventDefault();
      inpDateChekOut.style.borderColor = "red";
    }

    if (!inpAdults.value) {
      // evt.preventDefault();
      inpAdults.style.borderColor = "red";
    }
  } else {
    if (isStorageSupport) {
      localStoroge.setItem("adults", inpAdults.value)
      localStoroge.setItem("children", inpChildren.value)
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
