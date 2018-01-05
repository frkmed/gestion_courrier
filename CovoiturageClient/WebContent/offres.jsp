

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
                    
                <p id="field1" data-default-label="Header" data-default-is-header="true" data-control-type="header">Liste des offres</p><span id="errId1" class="error"></span></div>
                
		</div></div></div></div>
                                    </div>
                                <div class="row" style="display: block;"><div class="col-md-6"><div class="form-group">
			    <label class="control-label control-label-left col-sm-3" for="field23">Ville d?part</label>
			    <div class="controls col-sm-9">
                    
                <select id="field23" class="form-control" data-role="select" data-parsley-errors-container="#errId2">
		  <option value=""></option>
		  <option value="Option 1">Option 1</option>
		  <option value="Option 2">Option 2</option>
		  <option value="Option 3">Option 3</option>
		  <option value="Option 4">Option 4</option>
		</select><span id="errId2" class="error"></span></div>
                
		</div></div><div class="col-md-6"><div class="form-group">
			    <label class="control-label control-label-left col-sm-3" for="field24">Ville arriv?e</label>
			    <div class="controls col-sm-9">
                    
                <select id="field24" class="form-control" data-role="select" data-parsley-errors-container="#errId3">
		  <option value=""></option>
		  <option value="Option 1">Option 1</option>
		  <option value="Option 2">Option 2</option>
		  <option value="Option 3">Option 3</option>
		  <option value="Option 4">Option 4</option>
		</select><span id="errId3" class="error"></span></div>
                
		</div><div class="form-group pull-right">
			    
			    
                
		<button id="button36" type="button" class="btn btn-success">Rechercher</button></div></div></div><div id="panel22" class="panel panel-default" data-role="panel">
        <div class="panel-heading">Liste des offres</div>
        <div class="panel-body">
            
        </div>
    </div><div class="row"><div class="col-md-12"><div class="form-group pull-right">
			    
			    
                
		<button id="button40" type="button" class="btn btn-success">Cr?er un offre de covoiturage</button></div></div></div>


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
