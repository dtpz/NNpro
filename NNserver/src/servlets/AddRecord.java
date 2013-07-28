package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class AddRecord
 */
@WebServlet("/AddRecord")
public class AddRecord extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddRecord() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request,
		    HttpServletResponse response) throws ServletException, IOException {

		  System.out.println("PARAMETER "+request.getParameter("Name"));
		  System.out.println("PARAMETER "+request.getParameter("Age"));
		  response.addHeader("Access-Control-Allow-Origin", "*");
		  response.setContentType("application/json");
		    
		    PrintWriter out = response.getWriter();

		    out.println("{\r\n \"Result\":\"OK\",\r\n \"Records\":[\r\n  {\"PersonId\":5,\"Name\":\"Etai Button\",\"Age\":17,\"RecordDate\":\"\\/Date(1320259705710)\\/\"},\r\n  {\"PersonId\":2,\"Name\":\"Douglas Adams\",\"Age\":42,\"RecordDate\":\"\\/Date(1320259705710)\\/\"},\r\n  {\"PersonId\":3,\"Name\":\"Isaac Asimov\",\"Age\":26,\"RecordDate\":\"\\/Date(1320259705710)\\/\"},\r\n  {\"PersonId\":4,\"Name\":\"Thomas More\",\"Age\":65,\"RecordDate\":\"\\/Date(1320259705710)\\/\"}\r\n ]\r\n}");
		  }

}
