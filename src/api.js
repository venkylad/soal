const url = " https://jsonplaceholder.typicode.com/todos";
const todos = document.querySelector(".list");

const fetchUrl = async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayTodo(data);
};
fetchUrl();

function displayTodo(data) {
  for (let i = 0; i < data.length; i++) {
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    todos.appendChild(h1);
    todos.appendChild(p);
    h1.innerHTML = data[i].title;
    p.innerHTML = data[i].completed;
  }
}
