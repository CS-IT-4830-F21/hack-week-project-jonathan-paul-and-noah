CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `authorId` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `language` varchar(20) NOT NULL,
  `code` varchar(1000) NOT NULL,
  `timestamp` date NOT NULL,
  PRIMARY KEY (`id`,`timestamp`),
  KEY `authorFK_idx` (`authorId`),
  CONSTRAINT `authorFK` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=latin1