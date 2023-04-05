inputWidth = prompt("Enter the width");
inputHeight = prompt("Enter the height");

let width = parseInt(inputWidth);
let height = parseInt(inputHeight);

let area = (width * height).toFixed(2);
document.write("The area is: " + area);
