var versie = " versie 1.0";
window.onload = function () {
    //versie info
    var eKop = document.querySelector('h1');
    eKop.innerHTML = eKop.innerHTML + versie;
    var eImg = document.getElementById('plaatshouder');
    //var eSidebar = document.querySelector('sidebar');
    //var eLinks = eSidebar.getElementsByTagName('a'); //collection
    var eLinks = document.querySelectorAll('sidebar a'); //collection
    //console.log('eLinks %s',eLinks.length);
    for(var i=0;i<eLinks.length;i++){
         eLinks[i].addEventListener('click',function (e){
               e.preventDefault();
               //toonFoto(this,eImg);
               })
         eLinks[i].addEventListener('mouseover',function (e){
         toonFoto(this,eImg);
         })
    }
}

function toonFoto(eLink, eImg) {
    /* wisselt de bron van het src attribuut van de img#beeld
   @ eLink, een hyperlink element
   @ eImg, plaatshouder img
   */
    //console.log(eLink.href);
    eImg.src = eLink.href;
    var sInfo = eLink.getAttribute('title');
    var eInfo = document.getElementById('info');
    if (eInfo) {
        //eInfo bestaat reeds
        eInfo.innerHTML = sInfo;
    }
    else {
        var eInfo = document.createElement('p');
        eInfo.id = "info";
        eInfo.innerHTML = sInfo;
        //eImg.parentNode.appendChild(eInfo);
        eImg.parentNode.insertBefore(eInfo, eImg.parentNode.firstChild);
    }
}