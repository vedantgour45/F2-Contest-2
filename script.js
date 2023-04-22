"use strict";

const users = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
console.log(users);

const filterSelect = document.getElementById("filter");
const filterButton = document.querySelector(".btn-filter");
const table = document.getElementById("users-table");
const addUserButton = document.querySelector(".btn-add");

addUserButton.addEventListener("click", function () {
  let name = document.getElementById("new-name").value;
  let profession = document.getElementById("new-profession").value;
  let age = document.getElementById("new-age").value;
  let id = users.length + 1;
  const newUser = { id, name, age, profession };
  users.push(newUser);
  console.log(users);
  updateTable(users);
  document
    .querySelectorAll(".form input")
    .forEach((input) => (input.value = ""));
});

function filterUsers(profession) {
  return users.filter((user) => user.profession === profession);
}

filterButton.addEventListener("click", function () {
  const currentProfession = filterSelect.value;
  if (currentProfession === "none") {
    alert("Please select a profession");
  } else {
    const filteredUsers = filterUsers(currentProfession);
    updateTable(filteredUsers);
  }
});

function updateTable(arr) {
  let rows = "";
  arr.forEach((user) => {
    rows += `<tr>
                <td>${user.id}.</td>
                <td>Name: ${user.name}</td>
                <td>Profession: ${user.profession}</td>
                <td>Age: ${user.age}</td>
             </tr>`;
  });
  table.innerHTML = rows;
}
