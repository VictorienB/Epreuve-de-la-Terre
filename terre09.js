// créez un programme qui affiche la racine carrée d'un entier positif
const args = process.argv.slice(2);
function calculerRacineCarree(nombre) {
    // Vérifier que le nombre est un entier positif
    if (nombre < 0 || isNaN(nombre) || nombre % 1 !== 0) {
      return "Le nombre n'est pas un entier positif.";
    }
  
    // Initialiser une estimation de la racine carrée
    let estimation = nombre;
  
    // Nombre d'itérations pour affiner l'estimation
    const iterations = 100;
  
    // Appliquer la méthode de Héron (Newton-Raphson)
    for (let i = 0; i < iterations; i++) {
      estimation = 0.5 * (estimation + nombre / estimation);
    }
  
    return `La racine carrée de ${nombre} est environ ${estimation}`;
}
  
  
const nombre = args[0]; 
const resultat = calculerRacineCarree(nombre);
console.log(resultat);
  