function calcular(){

  const nest = document.getElementById("nest").value;
  const gear = document.getElementById("gear").value;
  const player = document.getElementById("player").value;

  let counter = nests[nest].counter;
  let form = nests[nest].formation;
  let selectedHeroes = heroes[player][counter];

  let gearBonus = "";
  if(gear === counter)
    gearBonus = "✔ Tu armadura es correcta";
  else
    gearBonus = "⚠ Cambia a set " + counter;

  document.getElementById("resultado").innerHTML = `
    <h2>Resultado</h2>
    Tropas a enviar: ${counter.toUpperCase()}<br>
    Formación: ${form}<br><br>
    Héroes recomendados:<br>
    ${selectedHeroes.join("<br>")}
    <br><br>${gearBonus}
  `;
}
