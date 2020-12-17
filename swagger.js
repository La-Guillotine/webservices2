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
                        "name": "car",
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
                "adress": {
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