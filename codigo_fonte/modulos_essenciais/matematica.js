function bhaskara(a, b, c) {
  delta = Math.pow(b, 2) - (4 * a * c);

  x1 = (-b + Math.sqrt(delta)) / (2 * a);
  x2 = (-b - Math.sqrt(delta)) / (2 * a);

  return [x1, x2];
}

function hipotenusa(cateto_oposto, cateto_adjacente) {
  return Math.sqrt(Math.pow(cateto_oposto, 2) + Math.pow(cateto_adjacente, 2));
}

module.exports = {
  bhaskara,
  hipotenusa
};
