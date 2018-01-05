package com.ests.covoiturage.services;

import java.util.ArrayList;


public class ServiceCovoiturage {

	private static ArrayList<Conducteur> listConducteur=new ArrayList<Conducteur>();
	private static ArrayList<Passager> listPassager = new ArrayList<Passager>();
	private static ArrayList<Annonce> listAnnonce=new ArrayList<Annonce>();

	
	public void inscrirPassager(String login,String pwd,String nom,String prenom,int tel,String adresse) {
		Passager p = new Passager(login,pwd,nom,prenom,tel,adresse);
		listPassager.add(p);
	}
	
	
	public void inscrirConducteur(int code,String nom,String prenom,String tel,String adresse) {
		Conducteur c = new Conducteur(code,nom,prenom,tel,adresse);
		listConducteur.add(c);
	}
	
	public void deposerAnnonce(int numero, int codecond,String dateDep, int heureDep,int heureArriv,String villeDep,String villeArriv) {
		Annonce a = new Annonce(numero,codecond, dateDep,heureDep,heureArriv,villeDep,villeArriv);
		listAnnonce.add(a);
	}
	
	public void supprimerAnnonce(int numero) {
		for (Annonce annonce : listAnnonce) {
			if (annonce.getNumero() == numero) {
				listAnnonce.remove(annonce);
				break;
			}
		}
	}
	
	public Annonce[] listAllAnnonce() {
		Annonce[] annonces = listAnnonce.toArray(new Annonce[listAnnonce.size()]);
		return annonces;
	}
	
	public Passager[] listAllPassagers() {
		Passager[] passagers = listPassager.toArray(new Passager[listPassager.size()]);
		return passagers;
	}
	
	public Conducteur[] listAllConducteurs() {
		Conducteur[] conducteurs = listConducteur.toArray(new Conducteur[listConducteur.size()]);
		return conducteurs;
	}
	
	public Annonce[] chercherAnnonceparDate(String dateDepart) {
		ArrayList<Annonce> resultat = new ArrayList<Annonce>();
		  for (int i=0; i<this.listAnnonce.size(); i++) {
		        
				Annonce annonce = this.listAnnonce.get(i);
		        if (annonce.getDatedepat().equals(dateDepart)) {
		        	resultat.add(annonce);
		        }
		    }
		  return resultat.toArray(new Annonce[resultat.size()]); // no annonce found with this date; maybe throw an exception
	}
	
	public Annonce[] chercherAnnonceparVilleDepart(String villeDep) {
		ArrayList<Annonce> resultat = new ArrayList<Annonce>();
		
		for(int i=0;i<listAnnonce.size();i++) {
			Annonce annonce = listAnnonce.get(i);
			if(annonce.getVilledepart().equals(villeDep)) {
				resultat.add(annonce);
			}			
		}
		return resultat.toArray(new Annonce[resultat.size()]); // no annonce found with this ville; maybe throw an exception
	}
	
	public Annonce[] chercherAnnonceparVilleArrivee(String villeArrivee) {
		ArrayList<Annonce> resultat = new ArrayList<Annonce>();
		
		for(int i=0;i<listAnnonce.size();i++) {
			Annonce annonce = listAnnonce.get(i);
			if(annonce.getVillearrivee().equals(villeArrivee)) {
				resultat.add(annonce);
			}			
		}
		return resultat.toArray(new Annonce[resultat.size()]); // no annonce found with this ville; maybe throw an exception
	}
}
