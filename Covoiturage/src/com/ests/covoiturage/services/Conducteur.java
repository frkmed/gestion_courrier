package com.ests.covoiturage.services;

public class Conducteur {

	private int code;
	private String nom;
	private String prenom;
	private String tel;
	private String adresse;
	private String login;
	private String password;
	
	public Conducteur() {
		
	}
	
	public Conducteur(int code,String nom,String prenom,String tel,String adresse) {
		this.code=code;
		this.nom=nom;
		this.prenom=prenom;
		this.tel=tel;
		this.adresse=adresse;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
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

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
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

	@Override
	public String toString() {
		return "Conducteur [code=" + code + ", nom=" + nom + ", prenom=" + prenom + ", tel=" + tel + ", adresse="
				+ adresse + "]";
	}		
}
