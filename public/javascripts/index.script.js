var instance_type = null;
var region_img = null;
var security = null;
var key = null;
var tag = null;

function set_type(type_val)
{
	instance_type = type_val;
}

function set_region_img(region_img_val)
{
	region_img = region_img_val
}

function create_request(path)
{
	security = document.getElementById("security").value;
	key = document.getElementById("key").value;
	if(key == '')
	{
		alert("Launching instance without a key pair ID will leave it inaccessible.")
	}
	tag = document.getElementById("tag").value;

	var create_param = instance_type +","+ region_img +","+ security +","+ key +","+ tag;
	
	var form = document.createElement("form");
	form.setAttribute("method", "get");
	form.setAttribute("action", path);
	  
	var hiddenField = document.createElement("input");
	hiddenField.setAttribute("type", "hidden");
	hiddenField.setAttribute("name", "params");
	hiddenField.setAttribute("value", create_param);	
	form.appendChild(hiddenField);
	document.body.appendChild(form);
	
	form.submit();
}

function create_image(path)
{
    var input_obj = document.getElementsByName("check_instances");
  	var arr = new Array();
  	var index = 0;
  	for (e = 0; e < input_obj.length; e++) {
  	   if (input_obj[e].checked == true) {
  	    	arr[index] = input_obj[e].value;
  			index++;
  	    }
  	}
 	if(arr.length == 1)
 	{
	 var image_name = document.getElementById("ami_name").value;
	 var image_param = arr[0] +","+image_name;
	 
 	 var form = document.createElement("form");
 	 form.setAttribute("method", "get");
 	 form.setAttribute("action", path); 
 	 var hiddenField = document.createElement("input");
 	 hiddenField.setAttribute("type", "hidden");
 	 hiddenField.setAttribute("name", "params");
 	 hiddenField.setAttribute("value", image_param);	
 	 form.appendChild(hiddenField);
 	 document.body.appendChild(form);
 	 
	 form.submit();
 	}  
 
 	else
	{
	 alert("Select One Instance to create AMI");
	 }
}

function post_request(path)
{
	var input_obj = document.getElementsByName("check_instances");
 	var arr = new Array();
 	var index = 0;
  	for (e = 0; e < input_obj.length; e++) 
	{
   	 if (input_obj[e].checked == true) {
    	arr[index] = input_obj[e].value;
		index++;
    }
   }
   // post arr of instances to path
   var form = document.createElement("form");
   form.setAttribute("method", "get");	
   form.setAttribute("action", path);
	  
	var hiddenField = document.createElement("input");
	hiddenField.setAttribute("type", "hidden");
	hiddenField.setAttribute("name", "params");
	hiddenField.setAttribute("value", arr);	
	form.appendChild(hiddenField);
    document.body.appendChild(form);
    
	form.submit();
}

function dropdownlist(listindex)
{
	document.create.imageid.options.length = 0;
	switch (listindex)
	{

	case "1" :
	document.create.imageid.options[0]=new Option("Select Image Type","image_id");	
	document.create.imageid.options[1]=new Option("PV EBS-Backed 64-bit","ami-35792c5c");
	document.create.imageid.options[2]=new Option("PV EBS-Backed 32-bit","ami-51792c38");
	document.create.imageid.options[3]=new Option("PV Instance Store 64-bit","ami-3565305c");
	document.create.imageid.options[4]=new Option("PV Instance Store 32-bit","ami-5b792c32");
	document.create.imageid.options[5]=new Option("HVM EBS-Backed 64-bit","ami-69792c00");
	document.create.imageid.options[6]=new Option("HVM (GPU) EBS-Backed 64-bit","ami-7f792c16");
	break;

	case "2a" :
	document.create.imageid.options[0]=new Option("Select Image Type","image_id");	
	document.create.imageid.options[1]=new Option("PV EBS-Backed 64-bit","ami-d03ea1e0");
	document.create.imageid.options[2]=new Option("PV EBS-Backed 32-bit","ami-ec3ea1dc");
	document.create.imageid.options[3]=new Option("PV Instance Store 64-bit","ami-e23ea1d2");
	document.create.imageid.options[4]=new Option("PV Instance Store 32-bit","ami-8a3ea1ba");
	document.create.imageid.options[5]=new Option("HVM EBS-Backed 64-bit","ami-e43ea1d4");
	break;

	case "2b" :
	document.create.imageid.options[0]=new Option("Select Image Type","image_id");	
	document.create.imageid.options[1]=new Option("PV EBS-Backed 64-bit","ami-687b4f2d");
	document.create.imageid.options[2]=new Option("PV EBS-Backed 32-bit","ami-667b4f23");
	document.create.imageid.options[3]=new Option("PV Instance Store 64-bit","ami-5e7b4f1b");
	document.create.imageid.options[4]=new Option("PV Instance Store 32-bit","ami-567b4f13");
	document.create.imageid.options[5]=new Option("HVM EBS-Backed 64-bit","ami-4e7b4f0b");
	break;

	case "3" :
	document.create.imageid.options[0]=new Option("Select Image Type","image_id");	
	document.create.imageid.options[1]=new Option("PV EBS-Backed 64-bit","ami-149f7863");
	document.create.imageid.options[2]=new Option("PV EBS-Backed 32-bit","ami-109f7867");
	document.create.imageid.options[3]=new Option("PV Instance Store 64-bit","ami-1e9f7869");
	document.create.imageid.options[4]=new Option("PV Instance Store 32-bit","ami-129f7865");
	document.create.imageid.options[5]=new Option("HVM EBS-Backed 64-bit","ami-209f7857");
	document.create.imageid.options[6]=new Option("HVM (GPU) EBS-Backed 64-bit","ami-2c9f785b");
	break;

	case "4a" :
	document.create.imageid.options[0]=new Option("Select Image Type","image_id");	
	document.create.imageid.options[1]=new Option("PV EBS-Backed 64-bit","ami-14f2b946");
	document.create.imageid.options[2]=new Option("PV EBS-Backed 32-bit","ami-16f2b944");
	document.create.imageid.options[3]=new Option("PV Instance Store 64-bit","ami-38f2b96a");
	document.create.imageid.options[4]=new Option("PV Instance Store 32-bit","ami-20f2b972");
	document.create.imageid.options[5]=new Option("HVM EBS-Backed 64-bit","ami-6af2b938");
	break;

	case "4b" :
	document.create.imageid.options[0]=new Option("Select Image Type","image_id");	
	document.create.imageid.options[1]=new Option("PV EBS-Backed 64-bit","ami-3561fe34");
	document.create.imageid.options[2]=new Option("PV EBS-Backed 32-bit","ami-2f61fe2e");
	document.create.imageid.options[3]=new Option("PV Instance Store 64-bit","ami-4961fe48");
	document.create.imageid.options[4]=new Option("PV Instance Store 32-bit","ami-3961fe38");
	document.create.imageid.options[5]=new Option("HVM EBS-Backed 64-bit","ami-0961fe08");
	break;

	case "4c" :
	document.create.imageid.options[0]=new Option("Select Image Type","image_id");	
	document.create.imageid.options[1]=new Option("PV EBS-Backed 64-bit","ami-a148d59b");
	document.create.imageid.options[2]=new Option("PV EBS-Backed 32-bit","ami-af48d595");
	document.create.imageid.options[3]=new Option("PV Instance Store 64-bit","ami-8948d5b3");
	document.create.imageid.options[4]=new Option("PV Instance Store 32-bit","ami-9948d5a3");
	document.create.imageid.options[5]=new Option("HVM EBS-Backed 64-bit","ami-a948d593");
	break;

	case "5" :
	document.create.imageid.options[0]=new Option("Select Image Type","image_id");	
	document.create.imageid.options[1]=new Option("PV EBS-Backed 64-bit","ami-9f6ec982");
	document.create.imageid.options[2]=new Option("PV EBS-Backed 32-bit","ami-636ec97e");
	document.create.imageid.options[3]=new Option("PV Instance Store 64-bit","ami-916ec98c");
	document.create.imageid.options[4]=new Option("PV Instance Store 32-bit","ami-9b6ec986");
	document.create.imageid.options[5]=new Option("HVM EBS-Backed 64-bit","ami-9d6ec980");
	break;

	case "6" :
	document.create.imageid.options[0]=new Option("Select Image Type","image_id");	
	document.create.imageid.options[1]=new Option("PV EBS-Backed 64-bit","ami-cdef8bee");
	document.create.imageid.options[2]=new Option("PV EBS-Backed 32-bit","ami-d3ef8bf0");
	document.create.imageid.options[3]=new Option("PV Instance Store 64-bit","ami-c5ef8be6");
	document.create.imageid.options[4]=new Option("PV Instance Store 32-bit","ami-c9ef8bea");
	document.create.imageid.options[5]=new Option("HVM EBS-Backed 64-bit","ami-cfef8bec");
	break;
	
	}
	return true;
}