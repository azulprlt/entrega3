// Declaración de variables y objetos
const catalogo = [
    { marca: "Samsung", modelo: "Galaxy S21", precio: 1000 },
    { marca: "Apple", modelo: "iPhone 12", precio: 2000 },
    { marca: "Motorola", modelo: "Moto E22", precio: 700 },
    // Agrega más objetos de celulares al catálogo
];

const carrito = [];

// Función para generar las cartas de los celulares
function generarCartas() {
  const catalogoContainer = document.getElementById('catalogo');

  for (let i = 0; i < catalogo.length; i++) {
    const celular = catalogo[i];
    const celularCard = document.createElement('div');
    celularCard.className = 'celular';
    celularCard.innerHTML = `
      <img src="URL_DE_LA_IMAGEN" alt="${celular.marca} ${celular.modelo}">
      <h3>${celular.marca} ${celular.modelo}</h3>
      <p>Precio: $${celular.precio}</p>
      <button class="btn-agregar" data-index="${i}">Agregar al carrito</button>
    `;
    catalogoContainer.appendChild(celularCard);
  }

  // Agregar evento click a los botones
  const botonesAgregar = document.querySelectorAll('.btn-agregar');
  botonesAgregar.forEach(btn => {
    btn.addEventListener('click', agregarAlCarrito);
  });
}

// Función para agregar al carrito
function agregarAlCarrito(event) {
  const index = event.target.getAttribute('data-index');
  const celular = catalogo[index];
  
  if (confirm(`¿Agregar ${celular.marca} ${celular.modelo} al carrito?`)) {
    carrito.push(celular);
    mostrarMensaje(`${celular.marca} ${celular.modelo} se agregó al carrito.`);
  }
}

// Función para mostrar mensajes en la página
function mostrarMensaje(mensaje) {
  const mensajeContainer = document.getElementById('mensaje');
  mensajeContainer.textContent = mensaje;
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
  const carritoContainer = document.getElementById('carrito-contenido');
  carritoContainer.innerHTML = '<h2>Contenido del carrito:</h2>';
  
  carrito.forEach(celular => {
    const celularInfo = document.createElement('p');
    celularInfo.textContent = `${celular.marca} ${celular.modelo} - Precio: $${celular.precio}`;
    carritoContainer.appendChild(celularInfo);
  });
}

// Llamamos a la función para generar las cartas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  generarCartas();
  mostrarCarrito();
});
