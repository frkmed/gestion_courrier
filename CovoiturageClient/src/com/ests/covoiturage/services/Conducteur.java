/**
 * Conducteur.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.ests.covoiturage.services;

public class Conducteur  implements java.io.Serializable {
    private java.lang.String adresse;

    private int code;

    private java.lang.String login;

    private java.lang.String nom;

    private java.lang.String password;

    private java.lang.String prenom;

    private java.lang.String tel;

    public Conducteur() {
    }

    public Conducteur(
           java.lang.String adresse,
           int code,
           java.lang.String login,
           java.lang.String nom,
           java.lang.String password,
           java.lang.String prenom,
           java.lang.String tel) {
           this.adresse = adresse;
           this.code = code;
           this.login = login;
           this.nom = nom;
           this.password = password;
           this.prenom = prenom;
           this.tel = tel;
    }


    /**
     * Gets the adresse value for this Conducteur.
     * 
     * @return adresse
     */
    public java.lang.String getAdresse() {
        return adresse;
    }


    /**
     * Sets the adresse value for this Conducteur.
     * 
     * @param adresse
     */
    public void setAdresse(java.lang.String adresse) {
        this.adresse = adresse;
    }


    /**
     * Gets the code value for this Conducteur.
     * 
     * @return code
     */
    public int getCode() {
        return code;
    }


    /**
     * Sets the code value for this Conducteur.
     * 
     * @param code
     */
    public void setCode(int code) {
        this.code = code;
    }


    /**
     * Gets the login value for this Conducteur.
     * 
     * @return login
     */
    public java.lang.String getLogin() {
        return login;
    }


    /**
     * Sets the login value for this Conducteur.
     * 
     * @param login
     */
    public void setLogin(java.lang.String login) {
        this.login = login;
    }


    /**
     * Gets the nom value for this Conducteur.
     * 
     * @return nom
     */
    public java.lang.String getNom() {
        return nom;
    }


    /**
     * Sets the nom value for this Conducteur.
     * 
     * @param nom
     */
    public void setNom(java.lang.String nom) {
        this.nom = nom;
    }


    /**
     * Gets the password value for this Conducteur.
     * 
     * @return password
     */
    public java.lang.String getPassword() {
        return password;
    }


    /**
     * Sets the password value for this Conducteur.
     * 
     * @param password
     */
    public void setPassword(java.lang.String password) {
        this.password = password;
    }


    /**
     * Gets the prenom value for this Conducteur.
     * 
     * @return prenom
     */
    public java.lang.String getPrenom() {
        return prenom;
    }


    /**
     * Sets the prenom value for this Conducteur.
     * 
     * @param prenom
     */
    public void setPrenom(java.lang.String prenom) {
        this.prenom = prenom;
    }


    /**
     * Gets the tel value for this Conducteur.
     * 
     * @return tel
     */
    public java.lang.String getTel() {
        return tel;
    }


    /**
     * Sets the tel value for this Conducteur.
     * 
     * @param tel
     */
    public void setTel(java.lang.String tel) {
        this.tel = tel;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof Conducteur)) return false;
        Conducteur other = (Conducteur) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.adresse==null && other.getAdresse()==null) || 
             (this.adresse!=null &&
              this.adresse.equals(other.getAdresse()))) &&
            this.code == other.getCode() &&
            ((this.login==null && other.getLogin()==null) || 
             (this.login!=null &&
              this.login.equals(other.getLogin()))) &&
            ((this.nom==null && other.getNom()==null) || 
             (this.nom!=null &&
              this.nom.equals(other.getNom()))) &&
            ((this.password==null && other.getPassword()==null) || 
             (this.password!=null &&
              this.password.equals(other.getPassword()))) &&
            ((this.prenom==null && other.getPrenom()==null) || 
             (this.prenom!=null &&
              this.prenom.equals(other.getPrenom()))) &&
            ((this.tel==null && other.getTel()==null) || 
             (this.tel!=null &&
              this.tel.equals(other.getTel())));
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = 1;
        if (getAdresse() != null) {
            _hashCode += getAdresse().hashCode();
        }
        _hashCode += getCode();
        if (getLogin() != null) {
            _hashCode += getLogin().hashCode();
        }
        if (getNom() != null) {
            _hashCode += getNom().hashCode();
        }
        if (getPassword() != null) {
            _hashCode += getPassword().hashCode();
        }
        if (getPrenom() != null) {
            _hashCode += getPrenom().hashCode();
        }
        if (getTel() != null) {
            _hashCode += getTel().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(Conducteur.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://services.covoiturage.ests.com", "Conducteur"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("adresse");
        elemField.setXmlName(new javax.xml.namespace.QName("http://services.covoiturage.ests.com", "adresse"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("code");
        elemField.setXmlName(new javax.xml.namespace.QName("http://services.covoiturage.ests.com", "code"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("login");
        elemField.setXmlName(new javax.xml.namespace.QName("http://services.covoiturage.ests.com", "login"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("nom");
        elemField.setXmlName(new javax.xml.namespace.QName("http://services.covoiturage.ests.com", "nom"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("password");
        elemField.setXmlName(new javax.xml.namespace.QName("http://services.covoiturage.ests.com", "password"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("prenom");
        elemField.setXmlName(new javax.xml.namespace.QName("http://services.covoiturage.ests.com", "prenom"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("tel");
        elemField.setXmlName(new javax.xml.namespace.QName("http://services.covoiturage.ests.com", "tel"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
    }

    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

    /**
     * Get Custom Serializer
     */
    public static org.apache.axis.encoding.Serializer getSerializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanSerializer(
            _javaType, _xmlType, typeDesc);
    }

    /**
     * Get Custom Deserializer
     */
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanDeserializer(
            _javaType, _xmlType, typeDesc);
    }

}
