<?php

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
 * @apiParam {Base64 String} body Le contenu du document scanné, encodé dans le format Base64.
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


$app->get('/listUsers/', function() use ($app){
    $sql = "SELECT id,login,nom,prenom,email,mot_passe,role,entite FROM utilisateur u,entite e WHERE e.id_entite = u.id_entite";
    $users = $app['db']->fetchAssoc($sql,array());

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
            'entite' => $users['entite']
        ];
    }
    return $app->json($response);
    });

$app->post('/addUser/{login}/{nom}/{prenom}/{email}/{mot_passe}/{role}/{id_entite}', function($login,$nom,$prenom,$email,$mot_passe,$role,$id_entite) use ($app){

    $sql = "INSERT INTO utilisateur('login','nom','prenom','email','mot_passe','role','id_entite') VALUES (:login,:nom,:prenom,:email,:mot_passe,:role,:id_entite)";
        $query = $app['db']->prepare($sql);

        $query->bindValue(':login', $login, PDO::PARAM_STR);
        $query->bindValue(':nom', $nom, PDO::PARAM_STR);
        $query->bindValue(':prenom', $prenom, PDO::PARAM_STR);
        $query->bindValue(':email', $email, PDO::PARAM_STR);
        $query->bindValue(':mot_passe', $mot_passe, PDO::PARAM_STR);
        $query->bindValue(':role', $role, PDO::PARAM_STR);
        $query->bindValue(':id_entite', $id_entite, PDO::PARAM_STR);
        $query->execute();
        
        $reponse = array('operation' =>'Ajout reussi');
		return  $app->json($reponse);    
});

$app->put('/updateUser/{id}/{login}/{nom}/{prenom}/{email}/{mot_passe}/{role}/{entite}', function($id,$login,$nom,$prenom,$email,$mot_passe,$role,$entite) use ($app){

    $sql = "UPDATE utilisateur SET login = :login,nom = :nom, prenom = :prenom, email= :email, mot_passe= :mot_passe, role = :role, entite = :entite WHERE id = $id";
    $query = $app['db']->prepare($sql);
        $query->bindValue(':login', $login, PDO::PARAM_STR);
        $query->bindValue(':nom', $nom, PDO::PARAM_STR);
        $query->bindValue(':prenom', $prenom, PDO::PARAM_STR);
        $query->bindValue(':email', $email, PDO::PARAM_STR);
        $query->bindValue(':mot_passe', $mot_passe, PDO::PARAM_STR);
        $query->bindValue(':role', $role, PDO::PARAM_STR);
        $query->bindValue(':entite', $entite, PDO::PARAM_STR);
        $query->execute();
       $reponse = array('operation' =>'Modification reussite');
		return  $app->json($reponse);
});
$app->delete('/deleteUser/{id}', function($id) use ($app){
    $sql = "DELETE FROM utilisateur WHERE id = $id AND login != 'admin'";
    $query = $app['db']->prepare($sql);
   
        $query->execute();
        $reponse = array('operation' =>'ok');
   
    return  $app->json($reponse);
});



$app->get('/listEntites/', function() use ($app){
    $sql = "SELECT nom FROM entite";
    $entites = $app['db']->fetchAssoc($sql,array());

    $response = [];
    foreach ($entites as $entite) {
        $response[] = [            
            'nom' => $entits['nom']            
        ];
    }
    return $app->json($response);
    });

$app->run();

