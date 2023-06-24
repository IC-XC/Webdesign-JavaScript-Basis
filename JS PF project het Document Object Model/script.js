window.onload = function(){
    
    /* wijzig de titel */
    var eTitel = document.getElementById('kop'); // referentie naar node
    eTitel.innerHTML = "De document tree";

    /* wijzig de tekst van het tweede list item */
    // eerst verwijderen we het tweede item
    var eBolletjes = document.getElementsByTagName('li');
    var nAantal = eBolletjes.length;
    var e2deItem = eBolletjes[1]; // tweede item
    e2deItem.removeChild(e2deItem.childNodes[0]);
    
    // daarna creëren we een nieuw item en voegen dit in
    var sTekst = document.createTextNode('C#');
    e2deItem.appendChild(sTekst);

    /* een nieuw item invoegen achteraan de lijst */
    var eLijst = document.getElementsByTagName('ul')[0];
    var eItem = document.createElement('li');
    var sTekst = document.createTextNode('Perl');
    eItem.appendChild(sTekst);
    eLijst.appendChild(eItem);

    /* attributen zetten en wijzigen */
    var eImg = document.getElementsByTagName('img')[0];
    eImg.src = "images/elise.jpg";
    var sTooltip = "Elise, system engineer";
    eImg.setAttribute("alt",sTooltip);
    eImg.setAttribute("title", sTooltip);

    
    //oefening 1
    /*Gebruik innerHTML om de tekst "De meeste programmeurs leven op koffie" te wijzigen naar "De meeste programmeurs leven op koffie en chocolade"*/
    var eTitel = document.getElementById('leven');
    var sToevoeging = " en <em>chocolade</em>";
    var sTekst = eTitel.innerHTML + sToevoeging;
    eTitel.innerHTML = sTekst;

    
    //oefening 2
    /* We localiseren de container en maken een div aan met een id "footer" */
    var eContainer = document.getElementById('container');
    var eItem = document.createElement('div');
    eItem.setAttribute("id", "footer");

    /* We maken een hyperlink aan naar de VDAB website */
    var eLink = document.createElement('a');
    eLink.setAttribute("href", "https://github.com/IC-XC");
    eLink.setAttribute("target", "b_lank");
    sLink = document.createTextNode('GitHub');
    eLink.appendChild(sLink);

    /* We maken het tekstfragment in een p element*/
    var eFooter = document.createElement('p');
    var sTekst1 = document.createTextNode('Je vindt me op de ');
    var sTekst2 = document.createTextNode(' website');
    eFooter.appendChild(sTekst1);
    eFooter.appendChild(eLink);
    eFooter.appendChild(sTekst2);

    /* We voegen de footer (het p element) toe aan de div */
    eItem.appendChild(eFooter);

    /* We voegen de div toe aan de containter */
    eContainer.appendChild(eItem);

    
    //oefening 3
    /*Toon in de Javascript console het bericht "dit document bevat in totaal X div elementen", waarbij X het totale aantal div elementen in het volledige document is. 
    Gebruik hiervoor het console.log statement, zoek dit op.*/eImg
    var eDivs = document.getElementsByTagName('div');
    var nAantal = eDivs.length;
    console.log('dit document bevat in totaal ' + nAantal + "div elementen");

}