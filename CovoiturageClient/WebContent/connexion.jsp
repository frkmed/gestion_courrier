

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="http://wenzhixin.net.cn/p/bootstrap-table/src/bootstrap-table.css" rel="stylesheet" type="text/css" />

    <link href="http://cdn.kendostatic.com/2014.1.318/styles/kendo.common.min.css" rel="stylesheet" />
    <link href="http://cdn.kendostatic.com/2014.1.318/styles/kendo.bootstrap.min.css" rel="stylesheet" />
    <link href="http://protostrap.com/Assets/gv/css/gv.bootstrap-form.css" rel="stylesheet" type="text/css" />

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <!-- Fav and touch icons -->
    
</head>

<body>
    
    <div class="container-fluid">
        <div class="row">

            <form action="../submit" id="formentry" class="form-horizontal" role="form" data-parsley-validate novalidate>
                <div class="container-fluid shadow">
                    <div class="row">
                        <div id="valErr" class="row viewerror clearfix hidden">
                            <div class="alert alert-danger">Oops! Seems there are some errors..</div>
                        </div>
                        <div id="valOk" class="row viewerror clearfix hidden">
                            <div class="alert alert-success">Yay! ..</div>
                        </div>

                        
                                    <div class="row">
                                        <div class="col-md-12"><div class="row"><div class="col-md-12"><div class="form-group brdbot">
			    <h3>Covoiturage v0.1</h3>
			    <div class="controls col-sm-9">
                    
                <p id="field1" data-default-label="Header" data-default-is-header="true" data-control-type="header">Ajout d'un offre</p><span id="errId1" class="error"></span></div>
                
		</div></div></div></div>
                                    </div>
                                <div class="row"><div class="col-md-3"></div><div class="col-md-3"><div id="panel174" class="panel panel-default" data-role="panel">
        <div class="panel-heading">Connexion</div>
        <div class="panel-body">
          <form method="post" action="ConnexionServlet">  
        <div class="form-group">
			    <label class="control-label-left" for="login">Login</label>
			    <div class="controls">
                    
                <input id="login" type="text" class="form-control k-textbox" data-role="text" name="login" data-parsley-errors-container="#errId2"><span id="errId2" class="error"></span></div>
                
		</div><div class="form-group">
			    <label class="control-label-left" for="mp">Mot de passe</label>
			    <div class="controls">
                    
                <input id="mp" type="text" class="form-control k-textbox" data-role="text" name="pass" data-parsley-errors-container="#errId3"><span id="errId3" class="error"></span></div>
                
		</div><div class="form-group pull-right">
			    
			    
                
		<button id="button179" type="submit" class="btn btn-success">Connexion</button></div>
		
		</form>
		
		</div>
    </div></div><div class="col-md-3"><div id="panel175" class="panel panel-default" data-role="panel" style="display: block;">
        <div class="panel-heading">Inscription</div>
        <div class="panel-body">
            
        <div class="form-group">
			    <label class="control-label-left" for="loginIns">Login</label>
			    <div class="controls">
                    
                <input id="loginIns" type="text" class="form-control k-textbox" data-role="text" name="loginIns" data-parsley-errors-container="#errId4"><span id="errId4" class="error"></span></div>
                
		</div><div class="form-group">
			    <label class="control-label-left" for="mpIns">Mot de passe</label>
			    <div class="controls">
                    
                <input id="mpIns" type="text" class="form-control k-textbox" data-role="text" name="mpIns" data-parsley-errors-container="#errId5"><span id="errId5" class="error"></span></div>
                
		</div><div class="form-group">
			    <label class="control-label-left" for="nomIns">Nom</label>
			    <div class="controls">
                    
                <input id="nomIns" type="text" class="form-control k-textbox" data-role="text" name="nomIns" data-parsley-errors-container="#errId6"><span id="errId6" class="error"></span></div>
                
		</div><div class="form-group">
			    <label class="control-label-left" for="prenomIns">Prenom</label>
			    <div class="controls">
                    
                <input id="prenomIns" type="text" class="form-control k-textbox" data-role="text" name="prenomIns" data-parsley-errors-container="#errId7"><span id="errId7" class="error"></span></div>
                
		</div><div class="form-group">
			    <label class="control-label-left">Type de compte</label>
			    <div class="controls">
                    
                <label class="radio col-md-6" for="typeCompteIns"><input type="radio" value="Passager" id="typeCompteIns" name="field193" data-parsley-errors-container="#errId8">Passager</label><label class="radio col-md-6" for="typeCompteIns"><input type="radio" value="Conducteur" id="typeCompteIns" name="field193" data-parsley-errors-container="#errId8">Conducteur</label><span id="errId8" class="error"></span></div>
                
		</div><div class="form-group">
			    <label class="control-label-left" for="field184">T?l?phone</label>
			    <div class="controls">
                    
                <input id="field184" type="text" class="form-control k-textbox" data-role="text" name="telIns" data-parsley-errors-container="#errId9"><span id="errId9" class="error"></span></div>
                
		</div><div class="form-group">
			    <label class="control-label-left" for="adresseIns">Adresse</label>
			    <div class="controls">
                    
                <input id="adresseIns" type="text" class="form-control k-textbox" data-role="text" name="adresseIns" data-parsley-errors-container="#errId10"><span id="errId10" class="error"></span></div>
                
		</div><div class="form-group pull-right" style="display: block;">
			    
			    
                
		<button id="button188" type="button" class="btn btn-success">Button</button></div></div>
    </div></div><div class="col-md-3"></div></div>


                    </div>
                </div>
            </form>
        </div>
    </div>
    



    <script src="http://cdn.kendostatic.com/2014.1.318/js/jquery.min.js"></script>
    <script src="http://protostrap.com/Assets/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="http://wenzhixin.net.cn/p/bootstrap-table/src/bootstrap-table.js" type="text/javascript"></script>

    <script src="http://protostrap.com/Assets/inputmask/js/jquery.inputmask.js" type="text/javascript"></script>
    <script src="http://cdn.kendostatic.com/2014.1.318/js/kendo.all.min.js"></script>
    <script src="http://protostrap.com/Assets/parsely/parsley.extend.js" type="text/javascript"></script>
    <script src="http://protostrap.com/Assets/parsely/2.0/parsley.js" type="text/javascript"></script>
    <script src="http://protostrap.com/Assets/download.js" type="text/javascript"></script>
    <script src="http://protostrap.com/Assets/protostrap.js" type="text/javascript"></script>
    

</body>
</html>
