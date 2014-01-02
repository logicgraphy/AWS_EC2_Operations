// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./credentials.json');

var ec2 = new AWS.EC2({apiVersion: '2013-10-01'});

function process(params, callback){
	var str = params;
	var inst_ids = str.split(",");
	var inst_param = {InstanceIds: inst_ids};
	var status = null;
	ec2.rebootInstances(inst_param, function(err, data) {
 	if (err) { 
		status = "Could not reboot instance" + err; 
	}
	else{
		status = "Rebooting instance IDs : " + inst_ids;
	}
  	callback(status);
	});
};

module.exports.process = process;
