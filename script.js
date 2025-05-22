const elementos = [
    { nombre: "Elemento 1", color: "Rojo", tamaño: "Grande", precio: "$10" },
    { nombre: "Elemento 2", color: "Azul", tamaño: "Mediano", precio: "$12" },
    { nombre: "Elemento 3", color: "Verde", tamaño: "Pequeño", precio: "$8" },
    { nombre: "Elemento 4", color: "Amarillo", tamaño: "Grande", precio: "$15" },
    { nombre: "Elemento 5", color: "Negro", tamaño: "Pequeño", precio: "$11" },
    { nombre: "Elemento 6", color: "Blanco", tamaño: "Mediano", precio: "$14" },
    { nombre: "Elemento 7", color: "Gris", tamaño: "Grande", precio: "$13" },
    { nombre: "Elemento 8", color: "Marrón", tamaño: "Pequeño", precio: "$9" },
    { nombre: "Elemento 9", color: "Celeste", tamaño: "Mediano", precio: "$10" }
  ];
  
  const contenedor = document.getElementById("lista-elementos");
  
  elementos.map(item => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
      <h3>${item.nombre}</h3>
      <p>Color: ${item.color}</p>
      <p>Tamaño: ${item.tamaño}</p>
      <p>Precio: ${item.precio}</p>
    `;
    contenedor.appendChild(div);
  });
  