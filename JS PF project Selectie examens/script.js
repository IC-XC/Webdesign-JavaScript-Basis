var eKnop = document.querySelector('#goKnop');
eKnop.onclick = evalueer;

function evalueer() {
    /* evalueert of een student geslaagd is of niet */
    //alert('test');
    console.log('fn evalueer');

    // de invulvelden zijn objecten
    var eWiskunde = document.getElementById('wiskunde');
    var eBoekhouden = document.getElementById('boekhouden');
    var eInformatica = document.getElementById('informatica');

    //de punten
    var nWisk = parseInt(eWiskunde.value);
    var nBoek = parseInt(eBoekhouden.value);
    var nInfr = parseInt(eInformatica.value);

    var nTotl = nWisk + nBoek + nInfr;
    var nGmid = nTotl / 3;

    console.log("totaal: " + nTotl);

    // de evaluatie

    /*var sBericht = "";
    if (nWisk >= 6) {
        sBericht = "U bent geslaagd";
    }
    else {
        sBericht = "U bent NIET geslaagd";
    }
    console.log(sBericht);*/


    /*if (nWisk >= 6 && nBoek + nInfr >= 12) {
        sBericht = "U bent geslaagd";
    }
    else {
        sBericht = "U bent NIET geslaagd";
    }
    console.log(sBericht);*/


    /*if ((nWisk >= 6 && nBoek + nInfr >= 12) || nInfr == 10) {
        sBericht = "U bent geslaagd";
    }
    else {
        sBericht = "U bent NIET geslaagd";
    }
    console.log(sBericht);*/


    var sBericht = "";
    if ((nWisk >= 6 && nBoek + nInfr >= 12) || nInfr == 10) {
        sBericht = "U bent geslaagd";
        if (nGmid >= 7) {
            sBericht += " met onderscheiding";
        }
        else {
            sBericht += " met voldoening";
        }
    }
    else {
        sBericht = "U bent NIET geslaagd";
    }

    //console.log(sBericht);

    //output naar div
    var eOutput = document.querySelector('#output');
    eOutput.innerHTML = sBericht;

}
