package com.ests.covoiturage.services;

public class ServiceCovoiturageProxy implements com.ests.covoiturage.services.ServiceCovoiturage {
  private String _endpoint = null;
  private com.ests.covoiturage.services.ServiceCovoiturage serviceCovoiturage = null;
  
  public ServiceCovoiturageProxy() {
    _initServiceCovoiturageProxy();
  }
  
  public ServiceCovoiturageProxy(String endpoint) {
    _endpoint = endpoint;
    _initServiceCovoiturageProxy();
  }
  
  private void _initServiceCovoiturageProxy() {
    try {
      serviceCovoiturage = (new com.ests.covoiturage.services.ServiceCovoiturageServiceLocator()).getServiceCovoiturage();
      if (serviceCovoiturage != null) {
        if (_endpoint != null)
          ((javax.xml.rpc.Stub)serviceCovoiturage)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
        else
          _endpoint = (String)((javax.xml.rpc.Stub)serviceCovoiturage)._getProperty("javax.xml.rpc.service.endpoint.address");
      }
      
    }
    catch (javax.xml.rpc.ServiceException serviceException) {}
  }
  
  public String getEndpoint() {
    return _endpoint;
  }
  
  public void setEndpoint(String endpoint) {
    _endpoint = endpoint;
    if (serviceCovoiturage != null)
      ((javax.xml.rpc.Stub)serviceCovoiturage)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
    
  }
  
  public com.ests.covoiturage.services.ServiceCovoiturage getServiceCovoiturage() {
    if (serviceCovoiturage == null)
      _initServiceCovoiturageProxy();
    return serviceCovoiturage;
  }
  
  public void supprimerAnnonce(int numero) throws java.rmi.RemoteException{
    if (serviceCovoiturage == null)
      _initServiceCovoiturageProxy();
    serviceCovoiturage.supprimerAnnonce(numero);
  }
  
  public void inscrirPassager(java.lang.String login, java.lang.String pwd, java.lang.String nom, java.lang.String prenom, int tel, java.lang.String adresse) throws java.rmi.RemoteException{
    if (serviceCovoiturage == null)
      _initServiceCovoiturageProxy();
    serviceCovoiturage.inscrirPassager(login, pwd, nom, prenom, tel, adresse);
  }
  
  public void deposerAnnonce(int numero, int codecond, java.lang.String dateDep, int heureDep, int heureArriv, java.lang.String villeDep, java.lang.String villeArriv) throws java.rmi.RemoteException{
    if (serviceCovoiturage == null)
      _initServiceCovoiturageProxy();
    serviceCovoiturage.deposerAnnonce(numero, codecond, dateDep, heureDep, heureArriv, villeDep, villeArriv);
  }
  
  public com.ests.covoiturage.services.Annonce[] listAllAnnonce() throws java.rmi.RemoteException{
    if (serviceCovoiturage == null)
      _initServiceCovoiturageProxy();
    return serviceCovoiturage.listAllAnnonce();
  }
  
  public com.ests.covoiturage.services.Annonce[] chercherAnnonceparVilleDepart(java.lang.String villeDep) throws java.rmi.RemoteException{
    if (serviceCovoiturage == null)
      _initServiceCovoiturageProxy();
    return serviceCovoiturage.chercherAnnonceparVilleDepart(villeDep);
  }
  
  public void inscrirConducteur(int code, java.lang.String nom, java.lang.String prenom, java.lang.String tel, java.lang.String adresse) throws java.rmi.RemoteException{
    if (serviceCovoiturage == null)
      _initServiceCovoiturageProxy();
    serviceCovoiturage.inscrirConducteur(code, nom, prenom, tel, adresse);
  }
  
  public com.ests.covoiturage.services.Annonce[] chercherAnnonceparDate(java.lang.String dateDepart) throws java.rmi.RemoteException{
    if (serviceCovoiturage == null)
      _initServiceCovoiturageProxy();
    return serviceCovoiturage.chercherAnnonceparDate(dateDepart);
  }
  
  public com.ests.covoiturage.services.Annonce[] chercherAnnonceparVilleArrivee(java.lang.String villeArrivee) throws java.rmi.RemoteException{
    if (serviceCovoiturage == null)
      _initServiceCovoiturageProxy();
    return serviceCovoiturage.chercherAnnonceparVilleArrivee(villeArrivee);
  }
  
  public com.ests.covoiturage.services.Conducteur[] listAllConducteurs() throws java.rmi.RemoteException{
    if (serviceCovoiturage == null)
      _initServiceCovoiturageProxy();
    return serviceCovoiturage.listAllConducteurs();
  }
  
  public com.ests.covoiturage.services.Passager[] listAllPassagers() throws java.rmi.RemoteException{
    if (serviceCovoiturage == null)
      _initServiceCovoiturageProxy();
    return serviceCovoiturage.listAllPassagers();
  }
  
  
}