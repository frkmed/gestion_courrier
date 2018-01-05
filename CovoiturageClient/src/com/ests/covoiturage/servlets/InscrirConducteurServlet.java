package com.ests.covoiturage.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.rpc.ServiceException;

import com.ests.covoiturage.services.ServiceCovoiturage;
import com.ests.covoiturage.services.ServiceCovoiturageServiceLocator;

/**
 * Servlet implementation class InscrirConducteurServlet
 */
@WebServlet("/InscrirConducteurServlet")
public class InscrirConducteurServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public InscrirConducteurServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		ServiceCovoiturageServiceLocator locator = new ServiceCovoiturageServiceLocator();
		
		
		try {
			ServiceCovoiturage service = locator.getServiceCovoiturage();

			
			int code  = Integer.valueOf(request.getParameter("code"));
			String nom  = request.getParameter("nom");
			String prenom  = request.getParameter("prenom");
			String tel  = request.getParameter("tel");
			String adresse  = request.getParameter("adresse");
			
			service.inscrirConducteur(code, nom, prenom, tel, adresse);
			
			out.write("{\"operation\": \"ok\"}");
			
		} catch (ServiceException e) {
			out.write("{\"operation\": \"ko\", erreur : \"" + e.getMessage() + "\"}");
		}
	}

}
