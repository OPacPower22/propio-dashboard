// Simulación de llamadas recibidas
const calls = [
    { date: '2024-01-10', duration: '10 min', cost: 5.00 },
    { date: '2024-01-12', duration: '15 min', cost: 7.50 },
    { date: '2024-01-15', duration: '20 min', cost: 10.00 }
];

function renderCalls(filteredCalls) {
    const tableBody = document.getElementById('call-table-body');
    tableBody.innerHTML = '';

    let total = 0;

    filteredCalls.forEach(call => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${call.date}</td>
            <td>${call.duration}</td>
            <td>$${call.cost.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
        total += call.cost;
    });

    document.getElementById('total-usd').innerText = `$${total.toFixed(2)} USD`;
}

function filterCalls() {
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    const filteredCalls = calls.filter(call => {
        return (!startDate || call.date >= startDate) && (!endDate || call.date <= endDate);
    });

    renderCalls(filteredCalls);
}

// Funciones Call Status
function startCalls() {
    alert('Iniciando llamadas...');
}

function stopCalls() {
    alert('Llamadas detenidas.');
}

function editActiveCall() {
    alert('Editando llamada activa...');
}

// Inicialización de llamadas en la tabla
renderCalls(calls);
