// Je doit renvoyé l'alphabet à partir de la nieme lettre : n etant donner dans la ligne de commande

// Je récumère le chiffre de la ligne de commande
// Récupérer les arguments après le nom du fichier
const n = process.argv.slice(2);

if (n.length === 0) {
  console.log("Aucun argument fourni.");
} else {
  const letter = n[0];

  // Vérifiez que la chaîne est une lettre en minuscules
  if (/^[a-z]$/.test(letter)) {
    const codeLettre = letter.charCodeAt(0);

    // Je créé l'alphabet
    let alphabet = '';

    // Je le remplis
    for (let i = codeLettre; i <= 122; i++) {
      const lettre = String.fromCharCode(i);
      alphabet += lettre;
    }

    // Je le renvoie avec un retour à la ligne
    console.log(alphabet);
  } else {
    console.log("L'argument n'est pas une lettre en minuscules.");
  }
}
