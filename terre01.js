// Je recupère le nom du fichier et le met dans une vatiable
const path = require('path');
const nomDuProgramme = path.basename(__filename);// ici je doit utiliser NODE.JS pour pouvoir utiliser cette méthode

// Je renvoi la variable dans la console
console.log(nomDuProgramme);