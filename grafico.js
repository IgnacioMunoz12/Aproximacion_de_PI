let c = document.getElementById("MiGrafica").getContext("2d");
const numerosIteracion = [];
2;
// Funciones
const numero_iteracion = (iteracion) => {
  for (i = 1; i <= iteracion; i++) {
    numerosIteracion.push(i);
  }
};

console.log("🚀 ~ file: grafico.js:12 ~ numeroAproxPI:", numeroAproxPI);
// llamos funciones
numero_iteracion(iteracion);

var chart = new Chart(c, {
  type: "line",
  data: {
    label: "Aproximacion a numero PI",
    labels: numerosIteracion,
    datasets: [
      {
        label: "numero de dardos lanzados ",
        backgroundColor: "rgb(0,0,0)",
        data: numeroAproxPI,
      },
    ],
  },
});
