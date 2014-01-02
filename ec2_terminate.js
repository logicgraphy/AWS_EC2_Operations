// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./credentials.json');

var ec2 = new AWS.EC2({apiVersion: '2013-10-01'});

function process(params, callback){
	var str = params;
	var inst_ids = str.split(",");
	console.log("inst_ids :" + inst_ids);
	var inst_param = {InstanceIds: inst_ids};
	var status = null;
	ec2.terminateInstances(inst_param, function(err, data) {
 	if (err) { 
		status = "Could not terminate instance" + err; 
	}
	else{
	    var data_arr = new Array();
	    data_arr = data.TerminatingInstances;
		var instace_ids = "";
	    for(var i = 0; i < data_arr.length;i++){
	         instace_ids = instace_ids + data.TerminatingInstances[i].InstanceId + " , ";
	      }
		status = "Terminating instance # IDs: " + instace_ids;
		
	}
  	callback(status);
	});
};

module.exports.process = process;