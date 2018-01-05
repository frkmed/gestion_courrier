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
 * Servlet implementation class SupprimerAnnonceServlet
 */
@WebServlet("/SupprimerAnnonceServlet")
public class SupprimerAnnonceServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SupprimerAnnonceServlet() {
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

			int numero  = Integer.valueOf(request.getParameter("numero"));
			service.supprimerAnnonce(numero);
			
			//traitement
			
			out.write("{\"operation\": \"ok\"}");
			
		} catch (ServiceException e) {
			out.write("{\"operation\": \"ko\", erreur : \"" + e.getMessage() + "\"}");
		}
	}

}
