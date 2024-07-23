const formButton = document.getElementById("btn");
const dataTable = document.getElementById("table").querySelectorAll(".row")[0];

const inputs = {
  name: document.getElementById("name"),
  age: document.getElementById("age"),
  city: document.getElementById("city"),
  email: document.getElementById("email"),
  password: document.getElementById("password"),
};

function validateEmail(email) {
  const regExCode = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regExCode.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}

function clearInputs() {
  for (const key in inputs) {
    inputs[key].value = "";
  }
}

formButton.addEventListener("click", (event) => {
  event.preventDefault();

  const name = inputs.name.value;
  const age = inputs.age.value;
  const city = inputs.city.value;
  const email = inputs.email.value;
  const password = inputs.password.value;

  if (!name || !age || !city || !email || !password) {
    alert("Please fill out all fields.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!validatePassword(password)) {
    alert("Password must be at least 6 characters.");
    return;
  }

  alert("Details entered successfully!!");

  const newRow = document.createElement("tr");

  newRow.innerHTML = `
      <td>${name}</td>
      <td>${age}</td>
      <td>${city}</td>
      <td>${email}</td>
      <td>${password}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;
  dataTable.appendChild(newRow);

  newRow.querySelector(".delete-btn").addEventListener("click", () => {
    newRow.remove();
  });

  clearInputs();
});
