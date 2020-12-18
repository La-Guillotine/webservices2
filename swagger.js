module.exports = {
    "swagger": "2.0",
    "info": {
        "title": "Swagger",
         "description": "",
        "version": "1.0"
    },
    "produces": ["application/json"],
    "paths": {
        "/animals": {
            "get": {
                "tags": [
                    "Animal"
                ],
                "summary": "Récupérer tout les animaux",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Animal"
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "Animal"
                ],
                "summary": "Créer un animal",
                "description": "Créer un animal",
                "parameters": [
                    {
                        "name": "animal",
                        "in": "body",
                        "description": "Animal que l'on souhaite ajouter",
                        "schema": {
                            "$ref": "#/definitions/Animal"
                        }
                    }
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Nouvel animal créé",
                        "schema": {
                            "$ref": "#/definitions/Animal"
                        }
                    }
                }
            }
        },
        "/animals/{id}": {
            "delete": {
              "summary": "Supprimer l'animal par l'ID donné",
              "tags": [
                "Animal"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "description": "ID de l'animal que l'on souhaite supprimer",
                  "type": "integer"
                }
              ],
              "responses": {
                "200": {
                  "description": "Animal supprimé",
                  "schema": {
                    "$ref": "#/definitions/Animal"
                  }
                }
              }
            },
            "get": {
                "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "required": true,
                      "description": "ID de l'animal que l'on souhaite recupérer",
                      "type": "integer"
                    }
                ],
                "tags": [
                    "Animal"
                ],
                "summary": "Récupérer l'animal par l'ID donné",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Animal"
                        }
                    }
                }
            },
            "put": {
                "summary": "Mettre a jour l'animal par l'ID donné ou le créer",
                "tags": [
                  "Animal"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID de l'animal que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "animal",
                    "in": "body",
                    "description": "Animal avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateAnimal"
                    }
                  }
                ],
                "responses": {
                  "200": {
                    "description": "l'animal a été mis à jour ou créer",
                    "schema": {
                      "$ref": "#/definitions/Animal"
                    }
                  }
                }
            },
            "patch": {
                "summary": "Mettre a jour l'animal par l'ID donné",
                "tags": [
                  "Animal"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID de l'animal que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "animal",
                    "in": "body",
                    "description": "Animal avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateAnimal"
                    }
                  }
                ],
                "responses": {
                  "200": {
                    "description": "l'animal a été mis à jour",
                    "schema": {
                      "$ref": "#/definitions/Animal"
                    }
                  }
                }
            }
        },
        "/animes": {
            "get": {
                "tags": [
                    "Anime"
                ],
                "summary": "Récupérer tout les animes",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Anime"
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "Anime"
                ],
                "summary": "Créer un anime",
                "description": "Créer un anime",
                "parameters": [
                    {
                        "name": "anime",
                        "in": "body",
                        "description": "Anime que l'on souhaite ajouter",
                        "schema": {
                            "$ref": "#/definitions/Anime"
                        }
                    }
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Nouvel anime créé",
                        "schema": {
                            "$ref": "#/definitions/Anime"
                        }
                    }
                }
            }
        },
        "/animes/{id}": {
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "description": "ID de l'anime que l'on souhaite supprimer",
                "type": "integer"
              }
            ],
            "delete": {
              "summary": "Supprime l'anime par l'ID donné",
              "tags": [
                "Anime"
              ],
              "responses": {
                "200": {
                  "description": "Anime supprimé",
                  "schema": {
                    "$ref": "#/definitions/Anime"
                  }
                }
              }
            },
            "get": {
                "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "required": true,
                      "description": "ID de l'anime que l'on souhaite recupérer",
                      "type": "integer"
                    }
                ],
                "tags": [
                    "Anime"
                ],
                "summary": "Récupérer l'anime par l'ID donné",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Anime"
                        }
                    }
                }
            },
            "put": {
                "summary": "Mettre a jour l'anime par l'ID donné ou le créer",
                "tags": [
                  "Anime"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID de l'anime que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "anime",
                    "in": "body",
                    "description": "Anime avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateAnime"
                    }
                  }
                ],
                "responses": {
                  "200": {
                    "description": "l'anime a été mis à jour ou créer",
                    "schema": {
                      "$ref": "#/definitions/Anime"
                    }
                  }
                }
            },
            "patch": {
                "summary": "Mettre a jour l'anime par l'ID donné",
                "tags": [
                  "Anime"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID de l'anime que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "anime",
                    "in": "body",
                    "description": "Anime avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateAnime"
                    }
                  }
                ],
                "responses": {
                  "200": {
                    "description": "l'anime a été mis à jour",
                    "schema": {
                      "$ref": "#/definitions/Anime"
                    }
                  }
                }
            }
        },
        "/astrologicalSigns": {
            "get": {
                "tags": [
                    "Astrological sign"
                ],
                "summary": "Récupérer tout les signes astrologiques",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/AstrologicalSign"
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "Astrological sign"
                ],
                "summary": "Créer un signe astrologique",
                "description": "Créer un signe astrologique",
                "parameters": [
                    {
                        "name": "astrologicalSign",
                        "in": "body",
                        "description": "Signe astrologique que l'on souhaite ajouter",
                        "schema": {
                            "$ref": "#/definitions/AstrologicalSign"
                        }
                    }
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Nouveau signe astrologique créé",
                        "schema": {
                            "$ref": "#/definitions/AstrologicalSign"
                        }
                    }
                }
            }
        },
        "/astrologicalSigns/{id}": {
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "description": "ID du signe astrologique que l'on souhaite supprimer",
                "type": "integer"
              }
            ],
            "delete": {
              "summary": "Supprime le signe astrologique par l'ID donné",
              "tags": [
                "Astrological sign"
              ],
              "responses": {
                "200": {
                  "description": "Signe astrologique supprimé",
                  "schema": {
                    "$ref": "#/definitions/AstrologicalSign"
                  }
                }
              }
            },
            "get": {
                "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "required": true,
                      "description": "ID du signe astrologique que l'on souhaite recupérer",
                      "type": "integer"
                    }
                ],
                "tags": [
                    "Astrological sign"
                ],
                "summary": "Récupérer le signe astrologique par l'ID donné",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/AstrologicalSign"
                        }
                    }
                }
            },
            
        },
        "/cars": {
            "get": {
                "tags": [
                    "Car"
                ],
                "summary": "Récupérer toutes les voitures",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Car"
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "Car"
                ],
                "summary": "Créer une voiture",
                "description": "Créer une voiture",
                "parameters": [
                    {
                        "name": "car",
                        "in": "body",
                        "description": "Voiture que l'on souhaite ajouter",
                        "schema": {
                            "$ref": "#/definitions/Car"
                        }
                    }
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Nouvelle voiture créée",
                        "schema": {
                            "$ref": "#/definitions/Car"
                        }
                    }
                }
            }
        },
        "/cars/{id}": {
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "description": "ID de la voiture que l'on souhaite supprimer",
                "type": "integer"
              }
            ],
            "delete": {
              "summary": "Supprime la voiture par l'ID donné",
              "tags": [
                "Car"
              ],
              "responses": {
                "200": {
                  "description": "Voiture supprimée",
                  "schema": {
                    "$ref": "#/definitions/Car"
                  }
                }
              }
            },
            "get": {
                "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "required": true,
                      "description": "ID de la voiture que l'on souhaite recupérer",
                      "type": "integer"
                    }
                ],
                "tags": [
                    "Car"
                ],
                "summary": "Récupérer la voiture par l'ID donné",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Car"
                        }
                    }
                }
            },
            
        },
        "/cities": {
            "get": {
                "tags": [
                    "City"
                ],
                "summary": "Récupérer tout les villes",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/City"
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "City"
                ],
                "summary": "Créer une ville",
                "description": "Créer une ville",
                "parameters": [
                    {
                        "name": "city",
                        "in": "body",
                        "description": "Ville que l'on souhaite ajouter",
                        "schema": {
                            "$ref": "#/definitions/City"
                        }
                    }
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Nouvelle ville créée",
                        "schema": {
                            "$ref": "#/definitions/City"
                        }
                    }
                }
            }
        },
        "/cities/{id}": {
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "description": "ID de la ville que l'on souhaite supprimer",
                "type": "integer"
              }
            ],
            "delete": {
              "summary": "Supprime la ville par l'ID donné",
              "tags": [
                "City"
              ],
              "responses": {
                "200": {
                  "description": "Ville supprimée",
                  "schema": {
                    "$ref": "#/definitions/City"
                  }
                }
              }
            },
            "get": {
                "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "required": true,
                      "description": "ID de la ville que l'on souhaite recupérer",
                      "type": "integer"
                    }
                ],
                "tags": [
                    "City"
                ],
                "summary": "Récupérer la ville par l'ID donné",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/City"
                        }
                    }
                }
            },
            
        },
        "/destinations": {
            "get": {
                "tags": [
                    "Destination"
                ],
                "summary": "Récupérer tout les destinations",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Destination"
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "Destination"
                ],
                "summary": "Créer une destination",
                "description": "Créer une destination",
                "parameters": [
                    {
                        "name": "destination",
                        "in": "body",
                        "description": "Destination que l'on souhaite ajouter",
                        "schema": {
                            "$ref": "#/definitions/Destination"
                        }
                    }
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Nouvelle destination créée",
                        "schema": {
                            "$ref": "#/definitions/Destination"
                        }
                    }
                }
            }
        },
        "/destinations/{id}": {
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "description": "ID de la destination que l'on souhaite supprimer",
                "type": "integer"
              }
            ],
            "delete": {
              "summary": "Supprime la destination par l'ID donné",
              "tags": [
                "Destination"
              ],
              "responses": {
                "200": {
                  "description": "Destination supprimée",
                  "schema": {
                    "$ref": "#/definitions/Destination"
                  }
                }
              }
            },
            "get": {
                "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "required": true,
                      "description": "ID de la destination que l'on souhaite recupérer",
                      "type": "integer"
                    }
                ],
                "tags": [
                    "Destination"
                ],
                "summary": "Récupérer la destination par l'ID donné",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Destination"
                        }
                    }
                }
            },
            
        },
        "/drinks": {
            "get": {
                "tags": [
                    "Drink"
                ],
                "summary": "Récupérer tout les boissons",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Drink"
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "Drink"
                ],
                "summary": "Créer une boisson",
                "description": "Créer une boisson",
                "parameters": [
                    {
                        "name": "drink",
                        "in": "body",
                        "description": "Boisson que l'on souhaite ajouter",
                        "schema": {
                            "$ref": "#/definitions/Drink"
                        }
                    }
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Nouvelle boisson créée",
                        "schema": {
                            "$ref": "#/definitions/Drink"
                        }
                    }
                }
            }
        },
        "/drinks/{id}": {
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "description": "ID de la boisson que l'on souhaite supprimer",
                "type": "integer"
              }
            ],
            "delete": {
              "summary": "Supprime la boisson par l'ID donné",
              "tags": [
                "Drink"
              ],
              "responses": {
                "200": {
                  "description": "Boisson supprimée",
                  "schema": {
                    "$ref": "#/definitions/Drink"
                  }
                }
              }
            },
            "get": {
                "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "required": true,
                      "description": "ID de la boisson que l'on souhaite recupérer",
                      "type": "integer"
                    }
                ],
                "tags": [
                    "Drink"
                ],
                "summary": "Récupérer la boisson par l'ID donné",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Drink"
                        }
                    }
                }
            },
            
        },
        "/filmTypes": {
            "get": {
                "tags": [
                    "Film type"
                ],
                "summary": "Récupérer tout les types de film",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/FilmType"
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "Film type"
                ],
                "summary": "Créer un type de film",
                "description": "Créer un typez de film",
                "parameters": [
                    {
                        "name": "filmType",
                        "in": "body",
                        "description": "Type de film que l'on souhaite ajouter",
                        "schema": {
                            "$ref": "#/definitions/FilmType"
                        }
                    }
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Nouveau type de film créé",
                        "schema": {
                            "$ref": "#/definitions/FilmType"
                        }
                    }
                }
            }
        },
        "/filmTypes/{id}": {
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "description": "ID du type de film que l'on souhaite supprimer",
                "type": "integer"
              }
            ],
            "delete": {
              "summary": "Supprime le type de film par l'ID donné",
              "tags": [
                "Film type"
              ],
              "responses": {
                "200": {
                  "description": "Type de film supprimé",
                  "schema": {
                    "$ref": "#/definitions/FilmType"
                  }
                }
              }
            },
            "get": {
                "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "required": true,
                      "description": "ID de le type de film que l'on souhaite recupérer",
                      "type": "integer"
                    }
                ],
                "tags": [
                    "Film type"
                ],
                "summary": "Récupérer le type de film par l'ID donné",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/FilmType"
                        }
                    }
                }
            },
            
        },
        "/foods": {
            "get": {
                "tags": [
                    "Food"
                ],
                "summary": "Récupérer tout les restaurants",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Food"
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "Food"
                ],
                "summary": "Créer un restaurant",
                "description": "Créer un restaurant",
                "parameters": [
                    {
                        "name": "food",
                        "in": "body",
                        "description": "Restaurant que l'on souhaite ajouter",
                        "schema": {
                            "$ref": "#/definitions/Food"
                        }
                    }
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Nouveux restaurant créé",
                        "schema": {
                            "$ref": "#/definitions/Food"
                        }
                    }
                }
            }
        },
        "/foods/{id}": {
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "description": "ID du restaurant que l'on souhaite supprimer",
                "type": "integer"
              }
            ],
            "delete": {
              "summary": "Supprime le restaurant par l'ID donné",
              "tags": [
                "Food"
              ],
              "responses": {
                "200": {
                  "description": "Restaurant supprimé",
                  "schema": {
                    "$ref": "#/definitions/Food"
                  }
                }
              }
            },
            "get": {
                "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "required": true,
                      "description": "ID de le restaurant que l'on souhaite recupérer",
                      "type": "integer"
                    }
                ],
                "tags": [
                    "Food"
                ],
                "summary": "Récupérer le restaurant par l'ID donné",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Food"
                        }
                    }
                }
            },
            
        },
        "/musicTypes": {
            "get": {
                "tags": [
                    "Music type"
                ],
                "summary": "Récupérer tout les types de musique",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/MusicType"
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "Music type"
                ],
                "summary": "Créer un type de musique",
                "description": "Créer un type de musique",
                "parameters": [
                    {
                        "name": "musicType",
                        "in": "body",
                        "description": "Type de musique que l'on souhaite ajouter",
                        "schema": {
                            "$ref": "#/definitions/MusicType"
                        }
                    }
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Nouveau type de musique créé",
                        "schema": {
                            "$ref": "#/definitions/MusicType"
                        }
                    }
                }
            }
        },
        "/musicTypes/{id}": {
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "description": "ID du type de musique que l'on souhaite supprimer",
                "type": "integer"
              }
            ],
            "delete": {
              "summary": "Supprime le type de musique par l'ID donné",
              "tags": [
                "Music type"
              ],
              "responses": {
                "200": {
                  "description": "Type de musique supprimé",
                  "schema": {
                    "$ref": "#/definitions/MusicType"
                  }
                }
              }
            },
            "get": {
                "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "required": true,
                      "description": "ID de le type de musique que l'on souhaite recupérer",
                      "type": "integer"
                    }
                ],
                "tags": [
                    "Music type"
                ],
                "summary": "Récupérer le type de musique par l'ID donné",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/MusicType"
                        }
                    }
                }
            },
            
        },
        "/regions": {
            "get": {
                "tags": [
                    "Region"
                ],
                "summary": "Récupérer toutes les regions",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Region"
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "Region"
                ],
                "summary": "Créer une region",
                "description": "Créer une region",
                "parameters": [
                    {
                        "name": "region",
                        "in": "body",
                        "description": "Region que l'on souhaite ajouter",
                        "schema": {
                            "$ref": "#/definitions/Region"
                        }
                    }
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Nouvelle region créée",
                        "schema": {
                            "$ref": "#/definitions/Region"
                        }
                    }
                }
            }
        },
        "/regions/{id}": {
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "description": "ID de la region que l'on souhaite supprimer",
                "type": "integer"
              }
            ],
            "delete": {
              "summary": "Supprime la region par l'ID donné",
              "tags": [
                "Region"
              ],
              "responses": {
                "200": {
                  "description": "Region supprimée",
                  "schema": {
                    "$ref": "#/definitions/Region"
                  }
                }
              }
            },
            "get": {
                "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "required": true,
                      "description": "ID de la region que l'on souhaite recupérer",
                      "type": "integer"
                    }
                ],
                "tags": [
                    "Region"
                ],
                "summary": "Récupérer la region par l'ID donné",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Region"
                        }
                    }
                }
            },
            
        },
        "/sports": {
            "get": {
                "tags": [
                    "Sport"
                ],
                "summary": "Récupérer tout les sports",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Sport"
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "Sport"
                ],
                "summary": "Créer un sport",
                "description": "Créer un sport",
                "parameters": [
                    {
                        "name": "sport",
                        "in": "body",
                        "description": "Sport que l'on souhaite ajouter",
                        "schema": {
                            "$ref": "#/definitions/Sport"
                        }
                    }
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Nouveau sport créé",
                        "schema": {
                            "$ref": "#/definitions/Sport"
                        }
                    }
                }
            }
        },
        "/sports/{id}": {
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "description": "ID du sport que l'on souhaite supprimer",
                "type": "integer"
              }
            ],
            "delete": {
              "summary": "Supprime le sport par l'ID donné",
              "tags": [
                "Sport"
              ],
              "responses": {
                "200": {
                  "description": "Sport supprimé",
                  "schema": {
                    "$ref": "#/definitions/Sport"
                  }
                }
              }
            },
            "get": {
                "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "required": true,
                      "description": "ID de le sport que l'on souhaite recupérer",
                      "type": "integer"
                    }
                ],
                "tags": [
                    "Sport"
                ],
                "summary": "Récupérer le sport par l'ID donné",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Sport"
                        }
                    }
                }
            },
            
        },
        "/users": {
            "get": {
                "tags": [
                    "User"
                ],
                "summary": "Récupérer tout les utilisateurs",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "User"
                ],
                "summary": "Créer un utilisateur",
                "description": "Créer un utilisateur",
                "parameters": [
                    {
                        "name": "utilisateur",
                        "in": "body",
                        "description": "Utilisateur que l'on souhaite ajouter",
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    }
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Nouvel utilisateur créée",
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    }
                }
            }
        },
        "/users/{id}": {
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "description": "ID de l'utilisateur que l'on souhaite supprimer",
                "type": "integer"
              }
            ],
            "delete": {
              "summary": "Supprime l'utilisateur par l'ID donné",
              "tags": [
                "User"
              ],
              "responses": {
                "200": {
                  "description": "Utilisateur supprimé",
                  "schema": {
                    "$ref": "#/definitions/User"
                  }
                }
              }
            },
            "get": {
                "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "required": true,
                      "description": "ID de l'utilisateur que l'on souhaite recupérer",
                      "type": "integer"
                    }
                ],
                "tags": [
                    "User"
                ],
                "summary": "Récupérer l'utilisateur par l'ID donné",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    }
                }
            },
            
        },
        "/videoGames": {
            "get": {
                "tags": [
                    "Video game"
                ],
                "summary": "Récupérer tout les jeux vidéo",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/VideoGame"
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "Video game"
                ],
                "summary": "Créer un jeux vidéo",
                "description": "Créer un jeux vidéo",
                "parameters": [
                    {
                        "name": "videoGame",
                        "in": "body",
                        "description": "Jeux vidéo que l'on souhaite ajouter",
                        "schema": {
                            "$ref": "#/definitions/VideoGame"
                        }
                    }
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Nouveau jeux vidéo créé",
                        "schema": {
                            "$ref": "#/definitions/VideoGame"
                        }
                    }
                }
            }
        },
        "/videoGames/{id}": {
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "description": "ID du jeux video que l'on souhaite supprimer",
                "type": "integer"
              }
            ],
            "delete": {
              "summary": "Supprime le jeux video par l'ID donné",
              "tags": [
                "Video game"
              ],
              "responses": {
                "200": {
                  "description": "Voiture supprimée",
                  "schema": {
                    "$ref": "#/definitions/VideoGame"
                  }
                }
              }
            },
            "get": {
                "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "required": true,
                      "description": "ID de le jeux video que l'on souhaite recupérer",
                      "type": "integer"
                    }
                ],
                "tags": [
                    "Video game"
                ],
                "summary": "Récupérer le jeux video par l'ID donné",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/VideoGame"
                        }
                    }
                }
            },
            
        },
    },
    "definitions": {
        "Animal": {
            "properties": {
                "id": {
                    "type": "integer",
                    "uniqueItems": true
                },
                "name": {
                    "type": "string",
                    "required":true
                },
            }
        },
        "UpdateAnimal": {
            "properties": {
                "name": {
                    "type": "string",
                    "required":true
                },
            }
        },
        "Anime": {
            "properties": {
                "id": {
                    "type": "integer",
                    "uniqueItems": true
                },
                "name": {
                    "type": "string",
                    "required":true
                },
            }
        },
        "UpdateAnime": {
            "properties": {
                "name": {
                    "type": "string",
                    "required":true
                },
            }
        },
        "AstrologicalSign": {
            "properties": {
                "id": {
                    "type": "integer",
                    "uniqueItems": true
                },
                "name": {
                    "type": "string",
                    "required":true
                },
            }
        },
        "UpdateAstrologicalSign": {
            "properties": {
                "name": {
                    "type": "string",
                    "required":true
                },
            }
        },
        "Car": {
            "properties": {
                "id": {
                    "type": "integer",
                    "uniqueItems": true
                },
                "name": {
                    "type": "string",
                    "required":true
                },
                "brand": {
                    "type": "string",
                    "required":true
                },
            }
        },
        "UpdateCar": {
            "properties": {
                "name": {
                    "type": "string",
                    "required":true
                },
                "brand": {
                    "type": "string",
                    "required":true
                },
            }
        },
        "City": {
            "properties": {
                "id": {
                    "type": "integer",
                    "uniqueItems": true
                },
                "name": {
                    "type": "string",
                    "required":true
                },
                "region_id": {
                    "type": "integer",
                    "required":true
                },
            }
        },
        "UpdateCity": {
            "properties": {
                "name": {
                    "type": "string",
                    "required":true
                },
                "region_id": {
                    "type": "integer",
                    "required":true
                },
            }
        },
        "Destination": {
            "properties": {
                "id": {
                    "type": "integer",
                    "uniqueItems": true
                },
                "name": {
                    "type": "string",
                    "required":true
                },
            }
        },
        "UpdateDestination": {
            "properties": {
                "name": {
                    "type": "string",
                    "required":true
                },
            }
        },
        "Drink": {
            "properties": {
                "id": {
                    "type": "integer",
                    "uniqueItems": true
                },
                "name": {
                    "type": "string",
                    "required":true
                },
                "isAlcoholised":{
                    "type":"boolean",
                    "required":true
                }
            }
        },
        "UpdateDrink": {
            "properties": {
                "name": {
                    "type": "string",
                    "required":true
                },
                "isAlcoholised":{
                    "type":"boolean",
                    "required":true
                }
            }
        },
        "FilmType": {
            "properties": {
                "id": {
                    "type": "integer",
                    "uniqueItems": true
                },
                "name": {
                    "type": "string",
                    "required":true
                },
            }
        },
        "UpdateFilmType": {
            "properties": {
                "name": {
                    "type": "string",
                    "required":true
                },
            }
        },
        "Food": {
            "properties": {
                "id": {
                    "type": "integer",
                    "uniqueItems": true
                },
                "name": {
                    "type": "string",
                    "required":true
                },
            }
        },
        "UpdateFood": {
            "properties": {
                "name": {
                    "type": "string",
                    "required":true
                },
            }
        },
        "MusicType": {
            "properties": {
                "id": {
                    "type": "integer",
                    "uniqueItems": true
                },
                "name": {
                    "type": "string",
                    "required":true
                },
            }
        },
        "UpdateMusicType": {
            "properties": {
                "name": {
                    "type": "string",
                    "required":true
                },
            }
        },
        "Region": {
            "properties": {
                "id": {
                    "type": "integer",
                    "uniqueItems": true
                },
                "name": {
                    "type": "string",
                    "required":true
                },
            }
        },
        "UpdateRegion": {
            "properties": {
                "name": {
                    "type": "string",
                    "required":true
                },
            }
        },
        "Sport": {
            "properties": {
                "id": {
                    "type": "integer",
                    "uniqueItems": true
                },
                "name": {
                    "type": "string",
                    "required":true
                },
                "isTeamPlay": {
                    "type": "boolean",
                    "required":true
                },
            }
        },
        "UpdateSport": {
            "properties": {
                "name": {
                    "type": "string",
                    "required":true
                },
                "isTeamPlay": {
                    "type": "boolean",
                    "required":true
                },
            }
        },
        "User": {
            "properties": {
                "id": {
                    "type": "integer",
                    "uniqueItems": true
                },
                "email": {
                    "type": "string",
                    "required":true
                },
                "password": {
                    "type": "string",
                    "required":true
                },
                "first_name": {
                    "type": "string",
                    "required":true
                },
                "last_name": {
                    "type": "string",
                    "required":true
                },
                "tel_number": {
                    "type": "string",
                    "required":false
                },
                "age": {
                    "type": "integer",
                    "required":true
                },
                "address": {
                    "type": "string",
                    "required":false
                },
                "city_id": {
                    "type": "integer",
                    "required":true
                },
                "createdAt": {
                    "type": "datetime",
                    "required":false
                },
                "updatedAt": {
                    "type": "datetime",
                    "required":false
                },
                "astrologicalsign_id": {
                    "type": "integer",
                    "required":true
                },
            }
        },
        "UpdateUser": {
            "properties": {
                "email": {
                    "type": "string",
                    "required":true
                },
                "password": {
                    "type": "string",
                    "required":true
                },
                "first_name": {
                    "type": "string",
                    "required":true
                },
                "last_name": {
                    "type": "string",
                    "required":true
                },
                "tel_number": {
                    "type": "string",
                    "required":false
                },
                "age": {
                    "type": "integer",
                    "required":true
                },
                "address": {
                    "type": "string",
                    "required":false
                },
                "city_id": {
                    "type": "integer",
                    "required":true
                },
                "createdAt": {
                    "type": "datetime",
                    "required":false
                },
                "updatedAt": {
                    "type": "datetime",
                    "required":false
                },
                "astrologicalsign_id": {
                    "type": "integer",
                    "required":true
                },
            }
        },
        "VideoGame": {
            "properties": {
                "id": {
                    "type": "integer",
                    "uniqueItems": true
                },
                "name": {
                    "type": "string",
                    "required":true
                },
            }
        },
        "UpdateVideoGame": {
            "properties": {
                "name": {
                    "type": "string",
                    "required":true
                },
            }
        },
    }
 }