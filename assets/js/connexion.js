function msgBienvenue(){
    Bienvenue = (document.getElementById("identifiant").value != "" && document.getElementById("mdp").value != "") ? "connecté" : "déconnecté";
    document.getElementById("cnx").innerHTML = `${Bienvenue}`;
}
function connected(){
    document.getElementById("connect").onclick = msgBienvenue;
};
