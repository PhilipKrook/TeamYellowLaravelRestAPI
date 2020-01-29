DROP DATABASE IF EXISTS yellowstore;
CREATE DATABASE yellowstore;
USE yellowstore;

CREATE TABLE Ships
(
    shipId INT NOT NULL AUTO_INCREMENT,
    shipName CHAR (100) NOT NULL,
    shipOrigin VARCHAR (100) NOT NULL,
    shipClass VARCHAR (256) NOT NULL,
    shipPrice VARCHAR (100) NOT NULL,
    PRIMARY KEY (shipId)
);
    INSERT INTO Ships (shipName, shipOrigin, shipClass, shipPrice) 
    VALUES
    ('Enteprise 1',  'Startrek', 'Galaxy', '666'),
    ('Enterprise 2',  'Startrek', 'Sovreign', '666'),
    ('Star Destroyer',  'Starwars', 'Battleship', '800'),
    ('Imperial Landing Craft',  'Starwars', 'Shuttle', '444'),
    ('U.S.S Sulaco',  'Aliens', 'Light Assault Carrier', '600'),
    ('The Nostromo',  'Aliens', 'Hauler', '500'),
    ('Rocinante',  'The Expanse', 'Corvette', '800'),
    ('SSV Normandy',  'Mass Effect', 'Frigate', '200'),
    ('USCSS Prometheus',  'Prometheus', 'Heliades', '1000'),
    ('Millennium Falcon',  'Starwars', 'Battleship', '700'),
    ('X-wing',  'Starwars', 'Battleship', '700');


    CREATE TABLE Buy
    (
        shipId INT,
        shipAmmount CHAR(100),
        FOREIGN KEY (shipId) REFERENCES Ships(shipId)
    );<
