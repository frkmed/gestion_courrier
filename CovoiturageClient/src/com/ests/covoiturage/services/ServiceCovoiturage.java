/**
 * ServiceCovoiturage.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.ests.covoiturage.services;

public interface ServiceCovoiturage extends java.rmi.Remote {
    public com.ests.covoiturage.services.Conducteur[] listAllConducteurs() throws java.rmi.RemoteException;
    public void supprimerAnnonce(int numero) throws java.rmi.RemoteException;
    public void inscrirPassager(java.lang.String login, java.lang.String pwd, java.lang.String nom, java.lang.String prenom, int tel, java.lang.String adresse) throws java.rmi.RemoteException;
    public void deposerAnnonce(int numero, int codecond, java.lang.String dateDep, int heureDep, int heureArriv, java.lang.String villeDep, java.lang.String villeArriv) throws java.rmi.RemoteException;
    public com.ests.covoiturage.services.Annonce[] listAllAnnonce() throws java.rmi.RemoteException;
    public com.ests.covoiturage.services.Passager[] listAllPassagers() throws java.rmi.RemoteException;
    public com.ests.covoiturage.services.Annonce[] chercherAnnonceparVilleDepart(java.lang.String villeDep) throws java.rmi.RemoteException;
    public void inscrirConducteur(int code, java.lang.String nom, java.lang.String prenom, java.lang.String tel, java.lang.String adresse) throws java.rmi.RemoteException;
    public com.ests.covoiturage.services.Annonce[] chercherAnnonceparDate(java.lang.String dateDepart) throws java.rmi.RemoteException;
    public com.ests.covoiturage.services.Annonce[] chercherAnnonceparVilleArrivee(java.lang.String villeArrivee) throws java.rmi.RemoteException;
}
