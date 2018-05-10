/*importar as configurações do servidor*/
var app = require('./config/server');

/*parametrizar a porta de escuta
Caso tenha problemas em usar a porta 80 no windows olhar esse tutorial
http://marcos-tijucano.blogspot.com.br/2012/08/problema-para-iniciar-apache-na-porta-80.html*/

var server = app.listen(8080,function(){
    console.log("Servidor ON");
})