<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
           
          //String query="call p_new_student_by_year_and_faculty(2556,'1','N','001','3')";
          //String paramYear = "2556";
		  //String paramSemesterNew = "1";
		  //String paramForeign = "N";
		  //String paramEduLevel = "001";
		  //String paramYearSub = "3";		        
          
          String paramYear 		= request.getParameter("paramYear");
		  String paramSemesterNew 	= request.getParameter("paramSemesterNew");
		  String paramForeign	= request.getParameter("paramForeign");
		  String paramEduLevel 	= request.getParameter("paramEduLevel");
		  String paramYearSub 	= request.getParameter("paramYearSub");
		  String query="call p_new_student_by_year_and_faculty("+paramYear+",\'"+paramSemesterNew+"\',\'"+paramForeign+"\',\'"+paramEduLevel+"\',\'"+paramYearSub+"\')";
          String columns="1,2,3";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>