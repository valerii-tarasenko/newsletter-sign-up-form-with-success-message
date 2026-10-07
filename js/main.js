const form = document.querySelector(".card__form");
const input = document.querySelector("#card__email");
const error = document.querySelector(".card__error");

const signup = document.querySelector("#signup");
const success = document.querySelector("#success");
const successEmail = document.querySelector("#success-email");
const dismissBtn = document.querySelector("#dismiss");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = input.value.trim();
  const isValid = email.includes("@") && email.includes(".");

  if (isValid) {
    error.style.display = "none";
    input.classList.remove("card__input--error");

    successEmail.textContent = email;
    signup.classList.add("hidden");
    success.classList.remove("hidden");
  } else {
    error.style.display = "block";
    input.classList.add("card__input--error");
  }
});

dismissBtn.addEventListener("click", function () {
  success.classList.add("hidden");
  signup.classList.remove("hidden");
  input.value = "";
});
