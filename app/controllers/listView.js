// // Arguments passed into this controller can be accessed via the `$.args` object directly or:
// var args = $.args;


// $.lView.addEventListener('itemclick', function(e) {
//     console.log(JSON.stringify(e, null, 4));
// });


function ObtenerDatos(cantidad) {
    // https://randomuser.me/api/?results=5000
    // var url = "http://www.appcelerator.com";
    var url = "https://randomuser.me/api/?results=" + cantidad;
    var client = Ti.Network.createHTTPClient({
        // function called when the response data is available
        onload: function(e) {

            // Ti.API.info("Received text: " + this.responseText);
            console.log(this.responseText);
            // alert('success');
            CrearContactos(JSON.parse(this.responseText).results);
        },
        // function called when an error occurs, including a timeout
        onerror: function(e) {
            // Ti.API.debug(e.error);
            Ti.API.info(e.error);
            alert('error');
        },
        timeout: 5000 // in milliseconds
    });
    // Prepare the connection.
    client.open("GET", url);
    // Send the request.
    client.send();
}

function CrearContactos(arrayContactos) {

    var items = [];

    arrayContactos.forEach(function(contacto) {
        items.push({
            nombre: {
                text: contacto.name.title
            },
            avatar: {
                image: contacto.picture.thumbnail
            }
        });
    });

    $.listContactos.sections[0].setItems(items);
}

ObtenerDatos(2);


// function Consulta() {
//     var url = "https://randomuser.me/api/?results=5";
//     var client = Ti.Network.createHTTPClient({
//         // function called when the response data is available
//         onload: function(e) {
//             Ti.API.info("Received text: " + this.responseText);
//             alert('success');
//         },
//         // function called when an error occurs, including a timeout
//         onerror: function(e) {
//             Ti.API.debug(e.error);
//             alert('error');
//         },
//         timeout: 5000 // in milliseconds
//     });
//     // Prepare the connection.
//     client.open("GET", url);
//     // Send the request.
//     client.send();
// }
//
// Consulta();
