/**
 * Bài 2
 * Tính tổng
 *  
*/

function tinhTong() {
    var coSo = Number(document.getElementById("coSo").value);
    var soMu = Number(document.getElementById("soMu").value);
    var tong = 0;

    for (var i = 1; i <= soMu; i++) {
        tong += Math.pow(coSo, i);
    }

    document.getElementById("txtResult2").innerHTML = "Tổng: " + tong;
}

document.getElementById("btnTinh2").onclick = tinhTong;

