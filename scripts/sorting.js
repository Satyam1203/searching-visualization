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
