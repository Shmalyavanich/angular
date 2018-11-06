export const checkStringForUnicodeTable = (str: string, minCharCode: number, maxCharCode: number): boolean => {

  for (let i = 0; i < str.length; i++) {
    if (!checkCharForUnicodeTable(str[i], minCharCode, maxCharCode)){
      return false;
    }
  }

  return true;
}

export const checkCharForUnicodeTable = (char: string, minCharCode: number, maxCharCode: number): boolean => {
  const charCode = char.charCodeAt(0);

  for (let i = minCharCode; i <= maxCharCode; i++) {
    if(charCode == i){
      return true;
    }
  }

  return false;
}
