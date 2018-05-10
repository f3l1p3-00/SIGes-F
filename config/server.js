/*importar o módulo do framework express*/
var express = require('express');

/*importar o módulo do consign*/
var consign = require('consign');

/*importar o módulo body-parser*/
var bodyParser = require('body-parser');

/*importar o módulo do express-validator*/
var expressValidator = require('express-validator');

/*iniciar o objeto do express*/
var app = express();

/*setar as variaveis 'view engine' e 'views' do express*/
app.set('view engine','ejs');
app.set('views','./App/Views');

/*configurar o middleware express.estatic*/
app.use(express.static('./App/Public'));

/*configurar o middleware body-parser*/
app.use(bodyParser.urlencoded({extended:true}));

/*configurar o middleware Express-validator*/
app.use(expressValidator());

/*efetua o autoload das routes, models e controlles para o app*/
consign()
    .include('App/Routes')
    .then('App/Models')
    .then('App/Controllers')
    .into(app);

/*exportar o objeto app*/
module.exports=app;