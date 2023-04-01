function introduction(name) {
  let myName = name;
  return `Hi, my name is ${myName}.`;
}

function introductionWithLanguage(name, language) {
  let myName = name ,
   aLanguage = language;
  return `Hi, my name is ${myName} and I am learning to program in ${aLanguage}.`;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
  let myName = name ,
   aLanguage = language;
  return `Hi, my name is ${myName} and I am learning to program in ${aLanguage}.`;
}