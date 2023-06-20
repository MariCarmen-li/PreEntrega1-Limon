// Lista para almacenar los elementos y cantidades
var listaDeCompras = [];

// Solicita al usuario los elementos y cantidades hasta que ingrese "fin"
while (true) {
  var item = prompt("Ingrese un elemento a la lista de compras (o 'fin' para terminar):");

  if (item.toLowerCase() === "fin") {
    break; // Sale del bucle si el usuario ingresa "fin"
  }

  var cantidad;
  var cantidadValida = false;

  while (!cantidadValida) {
    cantidad = prompt("Ingrese la cantidad de empaques de '" + item + "':");

    if (!Number.isInteger(parseFloat(cantidad))) {
      alert("La cantidad de empaques ingresada no es entera. Por favor, ingrese una cantidad válida.");
    } else {
      cantidadValida = true;
    }
  }

  var articulo = {
    nombre: item,
    cantidad: parseInt(cantidad)
  };

  listaDeCompras.push(articulo); // Agrega el artículo a la lista
}

// Cadena de texto con la lista de compras
var listaFinal = "Lista de compras:\n";
for (var i = 0; i < listaDeCompras.length; i++) {
  var articulo = listaDeCompras[i];
  listaFinal += "- " + articulo.nombre + " (Cantidad: " + articulo.cantidad + ")\n";
}

// Muestra la lista de compras en un cuadro de diálogo
alert(listaFinal);
