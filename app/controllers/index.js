function llamarTelefono(e) {
    console.log(JSON.stringify(e, null, 5));

    // Capturando el valor de la propiedad title
    var telefono = e.source.title;

    if (Ti.Platform.canOpenURL) {
        // Llamar por telefono
        Ti.Platform.openURL('tel://' + telefono);
    } else {
        alert('El dispositivo no puede realizar llamadas..');
    }
}

$.telefono.addEventListener('click', function(e) {
    llamarTelefono(e);
});

$.btnAbrirLV.addEventListener('click', function(e) {
    var listView = Alloy.createController('listView');
    listView = listView.getView();
    listView.open();
});

$.index.open();
