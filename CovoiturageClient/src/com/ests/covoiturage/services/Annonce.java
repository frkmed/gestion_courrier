/**
 * Annonce.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.ests.covoiturage.services;

public class Annonce  implements java.io.Serializable {
    private int codeconducteur;

    private java.lang.String datedepat;

    private int heurearrivee;

    private int heuredepart;

    private int numero;

    private java.lang.String villearrivee;

    private java.lang.String villedepart;

    public Annonce() {
    }

    public Annonce(
           int codeconducteur,
           java.lang.String datedepat,
           int heurearrivee,
           int heuredepart,
           int numero,
           java.lang.String villearrivee,
           java.lang.String villedepart) {
           this.codeconducteur = codeconducteur;
           this.datedepat = datedepat;
           this.heurearrivee = heurearrivee;
           this.heuredepart = heuredepart;
           this.numero = numero;
           this.villearrivee = villearrivee;
           this.villedepart = villedepart;
    }


    /**
     * Gets the codeconducteur value for this Annonce.
     * 
     * @return codeconducteur
     */
    public int getCodeconducteur() {
        return codeconducteur;
    }


    /**
     * Sets the codeconducteur value for this Annonce.
     * 
     * @param codeconducteur
     */
    public void setCodeconducteur(int codeconducteur) {
        this.codeconducteur = codeconducteur;
    }


    /**
     * Gets the datedepat value for this Annonce.
     * 
     * @return datedepat
     */
    public java.lang.String getDatedepat() {
        return datedepat;
    }


    /**
     * Sets the datedepat value for this Annonce.
     * 
     * @param datedepat
     */
    public void setDatedepat(java.lang.String datedepat) {
        this.datedepat = datedepat;
    }


    /**
     * Gets the heurearrivee value for this Annonce.
     * 
     * @return heurearrivee
     */
    public int getHeurearrivee() {
        return heurearrivee;
    }


    /**
     * Sets the heurearrivee value for this Annonce.
     * 
     * @param heurearrivee
     */
    public void setHeurearrivee(int heurearrivee) {
        this.heurearrivee = heurearrivee;
    }


    /**
     * Gets the heuredepart value for this Annonce.
     * 
     * @return heuredepart
     */
    public int getHeuredepart() {
        return heuredepart;
    }


    /**
     * Sets the heuredepart value for this Annonce.
     * 
     * @param heuredepart
     */
    public void setHeuredepart(int heuredepart) {
        this.heuredepart = heuredepart;
    }


    /**
     * Gets the numero value for this Annonce.
     * 
     * @return numero
     */
    public int getNumero() {
        return numero;
    }


    /**
     * Sets the numero value for this Annonce.
     * 
     * @param numero
     */
    public void setNumero(int numero) {
        this.numero = numero;
    }


    /**
     * Gets the villearrivee value for this Annonce.
     * 
     * @return villearrivee
     */
    public java.lang.String getVillearrivee() {
        return villearrivee;
    }


    /**
     * Sets the villearrivee value for this Annonce.
     * 
     * @param villearrivee
     */
    public void setVillearrivee(java.lang.String villearrivee) {
        this.villearrivee = villearrivee;
    }


    /**
     * Gets the villedepart value for this Annonce.
     * 
     * @return villedepart
     */
    public java.lang.String getVilledepart() {
        return villedepart;
    }


    /**
     * Sets the villedepart value for this Annonce.
     * 
     * @param villedepart
     */
    public void setVilledepart(java.lang.String villedepart) {
        this.villedepart = villedepart;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof Annonce)) return false;
        Annonce other = (Annonce) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            this.codeconducteur == other.getCodeconducteur() &&
            ((this.datedepat==null && other.getDatedepat()==null) || 
             (this.datedepat!=null &&
              this.datedepat.equals(other.getDatedepat()))) &&
            this.heurearrivee == other.getHeurearrivee() &&
            this.heuredepart == other.getHeuredepart() &&
            this.numero == other.getNumero() &&
            ((this.villearrivee==null && other.getVillearrivee()==null) || 
             (this.villearrivee!=null &&
              this.villearrivee.equals(other.getVillearrivee()))) &&
            ((this.villedepart==null && other.getVilledepart()==null) || 
             (this.villedepart!=null &&
              this.villedepart.equals(other.getVilledepart())));
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
        _hashCode += getCodeconducteur();
        if (getDatedepat() != null) {
            _hashCode += getDatedepat().hashCode();
        }
        _hashCode += getHeurearrivee();
        _hashCode += getHeuredepart();
        _hashCode += getNumero();
        if (getVillearrivee() != null) {
            _hashCode += getVillearrivee().hashCode();
        }
        if (getVilledepart() != null) {
            _hashCode += getVilledepart().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(Annonce.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://services.covoiturage.ests.com", "Annonce"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("codeconducteur");
        elemField.setXmlName(new javax.xml.namespace.QName("http://services.covoiturage.ests.com", "codeconducteur"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("datedepat");
        elemField.setXmlName(new javax.xml.namespace.QName("http://services.covoiturage.ests.com", "datedepat"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("heurearrivee");
        elemField.setXmlName(new javax.xml.namespace.QName("http://services.covoiturage.ests.com", "heurearrivee"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("heuredepart");
        elemField.setXmlName(new javax.xml.namespace.QName("http://services.covoiturage.ests.com", "heuredepart"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("numero");
        elemField.setXmlName(new javax.xml.namespace.QName("http://services.covoiturage.ests.com", "numero"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("villearrivee");
        elemField.setXmlName(new javax.xml.namespace.QName("http://services.covoiturage.ests.com", "villearrivee"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("villedepart");
        elemField.setXmlName(new javax.xml.namespace.QName("http://services.covoiturage.ests.com", "villedepart"));
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
