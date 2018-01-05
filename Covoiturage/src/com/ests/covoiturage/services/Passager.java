package com.ests.covoiturage.services;

public class Passager {

	private String login;
	private String password;
	private String nom;
	private String prenom;
	private int tel;
	private String adresse;
	
	public Passager() {
		
	}
	
	public Passager(String login,String pwd,String nom,String prenom,int tel,String adresse) {
		this.login=login;
		this.password=pwd;
		this.nom=nom;
		this.prenom=prenom;
		this.tel=tel;
		this.adresse=adresse;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public int getTel() {
		return tel;
	}

	public void setTel(int tel) {
		this.tel = tel;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	@Override
	public String toString() {
		return "Passager [login=" + login + ", password=" + password + ", nom=" + nom + ", prenom=" + prenom + ", tel="
				+ tel + ", adresse=" + adresse + "]";
	}
	
}
