

window.onload = function () {
    var eKnop = document.querySelector("#deKnop");
    eKnop.onclick = kindergeld;
};


function kindergeld() {
   
    var eOutput = document.getElementById("output");
    var eKinderen = document.getElementById("kinderen");
    var eMaandLoon = document.getElementById("maandloon");

 
    var nKinderen = eKinderen.value;
    var nMaandLoon = eMaandLoon.value;

    
    var nKgPerKind = 25.0;
    var nToeslag3EnMeer = 12.5;
    var nToeslag5EnMeer = 7.5;
    var nMinMaandLoon = 500;
    var nMaxMaandLoon = 2000;
    var nMinMndLToeslag = 0.25;
    var nMaxMndLVermindering = 0.45;
    var nMinKgPK = 25;
    var nKg = 0;
    var sKg = "";

    if (nKinderen <= 0 || nMaandLoon <= 0) {
        alert("aantal kinderen en/of maandLoon moeten meer dan 0 zijn");
      } else {
        nKg = nKinderen * nKgPerKind;
        if ((nKinderen = 3)) {
          nKg = nKg + (nKinderen - 2) * nToeslag3EnMeer;
        }
        if ((nKinderen = 5)) {
          nKg = nKg + (nKinderen - 4) * nToeslag5EnMeer;
        }
        if (nMaandLoon < nMinMaandLoon) {
          nKg = nKg + nKg * nMinMndLToeslag;
        }
        if (nMaandLoon > nMaxMaandLoon) {
          nKg = nKg - nKg * nMaxMndLVermindering;
        }
        if (nKg < nKinderen * nMinKgPK) {
          nKg = nKinderen * nMinKgPK;
        }
    
        sKg += "met een maandloon van " + nMinMaandLoon;
        sKg += "\nen " + nKinderen + " kinderen,";
        sKg += "heeft deze moeder recht op " + nKg + " Euro kindergeld";
    
        eOutput.innerHTML = sKg;
    }

}
