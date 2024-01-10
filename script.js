function compute() {
    var principal = document.getElementById("principal").value;

    if (principal == 0 || principal < 0) {
        if (window.confirm("Enter Positive Number")) {
            document.getElementById("principal").value = "";
            document.getElementById("principal").focus();
        }
    } else {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var amount = principal * years * rate / 100;
        var year = new Date().getFullYear() + parseInt(years);
        document.getElementById("result").innerHTML =
            "<br/><br/>If you deposit <mark>" + principal + "</mark>,<br/>" +
            "at an interest rate of <mark>" + rate + "%</mark><br/>" +
            "You will receive an amount of <mark>" + amount + "</mark>,<br/>" +
            "in the year <mark>" + year + "</mark><br/><br/>";
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}


