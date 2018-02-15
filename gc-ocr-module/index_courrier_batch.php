<?php 
$db_host = "localhost";
$db_user = "root";
$db_password = "1234";
$db_name = "gc_db";
$solr_collection_dir = "xml/";
sql2xml("SELECT courrier.id 'id_courrier', courrier.titre 'titre', courrier.description 'description', courrier.datecourrier 'datecourrier', courrier.type 'type', courrier.nature 'nature', courrier.adresse 'adresse', courrier.reference 'reference', entite.nom 'entite' FROM courrier left join entite on courrier.id_entite=entite.id", "courrier");
sql2xml("select * from document", "document");
/**
 * sql2xml output structured XML files
 *
 * @param string  $sql       	- SQL statement
 * @param string  $xmldocroot	- Root element name
 * @param string  $structure 	- XML hierarchy
 */
function sql2xml($sql, $xmldocroot) {
	global $db_host, $db_user, $db_password, $db_name, $solr_collection_dir ;
	$mysqli = new mysqli($db_host, $db_user, $db_password, $db_name);
	$mysqli->set_charset("utf8");
	
    // init variables for row processing
    $row_current = $row_previous = null;
    // set MySQL username/password and connect to the database
	$result = $mysqli->query($sql);
	
    // get number of columns in result
    $ncols = $mysqli->field_count;
	
    // loop through result set
    while ($row = $result->fetch_row()) {
		$xml = '<?xml version="1.0" encoding="UTF-8" ?>' . "\n";
		$xml = $xml . "<add>\n<doc>\n";
		for ($i = 0; $i < $ncols; $i++) {
			$name = $result->fetch_field_direct($i)->name;
			$xml = $xml . "\t<field name=\"$name\">";
			$xml = $xml . trim(htmlspecialchars($row[$i],$i));
			$xml = $xml . "</field>\n";
		}
        $xml = $xml . "</doc>\n</add>\n";
		writeUTF8File($solr_collection_dir . $xmldocroot . "-" . $row[0] . ".xml", $xml);
    }
	
	$result->close();
	$mysqli->close();
}
function writeUTF8File($filename,$content) { 
        $f=fopen($filename,"w"); 
        # Now UTF-8 - Add byte order mark 
        fwrite($f, pack("CCC",0xef,0xbb,0xbf)); 
        fwrite($f,$content); 
        fclose($f); 
} 
?>