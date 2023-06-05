// Lấy giá trị từ form
function getValues() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    return [num1, num2];
}

// Tính toán và trả về kết quả phép cộng
function add() {
    var values = getValues();
    var result = values[0] + values[1];
    displayResult(result);
}

// Tính toán và trả về kết quả phép trừ
function subtract() {
    var values = getValues();
    var result = values[0] - values[1];
    displayResult(result);
}

// Tính toán và trả về kết quả phép nhân
function multiply() {
    var values = getValues();
    var result = values[0] * values[1];
    displayResult(result);
}

// Tính toán và trả về kết quả phép chia
function divide() {
    var values = getValues();
    var result = values[0] / values[1];
    displayResult(result);
}

// Hiển thị kết quả
function displayResult(result) {
    document.getElementById("result").innerHTML = "Kết quả: " + result;
}