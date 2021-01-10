function tinhGiaiThua() {
    var n = document.getElementById("txtSoN").value;
    var giaiThua = 1;

    for (var i = 1; i <= n; i++) {
        giaiThua *= i;
    }
    console.log(giaiThua);
    document.getElementById("cardFooter").innerHTML = "n! = " + giaiThua;

}