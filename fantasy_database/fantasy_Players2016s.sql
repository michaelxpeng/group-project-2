-- MySQL dump 10.13  Distrib 8.0.12, for macos10.13 (x86_64)
--
-- Host: localhost    Database: fantasy
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Players2016s`
--

DROP TABLE IF EXISTS `Players2016s`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Players2016s` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `playerName` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `gamesPlayed` int(11) DEFAULT NULL,
  `tsPCT` decimal(10,3) DEFAULT NULL,
  `threePAR` decimal(10,3) DEFAULT NULL,
  `ftR` decimal(10,3) DEFAULT NULL,
  `orbPCT` decimal(10,3) DEFAULT NULL,
  `drbPCT` decimal(10,3) DEFAULT NULL,
  `trbPCT` decimal(10,3) DEFAULT NULL,
  `astPCT` decimal(10,3) DEFAULT NULL,
  `stlPCT` decimal(10,3) DEFAULT NULL,
  `blkPCT` decimal(10,3) DEFAULT NULL,
  `tovPCT` decimal(10,3) DEFAULT NULL,
  `usgPCT` decimal(10,3) DEFAULT NULL,
  `ppg` decimal(10,1) DEFAULT NULL,
  `rpg` decimal(10,1) DEFAULT NULL,
  `apg` decimal(10,1) DEFAULT NULL,
  `fgm` int(11) DEFAULT NULL,
  `fga` int(11) DEFAULT NULL,
  `threePA` int(11) DEFAULT NULL,
  `threePM` int(11) DEFAULT NULL,
  `ftm` int(11) DEFAULT NULL,
  `fta` int(11) DEFAULT NULL,
  `pts` int(11) DEFAULT NULL,
  `reb` int(11) DEFAULT NULL,
  `oreb` int(11) DEFAULT NULL,
  `ast` int(11) DEFAULT NULL,
  `stl` int(11) DEFAULT NULL,
  `tov` int(11) DEFAULT NULL,
  `blk` int(11) DEFAULT NULL,
  `fls` int(11) DEFAULT NULL,
  `salary` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Players2016s`
--

LOCK TABLES `Players2016s` WRITE;
/*!40000 ALTER TABLE `Players2016s` DISABLE KEYS */;
/*!40000 ALTER TABLE `Players2016s` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-11 23:19:56
