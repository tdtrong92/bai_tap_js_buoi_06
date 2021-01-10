// function tinhTong() {
//     var txtSoX = parseInt(document.getElementById("txtSoX").value);
//     var txtSoN = parseInt(document.getElementById("txtSoN").value);
//     var tong = 0;

//     console.log(txtSoX, txtSoN);

//     for (var i = 1; i <= txtSoN; i++) {
//         tong += luyThua(i, txtSoX);
//     }
//     console.log(tong);
// }

// function luyThua(a, b) {

//     var total = 1;

//     for (var i = 1; i <= a; i++) {

//         total = total * b;
//     }
// }

function tinhTong() {
    var txtSoX = parseInt(document.getElementById("txtSoX").value);
    var txtSoN = parseInt(document.getElementById("txtSoN").value);
    var tong = 0;
    for (var i = 1; i <= txtSoN; i++) {
        tong += Math.pow(txtSoX, i);
    }
    console.log(tong);

    document.getElementById("cardFooter").innerHTML = "Kết quả là: " + tong;
}