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
    mid,
    cnt = 0;
  found = false;
  const items = document.getElementsByClassName("item");

  // Binary Search Algorithm
  while (1) {
    cnt++;
    if (low > high) break;
    mid = Math.floor((low + high) / 2);

    showSelected(mid);

    await wait(500);

    if (items[mid].innerHTML === key) {
      console.log("Found at index " + mid);
      elementFound(mid);
      found = true;
      document.querySelector(
        ".status"
      ).innerText = `${key} found at index - ${mid} (${cnt} Comparisons)`;
      break;
    } else if (parseInt(key) > parseInt(items[mid].innerHTML)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }

    removeSelected(mid);
  }
  if (found === false) {
    document.querySelector(".status").innerText = `${key} not found in array`;
    console.log("Not found");
  }

  document.getElementById("search-btn").disabled = false;
};
