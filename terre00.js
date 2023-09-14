
// je cré l'alphabet
let alphabet = '';


//je la rempli
for (let i = 97; i <= 122; i++) {
  const letter = String.fromCharCode(i);
  alphabet += letter;
}
// Je la renvoi avec une fonction qui met un retour a la ligne ensuite
console.log(alphabet);
