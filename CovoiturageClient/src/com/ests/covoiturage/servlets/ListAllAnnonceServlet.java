package com.ests.covoiturage.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.rpc.ServiceException;

import com.ests.covoiturage.services.Annonce;
import com.ests.covoiturage.services.ServiceCovoiturage;
import com.ests.covoiturage.services.ServiceCovoiturageServiceLocator;

/**
 * Servlet implementation class ListAllAnnonceServlet
 */
@WebServlet("/ListAllAnnonceServlet")
public class ListAllAnnonceServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ListAllAnnonceServlet() {
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
			
			
			Annonce[] resultat = service.listAllAnnonce();
			
			String json = "";
			String separateur = "";
			
			if (resultat != null) {
				for (Annonce annonce : resultat) {
					json += separateur + "[";
					json += "\"" + annonce.getNumero() + "\",";
					json += "\"" + annonce.getCodeconducteur() + "\",";
					json += "\"" + annonce.getDatedepat() + "\",";
					json += "\"" + annonce.getHeuredepart() + "\",";
					json += "\"" + annonce.getHeurearrivee() + "\",";
					json += "\"" + annonce.getVilledepart() + "\",";
					json += "\"" + annonce.getVillearrivee() + "\"";
					json +="]";
					separateur = ",";
				}
			} else {
				json += "[";
				json += "\"0 Annonces \",";
				json += "\"\",";
				json += "\"\",";
				json += "\"\",";
				json += "\"\",";
				json += "\"\",";
				json += "\"\"";
				json +="]";				
			}
			
			out.write("{\"operation\": \"ok\", \"data\" : \"" + json + "\"}");
			
		} catch (ServiceException e) {
			out.write("{\"operation\": \"ko\", erreur : \"" + e.getMessage() + "\"}");
		}
	}

}
