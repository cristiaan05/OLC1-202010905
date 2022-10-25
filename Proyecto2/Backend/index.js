const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const cors= require('cors')


app.use(morgan('dev'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:false}));
//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server listening on port ${port}!`));


app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

//ENDPOINTS
app.get('/main',function (req,res) {
    //res.json({mensaje:"HOla mundo"})
    res.send("hola")
})