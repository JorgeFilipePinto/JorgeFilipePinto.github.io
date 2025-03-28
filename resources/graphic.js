

var xValues = ["Python", "Java", "C", "C++", "Swift", "C#", "Assembly"];
var yValues = [55, 49, 44, 24, 15, 10, 10];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145",
  "#1e5145",
  "#1e7205"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Línguas de Programação"
    }
  }
});