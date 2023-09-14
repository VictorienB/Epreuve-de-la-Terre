// Je doit renvoyé l'alphabet à partir de la nieme lettre : n etant donner dans la ligne de commande

// Je récumère le chiffre de la ligne de commande
// Récupérer les arguments après le nom du fichier
const n = process.argv.slice(2);


// Je vérifie que c'est juste un nombre/chiffre
function estComposeeDeChiffres(chaine) {
    // Utilisez une expression régulière pour vérifier si la chaîne ne contient que des chiffres.
    return /^[0-9]+$/.test(chaine);
  }
  
if ( estComposeeDeChiffres(n)=false ) {
    console.log("erreur ce n'est pas un chiffre ou un nombre")
}
  
// Je passe n en int
const nEntier = +n;
// Je renvoi l'alpohabet en fonction en reprenant le code déjà fait précédemment

// je cré l'alphabet
let alphabet = '';


//je la rempli
for (let i = 97+n; i <= 122; i++) {
  const letter = String.fromCharCode(i);
  alphabet += letter;
}
// Je la renvoi avec une fonction qui met un retour a la ligne ensuite
console.log(alphabet);
