// Afficheur d'arguments
// Récupérer les arguments après le nom du fichier
const args = process.argv.slice(2);

// Afficher chaque argument
args.forEach(argument => {
  console.log(argument);
});