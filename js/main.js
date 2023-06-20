// Lista vacía
var listaDeCompras = [];

// Solicitar al usuario los elementos y cantidades hasta que ingrese "fin"
while (true) {
  var item = prompt("Ingrese un elemento a la lista de compras (o 'fin' para terminar):");
  
  if (item.toLowerCase() === "fin") {
    break; // Salir del bucle si el usuario ingresa "fin"
  }
  
  var cantidad = prompt("Ingrese la cantidad de '" + item + "':");
  var articulo = {
    nombre: item,
    cantidad: parseInt(cantidad)
  };
  
  listaDeCompras.push(articulo); // Agregar el artículo a la lista
}

// Cadena de texto con la lista de compras
var listaFinal = "Lista de compras:\n";
for (var i = 0; i < listaDeCompras.length; i++) {
  var articulo = listaDeCompras[i];
  listaFinal += "- " + articulo.nombre + " (Cantidad: " + articulo.cantidad + ")\n";
}

// Muestra la lista de compras en un cuadro de diálogo
alert(listaFinal);
