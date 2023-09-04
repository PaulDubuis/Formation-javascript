
/**
 * Utiliser la fonction .map sur le tableau passé en paramètre
 * pour retourner un nouveau tableau avec les valeurs multipliées par 2
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable
 * 
  */

const multiplyByTwo = (array) => ( array.map(i => i * 2) )

/**
 * Utiliser la fonction .filter sur le tableau passé en paramètre
 * retourne un nouveau tableau avec uniquement les nom qui commencent par la lettre "A"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const filterNameStartByA = (array) => ( array.filter(i => i[0] === "A" ) )

/**
 * Utiliser la fonction .reduce sur le tableau passé en paramètre
 * retourne la somme des valeurs du tableau
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const sum = (array) => ( array.reduce((res, i) => res + i, 0 ))

/**
 * Utiliser la fonction .find sur le tableau passé en paramètre
 * retourne l'utilisateur qui a l'id passé en 2e paramètre
 * 
 * exemple d'entrée:
 * [
 *  {id: 1, name: 'John'},
 *  {id: 2, name: 'Doe'},
 *  {id: 3, name: 'Foo'},
 *  {id: 4, name: 'Bar'},
 * ], 3
 * retour attendu: "Foo"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const findUserById = (array, id) => ( array.find((user) => user.id === id).name)


const PrintTest = (a, b, c) => {
  console.log(!c ? a(b) : a(b, c))
}
const a1 = [1, 2, 3, 4, 5]
const a2 = ["A1", "A2", "A3", "DE", "TR"]
const a3 = [1, 2, 3]
const a4 = [ {id: 1, name: 'John'}, {id: 2, name: 'Doe'}, {id: 3, name: 'Foo'}, {id: 4, name: 'Bar'} ]
PrintTest(multiplyByTwo, a1)
PrintTest(filterNameStartByA, a2)
PrintTest(sum, a3)
PrintTest(findUserById, a4, 2)

module.exports = {multiplyByTwo, filterNameStartByA, sum, findUserById};