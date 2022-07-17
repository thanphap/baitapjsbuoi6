/**
 * Bài 4
 * In 10 thẻ div
 *  
*/

function inDiv() {
    var print = document.getElementById("txtResult4");
    for (var i = 1; i <= 10; i++) {
        var div = document.createElement("div");
        div.style.padding = "10px";
        div.style.color = "white";
        if (i % 2 == 0) {
            var node = document.createTextNode("Div chẵn " + i);
            div.style.backgroundColor = 'red';
        }
        else {
            var node = document.createTextNode("Div lẻ " + i);
            div.style.backgroundColor = 'blue';
        }
        div.appendChild(node);
        print.appendChild(div);
    }
}

document.getElementById("btnTinh4").onclick = inDiv;