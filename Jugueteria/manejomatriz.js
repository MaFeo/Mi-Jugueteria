let matriz = [];

//mostrar producto.
function mostrarProducto(){

	document.getElementById('tbody').innerHTML = '';

	matriz.forEach(e => {
		document.getElementById('tbody').innerHTML += '<tr>' +
			'<td>' + e.codigo + '</td>' +
			'<td>' + e.nombre + '</td>' +
			'<td>' + e.precio + '</td>' +
			'<td>' + e.descripcion + '</td>' +
			'<td>' + e.stock + '</td>' +
			'<td><button class="btn btn-warning" onClick="Buscar('+ e.codigo +')">Editar</button>' +
			'<button class="btn btn-danger" onClick="eliminarProducto('+ e.codigo +')">Eliminar</button></td>' +
		'</tr>';
	});
}

//insertar producto
function insertarProducto(){

	let producto = 
	{
	   'codigo':       document.getElementById("codigo").value,
	   'nombre':       document.getElementById("nombre").value,
	   'precio':       document.getElementById("precio").value,
	   'descripcion':  document.getElementById("descripcion").value,
	   'stock':        document.getElementById("stock").value
	}

   	if(matriz.find(e => {
		return e.codigo === producto.codigo
	}) === undefined){

		matriz.push(producto);

		alert("El producto se ha agregado de manera correcta");
		limpiarInput();

		document.getElementById('tbody').innerHTML += '<tr>' +
			'<td>' + producto.codigo + '</td>' +
			'<td>' + producto.nombre + '</td>' +
			'<td>' + producto.precio + '</td>' +
			'<td>' + producto.descripcion + '</td>' +
			'<td>' + producto.stock + '</td>' +
			'<td><button class="btn btn-warning" onClick="Buscar(' + producto.codigo + ')">Editar</button>' + 
			'<button class="btn btn-danger" onClick="eliminarProducto(' + producto.codigo + ')">Eliminar</button></td>' +
		'</tr>';

	}
	else{
		alert("El producto ya se encuentra registrado");
	}
}

function Buscar(codigo){
	let producto = matriz.find(e => {
		return e.codigo === codigo.toString()});
	let index = matriz.indexOf(producto);
	
	if(index >= 0){
		document.getElementById("codigo").value = producto.codigo;
	   	document.getElementById("nombre").value = producto.nombre;
	    document.getElementById("precio").value = producto.precio;
	    document.getElementById("descripcion").value = producto.descripcion;
	    document.getElementById("stock").value = producto.stock;
	}
	else{
		alert("El producto no existe");
	}
}


 //actualizar producto
 function actualizarProducto(){
	let producto = 
	{
	   'codigo':       document.getElementById("codigo").value,
	   'nombre':       document.getElementById("nombre").value,
	   'precio':       document.getElementById("precio").value,
	   'descripcion':  document.getElementById("descripcion").value,
	   'stock':        document.getElementById("stock").value
	}
	let codProducto = matriz.find(e => {
		return e.codigo === producto.codigo});
	let index = matriz.indexOf(codProducto);
	matriz[index] = producto;
	
	mostrarProducto();
	limpiarInput();
}


function eliminarProducto(codigo){
	matriz = matriz.filter(e => {
		return e.codigo !== codigo.toString()});
	mostrarProducto();
}

function limpiarInput() {
	document.getElementById("codigo").value="";
	document.getElementById("nombre").value="";
	document.getElementById("precio").value="";
	document.getElementById("descripcion").value="";
	document.getElementById("stock").value="";
}




