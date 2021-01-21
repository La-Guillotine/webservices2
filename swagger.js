module.exports = {
    "swagger": "2.0",
    "info": {
        "title": "Swagger",
         "description": "",
        "version": "1.0"
    },
    "produces": ["application/json"],
    "paths": {
          "/login": {
            "post": {
                "tags": [
                    "Login"
                ],
                "summary": "Se connecter",
                "description": "Se connecter",
                "parameters": [
                    {
                        "name": "auth",
                        "in": "body",
                        "description": "Se connecter",
                        "schema": {
                            "$ref": "#/definitions/Auth"
                        }
                    },
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Se connecter",
                        "schema": {
                            "$ref": "#/definitions/Auth"
                        }
                    }
                }
            }
        },
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
                },
                "parameters": [
                  {
                    "name": "name",
                    "in": "query",
                    "description": "Nom",
                    "type":"string"
                },

              ],
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
                    },
                    {
                          "name": "authorization",
                          "in": "header",
                          "description": "authorization",
                          "value":"Bearer "
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
                },
                {
                  "name": "authorization",
                  "in": "header",
                  "description": "authorization",
                  "value":"Bearer "
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
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
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
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
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
                },
                "parameters": [
                  {
                    "name": "name",
                    "in": "query",
                    "description": "Nom",
                    "type":"string"
                },
              ],
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
                    },
                    {
                        "name": "authorization",
                        "in": "header",
                        "description": "authorization",
                        "value":"Bearer "
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
            "delete": {
              "summary": "Supprime l'anime par l'ID donné",
              "tags": [
                "Anime"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "description": "ID de l'anime que l'on souhaite supprimer",
                  "type": "integer"
                },
                {
                  "name": "authorization",
                  "in": "header",
                  "description": "authorization",
                  "value":"Bearer "
            }
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
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
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
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
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
                },
                "parameters": [
                  {
                    "name": "name",
                    "in": "query",
                    "description": "Nom",
                    "type":"string"
                },
              ],
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
                    },
                    {
                        "name": "authorization",
                        "in": "header",
                        "description": "authorization",
                        "value":"Bearer "
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
            
            "delete": {
              "summary": "Supprime le signe astrologique par l'ID donné",
              "tags": [
                "Astrological sign"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "description": "ID du signe astrologique que l'on souhaite supprimer",
                  "type": "integer"
                },
                {
                  "name": "authorization",
                  "in": "header",
                  "description": "authorization",
                  "value":"Bearer "
            }
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
                    },
                    {
                        "name": "authorization",
                        "in": "header",
                        "description": "authorization",
                        "value":"Bearer "
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
            "put": {
                "summary": "Mettre a jour le signe astrologique par l'ID donné ou le créer",
                "tags": [
                  "Astrological sign"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID du signe astrologique que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "astrologicalSign",
                    "in": "body",
                    "description": "Signe astrologique avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateAstrologicalSign"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
              }
                ],
                "responses": {
                  "200": {
                    "description": "Le signe astrologique a été mis à jour ou créer",
                    "schema": {
                      "$ref": "#/definitions/AstrologicalSign"
                    }
                  }
                }
            },
            "patch": {
                "summary": "Mettre a jour le signe astrologique par l'ID donné",
                "tags": [
                  "Astrological sign"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID du signe astrologique que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "astrologicalSign",
                    "in": "body",
                    "description": "Signe astrologique avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateAstrologicalSign"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "Le signe astrologique a été mis à jour",
                    "schema": {
                      "$ref": "#/definitions/AstrologicalSign"
                    }
                  }
                }
            }
            
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
                },
                "parameters": [
                  {
                      "name": "brand",
                      "in": "query",
                      "description": "marque choisi",
                      "type":"string"
                  },
                  {
                    "name": "name",
                    "in": "query",
                    "description": "Nom",
                    "type":"string"
                },

              ],
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
                    },
                    {
                        "name": "authorization",
                        "in": "header",
                        "description": "authorization",
                        "value":"Bearer "
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
            
            "delete": {
              "summary": "Supprime la voiture par l'ID donné",
              "tags": [
                "Car"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "description": "ID de la voiture que l'on souhaite supprimer",
                  "type": "integer"
                },
                {
                  "name": "authorization",
                  "in": "header",
                  "description": "authorization",
                  "value":"Bearer "
              }
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
            "put": {
                "summary": "Mettre a jour la voiture par l'ID donné ou le créer",
                "tags": [
                  "Car"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID de la voiture que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "car",
                    "in": "body",
                    "description": "Voiture avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateCar"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "La voiture a été mise à jour ou créer",
                    "schema": {
                      "$ref": "#/definitions/Car"
                    }
                  }
                }
            },
            "patch": {
                "summary": "Mettre a jour la voiture par l'ID donné",
                "tags": [
                  "Car"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID de la voiture que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "car",
                    "in": "body",
                    "description": "Voiture avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateCar"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "La voiture a été mise à jour",
                    "schema": {
                      "$ref": "#/definitions/Car"
                    }
                  }
                }
            }
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
                },
                "parameters": [
                  {
                    "name": "name",
                    "in": "query",
                    "description": "Nom",
                    "type":"string"
                },
              ],
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
                    },
                    {
                        "name": "authorization",
                        "in": "header",
                        "description": "authorization",
                        "value":"Bearer "
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
            
            "delete": {
              "summary": "Supprime la ville par l'ID donné",
              "tags": [
                "City"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "description": "ID de la ville que l'on souhaite supprimer",
                  "type": "integer"
                },
                {
                  "name": "authorization",
                  "in": "header",
                  "description": "authorization",
                  "value":"Bearer "
              }
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
            "put": {
                "summary": "Mettre a jour la ville par l'ID donné ou le créer",
                "tags": [
                  "City"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID de la ville que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "city",
                    "in": "body",
                    "description": "Ville avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateCity"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "La ville a été mise à jour ou créer",
                    "schema": {
                      "$ref": "#/definitions/City"
                    }
                  }
                }
            },
            "patch": {
                "summary": "Mettre a jour la ville par l'ID donné",
                "tags": [
                  "City"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID de la ville que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "city",
                    "in": "body",
                    "description": "Ville avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateCity"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "La ville a été mise à jour",
                    "schema": {
                      "$ref": "#/definitions/City"
                    }
                  }
                }
            }
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
                },
                "parameters": [
                  {
                    "name": "name",
                    "in": "query",
                    "description": "Nom",
                    "type":"string"
                },
              ],
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
                    },
                    {
                        "name": "authorization",
                        "in": "header",
                        "description": "authorization",
                        "value":"Bearer "
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
            
            "delete": {
              "summary": "Supprime la destination par l'ID donné",
              "tags": [
                "Destination"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "description": "ID de la destination que l'on souhaite supprimer",
                  "type": "integer"
                },
                {
                  "name": "authorization",
                  "in": "header",
                  "description": "authorization",
                  "value":"Bearer "
              }
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
            "put": {
                "summary": "Mettre a jour la destination par l'ID donné ou le créer",
                "tags": [
                  "Destination"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID de la destination que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "destination",
                    "in": "body",
                    "description": "Destination avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateDestination"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "La destination a été mise à jour ou créer",
                    "schema": {
                      "$ref": "#/definitions/Destination"
                    }
                  }
                }
            },
            "patch": {
                "summary": "Mettre a jour la destination par l'ID donné",
                "tags": [
                  "Destination"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID de la destination que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "destination",
                    "in": "body",
                    "description": "Destination avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateDestination"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "La destination a été mise à jour",
                    "schema": {
                      "$ref": "#/definitions/Destination"
                    }
                  }
                }
            }
            
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
                },
                "parameters": [
                  {
                    "name": "name",
                    "in": "query",
                    "description": "Nom",
                    "type":"string"
                },
                {
                  "name":"isAlcoholised",
                  "in":"query",
                  "description":"est alcoolisé ?",
                  "type":"string"
                }
              ],
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
                    },
                    {
                        "name": "authorization",
                        "in": "header",
                        "description": "authorization",
                        "value":"Bearer "
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

            "delete": {
              "summary": "Supprime la boisson par l'ID donné",
              "tags": [
                "Drink"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "description": "ID de la boisson que l'on souhaite supprimer",
                  "type": "integer"
                },
                {
                  "name": "authorization",
                  "in": "header",
                  "description": "authorization",
                  "value":"Bearer "
              }
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
            "put": {
                "summary": "Mettre a jour la boisson par l'ID donné ou le créer",
                "tags": [
                  "Drink"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID de la boisson que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "drink",
                    "in": "body",
                    "description": "Boisson avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateDrink"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "La boisson a été mise à jour ou créer",
                    "schema": {
                      "$ref": "#/definitions/Drink"
                    }
                  }
                }
            },
            "patch": {
                "summary": "Mettre a jour la boisson par l'ID donné",
                "tags": [
                  "Drink"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID de la boisson, que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "csrinkar",
                    "in": "body",
                    "description": "Boisson avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateDrink"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "La boisson a été mise à jour",
                    "schema": {
                      "$ref": "#/definitions/Drink"
                    }
                  }
                }
            }
            
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
                },
                "parameters": [
                  {
                    "name": "name",
                    "in": "query",
                    "description": "Nom",
                    "type":"string"
                },
              ],
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
                    },
                    {
                        "name": "authorization",
                        "in": "header",
                        "description": "authorization",
                        "value":"Bearer "
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

            "delete": {
              "summary": "Supprime le type de film par l'ID donné",
              "tags": [
                "Film type"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "description": "ID du type de film que l'on souhaite supprimer",
                  "type": "integer"
                },
                {
                  "name": "authorization",
                  "in": "header",
                  "description": "authorization",
                  "value":"Bearer "
              }
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
            "put": {
                "summary": "Mettre a jour le type de film par l'ID donné ou le créer",
                "tags": [
                  "Film type"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID du type de film que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "filmType",
                    "in": "body",
                    "description": "Type de film avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateFilmType"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "Le type de film a été mis à jour ou créer",
                    "schema": {
                      "$ref": "#/definitions/FilmType"
                    }
                  }
                }
            },
            "patch": {
                "summary": "Mettre a jour le type de film par l'ID donné",
                "tags": [
                  "Film type"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID du type de film que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "filmType",
                    "in": "body",
                    "description": "Type de film avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateFilmType"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "Le type de film a été mis à jour",
                    "schema": {
                      "$ref": "#/definitions/FilmType"
                    }
                  }
                }
            }
            
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
                },
                "parameters": [
                  {
                    "name": "name",
                    "in": "query",
                    "description": "Nom",
                    "type":"string"
                },
              ],
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
                    },
                    {
                        "name": "authorization",
                        "in": "header",
                        "description": "authorization",
                        "value":"Bearer "
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

            "delete": {
              "summary": "Supprime le restaurant par l'ID donné",
              "tags": [
                "Food"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "description": "ID du restaurant que l'on souhaite supprimer",
                  "type": "integer"
                },
                {
                  "name": "authorization",
                  "in": "header",
                  "description": "authorization",
                  "value":"Bearer "
              }
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
            "put": {
                "summary": "Mettre a jour le restaurant par l'ID donné ou le créer",
                "tags": [
                  "Food"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID du restaurant que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "car",
                    "in": "body",
                    "description": "Restaurant avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateFood"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "Le restaurant a été mis à jour ou créer",
                    "schema": {
                      "$ref": "#/definitions/Food"
                    }
                  }
                }
            },
            "patch": {
                "summary": "Mettre a jour le restaurant par l'ID donné",
                "tags": [
                  "Food"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID du restaurant que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "car",
                    "in": "body",
                    "description": "Restaurant avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateFood"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "Le restaurant a été mis à jour",
                    "schema": {
                      "$ref": "#/definitions/Food"
                    }
                  }
                }
            }
            
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
                },
                "parameters": [
                  {
                    "name": "name",
                    "in": "query",
                    "description": "Nom",
                    "type":"string"
                },
              ],
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
                    },
                    {
                        "name": "authorization",
                        "in": "header",
                        "description": "authorization",
                        "value":"Bearer "
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

            "delete": {
              "summary": "Supprime le type de musique par l'ID donné",
              "tags": [
                "Music type"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "description": "ID du type de musique que l'on souhaite supprimer",
                  "type": "integer"
                },
                {
                  "name": "authorization",
                  "in": "header",
                  "description": "authorization",
                  "value":"Bearer "
              }
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
            "put": {
                "summary": "Mettre a jour le type de musique par l'ID donné ou le créer",
                "tags": [
                  "Music type"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID du type de la musique que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "musicType",
                    "in": "body",
                    "description": "Type de musique avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateMusicType"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "Le type de musique a été mis à jour ou créer",
                    "schema": {
                      "$ref": "#/definitions/MusicType"
                    }
                  }
                }
            },
            "patch": {
                "summary": "Mettre a jour le type de la musique par l'ID donné",
                "tags": [
                  "Music type"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID du type de musique que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "musicType",
                    "in": "body",
                    "description": "Type de musique avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateMusicType"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "Le type de musique a été mise à jour",
                    "schema": {
                      "$ref": "#/definitions/MusicType"
                    }
                  }
                }
            } 
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
                },
                "parameters": [
                  {
                    "name": "name",
                    "in": "query",
                    "description": "Nom",
                    "type":"string"
                },
              ],
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
                    },
                    {
                        "name": "authorization",
                        "in": "header",
                        "description": "authorization",
                        "value":"Bearer "
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

            "delete": {
              "summary": "Supprime la region par l'ID donné",
              "tags": [
                "Region"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "description": "ID de la region que l'on souhaite supprimer",
                  "type": "integer"
                },
                {
                  "name": "authorization",
                  "in": "header",
                  "description": "authorization",
                  "value":"Bearer "
              }
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
            "put": {
                "summary": "Mettre a jour la region par l'ID donné ou le créer",
                "tags": [
                  "Region"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID de la region que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "region",
                    "in": "body",
                    "description": "Region avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateRegion"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "La region a été mis à jour ou créer",
                    "schema": {
                      "$ref": "#/definitions/Region"
                    }
                  }
                }
            },
            "patch": {
                "summary": "Mettre a jour la region par l'ID donné",
                "tags": [
                  "Region"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID de la region que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "region",
                    "in": "body",
                    "description": "Région avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateRegion"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "La region a été mise à jour",
                    "schema": {
                      "$ref": "#/definitions/Region"
                    }
                  }
                }
            }
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
                },
                "parameters": [
                  {
                    "name": "name",
                    "in": "query",
                    "description": "Nom",
                    "type":"string"
                },
                {
                  "name":"isTeamPlay",
                  "in":"query",
                  "description":"is team play ?",
                  "type":"string"
                }
              ],
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
                    },
                    {
                        "name": "authorization",
                        "in": "header",
                        "description": "authorization",
                        "value":"Bearer "
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

            "delete": {
              "summary": "Supprime le sport par l'ID donné",
              "tags": [
                "Sport"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "description": "ID du sport que l'on souhaite supprimer",
                  "type": "integer"
                },
                {
                  "name": "authorization",
                  "in": "header",
                  "description": "authorization",
                  "value":"Bearer "
              }
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
            "put": {
                "summary": "Mettre a jour le sport par l'ID donné ou le créer",
                "tags": [
                  "Sport"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID du sport que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "sport",
                    "in": "body",
                    "description": "Sport avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateSport"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "Le sport a été mis à jour ou créer",
                    "schema": {
                      "$ref": "#/definitions/Sport"
                    }
                  }
                }
            },
            "patch": {
                "summary": "Mettre a jour le sport par l'ID donné",
                "tags": [
                  "Sport"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID du sport que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "sport",
                    "in": "body",
                    "description": "Sport avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateSport"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "Le sport a été mis à jour",
                    "schema": {
                      "$ref": "#/definitions/Sport"
                    }
                  }
                }
            } 
            
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
                },
                "parameters": [
                  {
                    "name": "firstname",
                    "in": "query",
                    "description": "Nom",
                    "type":"string"
                },
              ],
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
                    },
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

            "delete": {
              "summary": "Supprime l'utilisateur par l'ID donné",
              "tags": [
                "User"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "description": "ID de l'utilisateur que l'on souhaite supprimer",
                  "type": "integer"
                },
                {
                  "name": "authorization",
                  "in": "header",
                  "description": "authorization",
                  "value":"Bearer "
              }
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
            "put": {
                "summary": "Mettre a jour l'utilisateur par l'ID donné ou le créer",
                "tags": [
                  "User"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID de l'utilisateur que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "user",
                    "in": "body",
                    "description": "Utilisateur avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateUser"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "L'utilisateur a été mis à jour ou créer",
                    "schema": {
                      "$ref": "#/definitions/User"
                    }
                  }
                }
            },
            "patch": {
                "summary": "Mettre a jour la region par l'ID donné",
                "tags": [
                  "User"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID de l'utilisateur que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "user",
                    "in": "body",
                    "description": "L'utilisateur avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateUser"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "L'utilisateur a été mise à jour",
                    "schema": {
                      "$ref": "#/definitions/User"
                    }
                  }
                }
            } 
            
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
                },
                "parameters": [
                  {
                    "name": "name",
                    "in": "query",
                    "description": "Nom",
                    "type":"string"
                },
              ],
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
                    },
                    {
                        "name": "authorization",
                        "in": "header",
                        "description": "authorization",
                        "value":"Bearer "
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

            "delete": {
              "summary": "Supprime le jeux video par l'ID donné",
              "tags": [
                "Video game"
              ],
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "description": "ID du jeux video que l'on souhaite supprimer",
                  "type": "integer"
                },
                {
                  "name": "authorization",
                  "in": "header",
                  "description": "authorization",
                  "value":"Bearer "
              }
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
            "put": {
                "summary": "Mettre a jour le jeux vidéo par l'ID donné ou le créer",
                "tags": [
                  "Video game"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID du jeux video que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "videoGame",
                    "in": "body",
                    "description": "Jeux video avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateVideoGame"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "Le jeux video a été mis à jour ou créer",
                    "schema": {
                      "$ref": "#/definitions/VideoGame"
                    }
                  }
                }
            },
            "patch": {
                "summary": "Mettre a jour le jeux vidéo par l'ID donné",
                "tags": [
                  "Video game"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID du jeux video que l'on souhaite modifier",
                        "type": "integer"
                      },
                  {
                    "name": "videoGame",
                    "in": "body",
                    "description": "Jeux video avec les nouvelles valeurs des propriétés",
                    "schema": {
                      "$ref": "#/definitions/UpdateVideoGame"
                    }
                  },
                  {
                    "name": "authorization",
                    "in": "header",
                    "description": "authorization",
                    "value":"Bearer "
                }
                ],
                "responses": {
                  "200": {
                    "description": "Le jeux vidéo a été mise à jour",
                    "schema": {
                      "$ref": "#/definitions/VideoGame"
                    }
                  }
                }
            } 
            
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
        "Auth": {
          "properties": {
              "email": {
                  "type": "string",
                  "required":true
              },
              "password": {
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