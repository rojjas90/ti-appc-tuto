 $.botonAbrirVentana.addEventListener('click', function(_evento) {
     //  alert('Boton pinchado');
     // abrir el controlador detalle

     // Crear una instancia del controlador detalle
     var detalle = Alloy.createController('detalle', 'Rojas');

     // Acceder a la vista asociada al controlador detalle
     detalle = detalle.getView(); // detalle.xml

     // Abrir esa vista
     detalle.open();

 });

 $.index.open();
