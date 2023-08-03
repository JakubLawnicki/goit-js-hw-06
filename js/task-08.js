const form = document.querySelector(".login-form");

function submitForm(event) {
  event.preventDefault();
  let elements = {};

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("All fields should be filled in");
  }

  elements = { email: email.value, password: password.value };
  console.log(elements);
  event.currentTarget.reset();
}

form.addEventListener("submit", submitForm);
