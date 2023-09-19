// Récupérer les arguments passés en ligne de commande
const args = process.argv.slice(2);

// Vérifier si au moins deux arguments ont été passés
if (args.length < 2) {
  console.log("Veuillez fournir au moins deux entiers en argument.");
} else {
  let estTriee = true;

  for (let i = 1; i < args.length; i++) {
    const entier1 = parseInt(args[i - 1]);
    const entier2 = parseInt(args[i]);

    // Vérifier si les arguments sont des entiers valides
    if (isNaN(entier1) || isNaN(entier2)) {
      console.log("Veuillez fournir des entiers valides en argument.");
      return;
    }

    // Vérifier si la liste est triée de manière croissante
    if (entier1 > entier2) {
      estTriee = false;
      break;
    }
  }

  if (estTriee) {
    console.log("Triée !");
  } else {
    console.log("Pas triée !");
  }
}
