window.onload = function () {
    var eKnop = document.getElementById("deKnop");
    eKnop.onclick = bereken;
  };
  
  function bereken() {
    // de invulvelden zijn objecten
    var eOutput = document.getElementById("output");
    var eGetal1 = document.getElementById("getal1");
    var eGetal2 = document.getElementById("getal2");
  
    //de punten
    var nGetal1 = parseInt(eGetal1.value);
    var nGetal2 = parseInt(eGetal2.value);
  
    var nDel1 = nGetal1 / nGetal2;
    var nDel2 = nGetal2 / nGetal1;
    var nBericht = "";
  
    // de rekening
    //var sBericht ="";
  
    if (nGetal1 >= nGetal2) {
      //console.log("deling: " + nDel1);
      nBericht = nDel1;
    }
    if (nGetal1 < nGetal2) {
      //console.log("deling: " + nDel2);
      nBericht = nDel2;
    }
  
    if (nGetal1 == "" || nGetal2 == "" || (nGetal1 == 0 && nGetal2 == 0)) {
      alert(" mag niet delen door 0");
      //console.log(nBericht);
    }
  
    eOutput.innerHTML = nBericht;
  }