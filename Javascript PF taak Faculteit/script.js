function fact() {
    var i, num, f;
    f = 1;
    num = document.getElementById("getal").value;
    for (i = 1; i <= num; i++) {
      f = f * i;
    }
    i = i - 1;
  
    if (num < 0) {
      alert("De faculteit van een negatief getal bestaat niet");
    }
    document.getElementById("output").innerHTML =
      "De faculteit van het getal " + i + " is: " + f;
  }
  