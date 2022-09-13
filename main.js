let toDoList = [
  "wash the kitchen",
  "do the laundry",
  "walk the dog",
  "call my lawyer",
  "be good at programming",
  "make a to do list",
];

const intoHTML = (item) => {
  return `
      <li class="list-item">
        ${item}
      </li>
    `;
};

const htmlList = toDoList.map(intoHTML).join("");

document.querySelector("#myUL").innerHTML = htmlList;

console.log(htmlList);

let myNodelist = document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
  let li = document.createElement("li");
  let inputDay = document.getElementById("weekdays").value;
  let inputValue = document.getElementById("myInput").value;
  let input = document.createTextNode(inputValue);
  let day = document.createTextNode(inputDay);
  li.appendChild(input);
  li.appendChild(day);
  if (inputValue === "") {
    alert("You must write Somethings to Doo!");
  }
  if (inputDay === "") {
    alert("You must Choose A Day!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  document.getElementById("weekdays").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
