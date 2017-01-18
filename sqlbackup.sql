CREATE TABLE `persondb`.`contactinfo` (
  `contactId` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NULL,
  `phoneNumber` VARCHAR(45) NULL,
  PRIMARY KEY (`contactId`, `firstName`, `lastName`, `address`),
  UNIQUE INDEX `contactId_UNIQUE` (`contactId` ASC));

INSERT INTO `persondb`.`contactinfo` (`contactId`, `firstName`, `lastName`, `address`, `email`, `phoneNumber`) VALUES ('', 'rabi', 'baset', 'irving', 'r@email.com', '12456789');
INSERT INTO `persondb`.`contactinfo` (`firstName`, `lastName`, `address`, `email`, `phoneNumber`) VALUES ('maiya', 'kali', 'dallass', 't@gmail.com', '123456654');
INSERT INTO `persondb`.`contactinfo` (`firstName`, `lastName`, `address`, `email`, `phoneNumber`) VALUES ('champa', 'kumari', 'oijdjf', 'oisdd@yahoo.com', '126654488');
CREATE TABLE `persondb`.`additionalinfo` (
  `infoId` INT NOT NULL AUTO_INCREMENT,
  `gender` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `age` VARCHAR(45) NOT NULL,
  `contactId` INT NOT NULL,
  PRIMARY KEY (`infoId`),
  UNIQUE INDEX `infoid_UNIQUE` (`infoId` ASC),
  INDEX `contactId_idx` (`contactId` ASC),
  CONSTRAINT `contactId`
    FOREIGN KEY (`contactId`)
    REFERENCES `persondb`.`contactinfo` (`contactId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
//this insert info is wrong
INSERT INTO `persondb`.`additionalinfo` (`gender`, `country`, `age`, `contactId`) VALUES ('male', 'us', '12', '1');
INSERT INTO `persondb`.`additionalinfo` (`gender`, `country`, `age`, `contactId`) VALUES ('female', 'us', '2', '2');
INSERT INTO `persondb`.`additionalinfo` (`gender`, `country`, `age`, `contactId`) VALUES ('male', 'us', '65', '3');
