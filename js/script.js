const citasBarberia = JSON.parse(localStorage.getItem('citasBarberia')) || [];
let totalCitas = citasBarberia.length;

function mostrarCitas() {
  const listaCitas = document.getElementById('listaCitas');
  listaCitas.innerHTML = ''; 
  if (citasBarberia.length === 0) {
    const item = document.createElement('li');
    item.textContent = 'No hay citas agendadas.';
    listaCitas.appendChild(item);
  } else {
    citasBarberia.forEach(cita => {
      const item = document.createElement('li');
      item.textContent = `Cliente: ${cita.nombreCliente}, Hora: ${cita.hora}`;
      listaCitas.appendChild(item);
    });
  }
  
  localStorage.setItem('citasBarberia', JSON.stringify(citasBarberia));
}

function agregarCita(event) {
  event.preventDefault(); 
  const nombreCliente = document.getElementById('nombreCliente').value;
  const hora = document.getElementById('horaCita').value;

  citasBarberia.push({ nombreCliente, hora });
  totalCitas++;
  mostrarCitas();

  document.getElementById('citaForm').reset(); 
}

function eliminarCita() {
  const nombreCliente = document.getElementById('nombreEliminar').value;
  const index = citasBarberia.findIndex(cita => cita.nombreCliente === nombreCliente);

  if (index !== -1) {
    citasBarberia.splice(index, 1);
    totalCitas--;
    mostrarCitas();
    document.getElementById('nombreEliminar').value = ''; 
  } else {
    alert(`No se encontró una cita para ${nombreCliente}.`);
  }
}

document.getElementById('citaForm').addEventListener('submit', agregarCita);
document.getElementById('eliminarCitaBtn').addEventListener('click', eliminarCita);

mostrarCitas();
