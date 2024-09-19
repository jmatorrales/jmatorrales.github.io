// canvas de backend
const bck = document.getElementById("back").getContext('2d');

// Datos para el grafico
// Back-end
const data_bck = {
    labels : ['C#', 'Java', 'Python', 'Kotlin', 'SQL / NoSQL', 'Kusto'],
    datasets: [{
        label: 'Backend',
        data: [7, 7, 6, 7, 8, 7],
        backgroundColor: 'rgba(118,250,118,0.2)',
        borderColor: 'rgb(143,188,143,1)',
        borderWidth: 1
    }]
};

const config_bck = {
    type: 'radar',
    data: data_bck,
    options: {
        plugins: {
            legend: {
                display: false  // Ocultar la leyenda
            }
        },
        scale: {
            r: {
                pointLabels: {
                    font: {
                        size: '100' , // Ajusta el tamaño de la letra de los labels
                        // family: 'Arial', // Cambia el tipo de letra
                        // style: 'italic', // Cambia el estilo de la fuente
                        weight: 'bold'  // Cambia el grosor de la fuente
                    }
                },
                suggestedMin: 0,
                suggestedMax: 10,
                ticks: {
                    beginAtZero: true,
                    stepSize: 2
                }
            }
        }
    }
};

// Inicializar grafico
new Chart(bck, config_bck);