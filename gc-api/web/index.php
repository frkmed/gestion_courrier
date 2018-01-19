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

