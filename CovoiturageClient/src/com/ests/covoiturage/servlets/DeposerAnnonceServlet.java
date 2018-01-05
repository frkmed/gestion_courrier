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
 * Servlet implementation class DeposerAnnonceServlet
 */
@WebServlet("/DeposerAnnonceServlet")
public class DeposerAnnonceServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeposerAnnonceServlet() {
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
			
			int numero = Integer.valueOf(request.getParameter("numero"));
			int codecond = Integer.valueOf(request.getParameter("codecond"));
			String dateDep  = request.getParameter("dateDep");
			int heureDep  = Integer.valueOf(request.getParameter("heureDep"));
			int heureArriv  = Integer.valueOf(request.getParameter("heureArriv"));
			String villeDep  = request.getParameter("villeDep");
			String villeArriv  = request.getParameter("villeArriv");

			service.deposerAnnonce(numero, codecond, dateDep, heureDep, heureArriv, villeDep, villeArriv);
			
			out.write("{\"operation\": \"ok\"}");
			
		} catch (ServiceException e) {
			out.write("{\"operation\": \"ko\", erreur : \"" + e.getMessage() + "\"}");
		}
	}

}
