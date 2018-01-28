:loop
C:\xampp\php\php.exe index_courrier_batch.php
java -jar -Dc=courrier-data -Dauto post.jar xml\*.xml
timeout 10
goto loop