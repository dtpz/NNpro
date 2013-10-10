var express = require('express'),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	mongoose = require('mongoose'),
    Schema = mongoose.Schema,
	User = require('./user'),
    _ = require('underscore'),
	app = express();

app.configure(function(){
	app.use(express.logger('dev')); //{ format: '\x1b[1m:method \x1b[32m:status \x1b[0m \x1b[33m:url\x1b[0m :response-time ms' }
    app.use(express.json());
    app.use(express.urlencoded());
	app.use(express.cookieParser());
	app.use(express.session({ secret: 'diva the puppy' }));
	app.use(passport.initialize());
	app.use(passport.session());
	app.set('view engine','jade');
	app.set('views', __dirname+'/views');
	app.use('/lib',express.static(__dirname + '/lib'));
	app.use(express.static(__dirname));
});

/****** AUTHENTICATION ******/
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      user.validPassword(password, function(err, result){
		if (err){
			done(null, false, { message: 'Incorrect password.' });
		}else{
			if(result) {
				 done( null, user);
			}else{
				done(null, false, { message: 'Incorrect password.' });
			}
		}
	  });
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// for authentication on all urls:
// 		app.all('*',requireAuthentication, loadUser);
// for authentication on only 'api' urls:
// 		app.all('/api/*', requireAuthentication, loadUser);
//see expressjs.com/api.html for more examples
// then add next(); to move the request to the next matching path

/****** LOGIN / LOGOUT ******/
app.post('/login',
  passport.authenticate('local', { successRedirect: '/productsearch',
                                   failureRedirect: '/'}
));

app.get('/logout', function(req,res){
    req.logout();
    res.redirect('/');
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

/****** API endpoints - add, delete, update, etc.. ******/
//TODO: check more than just user undefined- check if it's valid
//TODO: version 1.1 - check usergroups, so that there can be an admin group
app.all('/api/*',function(req,res,next){
    if(typeof req.user !== 'undefined'){
        next();
    }else{
        res.send(403, 'You do not have permission to use the API. Please make sure you are logged in.');
    }
});

//TODO: addrecord- Delete or fix this to work.
app.post('/api/addrecord', function(req, res){

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
        res.send("{\r\n \"Result\":\"OK\",\r\n \"Records\":[\r\n  {\"productId\":"+createGuid()+",\"Name\":\""+ newRecord.name+"\",\"Age\":"+newRecord.age+",\"RecordDate\":\"\\/Date("+date+")\\/\"}\r\n]\r\n}");
    }
});

//TODO: deleterecord- Delete or fix this to work.
app.post('/api/deleterecord', function(req, res){
    //anats tests compatibility
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    });
    res.send("{\r\n \"Result\":\"OK\"\r\n}");
});

//TODO: updaterecord- Delete or fix this to work.
app.get('/api/updaterecord', function(req, res){
    //anats tests compatibility
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    });
    res.send("{\r\n \"Result\":\"OK\"\r\n}");
});

//TODO: recordslist- Delete or fix this to work.
app.get('/api/recordslist', function(req, res){
    //anats tests compatibility
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    });

    res.send(testResultData);
});

//TODO: possibly pipe the result, or allow to work with larger batch sizes for more products
app.get('/api/productslist',function(req,res){
    var query = ProductsList.find();
    var resultArray;
    query.exists('productID')
        .select('-_id') //remove our id from the result
        .batchSize(1000)//up to 1000 products, this should be changed- possibly piped directly to the result
        .exec(function(err,result){
            result = _.toArray(result);
            resultArray = [];
            _.map(result, function(obj,key,list){
                resultArray.push([
                    obj.productID,
                    obj.productDescription,
                    obj.Category,
                    obj.Department,
                    obj.subDepartment,
                    obj.productType,
                    obj.medicaide,
                    obj.medicare,
                    obj.medicarePD,
                    obj.managedCare
                ]);
            });
            res.send(resultArray); //if we pipe to result, we will not need to do this
        });
    /*    ProductsList.find({id:"productsList"},function(err,result){
     res.send(result.productsList);
     });*/
});

app.get('/productsearch',function(req,res){
    res.render('productsearch')
});


/****** BASIC ADMIN VIEWS ******/
app.get("/*", function(req, res, next){
    if(typeof req.user !== 'undefined'){
        console.log(req.user);
        next(); //call the next middleware
    }
    else res.redirect('/');
});



/****** UTILS ******/
var createGuid = function(){
	return 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g,function(c){
		var r= Math.random()*16|0,
			v= c == 'x' ? r : (r&0x3|0x8);
		return v.toString(16);
	});
}
var testResultData = {
    Result: "OK",
    Records: [
        { productId: 6615, productName: "OS-CAL 500mg 100S G", type: "OTC", quantity: 17, orderDate: "Date:1320259705710"},
        { productId: 6760, productName: "TYLENOL TABS 500mg 100S G", type: "OTC", quantity: 42, orderDate: "Date:1320259705710"}, //the date is in milliseconds here
        { productId: 6604, productName: "NAIL CLIPPERS TOE", type:"SUPPLY", quantity: 26, orderDate: "Date:1320259705710"},
        { productId: 9231, productName: "TAPE MEDFIX 4 INCH", type:"Wound Care", quantity: 65, orderDate: "Date:1320259705710"}
    ]
}


/****** DB ******/
var connStr = 'mongodb://localhost:27017/test';
mongoose.set('debug', true);
mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});
var productSchema = new Schema({
    productID: Number,
    productDescription: String,
    subDepartment: String,
    Category: String,
    Department: String,
    productType: String,
    medicaide: String,
    medicare: String,
    medicarePD: String,
    managedCare: String
});
var ProductsList = mongoose.model('ProductsList',productSchema);

// create a user a new user
/*
var testUser = new User({
    username: 'etai',
    password: '1234s'
});
*/


// fetch user and test password verification
/*User.findOne({ username: testUser.username }, function(err, user) {
	if (err) throw err;

	
	// test  password
	user.validPassword(testUser.password, function(err, isMatch) {
		if (err) throw err;
		console.log('is new pass:', !isMatch); // -> Password123: true
		if(!isMatch){
			user.password=testUser.password;
			user.save();	
		}
	});

	
});*/

process.on('exit',function(){
	mongoose.close();
});

app.listen(3000);