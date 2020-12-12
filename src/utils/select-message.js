const obj = [
  "Gracias por dar de alta tu primer recomendado, te faltan 4 para participar en el concurso, sigue capturando. Recibe tu SMS, te estamos enviando el folio de tu captura.",
  "Gracias por dar de alta tu segundo recomendado, te faltan 3 para participar en el concurso, sigue capturando. Te envíamos un SMS con el folio",
  "Gracias por dar de alta tu tercer recomendado, te faltan 2 para participar en el concurso, sigue capturando. Te envíamos un SMS con el folio.",
  "Gracias por dar de alta tu cuarto recomendado, te falta 1 para participar en el concurso, sigue capturando. Te envíamos un SMS con el folio.",
  "Felicidades, ya estás participando en la gran rifa, recuerda que tus recomendados deberán recibir sus dos premios para que comiences a acumular boletos. Te envíamos un SMS con el folio.",
];

const selectMessage = (count) => {
  if (count > obj.length) {
    return "Sigue capturando más recomendados, mientras más recomendados reciban sus premios, más boletos acumularás y más oportunidades tendrás de ganar. Te envíamos un SMS con el folio.";
  }

  return obj[count - 1];
};

export default selectMessage;
