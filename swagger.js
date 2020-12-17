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
        "/filmtypes": {
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

    },
    "definitions": {
        "Animal": {
            "properties": {
                "id": {
                    "type": "integer",
                    "uniqueItems": true
                },
                "name": {
                    "type": "string"
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
                    "type": "string"
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
                    "type": "string"
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
                    "type": "string"
                },
                "brand": {
                    "type": "string"
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
                    "type": "string"
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
                    "type": "string"
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
                    "type": "string"
                },
                "isAlcoholised":{
                    "type":"boolean"
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
                    "type": "string"
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
                    "type": "string"
                },
            }
        },
        "Animal": {
            "properties": {
                "id": {
                    "type": "integer",
                    "uniqueItems": true
                },
                "name": {
                    "type": "string"
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
                    "type": "string"
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
                    "type": "string"
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
                    "type": "string"
                },
                "isTeamPlay": {
                    "type": "boolean"
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
                    "type": "string"
                },
                "password": {
                    "type": "string"
                },
                "first_name": {
                    "type": "string"
                },
                "last_name": {
                    "type": "string"
                },
                "tel_number": {
                    "type": "string"
                },
                "age": {
                    "type": "integer"
                },
                "address": {
                    "type": "string"
                },
                "city_id": {
                    "type": "integer"
                },
                "createdAt": {
                    "type": "datetime"
                },
                "updatedAt": {
                    "type": "datetime"
                },
                "astrologicalsign_id": {
                    "type": "integer"
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
                    "type": "string"
                },
            }
        },


    }
 }