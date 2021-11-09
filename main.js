function szoveg(){
    let szoveg = document.getElementById("szovegInput").value;
    if (szoveg == "" || !szoveg.trim()) {
        document.getElementById("szovegError").innerHTML = "A mintaszöveg nem lehet üres!";
        document.getElementById("Output").innerHTML = "";
    }
    else {
        document.getElementById("Output").innerHTML = szoveg;
        document.getElementById("szovegError").innerHTML = "";
    }
}

function szovegMeret(){
    let meret=document.getElementById("meretInput").value;
    document.getElementById("Output").style.fontSize = meretInput+"pt";
}
function szovegSzin(){
    let betuszin=document.getElementById("colorSzovegInput").value;
    document.getElementById("Output").style.color=colorSzovegInput;
}
function hatterSzin(){
    let betuszin=document.getElementById("colorHatterInput").value;
    document.getElementById("Output").style.backgroundColor=colorHatterInput;
}

function init(){
    document.getElementById("szovegInput").addEventListener("input", szoveg);
    document.getElementById("meretInput").addEventListener("input", szovegMeret);
    document.getElementById("colorSzovegInput").addEventListener("input", szovegSzin);
    document.getElementById("colorHatterInput").addEventListener("input", hatterSzin);
}

document.addEventListener('DOMContentLoaded', init);