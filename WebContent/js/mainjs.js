function OnLoginClick()
{
	//var UName=document.getElementById('IdUName').value;
	//var LName=document.getElementById('IdLName').value;
	var Email=document.getElementById('IdEmail').value;
	var Pwd=document.getElementById('IdPwd').value;
	var FeedbackMsg = '';
	console.log(Email);
	$.ajax({
	    url : "SecurityServlet",
	    type : "post",                      
	    cache : false,
	    async : false,
	    data:'action=login&email='+Email+'&password='+Pwd,
	    
	    success : function(data) 
	    {
	    	//window.location.replace("index.jsp");
	    	//location.reload();
	    	console.log(data);
	    },
	  //  error: function(xhr, textStatus, errorThrown)
	      error : function(data) 
	    {
	    	//feedbackMsg = "<span class='rt'>"+xhr.responseText+"</span>";
	    	//$('#loginDlg').effect("highlight", {color: '#ff0000'}, 300).parent().effect('shake');
	    	console.log(data);
	    }
	});
	
	
		//console.log(document.getElementById('IdEmail').value);
	
}