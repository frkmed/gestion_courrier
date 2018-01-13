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



$app->run();
