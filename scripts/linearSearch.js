const linearSearch = async (key) => {
  let found = false,
    cnt = 0;
  const items = document.getElementsByClassName("item");

  // Linear Search Algorithm
  for (let i = 0; i < n; i++) {
    cnt++;
    showSelected(i);

    await wait(500);
    if (parseInt(items[i].innerHTML) === parseInt(key)) {
      console.log("Found at index " + i);
      elementFound(i);
      found = true;
      document.querySelector(
        ".status"
      ).innerText = `${key} found at index - ${i} (${cnt} Comparisons)`;
      break;
    }
    removeSelected(i);
  }
  if (found === false) {
    document.querySelector(".status").innerText = `${key} not found in array`;
    console.log("Not found");
  }

  document.getElementById("search-btn").disabled = false;
};
