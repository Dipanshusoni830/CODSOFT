let screen = document.getElementById('screen');

function inputValue(val) {
  screen.value += val;
}

function calculate() {
  screen.value = eval(screen.value);
}

function clearScreen() {
  screen.value = '';
}
