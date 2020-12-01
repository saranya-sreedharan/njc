var db =require('./dboperations');
var testtable1=require('./testtable1');
const dboperations =require('./dboperations');

var express =require('express');
var bodyparser=require('body-parser');
var cors =require('cors');
const { request, response } = require('express');
var app =express();
var router = express.Router();

app.use(bodyparser.urlencoded({extented: true}));
app.use(bodyparser.json());
app.use(cors());
app.use('/api',router);

router.use((request,response,next)=>{
    console.log('middleware');
    next();
})
router.route('/testtable').get((request,response)=>{
     dboperations.gettesttable().then(result=>{
         console.log(result);
     })
})

var port=process.env.port|| 8090;
app.listen(port);
console.log('order API is running at ' + port)



dboperations.gettesttable().then(result =>{
    console.log(result)
})