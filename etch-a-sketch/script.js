const gridSizeSlider = document.querySelector("#grid-size");
const gridValue = document.querySelector("#grid-value");
const gridValue2 = document.querySelector("#grid-value-2");
const gridContainer = document.querySelector("#grid-container");
const resetBtn = document.querySelector("#reset-btn");
const colorPicker = document.querySelector("#color-picker");
const eraserBtn = document.querySelector("#eraser-btn");
const rainbowBtn = document.querySelector("#rainbow-btn");

let isEraserOn = false;
let isRainbowOn = false;

function deactivateModes() {
  isEraserOn = false;
  eraserBtn.classList.remove("active");

  isRainbowOn = false;
  rainbowBtn.classList.remove("active");
}

gridSizeSlider.addEventListener("input", () => {
  const size = gridSizeSlider.value;
  gridValue.textContent = size;
  gridValue2.textContent = size;
  createGrid(size); // redraw with new grid size
});

function createGrid(size = 16) {
  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");

    square.addEventListener("mouseover", () => {
      if (isEraserOn) {
        square.style.backgroundColor = "#ffffff";
      } else if (isRainbowOn) {
        square.style.backgroundColor = getRandomColor();
      } else {
        square.style.backgroundColor = colorPicker.value;
      }
    });

    gridContainer.appendChild(square);
  }
}

eraserBtn.addEventListener("click", () => {
  isEraserOn = !isEraserOn;
  eraserBtn.classList.toggle("active");

  if (isEraserOn) {
    isRainbowOn = false;
    rainbowBtn.classList.remove("active");
  }
});

rainbowBtn.addEventListener("click", () => {
  isRainbowOn = !isRainbowOn;
  rainbowBtn.classList.toggle("active");

  // Turn off eraser if rainbow is turned on
  if (isRainbowOn) {
    isEraserOn = false;
    eraserBtn.classList.remove("active");
  }
});

colorPicker.addEventListener("input", () => {
  deactivateModes();
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // 0-255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

resetBtn.addEventListener("click", () => {
  const currentSize = gridSizeSlider.value;
  gridValue.textContent = currentSize;
  gridValue2.textContent = currentSize;

  deactivateModes();
  createGrid(currentSize);
});

createGrid(gridSizeSlider.value);
