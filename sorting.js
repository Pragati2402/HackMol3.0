// swaping values

function swap(el1, el2) {
  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

// bubble sort

async function bubble() {
  disableSortingBtn();
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length - 1; i++) {
    for (let j = 0; j < ele.length - i - 1; j++) {
      ele[j].style.background =
        "linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%)";
      ele[j + 1].style.background =
        "linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%)";
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        await insertDelay(delay);
        swap(ele[j], ele[j + 1]);
      }
      ele[j].style.background =
        "linear-gradient(315deg, #00bfb2 0%, #028090 74%)";
      ele[j + 1].style.background =
        "linear-gradient(315deg, #00bfb2 0%, #028090 74%)";
    }
    ele[ele.length - 1 - i].style.background =
      "linear-gradient(316deg, #4062bb 0%, #5200ae 74%)";
  }
  ele[0].style.background = "linear-gradient(316deg, #4062bb 0%, #5200ae 74%)";
  enableSortingBtn()
}

function insertDelay(milisec) {
  disableSortingBtn();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

async function selection() {
  disableSortingBtn();
  //console.log('sel');
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length; i++) {
    let min_index = i;

    ele[i].style.background =
      "linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)";
    for (let j = i + 1; j < ele.length; j++) {
      ele[j].style.background =
        "linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%)";

      await insertDelay(delay);
      if (
        parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)
      ) {
        if (min_index !== i) {
          ele[min_index].style.background =
            "linear-gradient(315deg, #00bfb2 0%, #028090 74%)";
        }
        min_index = j;
      } else {
        ele[j].style.background =
          "linear-gradient(315deg, #00bfb2 0%, #028090 74%)";
      }
    }
    await insertDelay(delay);
    swap(ele[min_index], ele[i]);
    // change the min element index back to normal as it is swapped
    ele[min_index].style.background =
      "linear-gradient(315deg, #00bfb2 0%, #028090 74%)";
    // change the sorted elements color to green
    ele[i].style.background =
      "linear-gradient(316deg, #4062bb 0%, #5200ae 74%)";
  }
  enableSortingBtn()
}

// insertion sort
async function insertion() {
  //console.log('insertion');
  const ele = document.querySelectorAll(".bar"); // int x;
  // color
  ele[0].style.background = "linear-gradient(316deg, #4062bb 0%, #5200ae 74%)";
  for (let i = 1; i < ele.length; i++) {
    let j = i - 1;
    let selected = ele[i].style.height; //  x = A[i];
    ele[i].style.background =
      "linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%)";

    while (j > -1 && parseInt(ele[j].style.height) > parseInt(selected)) {
      ele[j].style.background =
        "linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%)";
      ele[j + 1].style.height = ele[j].style.height;
      j--;
      await insertDelay(delay);
      for (let k = i; k >= 0; k--) {
        ele[k].style.background =
          "linear-gradient(316deg, #4062bb 0%, #5200ae 74%)";
      }
    }
    ele[j + 1].style.height = selected;
    ele[i].style.background =
      "linear-gradient(316deg, #4062bb 0%, #5200ae 74%)";
  }
  enableSortingBtn()
}

function disableSortingBtn(){
  document.querySelector("#bubbleSort").disabled = true;
  document.querySelector("#insertionSort").disabled = true;
  document.querySelector("#mergeSort").disabled = true;
  document.querySelector("#quickSort").disabled = true;
  document.querySelector("#selectionSort").disabled = true;
}


function enableSortingBtn(){
  document.querySelector("#bubbleSort").disabled = false;
  document.querySelector("#insertionSort").disabled = false;
  document.querySelector("#mergeSort").disabled = false;
  document.querySelector("#quickSort").disabled = false;
  document.querySelector("#selectionSort").disabled = false;
}