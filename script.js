console.log("Script connected");
const array = document.querySelector(".array");
let n = 50;

// Generate array of random numbers from 1 to 100
const generateArray = () => {
  array.innerHTML = "";
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

const linearSearch = async (key) => {
  let found = false;
  const items = document.getElementsByClassName("item");

  // Linear Search Algorithm
  for (let i = 0; i < n; i++) {
    showSelected(i);

    await wait(500);
    if (parseInt(items[i].innerHTML) === parseInt(key)) {
      console.log("Found at index " + i);
      elementFound(i);
      found = true;
      break;
    }
    removeSelected(i);
  }
  if (found === false) {
    console.log("Not found");
  }

  document.getElementById("search-btn").disabled = false;
};

// Handle Binary Search
const binarySearch = async (key) => {
  if (!isSorted()) {
    let shouldSort = confirm(
      "We need to call sort for Binary Search, Continue ?"
    );
    if (!shouldSort) return;
    sort();
  }
  let low = 0,
    high = n - 1,
    mid;
  found = false;
  const items = document.getElementsByClassName("item");

  // Binary Search Algorithm
  while (1) {
    if (low > high) break;
    mid = Math.floor((low + high) / 2);

    showSelected(mid);

    await wait(500);

    if (items[mid].innerHTML === key) {
      console.log("Found at index " + mid);
      elementFound(mid);
      found = true;
      break;
    } else if (parseInt(key) > parseInt(items[mid].innerHTML)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }

    removeSelected(mid);
  }
  if (found === false) {
    console.log("Not found");
  }

  document.getElementById("search-btn").disabled = false;
};

// Function to determine whether items are in sorted order
const isSorted = () => {
  let sorted = true;
  const items = document.getElementsByClassName("item");
  for (let i = 0; i < n - 1; i++) {
    if (parseInt(items[i].innerHTML) > parseInt(items[i + 1].innerHTML)) {
      sorted = false;
      break;
    }
  }
  return sorted;
};

// Function to sort array (to perform Binary Search)
const sort = () => {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      compareAndSwap(j, j + 1);
    }
  }
  console.log("Sorted");
};

// Compare & swap (used by sorting function)
const compareAndSwap = (i, j) => {
  let a = document.getElementsByClassName("item")[i].innerHTML;
  let b = document.getElementsByClassName("item")[j].innerHTML;

  if (Number(a) > Number(b)) {
    document.getElementsByClassName("item")[i].innerHTML = b;
    document.getElementsByClassName("item")[j].innerHTML = a;
  }
};

generateArray();
