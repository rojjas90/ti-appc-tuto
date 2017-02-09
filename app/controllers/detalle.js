// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

alert(args);

$.botonCerrarVentana.addEventListener('click', function(e) {
    // alert('click');
    $.detalle.close();
});
