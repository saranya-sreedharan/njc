var config =require('./dbconfig');
const sql =require('mssql');


 async function gettesttable(){
    try{
        let pool = await sql.Connect(config);
    
        let testsaru23 =await  pool.request().query("SELECT *FROM testtable");
        return testsaru23.recordsets;
    }
    catch(error){
        console.log(error);
    }
    
}
module.exports ={
    gettesttable :gettesttable
}