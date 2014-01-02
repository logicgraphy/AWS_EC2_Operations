// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./credentials.json');

var ec2 = new AWS.EC2({apiVersion: '2013-10-01'});

function process(callback){
//Describe instances
ec2.describeInstances(function(err, data) {
	var instances = new Array();;
  if (err) 
  { 
	  instances[0] = "Could not get instances detail: "+ err; 
  }
  
  else
  {
	  //console.log("Instances Details: ", data);
	  for (var index in data.Reservations) {
	      var instance_arr = data.Reservations[index].Instances;
		  var instance = instance_arr[0];
		  
		  var security = instance['SecurityGroups'][0];
		  var security_group = "";
		  if(security)
		  {
		  	security_group = security['GroupName'];
		  }
		  var tags = instance['Tags'][0];
		  var tag_value = "";
		  if(tags)
		  {
			  tag_value = tags['Value'];
		  }
		  var placement = instance['Placement'];
		  var state = instance['State'];
		 
		  
		  //console.log(Object.getPrototypeOf( placement ));
		  
		 instances[index] = { "InstanceId": instance['InstanceId'] ,
						"InstanceType": instance['InstanceType'] ,
						"ImageId": instance['ImageId'] ,
						"AvailabiityZone": placement['AvailabilityZone'] ,
						"InstanceState": state['Name'] ,
						"SecurityGroup": security_group ,
						"RootDeviceType": instance['RootDeviceType'] ,
						"KeyName": instance['KeyName'] ,
						"LaunchTime": instance['LaunchTime'] ,
						"Tags": tag_value
						};
						
	  	}
	  }
	  	callback(instances);
	});
};

module.exports.process = process;
