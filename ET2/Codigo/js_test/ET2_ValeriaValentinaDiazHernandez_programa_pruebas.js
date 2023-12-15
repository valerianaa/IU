var pruebasunitarias = Array(

    //PROGRAMA

    //Pruebas para id_programa
    Array(1,'programa','id_programa',0,'',false),
    Array(1,'programa','id_programa',1,'1234',true),
    Array(1,'programa','id_programa',2,'123456',true),
    Array(2,'programa','id_programa',3,'1234567',false),
    Array(2,'programa','id_programa',4,'123457',true),
    Array(2,'programa','id_programa',5,'12345',true),
    Array(3,'programa','id_programa',6,'hola',false),
    Array(3,'programa','id_programa',7,'1hola',false),
    Array(3,'programa','id_programa',8,'12345h',false),
    Array(3,'programa','id_programa',9,'!$%&¿^+',false),
    Array(3,'programa','id_programa',10,'12345!',false),
    Array(3,'programa','id_programa',11,'9876',true),
    Array(4,'programa','id_programa',12,'l23456789',false),
    Array(4,'programa','id_programa',13,'12345',true),

    //Pruebas para nombre_programa
    Array(5,'programa','nombre_programa',14,'',false),
    Array(5,'programa','nombre_programa',15,'nnnnnn',true),
    Array(6,'programa','nombre_programa',16,'n',false),
    Array(6,'programa','nombre_programa',17,'nnnn',false),
    Array(6,'programa','nombre_programa',18,'nnnnnn',true),
    Array(7,'programa','nombre_programa',19,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',false),
    Array(7,'programa','nombre_programa',20,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',true),
    Array(8,'programa','nombre_programa',21,'           ',false),
    Array(8,'programa','nombre_programa',22,'  ',false),
    Array(8,'programa','nombre_programa',23,'nnnnnn',true),
    Array(9,'programa','nombre_programa',24,'nnnnn9',false),
    Array(9,'programa','nombre_programa',25,'!"·$%&/=',false),
    Array(9,'programa','nombre_programa',26,'·%&/nn123n',false),
    Array(9,'programa','nombre_programa',27,'nnnñ! n',false),
    Array(9,'programa','nombre_programa',28,'nnnnnn',true),
    Array(10,'programa','nombre_programa',29,'nn nnn. ññ!á',false),
    Array(10,'programa','nombre_programa',30,'nñ nnnááánn',true),

    //Pruebas acronimo_programa
    Array(11,'programa','acronimo_programa',31,'',false),
    Array(11,'programa','acronimo_programa',31,'hola',true),
    Array(12,'programa','acronimo_programa',33,'n',false),
    Array(12,'programa','acronimo_programa',34,'nn',false),
    Array(12,'programa','acronimo_programa',35,'nnn',true),
    Array(13,'programa','acronimo_programa',36,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',false),
    Array(13,'programa','acronimo_programa',37,'nnnnnnnnnnnnnnnnnnnn',true),
    Array(14,'programa','acronimo_programa',38,'hola!',false),
    Array(14,'programa','acronimo_programa',39,'holá!',false),
    Array(14,'programa','acronimo_programa',40,'hola! holá1',false),
    Array(14,'programa','acronimo_programa',41,'hola1',false),
    Array(14,'programa','acronimo_programa',42,'hola',true),
    Array(15,'programa','acronimo_programa',43,'hola hola! hola1',false),
    Array(15,'programa','acronimo_programa',44,'nn',false),
    Array(15,'programa','acronimo_programa',45,'hola',true),
    
    //Pruebas nombre_original_programa
    Array(16,'programa','nombre_original_programa',46,'',false),
    Array(16,'programa','nombre_original_programa',47,'nnnnnn',true),
    Array(17,'programa','nombre_original_programa',48,'n',false),
    Array(17,'programa','nombre_original_programa',49,'nnnn',false),
    Array(17,'programa','nombre_original_programa',50,'nnnnnn',true),
    Array(18,'programa','nombre_original_programa',51,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',false),
    Array(18,'programa','nombre_original_programa',52,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',true),
    Array(19,'programa','nombre_original_programa',53,'            ',false),
    Array(19,'programa','nombre_original_programa',54,' ',false),
    Array(19,'programa','nombre_original_programa',55,'nnnnnn',true),
    Array(20,'programa','nombre_original_programa',56,'nnnnn9',false),
    Array(20,'programa','nombre_original_programa',57,'!"·$%&/=',false),
    Array(20,'programa','nombre_original_programa',58,'·%&/nn123n',false),
    Array(20,'programa','nombre_original_programa',59,'nnnñ! n',false),
    Array(20,'programa','nombre_original_programa',60,'nnnnnn',true),
    Array(21,'programa','nombre_original_programa',61,'nn nnn. ññ!á',false),
    Array(21,'programa','nombre_original_programa',62,'nñ nnnááánn',true),

    //Pruebas autor_programa
    Array(22,'programa','autor_programa',63,'',false),
    Array(22,'programa','autor_programa',64,'nnnnnn',true),
    Array(23,'programa','autor_programa',65,'n',false),
    Array(23,'programa','autor_programa',66,'nnnn',false),
    Array(23,'programa','autor_programa',67,'nnnnnn',true),
    Array(24,'programa','autor_programa',68,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',false),
    Array(24,'programa','autor_programa',69,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',true),
    Array(25,'programa','autor_programa',70,'               ',false),
    Array(25,'programa','autor_programa',71,' ',false),
    Array(25,'programa','autor_programa',72,'nnnnnn',true),
    Array(26,'programa','autor_programa',73,'nnnnn9',false),
    Array(26,'programa','autor_programa',74,'!"·$%&/=',false),
    Array(26,'programa','autor_programa',75,'·%&/nn123n',false),
    Array(26,'programa','autor_programa',76,'nnnñ! n',false),
    Array(26,'programa','autor_programa',77,'nnnnnn',true),
    Array(27,'programa','autor_programa',78,'nn nnn. ññ!á',false),
    Array(27,'programa','autor_programa',79,'nñ nnnááánn',true),

    //Pruebas autor_original_programa
    Array(28,'programa','autor_original_programa',80,'',false),
    Array(28,'programa','autor_original_programa',81,'nnnnnn',true),
    Array(29,'programa','autor_original_programa',82,'n',false),
    Array(29,'programa','autor_original_programa',83,'nnnn',false),
    Array(29,'programa','autor_original_programa',84,'nnnnnn',true),
    Array(30,'programa','autor_original_programa',85,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',false),
    Array(30,'programa','autor_original_programa',86,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',true),
    Array(31,'programa','autor_original_programa',87,'          ',false),
    Array(31,'programa','autor_original_programa',88,' ',false),
    Array(31,'programa','autor_original_programa',89,'nnnnnn',true),
    Array(32,'programa','autor_original_programa',90,'nnnnn9',false),
    Array(32,'programa','autor_original_programa',91,'!"·$%&/=',false),
    Array(32,'programa','autor_original_programa',92,'·%&/nn123n',false),
    Array(32,'programa','autor_original_programa',93,'nnnñ! n',false),
    Array(32,'programa','autor_original_programa',94,'nnnnnnnnn',true),
    Array(33,'programa','autor_original_programa',95,'nn nnn. ññ!á',false),
    Array(33,'programa','autor_original_programa',96,'Juan Rodríguez',true),

    //Pruebas ano_programa
    Array(34,'programa','ano_programa',97,'',false),
    Array(34,'programa','ano_programa',98,'2022',true),
    Array(35,'programa','ano_programa',99,'40',false),
    Array(35,'programa','ano_programa',100,'holaa',false),
    Array(35,'programa','ano_programa',101,'123',false),
    Array(35,'programa','ano_programa',102,'1234',true),
    Array(36,'programa','ano_programa',103,'2024',false),
    Array(36,'programa','ano_programa',104,'2025',false),
    Array(36,'programa','ano_programa',105,'2023',true),
    Array(37,'programa','ano_programa',106,'hola',false),
    Array(37,'programa','ano_programa',107,'buenas',false),
    Array(37,'programa','ano_programa',108,'¡+ ¿',false),
    Array(37,'programa','ano_programa',109,'2022',true),
    Array(38,'programa','ano_programa',110,'202',false),
    Array(38,'programa','ano_programa',111,'2023',true),

    //Pruebas ano_original_programa
    Array(39,'programa','ano_original_programa',112,'',false),
    Array(39,'programa','ano_original_programa',113,'2022',true),
    Array(40,'programa','ano_original_programa',114,'40',false),
    Array(40,'programa','ano_original_programa',115,'holaa',false),
    Array(40,'programa','ano_original_programa',116,'123',false),
    Array(40,'programa','ano_original_programa',117,'1234',true),
    Array(41,'programa','ano_original_programa',118,'2024',false),
    Array(41,'programa','ano_original_programa',119,'2025',false),
    Array(41,'programa','ano_original_programa',120,'2023',true),
    Array(42,'programa','ano_original_programa',121,'hola',false),
    Array(42,'programa','ano_original_programa',122,'buenas',false),
    Array(42,'programa','ano_original_programa',123,'¡+ ¿',false),
    Array(42,'programa','ano_original_programa',124,'2022',true),
    Array(43,'programa','ano_original_programa',125,'202',false),
    Array(43,'programa','ano_original_programa',126,'2023',true),

    //Pruebas requisitos_programa
    Array(44,'programa','requisitos_programa',127,'',false),
    Array(44,'programa','requisitos_programa',128,'holaaaa',true),
    Array(45,'programa','requisitos_programa',129,'nnnnn',false),
    Array(45,'programa','requisitos_programa',130,'nnnn',false),
    Array(45,'programa','requisitos_programa',131,'nnnnnn',true),
    Array(46,'programa','requisitos_programa',132,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',false),
    Array(46,'programa','requisitos_programa',133,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',false),
    Array(46,'programa','requisitos_programa',134,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',true),
    Array(47,'programa','requisitos_programa',135,'      ',false),
    Array(47,'programa','requisitos_programa',136,'                 ',false),
    Array(47,'programa','requisitos_programa',137,'nnnnnn',true),
    Array(48,'programa','requisitos_programa',138,'hola^^+*',false),
    Array(48,'programa','requisitos_programa',139,'++++++++++++++++',false),
    Array(48,'programa','requisitos_programa',140,'holáññ.',true),
    Array(49,'programa','requisitos_programa',141,'holahola**++++',false),
    Array(49,'programa','requisitos_programa',142,' holááññ, holahola!',true),

    //Pruebas población_desde_programa
    Array(50,'programa','poblacion_desde_programa',143,'',false),
    Array(50,'programa','poblacion_desde_programa',144,'1',true),
    Array(51,'programa','poblacion_desde_programa',145,'222',false),
    Array(51,'programa','poblacion_desde_programa',146,'22',true),
    Array(52,'programa','poblacion_desde_programa',147,'ho',false),
    Array(52,'programa','poblacion_desde_programa',148,'h',false),
    Array(52,'programa','poblacion_desde_programa',149,'22',true),
    Array(53,'programa','poblacion_desde_programa',150,'nnn',false),
    Array(53,'programa','poblacion_desde_programa',151,'?¿',false),
    Array(53,'programa','poblacion_desde_programa',152,'á',false),
    Array(53,'programa','poblacion_desde_programa',153,'10',true),

    //Pruebas población_hasta_programa
    Array(54,'programa','poblacion_hasta_programa',154,'',false),
    Array(54,'programa','poblacion_hasta_programa',155,'1',true),
    Array(55,'programa','poblacion_hasta_programa',156,'222',false),
    Array(55,'programa','poblacion_hasta_programa',157,'22',true),
    Array(56,'programa','poblacion_hasta_programa',158,'ho',false),
    Array(56,'programa','poblacion_hasta_programa',159,'h',false),
    Array(56,'programa','poblacion_hasta_programa',160,'22',true),
    Array(57,'programa','poblacion_hasta_programa',161,'nnn',false),
    Array(57,'programa','poblacion_hasta_programa',162,'?¿',false),
    Array(57,'programa','poblacion_hasta_programa',163,'á',false),
    Array(57,'programa','poblacion_hasta_programa',164,'10',true),

    //Pruebas unidad_población
    Array(58,'programa','unidad_poblacion',165,'',false),
    Array(58,'programa','unidad_poblacion',166,'MESES',true),
    Array(59,'programa','unidad_poblacion',167,'hoLA',false),
    Array(59,'programa','unidad_poblacion',168,'HoLA',false),
    Array(59,'programa','unidad_poblacion',169,'ho1aAa2',false),
    Array(59,'programa','unidad_poblacion',170,'M3S3S',false),
    Array(59,'programa','unidad_poblacion',171,'AÑOS',true),
    Array(60,'programa','unidad_poblacion',172,'MESE',false),
    Array(60,'programa','unidad_poblacion',173,'AÑO',false),
    Array(60,'programa','unidad_poblacion',174,'AÑOS',true),
    Array(61,'programa','unidad_poblacion',175,'.',false),
    Array(61,'programa','unidad_poblacion',176,'AÑOS',true),
    Array(61,'programa','unidad_poblacion',177,'MESES',true),

    //Pruebas tipo_programa
    Array(62,'programa','tipo_programa',178,'',false),
    Array(62,'programa','tipo_programa',179,'EVALUACIÓN',true),
    Array(63,'programa','tipo_programa',180,'hoLA',false),
    Array(63,'programa','tipo_programa',181,'HoLA',false),
    Array(63,'programa','tipo_programa',182,'ho1aAa2',false),
    Array(63,'programa','tipo_programa',183,'3V4LU4C10N',false),
    Array(63,'programa','tipo_programa',184,'INTERVENCIÓN',true),
    Array(64,'programa','tipo_programa',185,'INTERV',false),
    Array(64,'programa','tipo_programa',186,'EVALUA',false),
    Array(64,'programa','tipo_programa',187,'EVALUACIÓN E INTERVENCIÓN',true),
    Array(65,'programa','tipo_programa',188,'.',false),
    Array(65,'programa','tipo_programa',189,'EVALUACIÓN',true),
    Array(65,'programa','tipo_programa',190,'INTERVENCIÓN',true),
    Array(65,'programa','tipo_programa',191,'EVALUACIÓN E INTERVENCIÓN',true),

    //Pruebas tiempo_aplicación_programa
    Array(66,'programa','tiempo_aplicacion_programa',192,'',false),
    Array(66,'programa','tiempo_aplicacion_programa',193,'123',true),
    Array(67,'programa','tiempo_aplicacion_programa',194,'12345',false),
    Array(67,'programa','tiempo_aplicacion_programa',195,'1234',true),
    Array(67,'programa','tiempo_aplicacion_programa',196,'12',true),
    Array(68,'programa','tiempo_aplicacion_programa',197,'hola',false),
    Array(68,'programa','tiempo_aplicacion_programa',198,'1hola',false),
    Array(68,'programa','tiempo_aplicacion_programa',199,'145h',false),
    Array(68,'programa','tiempo_aplicacion_programa',200,'!$%&',false),
    Array(68,'programa','tiempo_aplicacion_programa',201,'125!',false),
    Array(68,'programa','tiempo_aplicacion_programa',202,'9876',true),
    Array(69,'programa','tiempo_aplicacion_programa',203,'l23456',false),
    Array(69,'programa','tiempo_aplicacion_programa',204,'1234',true),

    //Pruebas descrip_interp_programa
    Array(70,'programa','descrip_interp_programa',205,'',false),
    Array(70,'programa','descrip_interp_programa',206,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',true),
    Array(71,'programa','descrip_interp_programa',207,'nnnn',false),
    Array(71,'programa','descrip_interp_programa',208,'nnnnnnnnnnnnnnnnnnnnn',false),
    Array(71,'programa','descrip_interp_programa',209,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',true),
    Array(71,'programa','descrip_interp_programa',210,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',true),
    Array(72,'programa','descrip_interp_programa',211,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',true),
    Array(72,'programa','descrip_interp_programa',212,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',false),
    Array(73,'programa','descrip_interp_programa',213,'         ',false),
    Array(73,'programa','descrip_interp_programa',214,'               ',false),
    Array(73,'programa','descrip_interp_programa',215,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',true),
    Array(74,'programa','descrip_interp_programa',216,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn1234¿!',false),
    Array(74,'programa','descrip_interp_programa',217,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn¿!',true),
    Array(74,'programa','descrip_interp_programa',218,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnán¿!-- 1111111111111111111111111111',false),
    Array(74,'programa','descrip_interp_programa',219,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn¿!-- ',false),
    Array(74,'programa','descrip_interp_programa',220,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn¿! . nnnn!  \r',true),
    Array(75,'programa','descrip_interp_programa',221,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn¿! . nnnn!  \r ... 11',false),
    Array(75,'programa','descrip_interp_programa',222,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn¿! . nnnn!  \r ... !',true),

    //Pruebas fichero_programa
    Array(76,'programa','fichero_programa',223,'',false),
    Array(76,'programa','fichero_programa',224,'holaaaa.pdf',true),
    Array(77,'programa','fichero_programa',225,'',false),
    Array(77,'programa','fichero_programa',226,'',false),
    Array(77,'programa','fichero_programa',227,'nnnnnnnn.doc',true),
    Array(78,'programa','fichero_programa',228,'',false),
    Array(78,'programa','fichero_programa',229,'nnnnnnnnnnnnnn.docx',true),
    Array(79,'programa','fichero_programa',230,'',false),
    Array(79,'programa','fichero_programa',231,'',false),
    Array(79,'programa','fichero_programa',232,'',false),
    Array(79,'programa','fichero_programa',233,'',false),
    Array(79,'programa','fichero_programa',234,'',false),
    Array(79,'programa','fichero_programa',235,'holaaaaaa.pdf',true),
    Array(80,'programa','fichero_programa',236,'',false),
    Array(80,'programa','fichero_programa',237,'',false),
    Array(80,'programa','fichero_programa',238,'holaaaaa.pdf',true),

    //Pruebas enlace_programa
    Array(81,'programa','enlace_programa',239,'',false),
    Array(81,'programa','enlace_programa',240,'holaaaaaaa',true),
    Array(82,'programa','enlace_programa',241,'n',false),
    Array(82,'programa','enlace_programa',242,'nn',false),
    Array(82,'programa','enlace_programa',243,'nnnnnnnnnnn',true),
    Array(83,'programa','enlace_programa',244,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',false),
    Array(83,'programa','enlace_programa',245,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',true),
    Array(84,'programa','enlace_programa',246,'holaaaaa!',false),
    Array(84,'programa','enlace_programa',247,'holáaaa!',false),
    Array(84,'programa','enlace_programa',248,'holaaaaaaa! holá1',false),
    Array(84,'programa','enlace_programa',249,'hola            1',false),
    Array(84,'programa','enlace_programa',250,'holaññññññññññ1',false),
    Array(84,'programa','enlace_programa',251,'holaaaaa.aaa:',true),
    Array(85,'programa','enlace_programa',252,'hola hola! hola1 holañ',false),
    Array(85,'programa','enlace_programa',253,'nn',false),
    Array(85,'programa','enlace_programa',254,'holaaaaaa.......holaaaaaaaa/.hola',true),

    //Pruebas formato_programa
    Array(86,'programa','formato_programa',255,'',false),
    Array(86,'programa','formato_programa',256,'ELECTRÓNICO',true),
    Array(87,'programa','formato_programa',257,'hoLA',false),
    Array(87,'programa','formato_programa',258,'HoLA',false),
    Array(87,'programa','formato_programa',259,'ho1aAa2',false),
    Array(87,'programa','formato_programa',260,'3L3CTR0NIC0',false),
    Array(87,'programa','formato_programa',261,'PAPEL',true),
    Array(88,'programa','formato_programa',262,'ELECTRO',false),
    Array(88,'programa','formato_programa',263,'PAP',false),
    Array(88,'programa','formato_programa',264,'PAPEL Y ELECTRÓNICO',true),
    Array(89,'programa','formato_programa',265,'.',false),
    Array(89,'programa','formato_programa',266,'ELECTRÓNICO',true),
    Array(89,'programa','formato_programa',267,'PAPEL',true),
    Array(89,'programa','formato_programa',268,'PAPEL Y ELECTRÓNICO',true),

    //Pruebas modo_corrección_programa
    Array(90,'programa','modo_correccion_programa',269,'',false),
    Array(90,'programa','modo_correccion_programa',270,'ELECTRÓNICO',true),
    Array(91,'programa','modo_correccion_programa',271,'hoLA',false),
    Array(91,'programa','modo_correccion_programa',272,'HoLA',false),
    Array(91,'programa','modo_correccion_programa',272,'papel',false),
    Array(91,'programa','modo_correccion_programa',273,'ho1aAa2',false),
    Array(91,'programa','modo_correccion_programa',274,'3L3CTR0NIC0',false),
    Array(91,'programa','modo_correccion_programa',275,'PAPEL',true),
    Array(92,'programa','modo_correccion_programa',276,'ELECTRO',false),
    Array(92,'programa','modo_correccion_programa',277,'PAP',false),
    Array(92,'programa','modo_correccion_programa',278,'PAPEL Y ELECTRÓNICO',true),
    Array(93,'programa','modo_correccion_programa',279,'.',false),
    Array(93,'programa','modo_correccion_programa',280,'ELECTRÓNICO',true),
    Array(93,'programa','modo_correccion_programa',281,'PAPEL',true),
    Array(93,'programa','modo_correccion_programa',282,'PAPEL Y ELECTRÓNICO',true),

    //Pruebas modo_aplicacion_programa
    Array(94,'programa','modo_aplicacion_programa',283,'',false),
    Array(94,'programa','modo_aplicacion_programa',284,'INDIVIDUAL',true),
    Array(95,'programa','modo_aplicacion_programa',285,'hoLA',false),
    Array(95,'programa','modo_aplicacion_programa',286,'HoLA',false),
    Array(95,'programa','modo_aplicacion_programa',287,'individual',false),
    Array(95,'programa','modo_aplicacion_programa',288,'ho1aAa2',false),
    Array(95,'programa','modo_aplicacion_programa',289,'1ND1V1DU4L',false),
    Array(95,'programa','modo_aplicacion_programa',290,'COLECTIVO',true),
    Array(96,'programa','modo_aplicacion_programa',291,'INDIV',false),
    Array(96,'programa','modo_aplicacion_programa',292,'COLEC',false),
    Array(96,'programa','modo_aplicacion_programa',293,'INDIVIDUAL Y COLECTIVO',true),
    Array(97,'programa','modo_aplicacion_programa',294,'.',false),
    Array(97,'programa','modo_aplicacion_programa',295,'INDIVIDUAL',true),
    Array(97,'programa','modo_aplicacion_programa',296,'COLECTIVO',true),
    Array(97,'programa','modo_aplicacion_programa',297,'INDIVIDUAL Y COLECTIVO',true),

    //Pruebas imagen_programa
    Array(98,'programa','imagen_programa',298,'',false),
    Array(98,'programa','imagen_programa',299,'holaaaa.jpg',true),
    Array(99,'programa','imagen_programa',300,'',false),
    Array(99,'programa','imagen_programa',301,'',false),
    Array(99,'programa','imagen_programa',302,'nnnnnnnn.jpg',true),
    Array(100,'programa','imagen_programa',303,'',false),
    Array(100,'programa','imagen_programa',304,'nnnnnnnnnnnnnnnnnnnn.jpeg',true),
    Array(101,'programa','imagen_programa',305,'',false),
    Array(101,'programa','imagen_programa',306,'',false),
    Array(101,'programa','imagen_programa',307,'',false),
    Array(101,'programa','imagen_programa',308,'',false),
    Array(101,'programa','imagen_programa',309,'',false),
    Array(101,'programa','imagen_programa',310,'holaaaaaa.jpg',true),
    Array(102,'programa','imagen_programa',311,'',false),
    Array(102,'programa','imagen_programa',312,'',false),
    Array(102,'programa','imagen_programa',313,'holaaaaa.jpeg',true),


);