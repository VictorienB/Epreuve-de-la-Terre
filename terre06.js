//Créez un programme qui affiche l’inverse de la chaîne de caractères donnée en argument.
// Récupérer la chaîne de caractères passée en argument
const args = process.argv.slice(2);

// Vérifier si au moins un argument a été passé
if (args.length === 0) {
  console.log("Veuillez fournir une chaîne de caractères en argument.");
} else {
  // Récupérer la première (et seule) chaîne de caractères de la liste des arguments
  const inputString = args[0];

  // Fonction pour inverser la chaîne de caractères sans reverse()
  function inverserChaineSansReverse(chaine) {
    let chaineInverse = '';
    for (let i = chaine.length - 1; i >= 0; i--) {
      chaineInverse += chaine[i];
    }
    return chaineInverse;
  }

  // Appeler la fonction pour inverser la chaîne et l'afficher
  const chaineInverse = inverserChaineSansReverse(inputString);
  console.log(chaineInverse);
}
