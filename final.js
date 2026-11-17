function addItem() {
  var value = parseInt(document.getElementById("add").value, 10);
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value += 1;
    document.getElementById("add").value = value + " Items Added to Cart ";
  }
  else {
    value = "Maximum Allowed";
  }
}
