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
@WebServlet("/UpdateRecord")
public class UpdateRecord extends HttpServlet {
	  private static final long serialVersionUID = 1L;
	  
	  protected void doGet(HttpServletRequest request,
	      HttpServletResponse response) throws ServletException, IOException {
	  }
	  
	  protected void doPost(HttpServletRequest request,
		    HttpServletResponse response) throws ServletException, IOException {

		  response.addHeader("Access-Control-Allow-Origin", "*");
		  response.setContentType("application/json");
		    
		    PrintWriter out = response.getWriter();

		    out.println("{\r\n \"Result\":\"OK\"\r\n}");
		  }
	  public void destroy() {
	    super.destroy();
	  }

	} 
