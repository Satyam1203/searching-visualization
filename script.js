console.log("Script connected");
const array = document.querySelector(".array");
let n = 10;

// Generate array of random numbers from 1 to 100
const generateArray = () => {
  let n = 10;
  array.innerHTML = "";
  for (let i = 0; i < n; i++) {
    const el = document.createElement("div");
    el.classList.add("item");
    el.innerHTML = Math.ceil(Math.random() * 100);
    array.appendChild(el);
  }
};

// Decides which search algorithm should be called, based on user's choice
const search = () => {
  const option = document.getElementById("option").value;
  if (option === "0") linearSearch();
  else binarySearch();
};

// wait funcion
const wait = async (t) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1500 / n);
  });

  let result = await promise;
};

const linearSearch = () => {
  let n = 10,
    found = false;
  const key = document.getElementById("key").value;
  const items = document.getElementsByClassName("item");

  // Linear Search Algorithm
  for (let i = 0; i < n; i++) {
    if (parseInt(items[i].innerHTML) === parseInt(key)) {
      console.log("Found at index " + i);
      found = true;
      break;
    }
  }
  if (found === false) {
    console.log("Not found");
  }
};

// Handle Binary Search
const binarySearch = () => {
  if (!isSorted()) {
    let shouldSort = confirm(
      "We need to call sort for Binary Search, Continue ?"
    );
    if (!shouldSort) return;
    sort();
  }
  let n = 10,
    low = 0,
    high = n,
    mid;
  found = false;
  const key = document.getElementById("key").value;
  const items = document.getElementsByClassName("item");

  // Binary Search Algorithm
  while (!found) {
    if (low >= high) break;
    mid = Math.floor((low + high) / 2);
    if (items[mid].innerHTML === key) {
      console.log("Found at index " + mid);
      found = true;
    } else if (parseInt(key) > parseInt(items[mid].innerHTML)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if (found === false) {
    console.log("Not found");
  }
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
