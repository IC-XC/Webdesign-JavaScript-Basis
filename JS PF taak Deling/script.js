

var eKnop = document.getElementById("deKnop");
eKnop.onclick = delen;

function delen() {
    nGetal1 = parseInt(document.getElementById(
        "getal1").value);
    nGetal2 = parseInt(document.getElementById(
        "getal2").value);

    if (nGetal1 >= nGetal2) {
        document.getElementById(
            "output").innerHTML = nGetal1 / nGetal2;
    }
    else {
        document.getElementById(
            "output").innerHTML = nGetal2 / nGetal1;
    }

    if (nGetal1 == "" || nGetal2 == "" || (nGetal1 == 0 && nGetal2 == 0)) {
        alert(" mag niet delen door 0");
    }

    var eOutput = document.querySelector('#output');
    eOutput.innerHTML = document.getElementById(
        "output").innerHTML;
}

