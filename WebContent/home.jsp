<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ page import="com.bookerang.database.object.BrUsers" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Welcome</title>
</head>
<body>
<% String CurrentBrUserName ="";
	if (request.getSession(false) == null)
	{
		response.sendRedirect(request.getContextPath()+"/index.html");

	} 
	else {
		BrUsers CurrentBrUser = (BrUsers) request.getSession()
				.getAttribute("BrUser");
	    CurrentBrUserName = CurrentBrUser.getUsername();
	}
%>
<h1>Welcome <%=CurrentBrUserName%> </h1>
</body>
</html>