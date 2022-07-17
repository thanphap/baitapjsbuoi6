/**
 * Bài 1
 * Tìm số nguyên dương nhỏ nhất
 */

function timSo() {
    var number = 10000;
    var total = 1;
    count = 1;
    while (total < number) {
        count++;
        total += count;
    }
    document.getElementById("txtResult1").innerHTML = "Số nguyên dương nhỏ nhất: " + count;
}

document.getElementById("btnTinh1").onclick = timSo;

// var check = 1;
//     for(var i = 1; i<=141; i++){
//         check +=i; 
//     }
//     console.log(check);