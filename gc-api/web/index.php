<?php

header("Access-Control-Allow-Origin: *");


ini_set('display_errors', 1);

require_once __DIR__.'/../vendor/autoload.php';

$app = require __DIR__.'/../src/app.php';
require __DIR__.'/../config/prod.php';
require __DIR__.'/../src/controllers.php';



$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'dbs.options' => array (
        'localhost' => array(
            'driver'    => 'pdo_mysql',
            'host'      => 'localhost',
            'dbname'    => 'gc_db',
            'user'      => 'root',
            'password'  => '',
            'charset'   => 'utf8',
        )
    ),
));


/**
 * @api {get} /auth/:login/:mot_pass Authentification d'un utilisateur
 * @apiName auth
 * @apiGroup Authentification
 *
 * @apiParam {String} login Nom d'utilsateur.
 * @apiParam {String} mot_pass Mot de passe.
 *
 * @apiSuccess {String} Objet JSON avec "operation" : "ok"
 * @apiSuccessExample Success-Response:
 *     {
 *       "operation": "ok"
 *     }
 * @apiError MotPasseIncorrect 'Mot de passe incorrect !' si le mot de passe est incorrect.
 * @apiError UtilisateurInexistant 'Utilisateur x n'existe pas !' si le nom d'utilisateur ne se trouve pas dans la table des utilisateurs.
 * @apiErrorExample Error-Response:
 *     {
 *			"operation": "ko",
 *			"erreur": "MotPasseIncorrect",
 *			"message": "Mot de passe incorrect !"
 *     }
 */
$app->get('/auth/{login}/{mot_pass}', function ($login,$mot_pass) use ($app) {
    $sql = "SELECT * FROM utilisateur WHERE login = ?";
    $user = $app['db']->fetchAssoc($sql,array($login));
	
    if(!$user){
    	$reponse = array('operation' => 'ko' , 'erreur' => "Utilisateur "  . $login .  "n'existe pas !");
		return $app->json($reponse);
    } else if($user['mot_passe']!=$mot_pass){
    	$reponse = array('operation' =>'ko','erreur'=> 'Mot de passe incorrect !');    		
		return  $app->json($reponse);
    }
	
    $reponse = array('operation' =>'ok');
	return  $app->json($reponse);
});

/**
 * @api {post} /saveCourrier/:titre/:description/:dateCourrier/:type/:nature/:adresse/:reference/:idEntite Enregistrement d'un courrier
 * @apiName saveCourrier
 * @apiGroup Courrier
 *
 * @apiParam {String} titre Titre (Objet) du courrier.
 * @apiParam {String} description Un texte descriptif du courrier, une sorte de résumé du contenu du courrier.
 * @apiParam {Date} dateCourrier Date du courrier. si le courrier est un courrier arrivée, il s'agit de la date de réception du courrier. si le courrier est un courrier départ, il s'agit de la date d'envoi. Le format utilisé est "JJ/MM/AAAA".
 * @apiParam {String} type Type du courrier. Ne peut prendre que une des deux valeurs suivantes : 'Courrier Arrivée' / 'Courrier Départ'.
 * @apiParam {String} nature Nature du courrier. peut prendre une des valeurs suivantes : 'Lettre' / 'Fax' / 'E-mail' / 'Colis' / 'Autre'.
 * @apiParam {String} reference Référence du courrier. c'est une référence unique associé au courrier en vue de l'identifier.
 * @apiParam {String} idEntite ID de l'entite concerné par le courrier. Si le courrier est un courrier arrivée, c'est l'id de l'entité destinataire. Si le courrier est un courrier départ, c'est l'id de l'entité source. 

 *
 * @apiSuccess {String} Objet JSON avec "operation" : "ok".
 * @apiSuccessExample Success-Response:
 *     {
 *       "operation": "ok"
 *     }
 * @apiError ValeurInvalide 'Valeur du champ x incorrecte !' si une valeur d'une des champs envoyés à ce service n'est pas valide.
 * @apiErrorExample Error-Response:
 *     {
 *			"operation": "ko",
 *			"erreur": "ValeurInvalide",
 *			"message": "Valeur du champ x incorrecte !"
 *     }
 */
$app->post('/saveCourrier/{titre}/{description}/{dateCourrier}/{type}/{nature}/{adresse}/{reference}/{idEntite}', function ($titre, $description, $dateCourrier, $type, $nature, $adresse, $reference, $idEntite) use ($app) {
	$reponse = array('operation' =>'ko','erreur'=> 'NOT_IMPLEMENTED');
	return  $app->json($reponse);	
});

/**
 * @api {post} /saveDocument Enregistrement d'un document scanné sur le serveur
 * @apiName saveDocument
 * @apiGroup Courrier
 *
 * @apiParam {Base64String} body Le contenu du document scanné, encodé dans le format Base64.
 *
 * @apiSuccess {String} Objet JSON avec "operation" : "ok".
 * @apiSuccess {String} fichier le nom du fichier sur le serveur du document scanné.
 * @apiSuccessExample Success-Response:
 *     {
 *      	"operation": "ok",
 *			"fichier" : "courrier-scan-2018-01-01-13-28-00.tiff"
 *     }
 * @apiError FormatBase64Invalide 'Format Base64 invalide du document !' si le contenu envoyé du document ne respecte pas le format Base64.
 * @apiErrorExample Error-Response:
 *     {
 *			"operation": "ko",
 *			"erreur": "ValeurInvalide",
 *			"message": "Format Base64 invalide du document !"
 *     }
 */
$app->post('/saveDocument', function () use ($app) {
	$reponse = array('operation' =>'ko','erreur'=> 'NOT_IMPLEMENTED');
	return  $app->json($reponse);	
});

/**
 * @api {get} /rechercherCourrier/:query Recherche d'un courrier par mots clés
 * @apiName rechercherCourrier
 * @apiGroup Courrier
 *
 * @apiParam {String} query Mot clés à chercher dans le courrier stocké dans la base de données
 *
 * @apiSuccess {String} Objet JSON avec "operation" : "ok".
 * @apiSuccess {Array} resultat Un tableau JSON de resultat, dont chaque élément du tableau est un courrier qui correspond au mot(s) clé(s) utilisés dans la recherche.
 * @apiSuccessExample Success-Response:
 *     {
 *      	"operation": "ok",
 *			"resultat" : [{
 *							"reference" : "FAX/23/2018",
 *							"titre": "Lancement du concours de recrutement des techniciens 3éme grade",
 *							"type": "Courrier Départ",
 *							"date": "20/01/2018",
 *							"nature": "Fax"
 *							"idEntite": "5",
 *							"nomEntite": "DRH"
 *							},
 *							...
 *							]
 *     }
 */
$app->get('/rechercherCourrier/{query}', function ($query) use ($app) {
	$reponse = array('operation' =>'ko','erreur'=> 'NOT_IMPLEMENTED');
	return  $app->json($reponse);	
});

/**
 * @api {get} /detailCourrier/:id Lire le détail d'un courrier à partir de son ID.
 * @apiName detailCourrier
 * @apiGroup Courrier
 *
 * @apiParam {Number} id ID du courrier.
 *
 * @apiSuccess {String} Objet JSON avec "operation" : "ok".
 * @apiSuccess {Objet} courrier Un objet JSON contenant toute les informations du courrier
 * @apiSuccessExample Success-Response:
 *     {
 *      	"operation": "ok",
 *			"courrier" : {
 *							"reference" : "FAX/23/2018",
 *							"titre": "Lancement du concours de recrutement des techniciens 3éme grade",
 *							"description": "La direction des ressources humaines lance un concours au profit des techniciens spécialisés ...",
 *							"type": "Courrier Départ",
 *							"adresse": "SNTL , Direction des ressources humaines Hay EL KAMRA, RABAT",
 *							"date": "20/01/2018",
 *							"nature": "Fax"
 *							"idEntite": "5",
 *							"nomEntite": "DRH"
 *							}
 *     }
 * @apiError IdInvalide 'Id invalide !' si l'id n'est pas une valeur numérique.
 * @apiError CourrierInexistant 'Le courrier avec id x est inexistant !' si l'id ne correspond à aucun courrier au niveau de la table du courrier.
 * @apiErrorExample Error-Response:
 *     {
 *			"operation": "ko",
 *			"erreur": "CourrierInexistant",
 *			"message": "Le courrier avec id 5 est inexistant !"
 *		}
 */
$app->get('/detailCourrier/{id}', function ($id) use ($app) {
	$reponse = array('operation' =>'ko','erreur'=> 'NOT_IMPLEMENTED');
	return  $app->json($reponse);	
});

/**
 * @api {get} /supprimerCourrier/:id Supprimer un courrier à partir de son ID.
 * @apiName supprimerCourrier
 * @apiGroup Courrier
 *
 * @apiParam {Number} id ID du courrier.
 *
 * @apiSuccess {String} Objet JSON avec "operation" : "ok".
 * @apiSuccessExample Success-Response:
 *     {
 *      	"operation": "ok",
 *     }
 * @apiError CourrierInexistant 'Le courrier avec id x est inexistant !' si l'id ne correspond à aucun courrier au niveau de la table du courrier.
 * @apiErrorExample Error-Response:
 *     {
 *			"operation": "ko",
 *			"erreur": "CourrierInexistant",
 *			"message": "Le courrier avec id 5 est inexistant !"
 *		}
 */
$app->get('/supprimerCourrier/{id}', function ($id) use ($app) {
	$reponse = array('operation' =>'ko','erreur'=> 'NOT_IMPLEMENTED');
	return  $app->json($reponse);	
});


/**
 * @api {get} /listUsers Affichage de la liste des utilisateurs
 * @apiName listUsers
 * @apiGroup Utilisateurs
 * 
 * @apiSuccess {String[]} des Objets Utilisateurs dans un Objet JSON
 * @apiSuccessExample Success-Response:
 *     {
 *       {id: 1, login: "login", nom: "nom", prenom: "prenom", email: "email", mot_passe: "mot_passe", role: "role", entite: "entite"};
 *     }
 @apiError ListeUtilisateursVide 'La liste des utilisateurs est vide' si aucun utilisateur n a été insérer.
 * @apiErrorExample Error-Response:
 *     {
 *			"operation": "ko",
 *			"erreur": "ListeUtilisateursVide",
 *			"message": "La liste des utilisateurs est vide. Aucun utilisateur n'est ajouté !"
 *     }
 */


///////////////////////Test valide///////////////////////////////////

$app->get('/listUsers/', function() use ($app){
	//SELECT u.id,login,u.nom,prenom,email,mot_passe,role,id_entite FROM utilisateur u,entite e WHERE e.id = u.id_entite 
    $sql = "SELECT u.id,login,u.nom,prenom,email,mot_passe,role,id_entite FROM utilisateur u,entite e WHERE e.id = u.id_entite";
    $users = $app['db']->fetchAssoc($sql,array());
    if(is_null($users)){
    	$response = array('operation' => 'ko' , 'erreur' => "La liste des utilisateurs est vide. Aucun utilisateur n'est ajouté !!");
		return $app->json($reponse);
    }
    $response = [];
    foreach ($users as $utilisateur) {
        $response[] = [
			'id' => $users['id'],
            'login' => $users['login'],
            'nom' => $users['nom'],
            'prenom' => $users['prenom'],
            'email' => $users['email'],
            'mot_passe' => $users['mot_passe'],
            'role' => $users['role'],
            'id_entite' => $users['id_entite']
        ];
    }
    return $app->json($response);
    });

/**
 * @api {post} /addUser/:login/:nom/:prenom/:email/:mot_passe/:role/:id_entite Ajouter un utilisateur
 * @apiName addUser
 * @apiGroup Utilisateurs
 * 
 * @apiParam {String} login Login de l'utilsateur.
 * @apiParam {String} nom Nom de l'utilisateur.
 * @apiParam {String} prenom Prenom de l'utilisateur.
 * @apiParam {String} email Email de l'utilisateur.
 * @apiParam {String} mot_passe Mot de passe de l'utilisateur.
 * @apiParam {String} role Role de l'utilisateur.
 * @apiParam {number} id_entite Identifiant de l'entité.
 *
 * @apiSuccess {String} Objet JSON avec "operation" : "Ajout réussi"
 * @apiSuccessExample Success-Response:
 *     {
 *       "operation": "Ajout réussi"
 *     }
 * @apiError UtilisateurExiste 'L Utilisateur .$login existe déjà' si les données saisies concerne un utilisateur existant.
 * @apiErrorExample Error-Response:
 *     {
 *			"operation": "ko",
 *			"erreur": "UtilisateurExiste",
 *			"message": "L Utilisateur .$login existe déjà"
 *     }
 */

///////////////////////Test valide///////////////////////////////////

$app->post('/addUser/{login}/{nom}/{prenom}/{email}/{mot_passe}/{role}/{id_entite}', function($login,$nom,$prenom,$email,$mot_passe,$role,$id_entite) use ($app){
   	$sql = "INSERT INTO utilisateur(login,nom,prenom,email,mot_passe,role,id_entite) VALUES (:login,:nom,:prenom,:email,:mot_passe,:role,:id_entite)";
    $query = $app['db']->prepare($sql);
    $sql2 = "SELECT login,nom,prenom,email,role FROM utilisateur WHERE login=?";
    	$users = $app['db']->fetchAssoc($sql2,array($login));
    	if(empty($users)){    	
       	$query->execute(array(
            "login" => $login, 
            "nom" => $nom,
            "prenom" => $prenom,
            "email" => $email,
            "mot_passe" => $mot_passe,
            "role" => $role,
            "id_entite" => $id_entite
            ));        
        $reponse = array('operation' =>'Ajout reussi.');
		return  $app->json($reponse);
    	}else{
		$reponse = array('operation' => 'ko' , 'erreur' => "Utilisateur " .$login. " existant!!");
		return $app->json($reponse);		
		}	
});


/**
 * @api {put} /updateUser/:id/:login/:nom/:prenom/:email/:mot_passe/:role/:id_entite Modifier un utilisateur
 * @apiName updateUser
 * @apiGroup Utilisateurs
 * 
 * @apiParam {number} id Identifiant de l'utilsateur.
 * @apiParam {String} login Login de l'utilsateur.
 * @apiParam {String} nom Nom de l'utilisateur.
 * @apiParam {String} prenom Prenom de l'utilisateur.
 * @apiParam {String} email Email de l'utilisateur.
 * @apiParam {String} mot_passe Mot de passe de l'utilisateur.
 * @apiParam {String} role Role de l'utilisateur.
 * @apiParam {number} id_entite Identifiant de l'entité.
 * 
 * @apiSuccess {String} Objet JSON avec "operation" : "Modification réussite"
 * @apiSuccessExample Success-Response:
 *     {
 *       "operation": "Modification réussite."
 *     }
 *
 */

$app->put('/updateUser/{id}/{login}/{nom}/{prenom}/{email}/{mot_passe}/{role}/{id_entite}', function($id,$login,$nom,$prenom,$email,$mot_passe,$role,$id_entite) use ($app){

    $sql = "UPDATE utilisateur SET login =:login,  nom =:nom, prenom =:prenom, email=:email, mot_passe=:mot_passe, role =:role, id_entite =:id_entite WHERE id =:id";
    $query = $app['db']->prepare($sql);
    $data = ["login" => $login, "nom"  => $nom, "prenom"  => $prenom,"email"  => $email,"mot_passe"  => $mot_passe,"role"  => $role,"id_entite"  => $id_entite,"id"  => $id];
    $query->execute($data);        
       $reponse = array('operation' =>'Modification reussite');
		return  $app->json($reponse);
});

/**
 * @api {delete} /deleteUser/:id Supprimer un utilisateur
 * @apiName deleteUser
 * @apiGroup Utilisateurs
 * 
 * @apiParam {number} id Identifiant de l'utilsateur.
 * 
 * @apiSuccess {String} Objet JSON avec "operation" : "Suppression exécuté"
 * @apiSuccessExample Success-Response:
 *     {
 *       "operation": "Suppression exécuté."
 *     }
 * 
 */

$app->delete('/deleteUser/{id}', function($id) use ($app){
    $sql = "DELETE FROM utilisateur WHERE id = $id AND login != 'admin'";
    $query = $app['db']->prepare($sql);
   
        $query->execute();
        $reponse = array('operation' =>'Suppression exécuté');
   
    return  $app->json($reponse);
});



/**
 * @api {get} /listEntites/ Affichage de la liste des entités
 * @apiName listEntites
 * @apiGroup Entite
 * 
 * @apiSuccess {String[]} des Objets Entites dans un Objet JSON
 * @apiSuccessExample Success-Response:
 *     {
 *       {nom: "nom", type: "type"};
 *     }
 @apiError ListeEntitésVide 'La liste des entités est vide' si aucune entité n a été insérer.
 * @apiErrorExample Error-Response:
 *     {
 *			"operation": "ko",
 *			"erreur": "ListeUtilisateursVide",
 *			"message": "La liste des utilisateurs est vide. Aucun utilisateur n'est ajouté !"
 *     }
 */

$app->get('/listEntites/', function() use ($app){
    $sql = "SELECT id,nom,type FROM entite";
    $entites = $app['db']->fetchAssoc($sql,array());
    if(is_null($entites)){
    	$response = array('operation' => 'ko' , 'erreur' => "La liste des utilisateurs est vide. Aucun utilisateur n'est ajouté !!");
		return $app->json($reponse);
    }
    $response = [];
    foreach ($entites as $entite) {
        $response[] = [   
        	'id' => $entites['id'],         
            'nom' => $entites['nom'],
            'type' => $entites['type']          
        ];
    }
    return $app->json($response);
    });


/**
 * @api {post} /addEntite/:nom/:type/:id_parent Ajouter une entité
 * @apiName addEntite
 * @apiGroup Entite
 * 
 * @apiSuccess {String} Objet JSON avec "operation" : "Ajout réussi"
 * @apiSuccessExample Success-Response:
 *     {
 *       "operation": "Ajout réussi"
 *     }
 * @apiError EntiteExiste 'L Entite .$nom existe déjà' si les données saisies concerne une entité existante.
 * @apiErrorExample Error-Response:
 *     {
 *			"operation": "ko",
 *			"erreur": "EntiteExiste",
 *			"message": "L Entite .$nom existe déjà"
 *     }
 */

$app->post('/addEntite/{nom}/{type}/{id_parent}', function($nom,$type,$id_parent) use ($app){

    $sql = "INSERT INTO entite('nom','type','id_parent') VALUES (:nom,:type,:id_parent)";
        $query = $app['db']->prepare($sql);

        $sql = "SELECT nom,type,id_parent FROM entite";
    	$entites = $app['db']->fetchAssoc($sql,array());
    	foreach ($entites as $entite) {
    		if(($entite[$nom] == ':nom') && ($entite[$type] == ':type') && ($entite[$id_parent] == ':id_parent')){
    			$response = array('operation' => 'ko' , 'erreur' => "L'entité " . $entite[$nom] . " existe déjà !!");
				return $app->json($reponse);
    		}
    	}

        $query->bindValue(':nom', $nom, PDO::PARAM_STR);
        $query->bindValue(':type', $type, PDO::PARAM_STR);
        $query->bindValue(':id_parent', $id_parent, PDO::PARAM_STR);    
        $query->execute();
        
        $reponse = array('operation' =>'Ajout reussi.');
		return  $app->json($reponse);    
});


/**
 * @api {put} /updateEntite/:id/:nom/:type/:id_parent Modifier une entité
 * @apiName updateEntite
 * @apiGroup Entite
 * 
 * @apiParam {number} id Identifiant de l'entité.
 * @apiParam {String} nom Nom de l'entité.
 * @apiParam {String} type Type de l'entité.
 * @apiParam {String} id_parent Identifient du parent de l'entité.
 * 
 * @apiSuccess {String} Objet JSON avec "operation" : "Modification réussite"
 * @apiSuccessExample Success-Response:
 *     {
 *       "operation": "Modification réussite."
 *     }
 * 
 */
$app->put('/updateEntite/{id}/{nom}/{type}/{id_parent}', function($id,$nom,$type,$id_parent) use ($app){

    $sql = "UPDATE entite SET nom = :nom, type = :type, id_parent= :id_parent WHERE id = $id";
    $query = $app['db']->prepare($sql);       
        $query->bindValue(':nom', $nom, PDO::PARAM_STR);
        $query->bindValue(':type', $type, PDO::PARAM_STR);
        $query->bindValue(':id_parent', $id_parent, PDO::PARAM_STR);
        $query->execute();
       $reponse = array('operation' =>'Modification reussite');
		return  $app->json($reponse);
});

/**
 * @api {delete} /deleteEntite/:id Supprimer une entité
 * @apiName deleteEntite
 * @apiGroup Entite
 * 
 * @apiParam {number} id Identifiant de l'entité.
 * 
 * @apiSuccess {String} Objet JSON avec "operation" : "Suppression exécuté"
 * @apiSuccessExample Success-Response:
 *     {
 *       "operation": "Suppression exécuté."
 *     }
 * 
 */

$app->delete('/deleteEntite/{id}', function($id) use ($app){
    $sql = "DELETE FROM entite WHERE id = $id";
    $query = $app['db']->prepare($sql);
   
        $query->execute();
        $reponse = array('operation' =>'Suppression exécuté');
   
    return  $app->json($reponse);
});



$app->run();

