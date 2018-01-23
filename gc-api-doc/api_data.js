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
    "type": "get",
    "url": "/detailCourrier/:id",
    "title": "Lire le détail d'un courrier à partir de son ID.",
    "name": "detailCourrier",
    "group": "Courrier",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID du courrier.</p>"
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
            "description": "<p>JSON avec &quot;operation&quot; : &quot;ok&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "Objet",
            "optional": false,
            "field": "courrier",
            "description": "<p>Un objet JSON contenant toute les informations du courrier</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n     \t\"operation\": \"ok\",\n\t\t\t\"courrier\" : {\n\t\t\t\t\t\t\t\"reference\" : \"FAX/23/2018\",\n\t\t\t\t\t\t\t\"titre\": \"Lancement du concours de recrutement des techniciens 3éme grade\",\n\t\t\t\t\t\t\t\"description\": \"La direction des ressources humaines lance un concours au profit des techniciens spécialisés ...\",\n\t\t\t\t\t\t\t\"type\": \"Courrier Départ\",\n\t\t\t\t\t\t\t\"adresse\": \"SNTL , Direction des ressources humaines Hay EL KAMRA, RABAT\",\n\t\t\t\t\t\t\t\"date\": \"20/01/2018\",\n\t\t\t\t\t\t\t\"nature\": \"Fax\"\n\t\t\t\t\t\t\t\"idEntite\": \"5\",\n\t\t\t\t\t\t\t\"nomEntite\": \"DRH\"\n\t\t\t\t\t\t\t}\n    }",
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
            "field": "IdInvalide",
            "description": "<p>'Id invalide !' si l'id n'est pas une valeur numérique.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CourrierInexistant",
            "description": "<p>'Le courrier avec id x est inexistant !' si l'id ne correspond à aucun courrier au niveau de la table du courrier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    {\n\t\t\t\"operation\": \"ko\",\n\t\t\t\"erreur\": \"CourrierInexistant\",\n\t\t\t\"message\": \"Le courrier avec id 5 est inexistant !\"\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "gc-api/web/index.php",
    "groupTitle": "Courrier"
  },
  {
    "type": "get",
    "url": "/rechercherCourrier/:query",
    "title": "Recherche d'un courrier par mots clés",
    "name": "rechercherCourrier",
    "group": "Courrier",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Mot clés à chercher dans le courrier stocké dans la base de données</p>"
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
            "description": "<p>JSON avec &quot;operation&quot; : &quot;ok&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "resultat",
            "description": "<p>Un tableau JSON de resultat, dont chaque élément du tableau est un courrier qui correspond au mot(s) clé(s) utilisés dans la recherche.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n     \t\"operation\": \"ok\",\n\t\t\t\"resultat\" : [{\n\t\t\t\t\t\t\t\"reference\" : \"FAX/23/2018\",\n\t\t\t\t\t\t\t\"titre\": \"Lancement du concours de recrutement des techniciens 3éme grade\",\n\t\t\t\t\t\t\t\"type\": \"Courrier Départ\",\n\t\t\t\t\t\t\t\"date\": \"20/01/2018\",\n\t\t\t\t\t\t\t\"nature\": \"Fax\"\n\t\t\t\t\t\t\t\"idEntite\": \"5\",\n\t\t\t\t\t\t\t\"nomEntite\": \"DRH\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t...\n\t\t\t\t\t\t\t]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "gc-api/web/index.php",
    "groupTitle": "Courrier"
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
            "description": "<p>Nature du courrier. peut prendre une des valeurs suivantes : 'Lettre' / 'Fax' / 'E-mail' / 'Colis' / 'Autre'.</p>"
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
            "description": "<p>JSON avec &quot;operation&quot; : &quot;ok&quot;.</p>"
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
  },
  {
    "type": "post",
    "url": "/saveDocument",
    "title": "Enregistrement d'un document scanné sur le serveur",
    "name": "saveDocument",
    "group": "Courrier",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Base64String",
            "optional": false,
            "field": "body",
            "description": "<p>Le contenu du document scanné, encodé dans le format Base64.</p>"
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
            "description": "<p>JSON avec &quot;operation&quot; : &quot;ok&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fichier",
            "description": "<p>le nom du fichier sur le serveur du document scanné.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n     \t\"operation\": \"ok\",\n\t\t\t\"fichier\" : \"courrier-scan-2018-01-01-13-28-00.tiff\"\n    }",
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
            "field": "FormatBase64Invalide",
            "description": "<p>'Format Base64 invalide du document !' si le contenu envoyé du document ne respecte pas le format Base64.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    {\n\t\t\t\"operation\": \"ko\",\n\t\t\t\"erreur\": \"ValeurInvalide\",\n\t\t\t\"message\": \"Format Base64 invalide du document !\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "gc-api/web/index.php",
    "groupTitle": "Courrier"
  },
  {
    "type": "get",
    "url": "/supprimerCourrier/:id",
    "title": "Supprimer un courrier à partir de son ID.",
    "name": "supprimerCourrier",
    "group": "Courrier",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID du courrier.</p>"
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
            "description": "<p>JSON avec &quot;operation&quot; : &quot;ok&quot;.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \t\"operation\": \"ok\",\n}",
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
            "field": "CourrierInexistant",
            "description": "<p>'Le courrier avec id x est inexistant !' si l'id ne correspond à aucun courrier au niveau de la table du courrier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    {\n\t\t\t\"operation\": \"ko\",\n\t\t\t\"erreur\": \"CourrierInexistant\",\n\t\t\t\"message\": \"Le courrier avec id 5 est inexistant !\"\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "gc-api/web/index.php",
    "groupTitle": "Courrier"
  }
] });
