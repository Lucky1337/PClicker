// Compteur : 
let money = 0,
    script = 0,
    noclip = 0,
    dox = 0,
    map = 0,
    ddos = 0,
    zertek = 0,
    filesteal = 0,
    serv = 0,
    snk = 0,
    joueur = 0;

// Coût item : 
let pscript = 15,
    pnoclip = 30,
    pdox = 75,
    pmap = 150,
    pddos = 250,
    pzertek = 300,
    pfilesteal = 350,
    psnk = 375,
    pserv = 450;
    
// Stock du rendement : 
let rmoney = 0.2,
    rscript = 0,
    rnoclip = 0,
    rdox = 0,
    rmap = 0,
    rddos = 0,
    rzertek = 0,
    rfilesteal = 0,
    rsnk = 0,
    rserv = 0;

// Click :
    document.getElementById("click").addEventListener("click", function() {
        money = money + rmoney;
        document.getElementById("money").innerHTML = "Argent récolté : " + Math.round(money) + "€";
    });

// Script : 
    document.getElementById("button1").addEventListener("click", function() {
        if (money - pscript >= 0) { 
        money = money - pscript;
        script = script + 1;
        rscript = script * 0.2;
        pscript = pscript * 1.15;
        document.getElementById("money").innerHTML = "Argent récolté : " + Math.round(money) + "€" ;
        document.getElementById("script").innerHTML = script ;
        document.getElementById("pscript").innerHTML = Math.round(pscript) + "€";
        new Audio("sound/upgrade.mp3").play();
        }
    });

// Noclip : 
    document.getElementById("button2").addEventListener("click", function() {
        if (money - pnoclip >= 0) { 
        money = money - pnoclip;
        noclip = noclip + 1;
        rnoclip = noclip * 0.5;
        pnoclip = pnoclip * 1.15;
        document.getElementById("money").innerHTML = "Argent récolté : " + Math.round(money) + "€" ;
        document.getElementById("noclip").innerHTML = noclip ;
        document.getElementById("pnoclip").innerHTML = Math.round(pnoclip) + "€";
        new Audio("sound/upgrade.mp3").play();
        }
    });

// Dox : 
    document.getElementById("button3").addEventListener("click", function() {
        if (money - pdox >= 0) { 
        money = money - pdox;
        dox = dox + 1;
        rdox = dox * 1;
        pdox = pdox * 1.15;
        document.getElementById("money").innerHTML = "Argent récolté : " + Math.round(money) + "€" ;
        document.getElementById("dox").innerHTML = dox ;
        document.getElementById("pdox").innerHTML = Math.round(pdox) + "€";
        new Audio("sound/upgrade.mp3").play();
        }
    });
    
// Map : 
    document.getElementById("button4").addEventListener("click", function() {
        if (money - pmap >= 0) { 
        money = money - pmap;
        map = map + 1;
        rmap = map * 1.2;
        pmap = pmap * 1.15;
        document.getElementById("money").innerHTML = "Argent récolté : " + Math.round(money) + "€" ;
        document.getElementById("map").innerHTML = map ;
        document.getElementById("pmap").innerHTML = Math.round(pmap) + "€";
        new Audio("sound/upgrade.mp3").play();
        }
    });

// DDOS: 
    document.getElementById("button5").addEventListener("click", function() {
        if (money - pddos >= 0) { 
        money = money - pddos;
        ddos = ddos + 1;
        rddos = ddos * 1.7;
        pddos = pddos * 1.15;
        document.getElementById("money").innerHTML = "Argent récolté : " + Math.round(money) + "€" ;
        document.getElementById("ddos").innerHTML = ddos ;
        document.getElementById("pddos").innerHTML = Math.round(pddos) + "€";
        new Audio("sound/upgrade.mp3").play();
        }
    });

// Zertek: 
    document.getElementById("button6").addEventListener("click", function() {
        if (money - pzertek >= 0) { 
        money = money - pzertek;
        zertek = zertek + 1;
        rzertek = zertek * 2;
        pzertek = pzertek * 1.15;
        document.getElementById("money").innerHTML = "Argent récolté : " + Math.round(money) + "€" ;
        document.getElementById("zertek").innerHTML = zertek ;
        document.getElementById("pzertek").innerHTML = Math.round(pzertek) + "€";
        new Audio("sound/upgrade.mp3").play();
        }
    });

// File Steal: 
    document.getElementById("button7").addEventListener("click", function() {
        if (money - pfilesteal >= 0) { 
        money = money - pfilesteal;
        filesteal = filesteal + 1;
        rfilesteal = filesteal * 2.4;
        pfilesteal = pfilesteal * 1.15;
        document.getElementById("money").innerHTML = "Argent récolté : " + Math.round(money) + "€" ;
        document.getElementById("filesteal").innerHTML = filesteal ;
        document.getElementById("pfilesteal").innerHTML = Math.round(pfilesteal) + "€";
        new Audio("sound/upgrade.mp3").play();
        }
    });

// SNK :
document.getElementById("button9").addEventListener("click", function() {
    if (money - psnk >= 0) { 
    money = money - psnk;
    snk = snk + 1;
    rsnk = snk * 3.2;
    psnk = psnk * 1.15;
    document.getElementById("money").innerHTML = "Argent récolté : " + Math.round(money) + "€" ;
    document.getElementById("snk").innerHTML = snk ;
    document.getElementById("psnk").innerHTML = Math.round(psnk) + "€";
    new Audio("sound/upgrade.mp3").play();
    }
});


// Hebergeur ( Wollah les amis il fait pitier ) :
    document.getElementById("button8").addEventListener("click", function() {
        if (money - pserv >= 0) { 
        money = money - pserv;
        serv = serv + 1;
        rserv = serv * 4;
        pserv = pserv * 1.15;
        document.getElementById("money").innerHTML = "Argent récolté : " + Math.round(money) + "€" ;
        document.getElementById("serv").innerHTML = serv ;
        document.getElementById("pserv").innerHTML = Math.round(pserv) + "€";
        new Audio("sound/upgrade.mp3").play();
        }
    });

setInterval(function(){ 
    money = money + rscript + rnoclip + rdox + rmap + rddos + rzertek + rfilesteal + rsnk + rserv;
    document.getElementById("money").innerHTML = "Argent récolté : " + Math.round(money) + "€";
}, 1000);

setInterval(function(){ 
    joueur = joueur + ddos + zertek + filesteal + dox + noclip + map + script + snk + serv;
    document.getElementById("joueur").innerHTML = "Nombre de Joueurs : " + joueur ;
}, 13000);
