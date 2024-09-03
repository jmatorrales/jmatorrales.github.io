// canvas de idiomas
const idm = document.getElementById('idiomas').getContext('2d');
const frnt = document.getElementById("front").getContext('2d');
const bck = document.getElementById("back").getContext('2d');

// Datos para el grafico

// Idiomas
const data_idm = {
    labels : ['Castellano', 'Catalan', 'Ingles', 'Japones', 'Portugues'],
    datasets: [{
        label: 'Idiomas',
        data: [10, 10, 6, 3, 2],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

// Front-end
const data_frnt = {
    labels : ['HTML/CSS', 'JavaScript', 'React'],
    datasets: [{
        label: 'Frontend',
        data: [7, 5, 0],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

// Back-end
const data_bck = {
    labels : ['C#', 'Java', 'Python', 'Kotlin', 'SQL', 'Kusto'],
    datasets: [{
        label: 'Backend',
        data: [7, 7, 6, 7, 8, 7],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

// Configuración grafico
const config_idm = {
    type: 'radar',
    data: data_idm,
    options: {
        scale: {
            r: {
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

const config_frnt = {
    type: 'radar',
    data: data_frnt,
    options: {
        scale: {
            r: {
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

const config_bck = {
    type: 'radar',
    data: data_bck,
    options: {
        scale: {
            r: {
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
new Chart(idm, config_idm);
new Chart(frnt, config_frnt);
new Chart(bck, config_bck);