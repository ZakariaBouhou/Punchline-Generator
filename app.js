// Tableau de citations
let citations = [
["Jusqu’à la mort parce qu’on croit en la vie.", "Kery James"],
["J’suis tellement dos au mur que ma colonne vertébrale est en ciment.", "Youssoupha"],
["On vise la Lune comme Mimie Mathy dans un concours de dunk.", "Hugo TSR"],
["On rêve de vivre vieux à défaut de vivre mieux.", "Nubi"],
["J’ai consommé plus d’herbe qu’une putain d’tondeuse à gazon.", "Sinik"],
["Si le rap excelle, le jazz en est l’étincelle.", "MC Solaar"],
["Je pense pas à demain, parce que demain c'est loin.", "Akhenaton"],
["Tu nous testes, on te tanne, tu contestes, on te canne.", "Passi"],
["Jamais dans la tendance, toujours dans la bonne direction.", "Scred Connexion"],
["On a l’âge de nos actes, la sagesse de leurs conséquences.", "Lino"],
["Le monde m’a pourri la vue, pour ça que j’regarde de travers.", "Rohff"],
["Rien ne sert de rouler en gamos si t'as pas la vie qui va avec.", "Sefyu"],
["Vos lois sont immorales, ma délinquance a des principes.", "Keny Arkana"],
["En catchana baby, tu dead ça !.", "Aya Nakamura"],
["La vie c'est une brasse : tu peux sonder les abysses ou nager en surface.", "Népal"],
["J'suis comme Broly, j'deviens paro dès qu'ça parle de carotte.", "Nekfeu"],
["On doit être bêtes, ouais, p't-être, mais ma plume peut clouer l'bec de Houellebecq.", "Nekfeu"],
["Ma gueule de bois ferait passer Pinocchio pour un vrai p'tit garçon.", "Orelsan"],
["Le seul faux-cul à qui j'tendrai la main est c'lui d'Nicki Minaj", "Caballero"],
["M'écoute pas si tu préfères ton rap de caissier qui vend pas.", "Vald"],
["Sameer fera du rap car Sergio fait du western.", "Sameer Ahmad"]
];


// Variables
let dernier           = 0;
let nombreAleatoire   = 0;
//console.log(nombreAleatoire);

// Récupérer les élements du DOM

// citation
let citation = document.getElementById('citation');

// Nom de l'auteur
let auteur = document.getElementById('auteur');

// Bouton
let bouton = document.getElementById('nouveau');


// Afficher la citation et son auteur respectif
function afficher() {

    citation.textContent = citations[nombreAleatoire][0];
    auteur.textContent = citations[nombreAleatoire][1];
    
}

// Fonction générateur qui prend en paramêtre un nombre maximum qu'on utilisera en argument de la fonction genererNombreAleatoire
function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function genererNombreAleatoire () {
    do {
        nombreAleatoire = genererNombreEntier(citations.length);
        //console.log(nombreAleatoire);
        
    } while (nombreAleatoire == dernier)
    afficher();
    dernier = nombreAleatoire;
}


//Ecouteur d'évènements
bouton.addEventListener('click', genererNombreAleatoire);