package com.ests.covoiturage.services;

public class Annonce {

	private int numero;
	private int codeconducteur;
	private String datedepat;
	private int heuredepart;
	private int heurearrivee;
	private String villedepart;
	private String villearrivee;
	
	public Annonce() {
		
	}
	
	public Annonce(int numero, int codecond,String datedepart,int heureDep,int heureArriv,String villeDep, String villeArriv) {
		this.numero=numero;
		this.codeconducteur=codecond;
		this.datedepat=datedepart;
		this.heuredepart=heureDep;
		this.heurearrivee=heureArriv;
		this.villedepart=villeDep;
		this.villearrivee=villeArriv;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public int getCodeconducteur() {
		return codeconducteur;
	}

	public void setCodeconducteur(int codeconducteur) {
		this.codeconducteur = codeconducteur;
	}

	public String getDatedepat() {
		return datedepat;
	}

	public void setDatedepat(String datedepat) {
		this.datedepat = datedepat;
	}

	public int getHeuredepart() {
		return heuredepart;
	}

	public void setHeuredepart(int heuredepart) {
		this.heuredepart = heuredepart;
	}

	public int getHeurearrivee() {
		return heurearrivee;
	}

	public void setHeurearrivee(int heurearrivee) {
		this.heurearrivee = heurearrivee;
	}

	public String getVilledepart() {
		return villedepart;
	}

	public void setVilledepart(String villedepart) {
		this.villedepart = villedepart;
	}

	public String getVillearrivee() {
		return villearrivee;
	}

	public void setVillearrivee(String villearrivee) {
		this.villearrivee = villearrivee;
	}

	@Override
	public String toString() {
		return "Annonce [numero=" + numero + ", codeconducteur=" + codeconducteur + ", datedepat=" + datedepat
				+ ", heuredepart=" + heuredepart + ", heurearrivee=" + heurearrivee + ", villedepart=" + villedepart
				+ ", villearrivee=" + villearrivee + "]";
	}
	
}
