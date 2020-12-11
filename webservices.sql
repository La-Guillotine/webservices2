-- --------------------------------------------------------
-- Hôte :                        127.0.0.1
-- Version du serveur:           10.5.4-MariaDB - mariadb.org binary distribution
-- SE du serveur:                Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Listage de la structure de la base pour webservices
CREATE DATABASE IF NOT EXISTS `webservices` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `webservices`;

-- Listage de la structure de la table webservices. animal
CREATE TABLE IF NOT EXISTS `animal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.animal : ~0 rows (environ)
/*!40000 ALTER TABLE `animal` DISABLE KEYS */;
/*!40000 ALTER TABLE `animal` ENABLE KEYS */;

-- Listage de la structure de la table webservices. anime
CREATE TABLE IF NOT EXISTS `anime` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.anime : ~0 rows (environ)
/*!40000 ALTER TABLE `anime` DISABLE KEYS */;
/*!40000 ALTER TABLE `anime` ENABLE KEYS */;

-- Listage de la structure de la table webservices. astrologicalsign
CREATE TABLE IF NOT EXISTS `astrologicalsign` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.astrologicalsign : ~0 rows (environ)
/*!40000 ALTER TABLE `astrologicalsign` DISABLE KEYS */;
/*!40000 ALTER TABLE `astrologicalsign` ENABLE KEYS */;

-- Listage de la structure de la table webservices. car
CREATE TABLE IF NOT EXISTS `car` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '0',
  `brand` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.car : ~0 rows (environ)
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
/*!40000 ALTER TABLE `car` ENABLE KEYS */;

-- Listage de la structure de la table webservices. city
CREATE TABLE IF NOT EXISTS `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `region_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_city_region` (`region_id`) USING BTREE,
  CONSTRAINT `FK_city_region` FOREIGN KEY (`region_id`) REFERENCES `region` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.city : ~0 rows (environ)
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
/*!40000 ALTER TABLE `city` ENABLE KEYS */;

-- Listage de la structure de la table webservices. destination
CREATE TABLE IF NOT EXISTS `destination` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.destination : ~0 rows (environ)
/*!40000 ALTER TABLE `destination` DISABLE KEYS */;
/*!40000 ALTER TABLE `destination` ENABLE KEYS */;

-- Listage de la structure de la table webservices. drink
CREATE TABLE IF NOT EXISTS `drink` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '0',
  `isAlcoholised` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.drink : ~0 rows (environ)
/*!40000 ALTER TABLE `drink` DISABLE KEYS */;
/*!40000 ALTER TABLE `drink` ENABLE KEYS */;

-- Listage de la structure de la table webservices. filmtype
CREATE TABLE IF NOT EXISTS `filmtype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.filmtype : ~0 rows (environ)
/*!40000 ALTER TABLE `filmtype` DISABLE KEYS */;
/*!40000 ALTER TABLE `filmtype` ENABLE KEYS */;

-- Listage de la structure de la table webservices. food
CREATE TABLE IF NOT EXISTS `food` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.food : ~0 rows (environ)
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
/*!40000 ALTER TABLE `food` ENABLE KEYS */;

-- Listage de la structure de la table webservices. musictype
CREATE TABLE IF NOT EXISTS `musictype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.musictype : ~0 rows (environ)
/*!40000 ALTER TABLE `musictype` DISABLE KEYS */;
/*!40000 ALTER TABLE `musictype` ENABLE KEYS */;

-- Listage de la structure de la table webservices. region
CREATE TABLE IF NOT EXISTS `region` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.region : ~0 rows (environ)
/*!40000 ALTER TABLE `region` DISABLE KEYS */;
/*!40000 ALTER TABLE `region` ENABLE KEYS */;

-- Listage de la structure de la table webservices. sport
CREATE TABLE IF NOT EXISTS `sport` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '0',
  `isTeamPlay` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.sport : ~0 rows (environ)
/*!40000 ALTER TABLE `sport` DISABLE KEYS */;
/*!40000 ALTER TABLE `sport` ENABLE KEYS */;

-- Listage de la structure de la table webservices. user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL DEFAULT '0',
  `password` varchar(255) NOT NULL DEFAULT '0',
  `first_name` varchar(50) NOT NULL DEFAULT '0',
  `last_name` varchar(50) NOT NULL DEFAULT '0',
  `tel_number` varchar(10) DEFAULT NULL,
  `age` int(3) NOT NULL DEFAULT 0,
  `address` varchar(255) DEFAULT NULL,
  `city_id` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `astrologicalsign_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `FK_user_city` (`city_id`),
  KEY `FK_user_astrologicalsign` (`astrologicalsign_id`),
  CONSTRAINT `FK_user_astrologicalsign` FOREIGN KEY (`astrologicalsign_id`) REFERENCES `astrologicalsign` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_user_city` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.user : ~0 rows (environ)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

-- Listage de la structure de la table webservices. user_animal
CREATE TABLE IF NOT EXISTS `user_animal` (
  `user_id` int(11) NOT NULL,
  `animal_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`animal_id`),
  KEY `FK__animal` (`animal_id`),
  CONSTRAINT `FK__animal` FOREIGN KEY (`animal_id`) REFERENCES `animal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK__user_animal` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.user_animal : ~0 rows (environ)
/*!40000 ALTER TABLE `user_animal` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_animal` ENABLE KEYS */;

-- Listage de la structure de la table webservices. user_anime
CREATE TABLE IF NOT EXISTS `user_anime` (
  `user_id` int(11) NOT NULL,
  `anime_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`anime_id`),
  KEY `FK__anime` (`anime_id`),
  CONSTRAINT `FK__anime` FOREIGN KEY (`anime_id`) REFERENCES `anime` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK__user_anime` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.user_anime : ~0 rows (environ)
/*!40000 ALTER TABLE `user_anime` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_anime` ENABLE KEYS */;

-- Listage de la structure de la table webservices. user_car
CREATE TABLE IF NOT EXISTS `user_car` (
  `user_id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL,
  PRIMARY KEY (`car_id`,`user_id`),
  KEY `FK__user_car` (`user_id`),
  CONSTRAINT `FK__car` FOREIGN KEY (`car_id`) REFERENCES `car` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK__user_car` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.user_car : ~0 rows (environ)
/*!40000 ALTER TABLE `user_car` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_car` ENABLE KEYS */;

-- Listage de la structure de la table webservices. user_destination
CREATE TABLE IF NOT EXISTS `user_destination` (
  `user_id` int(11) NOT NULL,
  `destination_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`destination_id`),
  KEY `FK__destination` (`destination_id`),
  CONSTRAINT `FK__destination` FOREIGN KEY (`destination_id`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK__user_destination` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.user_destination : ~0 rows (environ)
/*!40000 ALTER TABLE `user_destination` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_destination` ENABLE KEYS */;

-- Listage de la structure de la table webservices. user_drink
CREATE TABLE IF NOT EXISTS `user_drink` (
  `user_id` int(11) NOT NULL,
  `drink_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`drink_id`),
  KEY `FK__drink` (`drink_id`),
  CONSTRAINT `FK__drink` FOREIGN KEY (`drink_id`) REFERENCES `drink` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK__user_drink` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.user_drink : ~0 rows (environ)
/*!40000 ALTER TABLE `user_drink` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_drink` ENABLE KEYS */;

-- Listage de la structure de la table webservices. user_filmtype
CREATE TABLE IF NOT EXISTS `user_filmtype` (
  `user_id` int(11) NOT NULL,
  `filmtype_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`filmtype_id`),
  KEY `FK__filmtype` (`filmtype_id`),
  CONSTRAINT `FK__filmtype` FOREIGN KEY (`filmtype_id`) REFERENCES `filmtype` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK__user_filmtype` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.user_filmtype : ~0 rows (environ)
/*!40000 ALTER TABLE `user_filmtype` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_filmtype` ENABLE KEYS */;

-- Listage de la structure de la table webservices. user_food
CREATE TABLE IF NOT EXISTS `user_food` (
  `user_id` int(11) NOT NULL,
  `food_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`food_id`),
  KEY `FK__food` (`food_id`),
  CONSTRAINT `FK__food` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK__user_food` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.user_food : ~0 rows (environ)
/*!40000 ALTER TABLE `user_food` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_food` ENABLE KEYS */;

-- Listage de la structure de la table webservices. user_musictype
CREATE TABLE IF NOT EXISTS `user_musictype` (
  `user_id` int(11) NOT NULL,
  `musictype_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`musictype_id`),
  KEY `FK__musictype` (`musictype_id`),
  CONSTRAINT `FK__musictype` FOREIGN KEY (`musictype_id`) REFERENCES `musictype` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK__user_musictype` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.user_musictype : ~0 rows (environ)
/*!40000 ALTER TABLE `user_musictype` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_musictype` ENABLE KEYS */;

-- Listage de la structure de la table webservices. user_sport
CREATE TABLE IF NOT EXISTS `user_sport` (
  `user_id` int(11) NOT NULL,
  `sport_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`sport_id`),
  KEY `FK__sport` (`sport_id`),
  CONSTRAINT `FK__sport` FOREIGN KEY (`sport_id`) REFERENCES `sport` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK__user_sport` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.user_sport : ~0 rows (environ)
/*!40000 ALTER TABLE `user_sport` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_sport` ENABLE KEYS */;

-- Listage de la structure de la table webservices. user_videogame
CREATE TABLE IF NOT EXISTS `user_videogame` (
  `user_id` int(11) NOT NULL,
  `videogame_id` int(11) NOT NULL,
  PRIMARY KEY (`videogame_id`,`user_id`),
  KEY `FK__user_videogame` (`user_id`),
  CONSTRAINT `FK__user_videogame` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK__videogame` FOREIGN KEY (`videogame_id`) REFERENCES `videogame` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.user_videogame : ~0 rows (environ)
/*!40000 ALTER TABLE `user_videogame` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_videogame` ENABLE KEYS */;

-- Listage de la structure de la table webservices. videogame
CREATE TABLE IF NOT EXISTS `videogame` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table webservices.videogame : ~0 rows (environ)
/*!40000 ALTER TABLE `videogame` DISABLE KEYS */;
/*!40000 ALTER TABLE `videogame` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
