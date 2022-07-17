/**
 * Bài 3
 * Tính giai thừa
 *  
*/

function tinhGiaiThua() {
    var number = Number(document.getElementById("number").value);
    var giaiThua = 1;
    for (var i = 2; i <= number; i++) {
        giaiThua *= i;
    }
    document.getElementById("txtResult3").innerHTML = "Giai thừa của " + number + " là: " + giaiThua;
}

document.getElementById("btnTinh3").onclick = tinhGiaiThua;