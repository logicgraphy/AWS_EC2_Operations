// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./credentials.json');

var ec2 = new AWS.EC2({apiVersion: '2013-10-01'});

function process(params, callback){

	var status = null;
	var param_arr = params.split(",");
	var security_group = param_arr[2];
	var key = param_arr[3];
	var params = {};
		params['InstanceType'] = param_arr[0];
	  	params['ImageId'] =  param_arr[1];
		if(param_arr[2] != ''){
			params['SecurityGroups'] =  [param_arr[2]];
		}
		if(param_arr[3] != '')
		{
			params['KeyName'] =  param_arr[3];
		}
	  	params['MinCount'] =  1; 
		params['MaxCount'] =  1;
	   
	   
	// Create the instance
	ec2.runInstances(params, function(err, data) {
  	if (err) { 
  		status = "Could not create instance: " + err; 	
		}
  	else{
  		var instanceId = data.Instances[0].InstanceId;
		status = "Created instance # ID: " + instanceId;	
  	  }	
	  
	  //Add tags to the instance
	 params = {Resources: [instanceId], Tags: [{Key: 'Name', Value: param_arr[4]}]};
	  ec2.createTags(params, function(err) {
	    	//console.log("Tagging instance", err ? "failure" : "success");
	  		});
	
	  callback(status);
 	});
	
	
};

module.exports.process = process;

