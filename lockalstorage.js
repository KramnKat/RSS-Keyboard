export function setLang(lng) {
  window.localStorage.setItem('language', lng);
}

export function getLang() {
  const lng = window.localStorage.getItem('language');
  if (lng) return lng;
  setLang('eng');
  return 'eng';
}

export function setCharCase(charCase) {
  window.localStorage.setItem('case', charCase);
}

export function getCharCase() {
  const charCase = window.localStorage.getItem('case');
  if (charCase) return charCase;
  setCharCase('small');
  return 'small';
}
