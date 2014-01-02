// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./credentials.json');
var ec2 = new AWS.EC2({apiVersion: '2013-10-01'});
 
 function process(params, callback){
 	var str = params;
 	var param_arr = str.split(",");
 	var status = null;
	
	var img_param = {
		InstanceId: param_arr[0],
	  	Name: param_arr[1]
	 };
	
 	ec2.createImage(img_param, function(err, data) {
  	if (err) { 
 		status = "Could not create the immage: " + err; 
 	}
 	else{
 		status = "Image created with ID: " + data.ImageId;
 	}
   	callback(status);
 	});
 };

 module.exports.process = process;