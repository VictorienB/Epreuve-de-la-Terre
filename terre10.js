function estNombrePremier(nombre) {
    // Gérer les cas spéciaux 0 et 1
    if (nombre <= 1) {
      return false;
    }
  
    // Vérifier si le nombre est divisible par un autre nombre que 1 et lui-même
    for (let i = 2; i * i <= nombre; i++) {
      if (nombre % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Récupérer l'argument passé en ligne de commande
  const args = process.argv.slice(2);
  
  // Vérifier si un argument a été passé
  if (args.length !== 1) {
    console.log("Veuillez fournir un seul nombre en argument.");
  } else {
    // Convertir l'argument en nombre entier
    const nombre = parseInt(args[0]);
  
    // Vérifier si la conversion a réussi
    if (!isNaN(nombre)) {
      if (estNombrePremier(nombre)) {
        console.log(`Oui, ${nombre} est un nombre premier.`);
      } else {
        console.log(`Non, ${nombre} n'est pas un nombre premier.`);
      }
    } else {
      console.log("L'argument n'est pas un nombre valide.");
    }
  }
  