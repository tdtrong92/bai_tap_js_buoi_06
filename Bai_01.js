function timSo() {
    var num = 0;
    var total = 0;

    do {
        num++;
        total = total + num;

    } while (total < 10000);
    console.log(num, total);

    document.getElementById("cardFooter").innerHTML = "Số cần tìm là: " + num;

}