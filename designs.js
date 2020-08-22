// Select color input of the Grid
var grid = document.getElementById('pixelCanvas');

// Select size input of the Grid
var size = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
size.addEventListener('submit', function (event) {
  event.preventDefault();
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
});

function makeGrid(heigth, width) {
  grid.innerHTML = '';
  for (var h = 0; h < heigth; h++) {
    var row = grid.insertRow(h);
    for (var w = 0; w < width; w++) {
      var cell = row.insertCell(w);
      cell.addEventListener('click', function changeColor(click) {
        var color = document.getElementById('colorPicker').value;
        this.style.backgroundColor = color;
      });
    }
  }
}
