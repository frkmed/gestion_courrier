@echo off
:loop
rem OCR des documents scann‚s et enregistrement du texte dans la table document
echo "OCR des documents scann‚s et enregistrement du texte dans la table document"
node ocr_scanned_docs_batch.js

rem Sortie du contenu de la table document dans des fichiers xml puis appel du service solr pour indexer le contenu
echo "Sortie du contenu de la table document et la table courrier dans des fichiers xml puis appel du service solr pour indexer le contenu"
D:\server\xampp\php\php.exe index_courrier_batch.php
java -jar -Dc=courrier-data -Dauto post.jar xml\*.xml >>gc-ocr-module.log 2>&1
timeout 10
goto loop