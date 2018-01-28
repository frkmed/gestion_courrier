Le module gc-ocr-module, est un batch qui s'execute au niveau du serveur, son role est :
1- effectuer de l'ocr sur les documents scannn�s relatifs au courrier
2- enregistrer le contenu texte r�cup�r� (arabe ou latin) dans la base mysql de l'application au niveau de la table "document"
3- cr�er un output xml des tables courrier et document
4- lancer l'indexation de solr, et ainsi rendre le courrier recherchable en plein texte � partir de l'application

Pr�requis du module gc-ocr-module
=================================

Installation de Tesseract-OCR... URL=https://digi.bib.uni-mannheim.de/tesseract/tesseract-ocr-setup-3.05.01.exe
Installation de solr-7.2.1...  http://www-eu.apache.org/dist/lucene/solr/7.2.1/solr-7.2.1.zip
Installation de npm

Veillez que apr�s l'installation, la pr�sence des executables suivants dans les chemins indiqu�s apr�s :
-tesseract.exe : C:\Program Files (x86)\Tesseract-OCR\tesseract.exe
-solr.cmd : C:\solr-7.2.1\bin\solr.cmd


Mise en marche de gc-ocr-module
===============================

Etape 1 :
---------
Avant de lancer gc-ocr-module.cmd la premiere fois il faut cr�er un core solr, c'est en quelque sorte une base de donn�es index de solr, pour faire lancer les commandes suivantes :

C:\solr-7.2.1\bin\solr.cmd start

Cette commande lance Apache Solr, par d�faut, il est lanc� sur le port 8983

C:\solr-7.2.1\bin\solr.cmd create -c courrier-data

Cette commande cr�e un core solr avec le nom "courrier-data", c'est le core utilis� par ce module pour indexer les donn�es du courrier

gc-ocr-module.cmd

Cette commande execute le module gc-ocr-module

N'allez � l'�tape 2 que apr�s saisir un courrier, et y attacher au moins un document scann�. afin d'avoir un premier index solr.

Etape 2:
--------
Maintenant allez sur la tableau de bord de solr, pour faire � partir d'un navigateur web, allez � l'url suivant : http://localhost:8983/solr/

Puis au niveau de "Core Selector", s�l�ctionner "courrier-data"

Allez dans "Schema", puis cliquez sur le bouton "Add Copy Field", et renseigner les valeurs suivantes :

Dans le champ source : *
Dans le champ destination : _text_
Puis cliquez sur le bouton Add CopyField pour valider l'op�ration

Ceci � pour effet de rendre tout les champs des tables courrier et document accessible en mode plein texte.
