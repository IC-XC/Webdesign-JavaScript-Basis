window.onload = function () {

    //=============variabelen=======

    var eOutput = document.getElementById('output');
    var eKnop = document.getElementById('deKnop');
    var eGetal = document.getElementById('getal');

    //=============event handlers===========

    eKnop.onclick = function () {

        var nGetal = eGetal.value;
        eOutput.innerHTML = lussenMaar(nGetal);

        /*var nGetal = eGetal.value;
        if (nGetal == "" || isNaN(nGetal)) {
            alert('Deze functie werkt enkel met getallen');
        }
        else {
            eOutput.innerHTML = lussenMaar(parseInt(nGetal))
        }*/

        //eOutput.innerHTML = arrayLus();
    };

    

    //einde window.onload

    //=============functies=================F



    function lussenMaar(n) {

        //werken met argumenten
        /* Testfunctie voor iteraties : FOR
           @n getal
        */

        /*console.log(n);
     return n;*/


        //werken met lusszen
        /* Testfunctie 
        voor iteraties
           @n getal, verplicht, max aantal iteraties
       */

        console.log(n);
     var sTekst = "";
     for (var i = 0; i < n; i++) {
         sTekst += i + " ";
     }
     return sTekst;

        /*console.log(n);
     var sTekst = "";
      for(var i=1; i<= n ; i++){
           for(var j=1;j<=n;j++){
           sTekst += i*j + " ";
           }
           sTekst += "<br>";
      }
      return sTekst;*/

        /*console.log(n);
        var sTekst = "";
        var i = 1;
        while (i <= n) {
            var j = 1;
            while (j <= n) {
                sTekst += i * j + " ";
                j++;
            }
            sTekst += "<br>";
            i++;
        }
        return sTekst;*/

    }
    
    //function arrayLus(){
        /* Testfunctie voor iteraties : WHILE met array
       @n getal, verplicht, max aantal iteraties
       */
       /*var aGetallen = [12,2,4,8,5];
       var sTekst = "";
       var i = 0;
       while(i<aGetallen.length){
            sTekst += aGetallen[i] + " ";
            i++;
       }
       console.log(sTekst);
       return sTekst;*/
    //}
}
