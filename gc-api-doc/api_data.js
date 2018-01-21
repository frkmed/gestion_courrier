define({ "api": [
  {
    "type": "get",
    "url": "/auth/:login/:mot_pass",
    "title": "Authentification d'un utilisateur",
    "name": "auth",
    "group": "Authentification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Nom d'utilsateur.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mot_pass",
            "description": "<p>Mot de passe.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Objet",
            "description": "<p>JSON avec &quot;operation&quot; : &quot;ok&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"operation\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MotPasseIncorrect",
            "description": "<p>'Mot de passe incorrect !' si le mot de passe est incorrect.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UtilisateurInexistant",
            "description": "<p>'Utilisateur x n'existe pas !' si le nom d'utilisateur ne se trouve pas dans la table des utilisateurs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    {\n\t\t\t\"operation\": \"ko\",\n\t\t\t\"erreur\": \"MotPasseIncorrect\",\n\t\t\t\"message\": \"Mot de passe incorrect !\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "gc-api/web/index.php",
    "groupTitle": "Authentification"
  },
  {
    "type": "post",
    "url": "/saveCourrier/:titre/:description/:dateCourrier/:type/:nature/:adresse/:reference/:idEntite",
    "title": "Enregistrement d'un courrier",
    "name": "saveCourrier",
    "group": "Courrier",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "titre",
            "description": "<p>Titre (Objet) du courrier.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Un texte descriptif du courrier, une sorte de résumé du contenu du courrier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "dateCourrier",
            "description": "<p>Date du courrier. si le courrier est un courrier arrivée, il s'agit de la date de réception du courrier. si le courrier est un courrier départ, il s'agit de la date d'envoi. Le format utilisé est &quot;JJ/MM/AAAA&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type du courrier. Ne peut prendre que une des deux valeurs suivantes : 'Courrier Arrivée' / 'Courrier Départ'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nature",
            "description": "<p>Nature du courrier. peut prendre une des valeurs suivantes : 'Lettre' / 'Fax' / 'E-mail' / 'Colis' / 'Autre'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reference",
            "description": "<p>Référence du courrier. c'est une référence unique associé au courrier en vue de l'identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idEntite",
            "description": "<p>ID de l'entite concerné par le courrier. Si le courrier est un courrier arrivée, c'est l'id de l'entité destinataire. Si le courrier est un courrier départ, c'est l'id de l'entité source.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Objet",
            "description": "<p>JSON avec &quot;operation&quot; : &quot;ok&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"operation\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValeurInvalide",
            "description": "<p>'Valeur du champ x incorrecte !' si une valeur d'une des champs envoyés à ce service n'est pas valide.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    {\n\t\t\t\"operation\": \"ko\",\n\t\t\t\"erreur\": \"ValeurInvalide\",\n\t\t\t\"message\": \"Valeur du champ x incorrecte !\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "gc-api/web/index.php",
    "groupTitle": "Courrier"
  }
] });
