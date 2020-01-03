/*
SQLyog Ultimate v12.4.1 (64 bit)
MySQL - 5.5.20 : Database - web
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`web` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `web`;

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` varchar(32) NOT NULL,
  `user` varchar(20) NOT NULL,
  `pass` varchar(64) NOT NULL,
  `header_img` varchar(100) DEFAULT NULL,
  `phone` varchar(14) NOT NULL,
  `type` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user` (`user`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`id`,`user`,`pass`,`header_img`,`phone`,`type`) values 
('!xLaL5Aq1578043470366b6O&ouGJ','廖轩1','fd663d1aa978013ef885cdfe8e501b1c',NULL,'13122222222',0),
('4@837jgS1578039003371','老龙','685e09cf01574cbab63a88371f4a04c2',NULL,'18331508618',1),
('khg','张三','adsfhadslfja',NULL,'13199999999',0),
('khg2','张三2','adsfhadslfja',NULL,'13193999999',0),
('v!XeSM9$1578038934462','廖轩','685e09cf01574cbab63a88371f4a04c2',NULL,'18331588738',1),
('W9LWB%XN1578043078565&ZjDy1Lk','test','fd663d1aa978013ef885cdfe8e501b1c',NULL,'13166666666',0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
