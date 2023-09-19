//Créez un programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.
// Récupérer la chaîne de caractères passée en argument
const args = process.argv.slice(2);

// Vérifier si au moins un argument a été passé
if (args[0] == undefined || args[1] != undefined || typeof args[0] !== 'string' || !isNaN(args[0])) {
  console.log("Veuillez fournir une chaîne de caractères en argument.");
} else {
  // Récupérer la première (et seule) chaîne de caractères de la liste des arguments
  const inputString = args[0];

  // Fonction pour compter le nombre de caractères dans la chaîne de caractères sans length
  function compterCaracteresSansLength(chaine) {
    let compteur = 0;
    let index = 0;
    while (chaine[index] !== undefined) {
      compteur++;
      index++;
    }
    return compteur;
  }

  // Appeler la fonction pour compter les caractères et les afficher
  const nombreDeCaracteres = compterCaracteresSansLength(inputString);
  console.log(`Nombre de caractères : ${nombreDeCaracteres}`);
}
