const tareas = ['Practica de Javascript','Ir al supermercad', 'Pasear al perro', 'Lavar los trastes']

const lista = document.getElementById('TareasLista');
const comienzaLista = document.createElement('ul');
lista.appendChild(comienzaLista);

for (let iterador = 0; iterador < tareas.length; iterador++) {
    const listaElementos = document.createElement('li');
    comienzaLista.appendChild(listaElementos);
    
    const botton = document.createElement('input');
    botton.setAttribute('type','checkbox');
    botton.setAttribute('id',`item- ${iterador}`);

    const tarea = document.createElement('label');
    tarea.setAttribute('for',`item- ${iterador}`);
    tarea.innerHTML = tareas[iterador];

    listaElementos.appendChild(botton);
    listaElementos.appendChild(tarea);
}