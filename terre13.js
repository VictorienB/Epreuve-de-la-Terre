// Récupérer les arguments passés en ligne de commande
const args = process.argv.slice(2);

// Vérifier si trois arguments ont été passés
if (args.length !== 3) {
  console.log("Veuillez fournir trois entiers en argument.");
} else {
  const a = parseInt(args[0]);
  const b = parseInt(args[1]);
  const c = parseInt(args[2]);

  // Vérifier si les trois arguments sont des entiers
  if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    // Vérifier quelle valeur est la valeur du milieu
    if ((a > b && a < c) || (a < b && a > c)) {
      console.log(a);
    } else if ((b > a && b < c) || (b < a && b > c)) {
      console.log(b);
    } else if ((c > a && c <=b) || (c < a && c > b)) {
      console.log(c);
    } else {
      console.log("Erreur.");
    }
  } else {
    console.log("Veuillez fournir trois entiers valides en argument.");
  }
}
