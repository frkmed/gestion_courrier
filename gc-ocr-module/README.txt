Le module gc-ocr-module, est un batch qui s'execute au niveau du serveur, son role est :
1- effectuer de l'ocr sur les documents scannnés relatifs au courrier
2- enregistrer le contenu texte récupéré (arabe ou latin) dans la base mysql de l'application au niveau de la table "document"
3- créer un output xml des tables courrier et document
4- lancer l'indexation de solr, et ainsi rendre le courrier recherchable en plein texte à partir de l'application

Prérequis du module gc-ocr-module
=================================

Installation de Tesseract-OCR... URL=https://digi.bib.uni-mannheim.de/tesseract/tesseract-ocr-setup-3.05.01.exe
Installation de solr-7.2.1...  http://www-eu.apache.org/dist/lucene/solr/7.2.1/solr-7.2.1.zip
Installation de npm

Veillez que après l'installation, la présence des executables suivants dans les chemins indiqués après :
-tesseract.exe : C:\Program Files (x86)\Tesseract-OCR\tesseract.exe
-solr.cmd : C:\solr-7.2.1\bin\solr.cmd


Mise en marche de gc-ocr-module
===============================

Etape 1 :
---------
Avant de lancer gc-ocr-module.cmd la premiere fois il faut créer un core solr, c'est en quelque sorte une base de données index de solr, pour faire lancer les commandes suivantes :

C:\solr-7.2.1\bin\solr.cmd start

Cette commande lance Apache Solr, par défaut, il est lancé sur le port 8983

C:\solr-7.2.1\bin\solr.cmd create -c courrier-data

Cette commande crée un core solr avec le nom "courrier-data", c'est le core utilisé par ce module pour indexer les données du courrier

gc-ocr-module.cmd

Cette commande execute le module gc-ocr-module

N'allez à l'étape 2 que après saisir un courrier, et y attacher au moins un document scanné. afin d'avoir un premier index solr.

Etape 2:
--------
Maintenant allez sur la tableau de bord de solr, pour faire à partir d'un navigateur web, allez à l'url suivant : http://localhost:8983/solr/

Puis au niveau de "Core Selector", séléctionner "courrier-data"

Allez dans "Schema", puis cliquez sur le bouton "Add Copy Field", et renseigner les valeurs suivantes :

Dans le champ source : *
Dans le champ destination : _text_
Puis cliquez sur le bouton Add CopyField pour valider l'opération

Ceci à pour effet de rendre tout les champs des tables courrier et document accessible en mode plein texte.
