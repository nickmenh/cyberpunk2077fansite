// Kleur veranderen bij klikken + if/else
var titel = document.getElementById("titel");

titel.onclick = function () {
  if (titel.style.color === "red") {
    titel.style.color = "#fcee09";
  } else {
    titel.style.color = "red";
  }
};

// Tekst veranderen bij klikken (innerHTML)
var feiten = [
  "Het verhaal speelt zich af in het jaar 2077.",
  "Night City ligt in Noord-Californie.",
  "De game kreeg in 2023 de grote uitbreiding Phantom Liberty."
];
var teller = 0;

function toonFeit() {
  var uitleg = document.getElementById("uitleg");
  uitleg.innerHTML = feiten[teller];
  uitleg.style.color = "#00f0ff";
  teller = teller + 1;
  if (teller >= feiten.length) {
    teller = 0;
  }
}

// Tekst veranderen bij hoveren (innerHTML)
function veranderTekst(id, nieuweTekst) {
  var kaart = document.getElementById(id);
  kaart.innerHTML = "<h3>Wist je dat?</h3><p>" + nieuweTekst + "</p>";
}