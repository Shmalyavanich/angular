export const checkStringForUnicodeTable = (str: string, minCharCode: number, maxCharCode: number): boolean => {
  let result = true;

  for (let i = 0; i < str.length; i++) {
    let charIsCorrect = false;

    for (let j = minCharCode; j <= maxCharCode; j++) {
      if(str.charCodeAt(i) == j){
        charIsCorrect = true;
      }
    }

    if (!charIsCorrect){
      result = false;
      break;
    }
  }

  return result;
}
