var fs = require("fs");
var LanguageDetect = require('languagedetect');
var lngDetector = new LanguageDetect();
var child_process=require('child_process');
var MySql = require('sync-mysql');
var SqlString = require('sqlstring');


var path = "images/";
var tesseract_cmd = "\"C:\\Program Files (x86)\\Tesseract-OCR\\tesseract.exe\"";
var db_host = "localhost";
var db_name = "gc_db";
var db_user = "root";
var db_password = "";

//launch ocr_scan every 10s
ocr_scan();

//function that scan images present of "images/" folder, ocr them and update database
function ocr_scan() {
	//list files of the images path
	fs.readdir(path, function(err, items) {
		for (var i=0; i<items.length; i++) {
			
			var image_filename = items[i];
			image_path = path + items[i];

			//check the item is a png image
			if (image_path.split(".").pop().toLowerCase() === 'png') {
				
				//check that the ocr text of the file exists
				if (fs.existsSync(image_path + ".txt") === false)  {
					console.log ("OCR en cours du document " + image_path + "...");
					ocr_arabic = "" + child_process.execSync (tesseract_cmd + " " + image_path + " -l ara stdout");
					ocr_latin = "" + child_process.execSync (tesseract_cmd + " " + image_path + " stdout");
					console.log ("OCR en cours du document " + image_path + " terminé.");
					
					//detect with which language are most present in the scanned document
					//keep correct ocr content text file				
					arabic_val = lngDetector.detect(ocr_arabic, 1)[0][1];
					latin_val = lngDetector.detect(ocr_latin, 1)[0][1];				
					
					
					//update document table to set the ocr content for the scanned document
					contenu = "";
					if (arabic_val > latin_val) {
						fs.writeFile(image_path + ".txt", ocr_arabic);
						console.log ("Ecriture du contenu arabe du document " + image_path + ".");
						contenu = ocr_arabic.replace(/(\r\n|\n|\r)/gm,"");
					} else {
						fs.writeFile(image_path + ".txt", ocr_latin);
						console.log ("Ecriture du contenu latin du document " + image_path + ".");
						contenu = ocr_latin.replace(/(\r\n|\n|\r)/gm,"");
					}
					
					var conn = new MySql({
					  host: db_host,
					  user: db_user,
					  password: db_password,
					  database: "gc_db"
					});
					
					const result = conn.query("SELECT * FROM document where fichier='" + image_filename + "'");
					
					if (result.length > 0)  {
						conn.query('UPDATE document set contenu=' + SqlString.escape(contenu) + " where fichier='" + image_filename + "'");
						console.log ("Mise à jour de la table document terminé.");
					}
				}
			}
		}
	});
	console.log("Relancement de ocr_scan aprés 10 secondes ...");
}






