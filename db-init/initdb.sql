CREATE DATABASE  IF NOT EXISTS `device_atlas` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `device_atlas`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: device_atlas
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `devices`
--

DROP TABLE IF EXISTS `devices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `devices` (
  `id` int NOT NULL AUTO_INCREMENT,
  `primaryHardwareType` varchar(255) NOT NULL,
  `osVersion` varchar(255) NOT NULL,
  `vendor` varchar(255) NOT NULL,
  `browserName` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `osName` varchar(255) NOT NULL,
  `browserRenderingEngine` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `devices`
--

LOCK TABLES `devices` WRITE;
/*!40000 ALTER TABLE `devices` DISABLE KEYS */;
INSERT INTO `devices` VALUES (1,'Tablet','7.0','Google','Chrome','Pixel C','Android','Blink','2025-03-20 11:56:31','2025-03-20 11:56:31'),(2,'Mobile Phone','10','Huawei','Chrome','MAR-LX1A','Android','Blink','2025-03-20 13:03:52','2025-03-20 13:03:52'),(3,'Mobile Phone','12.0','Apple','Safari','iPhone','iOS','WebKit','2025-03-20 13:26:49','2025-03-20 13:26:49'),(4,'Tablet','4.4.3','Amazon','Amazon Silk','Kindle Fire HDX 7','Android','Blink','2025-03-20 13:27:34','2025-03-20 13:27:34'),(5,'Tablet','18.3','Apple','Chrome','iPad','iPadOS','WebKit','2025-03-20 13:28:15','2025-03-20 13:28:15'),(6,'Mobile Phone','12','Redmi','Chrome','Note 9 Pro','Android','Blink','2025-03-20 18:37:43','2025-03-20 18:37:43'),(7,'Tablet','12','Samsung','Chrome','SM-X906C','Android','Blink','2025-03-20 18:38:52','2025-03-20 18:38:52'),(8,'Tablet','10','Acer','Chrome','ACTAB1021','Android','Blink','2025-03-20 18:39:27','2025-03-20 18:39:27'),(9,'Mobile Phone','13','Samsung','Chrome','SM-A515U','Android','Blink','2025-03-20 18:40:16','2025-03-20 18:40:16'),(10,'Tablet','5.0.2','LG','Chrome','V410','Android','Blink','2025-03-20 18:40:45','2025-03-20 18:40:45');
/*!40000 ALTER TABLE `devices` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-21 10:40:53
