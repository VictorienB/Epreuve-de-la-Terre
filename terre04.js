// Créez un programme qui permet de déterminer si l’argument donné est un entier pair ou impair..
// Récupérez le nombre de la ligne de commande
const n = parseInt(process.argv[2]);

// Vérifiez si le nombre est un entier
if (!isNaN(n)) {
  // Vérifiez si le reste de la division par 2 est égal à 0
  if (n % 2 === 0) {
    console.log(`${n} est un nombre pair.`);
  } else {
    console.log(`${n} est un nombre impair.`);
  }
} else {
  console.log("Veuillez entrer un nombre entier en argument.");
}