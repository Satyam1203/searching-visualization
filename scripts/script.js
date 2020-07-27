console.log("Script connected");
const array = document.querySelector(".array");
let n = 15;

// Generate array of random numbers from 1 to 100
const generateArray = () => {
  array.innerHTML = "";
  document.querySelector(".status").innerText = ``;
  for (let i = 0; i < n; i++) {
    const el = document.createElement("div");
    el.classList.add("item");
    el.innerHTML = Math.ceil(Math.random() * 100);
    array.appendChild(el);
  }
};

// Decides which search algorithm should be called, based on user's choice
const search = async () => {
  for (let i = 0; i < n; i++) {
    removeSelected(i);
  }
  document.querySelector(".status").innerText = ``;
  await wait(800);
  const key = document.getElementById("key").value;
  const option = document.getElementById("option").value;
  if (isNaN(Number(key)) || !key)
    alert("Please enter valid integer as Search Key");
  else if (option === "0") {
    document.getElementById("search-btn").disabled = true;
    linearSearch(key);
  } else {
    document.getElementById("search-btn").disabled = true;
    binarySearch(key);
  }
};

// wait funcion
const wait = async (t) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), t);
  });

  let result = await promise;
};

const showSelected = (idx) => {
  const el = document.getElementsByClassName("item")[idx];
  el.style.boxShadow = "1px 2px 3px darkgray";
  el.style.transform = "scale(1.2)";
  el.style.backgroundColor = "#6A89CC";
  el.style.color = "#eee";
};

const removeSelected = (idx) => {
  const el = document.getElementsByClassName("item")[idx];
  el.style.boxShadow = "none";
  el.style.transform = "none";
  el.style.color = "#000";
  el.style.backgroundColor = "transparent";
  el.style.backgroundImage = "none";
};

const elementFound = (idx) => {
  const el = document.getElementsByClassName("item")[idx];
  el.style.backgroundImage =
    "linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%)";
};

generateArray();
