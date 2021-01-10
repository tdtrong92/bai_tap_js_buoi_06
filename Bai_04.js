function taoTheDiv() {

    var theDiv = 0;
    for (var i = 1; i <= 10; i++) {
        if (i % 2 === 0) {

            theDiv = document.createElement("div");
            document.getElementById("cardFooter").appendChild(theDiv);
            theDiv.style.backgroundColor = "red";
            theDiv.style.height = "20px"

        } else {

            theDiv = document.createElement("div");
            document.getElementById("cardFooter").appendChild(theDiv);
            theDiv.style.backgroundColor = "blue";
            theDiv.style.height = "20px"

        }
    }
}