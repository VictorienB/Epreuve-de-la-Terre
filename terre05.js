//Créez un programme qui affiche le résultat et le reste d’une division entre deux nombres.

const args = process.argv.slice(2);

if (args.length !== 2 || args[1] == 0 || parseInt(args[0]) < parseInt(args[1])) {
  console.log("erreur");
} else {
  const nombre1 = parseInt(args[0]);
  const nombre2 = parseInt(args[1]);
  
  if (!isNaN(nombre1) && !isNaN(nombre2)) {
    const resultat = nombre1 / nombre2;
    const reste = nombre1 % nombre2;
    const resultatE = Math.floor(resultat); // je prend la partie entiere du résultat
    console.log(`résultat: ${resultatE}`);
    console.log(`reste: ${reste}`);
  } else {
    console.log("erreur.");
  }
}
