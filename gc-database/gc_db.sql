/*
Navicat MySQL Data Transfer

Source Server         : LOCALHOST
Source Server Version : 50624
Source Host           : 127.0.0.1:3306
Source Database       : gc_db

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2018-02-12 22:53:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for courrier
-- ----------------------------
DROP TABLE IF EXISTS `courrier`;
CREATE TABLE `courrier` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(200) COLLATE utf8_bin NOT NULL,
  `description` text COLLATE utf8_bin NOT NULL,
  `datecourrier` date NOT NULL,
  `type` varchar(50) COLLATE utf8_bin NOT NULL,
  `nature` varchar(50) COLLATE utf8_bin NOT NULL,
  `adresse` varchar(255) COLLATE utf8_bin NOT NULL,
  `reference` varchar(100) COLLATE utf8_bin NOT NULL,
  `id_entite` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of courrier
-- ----------------------------
INSERT INTO `courrier` VALUES ('12', 'Objet', 0x6465736372697074, '2018-02-15', 'Courrier Arrivée', 'Lettre', 'adresse', 'ref', '1');
INSERT INTO `courrier` VALUES ('13', 'objet', 0x6465736372697074696F6E, '2018-02-10', 'Courrier Arrivée', 'Lettre', 'adress', 'ref', '1');
INSERT INTO `courrier` VALUES ('14', 'Objet', 0x6465736372697074696F6E, '2018-02-16', 'Courrier Arrivée', 'Lettre', 'adresse', 'ref', '1');
INSERT INTO `courrier` VALUES ('15', 'Objet', 0x4445534352495054494F4E, '2018-02-06', 'Courrier Arrivée', 'Lettre', 'ADRESSE', '2500TB', '1');
INSERT INTO `courrier` VALUES ('16', 'Objet', 0x646573, '2018-02-16', 'Courrier Arrivée', 'Lettre', 'adresse', 'ref', '1');

-- ----------------------------
-- Table structure for diffusion
-- ----------------------------
DROP TABLE IF EXISTS `diffusion`;
CREATE TABLE `diffusion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_entite` int(11) NOT NULL,
  `responsable` varchar(100) COLLATE utf8_bin NOT NULL,
  `action` varchar(50) COLLATE utf8_bin NOT NULL,
  `id_instruction` int(11) DEFAULT NULL,
  `delai` int(11) DEFAULT NULL,
  `reponse` char(255) COLLATE utf8_bin DEFAULT NULL,
  `id_courrier` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`,`id_entite`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of diffusion
-- ----------------------------
INSERT INTO `diffusion` VALUES ('2', '2', '', 'CC', null, '4', 'O', '13');
INSERT INTO `diffusion` VALUES ('4', '4', '', 'A', null, '5', 'O', '13');
INSERT INTO `diffusion` VALUES ('5', '2', '', 'CC', null, '6', 'N', '14');
INSERT INTO `diffusion` VALUES ('6', '4', '', 'A', null, '8', 'O', '14');
INSERT INTO `diffusion` VALUES ('13', '2', '', 'A', null, '2', 'O', '12');
INSERT INTO `diffusion` VALUES ('14', '4', '', 'CC', null, '3', 'N', '12');
INSERT INTO `diffusion` VALUES ('15', '1', '', 'A', null, null, null, '15');
INSERT INTO `diffusion` VALUES ('16', '2', '', 'CC', null, null, null, '15');
INSERT INTO `diffusion` VALUES ('17', '1', '', 'A', null, null, null, '16');
INSERT INTO `diffusion` VALUES ('18', '2', '', 'CC', null, null, null, '16');
INSERT INTO `diffusion` VALUES ('19', '4', '', 'CC', null, null, null, '16');

-- ----------------------------
-- Table structure for document
-- ----------------------------
DROP TABLE IF EXISTS `document`;
CREATE TABLE `document` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_courrier` int(11) NOT NULL,
  `fichier` varchar(255) COLLATE utf8_bin NOT NULL,
  `contenu` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of document
-- ----------------------------
INSERT INTO `document` VALUES ('19', '12', 'courrier-scan-2018-02-09-20-58-55.png', '');
INSERT INTO `document` VALUES ('20', '12', 'courrier-scan-2018-02-09-20-59-06.png', '');
INSERT INTO `document` VALUES ('21', '13', 'courrier-scan-2018-02-09-21-10-42.png', '');
INSERT INTO `document` VALUES ('22', '14', 'courrier-scan-2018-02-09-21-19-15.png', '');
INSERT INTO `document` VALUES ('23', '14', 'courrier-scan-2018-02-09-21-19-17.png', '');
INSERT INTO `document` VALUES ('24', '15', 'courrier-scan-2018-02-10-17-00-13.png', '');
INSERT INTO `document` VALUES ('25', '16', 'courrier-scan-2018-02-11-17-49-29.png', '');
INSERT INTO `document` VALUES ('26', '16', 'courrier-scan-2018-02-11-17-51-39.png', '');

-- ----------------------------
-- Table structure for entite
-- ----------------------------
DROP TABLE IF EXISTS `entite`;
CREATE TABLE `entite` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_parent` int(11) DEFAULT NULL,
  `type` varchar(50) COLLATE utf8_bin NOT NULL,
  `nom` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of entite
-- ----------------------------
INSERT INTO `entite` VALUES ('1', '0', 'Direction', 'Informatique');
INSERT INTO `entite` VALUES ('2', '1', 'Division', 'Exploitation Informatique');
INSERT INTO `entite` VALUES ('3', '1', 'Service', 'Applications et données');
INSERT INTO `entite` VALUES ('4', '1', 'Division', 'Développement Informatique');

-- ----------------------------
-- Table structure for instruction
-- ----------------------------
DROP TABLE IF EXISTS `instruction`;
CREATE TABLE `instruction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of instruction
-- ----------------------------
INSERT INTO `instruction` VALUES ('1', 'A voir');
INSERT INTO `instruction` VALUES ('2', 'M\'en parler');
INSERT INTO `instruction` VALUES ('3', 'Répondre');
INSERT INTO `instruction` VALUES ('4', 'Répondre + Urgent');
INSERT INTO `instruction` VALUES ('5', 'Pour information');
INSERT INTO `instruction` VALUES ('6', 'Urgent');

-- ----------------------------
-- Table structure for utilisateur
-- ----------------------------
DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE `utilisateur` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(20) COLLATE utf8_bin NOT NULL,
  `mot_passe` varchar(30) COLLATE utf8_bin NOT NULL,
  `nom` varchar(45) COLLATE utf8_bin NOT NULL,
  `prenom` varchar(45) COLLATE utf8_bin NOT NULL,
  `email` varchar(200) COLLATE utf8_bin NOT NULL,
  `role` varchar(30) COLLATE utf8_bin NOT NULL,
  `id_entite` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `login` (`login`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of utilisateur
-- ----------------------------
INSERT INTO `utilisateur` VALUES ('3', 'login', '', 'ammamjj', 'prenom', 'login@mmm.com', 'ADMIN', '1');
INSERT INTO `utilisateur` VALUES ('21', 'test', '', 'adminn', 'admin', 'admin@gmail.com', 'Administrateur', '1');
