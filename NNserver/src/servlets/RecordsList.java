package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

//import srv.FileDao;

/**
 * Servlet implementation class RecordsList
 */
@WebServlet("/RecordsList")
public class RecordsList extends HttpServlet {
	  private static final long serialVersionUID = 1L;
	       
	  
	  protected void doGet(HttpServletRequest request,
	      HttpServletResponse response) throws ServletException, IOException {
	    // Set a cookie for the user, so that the counter does not increate
	    // everytime the user press refresh
	    HttpSession session = request.getSession(true);
	    // Set the session valid for 5 secs
	    session.setMaxInactiveInterval(5);
	    response.setContentType("application/json");
	    PrintWriter out = response.getWriter();
	    out.println("{\r\n \"Result\":\"OK\",\r\n \"Records\":[\r\n  {\"PersonId\":1,\"Name\":\"Benjamin Button\",\"Age\":17,\"RecordDate\":\"\\/Date(1320259705710)\\/\"},\r\n  {\"PersonId\":2,\"Name\":\"Douglas Adams\",\"Age\":42,\"RecordDate\":\"\\/Date(1320259705710)\\/\"},\r\n  {\"PersonId\":3,\"Name\":\"Isaac Asimov\",\"Age\":26,\"RecordDate\":\"\\/Date(1320259705710)\\/\"},\r\n  {\"PersonId\":4,\"Name\":\"Thomas More\",\"Age\":65,\"RecordDate\":\"\\/Date(1320259705710)\\/\"}\r\n ]\r\n}");
	  }
	  
	  protected void doPost(HttpServletRequest request,
		    HttpServletResponse response) throws ServletException, IOException {

		  response.addHeader("Access-Control-Allow-Origin", "*");
		  response.setContentType("application/json");
		    
		    PrintWriter out = response.getWriter();

		    out.println("{\r\n \"Result\":\"OK\",\r\n \"Records\":[\r\n  {\"PersonId\":1,\"Name\":\"Benjamin Button\",\"Age\":17,\"RecordDate\":\"\\/Date(1320259705710)\\/\"},\r\n  {\"PersonId\":2,\"Name\":\"Douglas Adams\",\"Age\":42,\"RecordDate\":\"\\/Date(1320259705710)\\/\"},\r\n  {\"PersonId\":3,\"Name\":\"Isaac Asimov\",\"Age\":26,\"RecordDate\":\"\\/Date(1320259705710)\\/\"},\r\n  {\"PersonId\":4,\"Name\":\"Thomas More\",\"Age\":65,\"RecordDate\":\"\\/Date(1320259705710)\\/\"}\r\n ]\r\n}");
		  }
	  public void destroy() {
	    super.destroy();
	  }

	} 
