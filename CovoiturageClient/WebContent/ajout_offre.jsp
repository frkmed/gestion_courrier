

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
                                <div id="panel44" class="panel panel-default" data-role="panel">
        <div class="panel-heading">Ajout d'un offre</div>
        <div class="panel-body">
            
        <div class="row"><div class="col-md-6"><div class="form-group">
			    <label class="control-label control-label-left col-sm-3" for="numero">Num?ro</label>
			    <div class="controls col-sm-9">
                    
                <input id="numero" type="text" class="form-control k-textbox" data-role="text" name="numero" data-parsley-errors-container="#errId2"><span id="errId2" class="error"></span></div>
                
		</div><div class="form-group" style="display: block;">
			    <label class="control-label control-label-left col-sm-3" for="dateDepart">Date d?part</label>
			    <div class="controls col-sm-9">
                    
                <input id="dateDepart" type="text" class="form-control k-textbox" data-role="text" name="dateDepart" data-parsley-errors-container="#errId3"><span id="errId3" class="error"></span></div>
                
		</div><div class="form-group">
			    <label class="control-label control-label-left col-sm-3" for="heureDepart">Heure d?part</label>
			    <div class="controls col-sm-9">
                    
                <input id="heureDepart" type="text" class="form-control k-textbox" data-role="text" name="heureDepart" data-parsley-errors-container="#errId4"><span id="errId4" class="error"></span></div>
                
		</div><div class="form-group">
			    <label class="control-label control-label-left col-sm-3" for="heureArrivee">Heure arriv?e</label>
			    <div class="controls col-sm-9">
                    
                <input id="heureArrivee" type="text" class="form-control k-textbox" data-role="text" name="heureArrivee" data-parsley-errors-container="#errId5"><span id="errId5" class="error"></span></div>
                
		</div></div><div class="col-md-6"><div class="formControl ui-draggable" style="display: none;">
                                <img src="/images/dropdown.png">Drop Down
                            </div><div class="form-group" style="display: block;">
			    <label class="control-label control-label-left col-sm-3" for="conducteur">Conducteur</label>
			    <div class="controls col-sm-9">
                    
                <select id="conducteur" class="form-control" data-role="select" selected="selected" name="conducteur" data-parsley-errors-container="#errId6">
		  
		  
		  
		  
		  
		<option value="exemple">Exemple</option></select><span id="errId6" class="error"></span></div>
                
		</div><div class="form-group">
			    <label class="control-label control-label-left col-sm-3" for="villeDepart">Ville d?part</label>
			    <div class="controls col-sm-9">
                    
                <select id="villeDepart" class="form-control" data-role="select" name="villeDepart" data-parsley-errors-container="#errId7">
		  <option value="Marrakech" selected="selected">Marrakech</option>
		  <option value="Casablanca">Casablanca</option>
		  <option value="Rabat">Rabat</option>
		  <option value="Tanger">Tanger</option>
		  <option value="Tetouan">Tetouan</option>
		</select><span id="errId7" class="error"></span></div>
                
		</div><div class="form-group">
			    <label class="control-label control-label-left col-sm-3" for="villeArrivee">Ville arriv?e</label>
			    <div class="controls col-sm-9">
                    
                <select id="villeArrivee" class="form-control" data-role="select" name="villeArrivee" data-parsley-errors-container="#errId8">
		  <option value="Rabat" selected="selected">Rabat</option>
		  <option value="Casablanca">Casablanca</option>
		  <option value="Marrakech">Marrakech</option>
		  <option value="Tanger">Tanger</option>
		  <option value="Tetouan">Tetouan</option>
		</select><span id="errId8" class="error"></span></div>
                
		</div></div></div><div class="row"><div class="col-md-12"><div class="form-group pull-right">
			    
			    
                
		<button id="saveBtn" type="button" class="btn btn-success">Enregistrer</button></div></div></div></div>
    <div class="panel-toolbar"><span class="glyphicon glyphicon-cog"></span></div></div>


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
