// créer un programme qui affiche le résultat d'une puissance

// Je récupere les arguments
const args = process.argv.slice(2);
// je vérifie que ya bien que 2 arguments
if (args[0] == undefined || args[2] != undefined || args[1] == undefined || isNaN(args[0]) || isNaN(args[1])) {
    console.log("erreur: mettez seulement des chiffre");
 } else if ( args[1] == 0 ) {
    console.log("Le résultat est :" + 1)
 } else if ( args[0] == 0 ) {
    console.log("Le résultat est :" + 0)
 } else {
//Je fais une boucle pour faire la puissance des deux
// Je met l'exception si puissance 0 =1
        resultat = args[0];
        for (let i = 2; i<=args[1]; i++) {
            resultat*=args[0];
        }
        console.log("le resultat est : " +resultat);
 }
