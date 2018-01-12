<?php

ini_set('display_errors', 1);

require_once __DIR__.'/../vendor/autoload.php';

$app = require __DIR__.'/../src/app.php';
require __DIR__.'/../config/prod.php';
require __DIR__.'/../src/controllers.php';


$app['debug']=true;


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

$app->post('/hello/{name}/{param2}', function ($name, $param2) use ($app) {
    return 'Hello '.$app->escape($name);
});


$app->get('/user/{login}/{mot_pass}', function ($login,$mot_pass) use ($app) {
    $sql = "SELECT * FROM utilisateur WHERE login = ?";
    $user = $app['db']->fetchAssoc($sql,array() $login));
    if(!$user['mot_pass']==$mot_pass){
    	$reponse = array('operation' =>'ko','erreur'=> 'Mot de passe incorrect');    		
    }
    return  $app->json($reponse);
    if(!$user){
    	$reponse = array('operation' => 'ko' , 'erreur' => 'Utilisateur n existe pas');
    }
    return $app->json($reponse);
    if(trim($login)=='' OR trim($mot_pass=='')){
    	$reponse = array('operation' => 'ko' , 'erreur' => 'Veuillez remplir les champs');
    }
    return $app->json($reponse);
}
 
});

$app->run();
