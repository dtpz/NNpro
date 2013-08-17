var express = require('express');
var app = express();


app.configure(function(){
	app.use(express.logger());
	app.set('view engine','jade');
	app.set('views', __dirname+'/views');
	app.use('/lib',express.static(__dirname + '/lib'));
	app.use(express.static(__dirname));
});
// for authentication on all urls:
// 		app.all('*',requireAuthentication, loadUser);
// for authentication on only 'api' urls:
// 		app.all('/api/*', requireAuthentication, loadUser);
//see expressjs.com/api.html for more examples
// then add next(); to move the request to the next matching path

/* TODO: 
** 1. refactor into /api/
** 2. authenticate all /api/ requests
** 3. set response headers for all /api/ requests and then call next()
** 4. Keep validations by cookie (check how??)
*/

app.get('/order_page', function(req, res){
	res.render('order_page');
});

app.get('/addrecord', function(req, res){

  var newRecord = {
	name: req.query.name,
	age: req.query.age
  }
  if( newRecord.name && newRecord.age ){
	// validate this doesn't exist in DB
	// add to the DB

	var date= new Date();
	//the following is only for compatibility with anat's tests:
	res.set({
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json'	
	});
	res.send("{\r\n \"Result\":\"OK\",\r\n \"Records\":[\r\n  {\"PersonId\":"+createGuid()+",\"Name\":\""+ newRecord.name+"\",\"Age\":"+newRecord.age+",\"RecordDate\":\"\\/Date("+date+")\\/\"}\r\n]\r\n}");
  }
});

app.post('/addrecord', function(req, res){

  var newRecord = {
	name: req.query.name,
	age: req.query.age
  }
  if( newRecord.name && newRecord.age ){
	// validate this doesn't exist in DB
	// add to the DB

	var date= new Date();
	//the following is only for compatibility with anat's tests:
	res.set({
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json'	
	});
	res.send("{\r\n \"Result\":\"OK\",\r\n \"Records\":[\r\n  {\"PersonId\":"+createGuid()+",\"Name\":\""+ newRecord.name+"\",\"Age\":"+newRecord.age+",\"RecordDate\":\"\\/Date("+date+")\\/\"}\r\n]\r\n}");
  }
});

app.get('/deleterecord', function(req, res){
	//anats tests compatibility
	res.set({
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json'	
	});
	res.send("{\r\n \"Result\":\"OK\"\r\n}");
});

app.get('/updaterecord', function(req, res){
	//anats tests compatibility
	res.set({
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json'	
	});
	res.send("{\r\n \"Result\":\"OK\"\r\n}");
});

app.get('/recordslist', function(req, res){
	//anats tests compatibility
	res.set({
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json'	
	});
	res.send("{\r\n \"Result\":\"OK\",\r\n \"Records\":[\r\n  {\"PersonId\":1,\"Name\":\"Benjamin Button\",\"Age\":17,\"RecordDate\":\"\\/Date(1320259705710)\\/\"},\r\n  {\"PersonId\":2,\"Name\":\"Douglas Adams\",\"Age\":42,\"RecordDate\":\"\\/Date(1320259705710)\\/\"},\r\n  {\"PersonId\":3,\"Name\":\"Isaac Asimov\",\"Age\":26,\"RecordDate\":\"\\/Date(1320259705710)\\/\"},\r\n  {\"PersonId\":4,\"Name\":\"Thomas More\",\"Age\":65,\"RecordDate\":\"\\/Date(1320259705710)\\/\"}\r\n ]\r\n}");
});

app.post('/recordslist', function(req, res){
	//anats tests compatibility
	res.set({
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json'	
	});
	res.send("{\r\n \"Result\":\"OK\",\r\n \"Records\":[\r\n  {\"PersonId\":1,\"Name\":\"Benjamin Button\",\"Age\":17,\"RecordDate\":\"\\/Date(1320259705710)\\/\"},\r\n  {\"PersonId\":2,\"Name\":\"Douglas Adams\",\"Age\":42,\"RecordDate\":\"\\/Date(1320259705710)\\/\"},\r\n  {\"PersonId\":3,\"Name\":\"Isaac Asimov\",\"Age\":26,\"RecordDate\":\"\\/Date(1320259705710)\\/\"},\r\n  {\"PersonId\":4,\"Name\":\"Thomas More\",\"Age\":65,\"RecordDate\":\"\\/Date(1320259705710)\\/\"}\r\n ]\r\n}");
});

app.get('/', function(req, res){
	res.render('index');
	/*
	var result='';
	for (var id in req.query){
		if(req.query.hasOwnProperty(id)){
			result+='ID: '+id+ ', value: '+ req.query[id]+'<br>';
		}
	}
	res.send(result);*/
  
});

var createGuid = function(){
	return 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g,function(c){
		var r= Math.random()*16|0,
			v= c == 'x' ? r : (r&0x3|0x8);
		return v.toString(16);
	});
}



app.listen(3000);