

// const myChart = document.getElementById('myChart').textContent('2d');

// let myGraph = new Graph(myChart, {
//     type:'bar'
// })



// const ctx = document.getElementById('myChart');
      
// new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// // });

 const graph = document.getElementById('graph').getContext('2d')
 let myChart = new Chart(graph, {
     type: 'line',
     data: {
         labels: [
             "2020",
             "2021",
             "2022",
         ],
         datasets: [
             {
                 label: "Cotisations en millier",
                 data: [62.750, 18.5, 9.750]
             }
         ],
         Option: {
            titte: {
                display: true,
                text: "Evolution des cotisations",
                fontSize: 24,
            },
         },

     },
 });