package com.ests.covoiturage.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.rpc.ServiceException;

import com.ests.covoiturage.services.Conducteur;
import com.ests.covoiturage.services.Passager;
import com.ests.covoiturage.services.ServiceCovoiturage;
import com.ests.covoiturage.services.ServiceCovoiturageServiceLocator;

/**
 * Servlet implementation class ConnexionServlet
 */
@WebServlet("/ConnexionServlet")
public class ConnexionServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ConnexionServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String login = request.getParameter("login");
		String pass = request.getParameter("pass");
		PrintWriter out = response.getWriter();
		
		if (login.trim().equals("") || login.trim().equals("")) {
			
			request.setAttribute("erreur", "Veuillez saisir le login et/ou le mot de passe");
			RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("connexion.jsp");
			dispatcher.forward(request, response);
			return;
		}
		
		ServiceCovoiturageServiceLocator locator = new ServiceCovoiturageServiceLocator();
		
		try {
			ServiceCovoiturage service = locator.getServiceCovoiturage();
			
			Conducteur[] conducteurs = service.listAllConducteurs();
			Passager[] passagers = service.listAllPassagers();
			
			boolean trouve = false;
			Object utilisateurConnecte = null;
			for (Conducteur conducteur : conducteurs) {
				if (conducteur.getLogin().equals(login) && conducteur.getPassword().equals(pass)) {
					trouve = true;
					utilisateurConnecte = conducteur;
					break;
				}
			}
			
			if (trouve == false) {
				for (Passager passager : passagers) {
					if (passager.getLogin().equals(login) && passager.getPassword().equals(pass)) {
						trouve = true;
						utilisateurConnecte = passager;
						break;
					}
				}				
			}
			
			if (trouve == false ) {
				request.setAttribute("erreur", "login et/ou mot de passe est incorrect !");
				RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("connexion.jsp");
				dispatcher.forward(request, response);
				return;

			} else {
				request.getSession().setAttribute("utilisateurConnecte", utilisateurConnecte);
				response.sendRedirect("offres.jsp");
				return;
			}
		} catch (ServiceException e) {
			request.setAttribute("erreur", "Erreur dans le service web !");
			RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("connexion.jsp");
			dispatcher.forward(request, response);
			return;
		}
		
		//service.
		
		//out.write("{\"operation\": \"ok\", \"data\" : \"" + json + "\"}");
		
	
		//
		
		
	}

}
