
var bodyParser = require('body-parser');
var express = require('express');
var https = require('https');

var bodyParser = require('body-parser');    // pull information from HTML POST (express4)

var app = express();

app.use(bodyParser.json());                                     // parse application/json


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {

  response.render('pages/index');

});

app.post('/checkCreds', function(request, response) {   

		var host = request.body.url; 
		var apiKey =  request.body.apiKey; 
		var path = '/api/v1/accounts/?access_token=' + request.body.apiKey; 	
  	
  		var str = '';
  		var options = {
		    	host: host,
		  		path: path,
		  		method: 'GET'
		    	};
  		
  		  var req = https.request(options, function(res){
  			
  			res.on('data', function (chunk) {
  				console.log("Here");
		    	str += chunk;
		  		
		  		});

		  	res.on('end', function () {
		    	response.send(str); 

		  		});
		  }); 

		  req.end(); 

		  req.on('error', (e) => {
			  console.error(e);
			});

});

app.post('/getAcctAnalytics', function(request, response){

		var host = request.body.url; 
		var apiKey =  request.body.apiKey; 
		var acctID = request.body.account.id; 
		var path = '/api/v1/accounts/' + acctID + '/analytics/completed/statistics/?access_token=' + request.body.apiKey; 	
  	
  		var str = '';
  		var options = {
		    	host: host,
		  		path: path,
		  		method: 'GET'
		    	};
  		
  		  var req = https.request(options, function(res){
  			
  		  res.on('data', function (chunk) {
  				console.log("Here");
		    	str += chunk;
		  		
		  });

		  res.on('end', function () {
		    	response.send(str); 

		  		});
		  }); 

		  req.end(); 

		  req.on('error', (e) => {
			  console.error(e);
			});

}); 

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

