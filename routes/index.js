var express = require('express');
var router = express.Router();

// function mysqlConnection(){
// 	var mysql      = require('mysql');
// 	var connection = mysql.createConnection({
// 	  host     : 'localhost',
// 	  user     : 'root',
// 	  password : '',
// 	  database : 'workash'
// 	});
// 	return connection;
// }

/* GET employee data. */
router.get('/', function(req, res, next) {
	// res.send("This is API root location. Please give the API name.");
	res.render('index', { title: 'Express' });
});

/* GET employee data. */
// router.get('/employeeData/:emailID', function(req, res, next) {

// 	var email_id = req.params.emailID;
// 	// Initialize connection object
// 	conn = mysqlConnection();

// 	// open connection to DB
// 	conn.connect();  
	
// 	conn.query('CALL getEmployeeDetails("'+email_id+'")', function(err, rows, fields)   
// 	{  
// 		if (err) throw err;
	  
// 	  	var emp_msg = 'user does not exist';
// 	  	if(rows[0].length>0) emp_msg = 'user does exist';

// 		// send response
// 		var emp_json = {'status':true,'code':100,'message':emp_msg};
// 		emp_json.data = rows[0];
// 		res.send(JSON.stringify(emp_json, null, 2));

// 	});

// 	// close connection to DB
// 	conn.end();

// 	// res.render('index', { title: 'Express' });
// });

// router.get('/users/:id/:name', function(req, res){
// 	console.log(req.params.id);
// 	console.log(req.params.name);
// 	res.send(req.params.id, 200);
// 	res.send(req.params.name, 200);

// });

module.exports = router;