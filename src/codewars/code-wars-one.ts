export function findMissingLetter(array: string[]): string {
  let missingLetter = "";
  array.forEach((letter, idx, array) => {
    if (!missingLetter && idx < array.length - 1) {
      if (letter.charCodeAt(0) !== array[idx + 1].charCodeAt(0) - 1) {
        missingLetter = String.fromCharCode(letter.charCodeAt(0) + 1);
      }
    }
  });
  return missingLetter;
}
