﻿//<![CDATA[ 
	var cardLoaded = "";
	var cardId = "";
	
	var strings = [];

	strings["general"] = {};
	strings["general"].features = ["Características generales", "Features", "Característiques generals"];
	strings["general"].platform = ["Plataforma", "Platform", "Plataforma"];
	strings["general"].version = ["Versión", "Version", "Versió"];
	strings["general"].category = ["Categoría", "Category", "Categoria"];
	strings["general"].genre = ["Género", "Genre", "Gènere"];
	strings["general"].libraries = ["Librerías", "Libraries", "Llibreries"];
	strings["general"].languages = ["Idiomas", "Languages", "Idiomes"];
	strings["general"].languagesPrg = ["Lenguajes de programación", "Programming languages", "Llenguatges de programació"];
	strings["general"].releaseDate = ["Fecha de publicación", "Release date", "Data de publicació"];
	strings["general"].music = ["Música", "Music", "Música"];
	strings["general"].download = ["DESCARGAR", "DOWNLOAD", "DESCARREGAR"];
	strings["general"].description = ["Descripción", "Description", "Descripció"];
	strings["general"].musicDescription = ["Música del juego", "Game music", "Música del joc"];
	strings["general"].installation = ["Especificaciones de instalación", "Installation", "Especificacions d'instal·lació"];
	strings["general"].contests = ["Concursos", "Contests", "Concursos"];
	strings["general"].media = ["Capturas y vídeos", "Screenshots and videos", "Captures i videos"];
	
	strings["common"] = {};
	strings["common"].category = [];
	strings["common"].category["game"] = ["Juego", "Game", "Joc"];
	strings["common"].category["app"] = ["Aplicación", "App", "Aplicació"];
	strings["common"].category["book"] = ["Libro", "Book", "Llibre"];
	strings["common"].genre = [];
	strings["common"].genre["classic"] = ["Clásico", "Classic", "Clàssic"];
	strings["common"].genre["puzzle"] = ["Puzzle", "Puzzle", "Puzzle"];
	strings["common"].genre["mmorpg"] = ["MMORPG", "MMORPG", "MMORPG"];
	strings["common"].genre["email"] = ["E-mail", "E-mail", "E-mail"];
	strings["common"].genre["meteo"] = ["Meteorología", "Meteorology", "Meteorologia"];
	strings["common"].genre["crypt"] = ["Encriptador", "Encryptor", "Encriptador"];
	strings["common"].genre["edu"] = ["Educación", "Education", "Educació"];
	strings["common"].genre["novel"] = ["Novela", "Novel", "Novel·la"];
	strings["common"].genre["staticmmorpg"] = ["MMORPG estático", "Static MMORPG", "MMORPG estàtic"];
	strings["common"].genre["arcadeFight"] = ["Reflejos, lucha, arcade", "Coordination, fight, arcade", "Reflexos, lluita, arcade"];
	strings["common"].genre["arcadeAbilityOnline"] = ["Arcade, habilidad, online", "Arcade, ability, online", "Arcade, habilitat, online"];
	strings["common"].languages = [];
	strings["common"].languages["EN"] = ["Inglés", "English", "Anglés"];
	strings["common"].languages["ES"] = ["Español", "Spanish", "Castellà"];
	strings["common"].languages["CA"] = ["Catalán", "Catalonian", "Català"];
	strings["common"].installation = [];
	strings["common"].installation["android"] = [
		"Para instalarlo, hay que descargar el fichero APK, y copiarlo y ejecutarlo en un dispositivo Android.<br/>"
				+ "También es necesario activar la opción 'Orígenes desconocidos' dentro de 'Configuración/Aplicaciones'.",
		"To install it, download the APK file, and copy and execute it in your Android device.<br/>"
				+ "It is necessary to turn on the option 'Unknown sources' from 'Settings/Applications'.",
		"Per instal·lar-ho, cal descarregar el fitxer APK, i copiar-lo i executar-lo en un dispositiu Android.<br/>"
				+ "També és necessari activar la opció 'Orígens desconeguts' dintre de 'Configuració/Aplicacions'."
	];
	strings["common"].installation["nds"] = [
		"Para instalarlo, basta con copiar la carpeta descargada en la raíz de tu flashcart.<br/>"
				+ "Si tienes problemas para arrancar el juego, lánzalo desde el 'HBmenu' incluido en el pack.",
		"To install, just copy the downloaded folder to your flashcart's root.<br/>"
				+ "If you have problems to launch the game, open it with 'HBmenu' included in the pack.",
		"Per instal·lar-ho cal copiar la carpeta descarregada en l'arrel de la teua flashcart.<br/>"
				+ "Si tens problemes per arrancar el joc, obri'l des del 'HBmenu' inclòs al pack."
	];
	strings["common"].installation["pc"] = [
		"Simplemente descargar y descomprimir donde se desee.",
		"Just download and decompress anywhere.",
		"Tan sols s'ha de descarregar i descomprimir on es desitge."
	];
	strings["common"].installation["chdk"] = [
		"Basta con descomprimirlo y copiar el script en la carpeta correspondiente dentro de la tarjeta de memoria de la cámara.",
		"Just decompress and copy the script into the correct folder inside the memory camera card.",
		"Només cal descomprimir-lo i copiar l'script en la carpeta corresponent dintre de la targeta de memòria de la càmera."
	];
	
	/*
	------------------------------------------------ ANDROID --------------------------------------------------------------------
	*/
		
	// HANGMAN
	{
		cardId = "hangman";
		strings[cardId] = {};
		strings[cardId].title = ["El ahorcado", "Hangman", "El penjat"];
		strings[cardId].cover = "./img/hangman.png";
		strings[cardId].platform = "Android (>= 2.1)";
		strings[cardId].version = "1.0";
		strings[cardId].category = "game";
		strings[cardId].genre = "classic";
		strings[cardId].languages = {};
		strings[cardId].languages.content = [];
		strings[cardId].languages.content[0] = "EN";
		strings[cardId].languages.content[1] = "ES";
		strings[cardId].languages.count = 2;
		strings[cardId].languagesPrg = "Java";
		strings[cardId].releaseDate = ["13 de febrero de 2013", "February 13, 2013", "13 de febrer de 2013"];
		strings[cardId].download = "./downloads/ANDROID/Hangman.apk";
		strings[cardId].description = {};
		strings[cardId].description.content = [];
		strings[cardId].description.content[0] = [
			"El ahorcado es el clásico juego de papel portado para la plataforma Android.",
			"Hangman is the classical paper game ported to Android platform.",
			"El penjat és el clàssic joc de paper portat a la plataforma Android."];
		strings[cardId].description.content[1] = [
			"Entre las características más destacables del juego tenemos:<br/>"
					+ " - Modo de juego para dos personas.<br/>"
					+ " - Modo de juego para una persona, añadiendo previamente una lista con las palabras con las que se desea jugar.<br/>"
					+ " - Ranking con las mejores puntuaciones.<br/>"
					+ " - Un simpático verdugo.<br/>",
			"Some of his main features are:<br/>"
					+ " - Two players mode.<br/>"
					+ " - Alone player mode, which requires to add a list with the words which you want play with.<br/>"
					+ " - Ranking with the best scores.<br/>"
					+ " - A cool hangman.<br/>",
			"Entre les característiques més destacables del joc tenim:<br/>"
					+ " - Mode de joc per a dos persones.<br/>"
					+ " - Mode de joc per a una persona, afegint prèviament una llista amb les paraules amb les que es desitja jugar.<br/>"
					+ " - Ranking amb les millors puntuacions.<br/>"
					+ " - Un simpàtic botxí.<br/>"];
		strings[cardId].description.count = 2;
		strings[cardId].installation = "android";
		strings[cardId].media = {};
		strings[cardId].media.img = {};
		strings[cardId].media.img.content = "hangman-";
		strings[cardId].media.img.contentType = "png";
		strings[cardId].media.img.count = 4;
		strings[cardId].media.video = {};
		strings[cardId].media.video.content = [];
		strings[cardId].media.video.content[0] = ["0X_kX2ynLrI"];
		strings[cardId].media.video.count = 1;
	}
	
	// TIC TAC TOE
	{
		cardId = "tictactoe";
		strings[cardId] = {};
		strings[cardId].title = ["Tres en raya", "Tic Tac Toe", "Tres en línia"];
		strings[cardId].cover = "./img/tictactoe.png";
		strings[cardId].platform = "Android (>= 2.1)";
		strings[cardId].version = "1.0";
		strings[cardId].category = "game";
		strings[cardId].genre = "classic";
		strings[cardId].languages = {};
		strings[cardId].languages.content = [];
		strings[cardId].languages.content[0] = "EN";
		strings[cardId].languages.content[1] = "ES";
		strings[cardId].languages.count = 2;
		strings[cardId].languagesPrg = "Java";
		strings[cardId].releaseDate = ["12 de febrero de 2013", "February 12, 2013", "12 de febrer de 2013"];
		strings[cardId].download = "./downloads/ANDROID/TicTacToe.apk";
		strings[cardId].description = {};
		strings[cardId].description.content = [];
		strings[cardId].description.content[0] = [
			"Tres en raya es el clásico juego de papel portado para la plataforma Android.",
			"Tic Tac Toe is the classical paper game ported to Android platform.",
			"Tres en línia és el clàssic joc de paper portat a la plataforma Android."];
		strings[cardId].description.content[1] = [
			"Entre las características más destacables del juego tenemos:<br/>"
					+ " - Modo de juego para dos personas.<br/>"
					+ " - Modo de juego para una persona contra la IA (Inteligencia Artificial).<br/>"
					+ " - Ranking con las mejores puntuaciones.<br/>"
					+ " - Posibilidad de juego en vertical y apaisado.<br/>",
			"Some of his main features are:<br/>"
					+ " - Two players mode.<br/>"
					+ " - Alone player mode, for face to the AI (Artificial Intelligence).<br/>"
					+ " - Ranking with the best scores.<br/>"
					+ " - Play horizontally and vertically.<br/>",
			"Entre les característiques més destacables del joc tenim:<br/>"
					+ " - Mode de joc per a dos persones.<br/>"
					+ " - Mode de joc per a una persona contra la IA (Intel·ligència Artificial).<br/>"
					+ " - Ranking amb les millors puntuacions.<br/>"
					+ " - Possibilitat de joc en vertical i horitzontal.<br/>"];
		strings[cardId].description.count = 2;
		strings[cardId].installation = "android";
		strings[cardId].media = {};
		strings[cardId].media.img = {};
		strings[cardId].media.img.content = "tictactoe-";
		strings[cardId].media.img.contentType = "png";
		strings[cardId].media.img.count = 4;
		strings[cardId].media.video = {};
		strings[cardId].media.video.content = [];
		strings[cardId].media.video.content[0] = ["DCVFvq-WEiM"];
		strings[cardId].media.video.count = 1;
	}

	/*
	------------------------------------------------ NDS --------------------------------------------------------------------
	*/
	
	// HALGUENS
	{
		cardId = "halguens";
		strings[cardId] = {};
		strings[cardId].title = ["Halguens", "Halguens", "Halguens"];
		strings[cardId].cover = "./img/halguens.jpg";
		strings[cardId].platform = "Nintendo DS";
		strings[cardId].version = "0.9 (beta)";
		strings[cardId].category = "game";
		strings[cardId].genre = "staticmmorpg";
		strings[cardId].languages = {};
		strings[cardId].languages.content = [];
		strings[cardId].languages.content[0] = "EN";
		strings[cardId].languages.content[1] = "ES";
		strings[cardId].languages.content[2] = "CA";
		strings[cardId].languages.count = 3;
		strings[cardId].libraries = "<a href='http://www.nightfoxandco.com' target='_blank'>NFlib</a>, <a href='http://www.zlib.net' target='_blank'>Zlib</a>, <a href='http://www.maxmod.org' target='_blank'>Maxmod</a>";
		strings[cardId].languagesPrg = "C, PHP, SQL";
		strings[cardId].releaseDate = ["28 de septiembre de 2012", "Semptember 28, 2012", "28 de setembre de 2012"];
		strings[cardId].music = "<a href='http://www.rafaelcorpa.com' target='_blank'>Rafael Corpa</a>";
		strings[cardId].download = "./downloads/NDS/halguens.rar";
		strings[cardId].description = {};
		strings[cardId].description.content = [];
		strings[cardId].description.content[0] = [
			"Halguens es un juego de rol online estático y multijugador. En él, podemos elegir entre dos facciones diferentes, dragones y fénix, para luchar en la guerra que mantienen desde tiempo inmemoriales.",
			"Halguens is a Static Massively Multiplayer Online Role-Playing Game. In game, we can choose between two different factions, dragons and phoenix, to fight in their ancient war.",
			"Halguens és un joc de rol online estàtic i multijugador. En ell, podem triar entre dos faccions diferents, dracs i fènix, per lluitar en la guerra que mantenen des de temps immemorials."];
		strings[cardId].description.content[1] = [
			"Entre las características más destacables del juego tenemos:<br/>"
					+ " - Test inicial para comprobar la afinidad del jugador con cada facción.<br/>"
					+ " - Actualizaciones del cliente desde la consola (se descargan comprimidas y se descomprimen directamente).<br/>"
					+ " - 5 armaduras completas para cada bando.<br/>"
					+ " - 25 misiones diferentes para realizar.<br/>"
					+ " - 4 niveles de guarida.<br/>"
					+ " - 24 guardianes (8 elementos, cada uno con 3 guardianes).<br/>"
					+ " - Personajes entrenables hasta nivel 100.<br/>"
					+ " - Ranking general donde ver el estado de la guerra, así como los tres mejores jugadores de cada facción y nuestra propia posición.<br/>"
					+ " - Posibilidad de realizar capturas de pantalla duales que se guardarán en la carpeta 'Screenshots'.<br/>"
					+ " - Sistema de mensajería entre jugadores, independientemente de su facción.<br/>"
					+ " - Efecto agua dinámico en los créditos del juego.<br/>",
			"Some game features are:<br/>"
					+ " - Initial test to check the player's affinity with each faction.<br/>"
					+ " - Client updates from console (it will download compressed and will be decompressed directly in the console).<br/>"
					+ " - 5 complete armours for each faction.<br/>"
					+ " - 25 different missions to complete.<br/>"
					+ " - 4 haunt levels.<br/>"
					+ " - 24 guardians (8 element with 3 guardians each one).<br/>"
					+ " - Players up to level 100.<br/>"
					+ " - General ranking where you can see the war status, the three best players of each faction and your own position.<br/>"
					+ " - Possibility of create dual screenshots and save them to 'Screenshots' folder.<br/>"
					+ " - Messaging system between players, even if they are not of the same faction.<br/>"
					+ " - Dynamic water effect in game credits.<br/>",
			"Entre les característiques més destacables del joc tenim:<br/>"
					+ " - Test inicial per comprovar l'afinitat del jugador amb cada facció.<br/>"
					+ " - Actualitzacions del client des de la consola (se descarreguen comprimides i se descomprimeixen directament).<br/>"
					+ " - 5 armadures completes per a cada facció.<br/>"
					+ " - 25 missions diferents per a fer.<br/>"
					+ " - 4 nivells de cau.<br/>"
					+ " - 24 guardians (8 elements, cadascun amb 3 guardians).<br/>"
					+ " - Personatges entrenables fins al nivell 100.<br/>"
					+ " - Ranking general on es pot veure l'estat de la guerra, així com els tres millors jugadors de cada facció i la nostra pròpia posició.<br/>"
					+ " - Possibilitat de realitzar captures de pantalla duals que es desaran en la carpeta 'Screenshots'.<br/>"
					+ " - Sistema de missatgeria entre jugadors, independentment de la seua facció.<br/>"
					+ " - Efecte aigua dinàmic als crèdits del joc.<br/>"];
		/*strings[cardId].description.content[2] = [
			"Además, el juego tiene su <a href='http://halguens.foroactivo.com' target='_blank'>propio foro</a> donde:<br/>"
					+ " - Se puede consultar las últimas noticias sobre el juego y descargar el mismo.<br/>"
					+ " - Se puede consultar el manual de usuario y diversos tutoriales.<br/>"
					+ " - Se pueden preguntar dudas o reportar errores.<br/>"
					+ " - Se pueden crear clanes y realizar guerras entre los mismos.<br/>"
					+ " - Se realizan torneos periódicamente.<br/>",
			"Furthermore, game has his <a href='http://halguens.foroactivo.com' target='_blank'>own forum</a> where:<br/>"
					+ " - You can see the game's news and download it too.<br/>"
					+ " - You can view the user's guide and some other tutorials.<br/>"
					+ " - You can ask questions or report errors.<br/>"
					+ " - You can create guilds and fight against other guilds.<br/>"
					+ " - You can participate in regular tournaments.<br/>",
			"A més, el joc té el seu <a href='http://halguens.foroactivo.com' target='_blank'>propi fòrum*</a> on:<br/>"
					+ " - Es poden consultar les últimes notícies sobre el joc i descarregar-lo.<br/>"
					+ " - Es poden consultar el manual d'usuari i diversos tutorials.<br/>"
					+ " - Es poden preguntar dubtes o avisar d'errors.<br/>"
					+ " - Es poden crear clans i realitzar batalles entre ells.<br/>"
					+ " - Es realitzen tornejos periòdicament.<br/>"
					+ "*NOTA: El fòrum està disponible tan sols en castellà i anglès.<br/>"];*/
		strings[cardId].description.count = 2;
		strings[cardId].musicDescription = {};
		strings[cardId].musicDescription.content = [];
		strings[cardId].musicDescription.content[0] = [
			"La música del juego corre a cargo del gran compositor <a href='http://www.rafaelcorpa.com' target='_blank'>Rafael Corpa</a>, en cuya web se puede ver una muestra de su trabajo, así como escuchar y descargar, entre otras, las canciones utilizadas en Halguens.<br/>"
					+ "Estas canciones son:<br/>"
					+ " - Centuria: para la pantalla de login.<br/>"
					+ " - Aqua: para la pantalla del test inicial y selección de facción.<br/>"
					+ " - En la aldea del puerto: para la facción de los fénix.<br/>"
					+ " - La taberna de la aldea: para la facción de los dragones.",
			"The game's music is made by a great compositor, <a href='http://www.rafaelcorpa.com' target='_blank'>Rafael Corpa</a>, and in his webpage you can listen a sample of his work and download his songs, even the songs of Halguens.<br/>"
					+ "These songs are:<br/>"
					+ " - Centuria: used in login window.<br/>"
					+ " - Aqua: used in initial test and faction selection window.<br/>"
					+ " - En la aldea del puerto: used for phoenix faction.<br/>"
					+ " - La taberna de la aldea: used for dragons faction.",
			"La música del joc l'ha fet el gran compositor <a href='http://www.rafaelcorpa.com' target='_blank'>Rafael Corpa</a>, i en la seua web es pot veure una mostra del seu treball, així com escoltar i descarregar, entre altres, les cançons utilitzades en Halguens.<br/>"
					+ "Aquestes cançons són:<br/>"
					+ " - Centuria: per a la pantalla de login.<br/>"
					+ " - Aqua: per a la pantalla del test inicial i de la selecció de la facció.<br/>"
					+ " - En la aldea del puerto: per a la facció dels fènix.<br/>"
					+ " - La taberna de la aldea: per a la facció dels dracs."];
		strings[cardId].musicDescription.count = 1;
		strings[cardId].installation = "nds";
		strings[cardId].media = {};
		strings[cardId].media.img = {};
		strings[cardId].media.img.content = "halguens-";
		strings[cardId].media.img.contentType = "png";
		strings[cardId].media.img.count = 2;
		strings[cardId].media.video = {};
		strings[cardId].media.video.content = [];
		strings[cardId].media.video.content[0] = ["s6SpFKHjHWs"];
		strings[cardId].media.video.count = 1;
	}

	// SWORD MASTER
	{
		cardId = "swordmaster";
		strings[cardId] = {};
		strings[cardId].title = ["Sword Master", "Sword Master", "Sword Master"];
		strings[cardId].cover = "./img/swordmaster.jpg";
		strings[cardId].platform = "Nintendo DS";
		strings[cardId].version = "1.0 (Final)";
		strings[cardId].category = "game";
		strings[cardId].genre = "arcadeFight";
		strings[cardId].languages = {};
		strings[cardId].languages.content = [];
		strings[cardId].languages.content[0] = "EN";
		strings[cardId].languages.content[1] = "ES";
		strings[cardId].languages.count = 2;
		strings[cardId].libraries = "PAlib (080203CU), EFSLib (2.0)";
		strings[cardId].languagesPrg = "C";
		strings[cardId].releaseDate = ["08 de agosto de 2011", "August 8, 2011", "08 d'agost de 2011"];
		strings[cardId].download = "./downloads/NDS/swordmaster.rar";
		strings[cardId].description = {};
		strings[cardId].description.content = [];
		strings[cardId].description.content[0] = [
			"Sword Master es una mezcla entre el típico juego de lucha y un juego de reflejos, todo ambientado en el mundo samurai. La mecánica es simple: debes pulsar las teclas que aparezcan en la pantalla lo más rápido posible para atacar a tu adversario o defenderte de sus estocadas. Cuanto más rápido las pulses correctamente, más puntos obtienes, pero cuidado porque si fallas, en vez de ganar puntos los perderás.",
			"Sword Master mix the typical fighting game with a coordination game, and all into a samurai ambient. Gameplay is simple: you must press the keys that appears in the screen as fast as you can to attack to your adversary or to defend yourself from their blows. More faster you press them correctly, more points you get, but if you fail, you will lose points instead of get them.",
			"Sword Master és una barreja entre el típic joc de lluita i un joc de reflexos, tot ambientat al món samurai. La mecànica és simple: has de polsar les tecles que apareixen en la pantalla el més ràpid possible per atacar al teu adversari o defendre't de les seues estocades. Quant més ràpid les polses correctament, més punts obtens, però has de tindre en compte que si falles, en comptes de guanyar punts els perdràs."];
		strings[cardId].description.content[1] = [
			"Entre las características más destacables del juego tenemos:<br/>"
				+ " - Cuatro modos de juego diferentes, con tres niveles de dificultad cada uno y ranking para cada modo y nivel.<br/>"
				+ " - Un tutorial de inicio que nos enseñará a jugar, y una amplia sección de ayuda.<br/>"
				+ " - Cuatro velocidades de reacción diferentes.",
			"Some of game main features are:<br/>"
				+ " - Four different game modes, with three levels of difficulty each one and ranking for each mode and level.<br/>"
				+ " - A beginning tutorial which will teach us how to play, and a huge help section.<br/>"
				+ " - Four different reaction rates.",
			"Entre les característiques més destacables del joc tenim:<br/>"
				+ " - Quatre modes de joc diferents, amb tres nivells de dificultat cadascun i ranking per cada mode i nivell.<br/>"
				+ " - Un tutorial d'inici que ens ensenyarà a jugar, i una amplia secció d'ajuda.<br/>"
				+ " - Quatre velocitats de reacció diferents."];
		strings[cardId].description.count = 2;
		strings[cardId].contests = [
			"<a href='http://www.scenebeta.com/noticia/ganadores-scenery-beta-2011' target='_blank'>Scenery Beta 2011</a>: Tercer puesto.",
			"<a href='http://www.scenebeta.com/noticia/ganadores-scenery-beta-2011' target='_blank'>Scenery Beta 2011</a>: Third place.",
			"<a href='http://www.scenebeta.com/noticia/ganadores-scenery-beta-2011' target='_blank'>Scenery Beta 2011</a>: Tercer lloc."];
		strings[cardId].installation = "nds";
		strings[cardId].media = {};
		strings[cardId].media.img = {};
		strings[cardId].media.img.content = "swordmaster-";
		strings[cardId].media.img.contentType = "jpg";
		strings[cardId].media.img.count = 3;
		strings[cardId].media.video = {};
		strings[cardId].media.video.content = [];
		strings[cardId].media.video.content[0] = ["mI3Y4W3Y5es"];
		strings[cardId].media.video.count = 1;
	}
	
	// GRAVITY
	{
		cardId = "gravity";
		strings[cardId] = {};
		strings[cardId].title = ["Gravity", "Gravity", "Gravity"];
		strings[cardId].cover = "./img/gravity.jpg";
		strings[cardId].platform = "Nintendo DS";
		strings[cardId].version = "0.2";
		strings[cardId].category = "game";
		strings[cardId].genre = "arcadeAbilityOnline";
		strings[cardId].languages = {};
		strings[cardId].languages.content = [];
		strings[cardId].languages.content[0] = "EN";
		strings[cardId].languages.content[1] = "ES";
		strings[cardId].languages.count = 2;
		strings[cardId].libraries = "PAlib (080203CU), EFSLib (2.0), ASLib";
		strings[cardId].languagesPrg = "C";
		strings[cardId].releaseDate = ["26 de agosto de 2009", "August 26, 2009", "26 d'agost de 2009"];
		strings[cardId].music = "El sátiro vago";
		strings[cardId].download = "./downloads/NDS/gravity.rar";
		strings[cardId].description = {};
		strings[cardId].description.content = [];
		strings[cardId].description.content[0] = [
			"Gravity es un juego de habilidad en el que los enemigos te perseguirán incesantemente y deberás esquivarlos para poder sobrevivir. Para ello, contarás con la ayuda de diversos objetos que irán apareciendo en la pantalla, aunque sólo podrás hacer uso de ellos si los coges a tiempo, cosa que no siempre es fácil.",
			"Gravity is an ability game in which enemies will chase you untiringly, and you must dodge all to survive. To do it, you will be helped by some objects that will appear in the screen, but to use them you must catch them in time, and this sometimes is very complicated.",
			"Gravity és un joc d'habilitat en el qual els enemics et perseguiran incessantment i hauràs d'esquivar-los per poder sobreviure. Per fer-ho, comptaràs amb la ajuda de diversos objectes que apareixeran en la pantalla, tot i que sols podràs gastar-los si els agafes a temps, cosa que no sempre es fàcil."];
		strings[cardId].description.content[1] = [
			"Los diversos modos de juego con los que cuenta son:<br/>"
				+ " - Supervivencia: Deberás esquivar a todos tus enemigos durante el mayor tiempo posible. Disponible en niveles fácil, normal y difícil.<br/>"
				+ " - Impacto: Deberás destruir a todos tus enemigos en el menor tiempo posible haciendo que se estampen contra los bloques del tablero, pero cuidado, si eres tú quien toca uno de los bloques quedarás destruido. Disponibles 20 niveles desbloqueables (5 fáciles, 5 normales, 5 difíciles y 5 extremos).<br/>"
				+ " - Libre: En este modo podrás configurar completamente la forma de juego.",
			"The game modes are:<br/>"
				+ " - Survival: you must dodge all your enemies as longer as you can. Easy, normal and hard levels available.<br/>"
				+ " - Impact: you must destroy all your enemies in the minor time possible, doing that they crash into the board blocks, but be careful, if you touch one block you will be the destroyed one. 20 unlockable levels available (5 easy, 5 normal, 5 hard, 5 extreme).<br/>"
				+ " - Free: in this game mode you could configure the game play completely.",
			"Els diversos modes de joc amb els que compta són:<br/>"
				+ " - Supervivència: Hauràs d'esquivar als teus enemics durant el major temps possible. Disponible en nivells fàcil, normal i difícil.<br/>"
				+ " - Impacte: Hauràs de destruir a tots els teus enemics en el menor temps possible, fent que xoquen contra els blocs del tauler, però tingues cura de no tocar tu els blocs o quedaràs destruït. Disponibles 20 nivells desbloquejables (5 fàcils, 5 normals, 5 difícils i 5 extrems).<br/>"
				+ " - Lliure: En aquest mode podràs configurar completament la forma de joc."];
		strings[cardId].description.content[2] = [
			"Entre las características más destacables del juego tenemos:<br/>"
				+ " - Ranking online.<br/>"
				+ " - Uso de objetos mediante botones para ayudarte en tu aventura.<br/>"
				+ " - Posibilidad de utilizar tus propios archivos '.mp3' para la música de fondo. Por defecto viene un pack de canciones del grupo <a href='http://www.elsatirovago.com/' target='_blank'>'El Sátiro Vago'</a>.<br/>"
				+ " - Completísimo manual de instrucciones que te enseñará todo cuanto necesitas saber sobre la mecánica del juego y su configuración.<br/>"
				+ " - Versión específica para jugar en emuladores.",
			"Some game main features are:<br/>"
				+ " - Online ranking.<br/>"
				+ " - Use objects to help you in your adventure by pressing buttons.<br/>"
				+ " - Possibility to use your own '.mp3' files for background music. By default are some songs of <a href='http://www.elsatirovago.com/' target='_blank'>'El Sátiro Vago'</a> group.<br/>"
				+ " - An instructions manual which teach you all you need to know about gameplay and game configuration.<br/>"
				+ " - A specific version for emulators.",
			"Entre les característiques més destacables del joc trobem:<br/>"
				+ " - Ranking online.<br/>"
				+ " - Ús d'objectes mitjançant botons per ajudar-te en la teua aventura.<br/>"
				+ " - Possibilitat d'utilitzar els teus propis arxius '.mp3' per a la música de fons. Per defecte ve un pack del grup <a href='http://www.elsatirovago.com/' target='_blank'>'El Sátiro Vago'</a>.<br/>"
				+ " - Completíssim manual d'instruccions que t'ensenyarà tot quan necessites saber sobre la mecànica del joc i la seua configuració.<br/>"
				+ " - Versió específica per poder jugar en emuladors."];
		strings[cardId].description.count = 3;
		strings[cardId].installation = "nds";
		strings[cardId].media = {};
		strings[cardId].media.img = {};
		strings[cardId].media.img.content = "gravity-";
		strings[cardId].media.img.contentType = "jpg";
		strings[cardId].media.img.count = 4;
		strings[cardId].media.video = {};
		strings[cardId].media.video.content = [];
		strings[cardId].media.video.content[0] = ["buRZzIU2Lp8"];
		strings[cardId].media.video.count = 1;
	}
	
	// LIGHTS OUT!
	{
		cardId = "lightsout";
		strings[cardId] = {};
		strings[cardId].title = ["Lights Out!", "Lights Out!", "Lights Out!"];
		strings[cardId].cover = "./img/lightsout.jpg";
		strings[cardId].platform = "Nintendo DS";
		strings[cardId].version = "2.0 (Final)";
		strings[cardId].category = "game";
		strings[cardId].genre = "puzzle";
		strings[cardId].languages = {};
		strings[cardId].languages.content = [];
		strings[cardId].languages.content[0] = "EN";
		strings[cardId].languages.content[1] = "ES";
		strings[cardId].languages.count = 2;
		strings[cardId].libraries = "PAlib (080203CU)";
		strings[cardId].languagesPrg = "C";
		strings[cardId].releaseDate = ["24 de agosto de 2009", "August 24, 2009", "24 d'agost de 2009"];
		strings[cardId].download = "./downloads/NDS/lightsout.rar";
		strings[cardId].description = {};
		strings[cardId].description.content = [];
		strings[cardId].description.content[0] = [
			"Lights Out! es la adaptación para Nintendo DS del <a href='http://en.wikipedia.org/wiki/Lights_Out_(game)' target='_blank'>clásico juego</a> con el mismo nombre.",
			"Lights Out! is a Nintendo DS port of the <a href='http://en.wikipedia.org/wiki/Lights_Out_(game)' target='_blank'>classic game</a> with the same name.",
			"Lights Out! és l'adaptació per Nintendo DS del <a href='http://en.wikipedia.org/wiki/Lights_Out_(game)' target='_blank'>clàssic joc</a> amb el mateix nom."];
		strings[cardId].description.content[1] = [
			"El objetivo del juego es apagar todas las luces, teniendo en cuenta que cuando pulsas una luz, ésta revierte el estado de las que están a los lados, y arriba y abajo de la misma.",
			"The game objective is to turn off all lights, having in mind that when you push one light, this invests the status of lights from sides, up and down from it.",
			"L'objectiu del joc és apagar totes les llums, tenint en compte que quan polses una llum, aquesta reverteix l'estat de les que estan als costats, i dalt i baix d'aquesta."];
		strings[cardId].description.content[2] = [
			"El juego consta de cuatro tableros diferentes (desde 3x3 luces hasta 6x6) que se irán desbloqueando conforme se vayan superando, guarda la cantidad de movimientos de las mejores partidas y, además, cuenta con un modo extra de juego en el que aparecerán las luces encendidas aleatoriamente.",
			"Game have four different boards (from 3x3 lights to 6x6) and they will be unlocking when you pass them, it saves the minor number of movements of each board and, additionally, have an random mode in which lights will appear randomly turned on.",
			"El joc consta de quatre taulers diferents (des de 3x3 llums fins a 6x6) que s'aniran desbloquejant conforme es vagen superant, guarda la quantitat de moviments de les millors partides i, a més, compta amb un mode extra de joc en el qual apareixeran les llums enceses aleatòriament."];
		strings[cardId].description.content[3] = [
			"Por último, destacar que el sonido de fondo cambiará según se juegue entre las 9-21 horas, o entre las 21-9 horas.",
			"Finally, background sounds will change if you are play between 9 and 21 hour or between 21 and 9 hours.",
			"Finalment, destacar que el so de fons canviarà segons es jugue entre les 9-21 hores, o entre les 21-9 hores."];
		strings[cardId].description.count = 4;
		strings[cardId].contests = [
			"<a href='http://www.scenebeta.com/noticia/ganadores-scenery-beta-2009' target='_blank'>Scenery Beta 2009</a>: Quinto puesto.",
			"<a href='http://www.scenebeta.com/noticia/scenery-beta-09-winners' target='_blank'>Scenery Beta 2009</a>: Fifth place.",
			"<a href='http://www.scenebeta.com/noticia/ganadores-scenery-beta-2009' target='_blank'>Scenery Beta 2009</a>: Cinquè lloc."];
		strings[cardId].installation = "nds";
		strings[cardId].media = {};
		strings[cardId].media.img = {};
		strings[cardId].media.img.content = "lightsout-";
		strings[cardId].media.img.contentType = "png";
		strings[cardId].media.img.count = 3;
		strings[cardId].media.video = {};
		strings[cardId].media.video.content = [];
		strings[cardId].media.video.content[0] = ["I3Kpu9NqDRM"];
		strings[cardId].media.video.count = 1;
	}
	
	// MYSDIA DS
	{
		cardId = "mysdiads";
		strings[cardId] = {};
		strings[cardId].title = ["Mysdia DS", "Mysdia DS", "Mysdia DS"];
		strings[cardId].cover = "./img/mysdia.png";
		strings[cardId].platform = "Nintendo DS";
		strings[cardId].version = "0.1";
		strings[cardId].category = "game";
		strings[cardId].genre = "mmorpg";
		strings[cardId].languages = {};
		strings[cardId].languages.content = [];
		strings[cardId].languages.content[0] = "EN";
		strings[cardId].languages.content[1] = "ES";
		strings[cardId].languages.count = 2;
		strings[cardId].libraries = "Alib (080203CU)";
		strings[cardId].languagesPrg = "C";
		strings[cardId].releaseDate = ["6 de mayo de 2009", "May 6, 2009", "6 de maig de 2009"];
		strings[cardId].description = {};
		strings[cardId].description.content = [];
		strings[cardId].description.content[0] = [
			"Mysdia DS era un proyecto muy ambicioso, un MMORPG ni más ni menos, y durante seis meses trabajé en él en solitario. No hace falta decir que un trabajo así es prácticamente imposible llevarlo a cabo por una sola persona, por lo que al final se quedó en una prueba de concepto: una demostración de que un MMORPG era posible incluso en la limitada Nintendo DS.",
			"Mysdia DS was an ambitious project, an MMORPG, and along six months I worked on it by myself. I don't need to say that something like this can't be done only by one person, and eventually it became in a proof of concept: a demonstration that an MMORPG is possible even in the limited Nintendo DS.",
			"Mysdia DS va ser un projecte molt ambiciós, un MMORPG ni més ni menys, i durant sis mesos vaig treballar en ell en solitari. No cal dir que un treball així es pràcticament impossible dur-lo a terme per una sola persona, pel que al final es va quedar en una prova de concepte: una demostració de que un MMORPG era possible inclòs en la limitada Nintendo DS."];
		strings[cardId].description.content[1] = [
			"En todo ese tiempo, amén de aprender un buen puñado de cosas sobre conectividad, logré implementar todo el sistema de creación de cuentas y de personajes, pudiendo crear hasta cuatro personajes con cuenta, y pudiendo seleccionar entre cuatro razas diferentes, cada una con cuatro profesiones distintas.",
			"In all this time, besides learning a lot of connectivity things, I implemented all accounts and characters system, where you can create up to four characters by account, choosing over four different races, each one with four different jobs.",
			"En tot eixe temps, a més d'aprendre un bon grapat de coses sobre connectivitat, vaig implementar tot el sistema de creació d'usuaris i de personatges, podent crear fins a quatre personatges per usuari, i podent seleccionar entre quatre races diferents, cadascuna d'elles amb quatre professions distintes."];
		strings[cardId].description.content[2] = [
			"También conseguí implementar todo el sistema de localización, control y animación de personajes, tanto del propio como de los ajenos, de manera que se calculasen los personajes que entraban dentro del encuadre de la pantalla y se cargasen o borrasen dinámicamente; que aún sin estar en el encuadre se mostrase su posición en el mapa global de la pantalla superior y que pasado un tiempo de inactividad fuese expulsado el personaje del servidor.",
			"I also could implement all the location, control and animation system of characters, both your and others, calculating characters that must be showed in screen and creating or deleting them dynamically. Their position was also displayed in the up screen global map, even if they weren't shown in bottom screen, and after some time without activity, character was kicked from server.",
			"També vaig implementar tot el sistema de localització, control i animació de personatges, tat del propi com dels alés, de manera que es detectaven els personatges que entraven dins de l'enfoc de la pantalla i es carregaven o s'eliminaven dinàmicament; que tot i no estar dins de l'enfoc de la pantalla apareguera la seua posició en el mapa global de la pantalla superior i que passat un temps d'inactivitat el personatge fora expulsat del servidor."];
		strings[cardId].description.content[3] = [
			"Otra de las características que definen Mysdia DS es la incorporación de un actualizador, de manera que se podía actualizar el juego a través de Internet directamente desde la consola y, además, desde el juego se podía ejecutar el actualizador sin reinicar.",
			"Another feature of Mysdia DS is that it had an updater, so game could be updated directly from console by Internet and, also, the game updater could be launched directly from the game without reboot the console.",
			"Altra de les característiques que defineixen Mysdia DS és la incorporació d'un actualitzador, de manera que es podia actualitzar el joc a través d'Internet directament des de la consola i, a més, des del joc es podia executar l'actualitzador sense reiniciar."];
		strings[cardId].description.content[4] = [
			"Por último, destacar también la implementación de un sistema de chat general.",
			"Finally, note also the implementation of a general chat system.",
			"Per últim, destacar també la implementació d'un sistema de xat general."];
		strings[cardId].description.content[5] = [
			"Por desgracia, la falta de tiempo para depurar algunos errores graves y la sensación de haber cumplido el objetivo por el que empecé el proyecto (demostrar que era posible) hicieron que lo abandonase y liberase la última compilación del juego. Aún así, es uno de los proyectos de los que más orgulloso me siento de haber llevado a cabo.",
			"Unfortunately, the lack of time to debug some errors and the feeling of having accomplished the main project goal (demonstrate that it was possible) made to leave him, releasing the last game compilation. Even so, this is one of the projects that I'm most proud to have carried out.",
			"Per desgràcia, la falta de temps per depurar alguns errors greus i la sensació d'haver complit l'objectiu pel qual vaig començar el projecte (demostrar que era possible) van fer que el deixara de costat i publicara l'última compilació del joc. Tot i això, és un dels projectes dels que més orgullós estic d'haver dut a terme."];
		strings[cardId].description.count = 6;
		strings[cardId].extras = [
			"<div class='listname'><br/>Razas</div>"
				+ "	<p><b>SKULLS:</b> Los Skulls son criaturas de Halloween, seres incomprendidos cuyo sarcástico y macabro humor les ha supuesto la consideración de alocados y despreocupados. Aún así, ellos siguen expandiéndose por el mundo, llevando allá donde van su poderosa magia.<br/>Consta de los siguientes subtipos: Hombre del saco, Calabaza, Paraguas, Esqueleto.<br/><img src='./img/mysdia-r1.png'/></p>"
				+ "	<p><b>MONTAÑESES:</b> Los Montañeses son unos intrépidos y valientes aventureros cuya pasión les ha puesto en más de una ocasión en serios problemas de los que no hubiesen podido salir sin su increíble fuerza bruta, su resistencia física y su agilidad.<br/>Consta de los siguientes subtipos: Gato, Leopardo, Tigre, Pantera.<br/><img src='./img/mysdia-r2.png'/></p>"
				+ "	<p><b>FLYERS:</b> Los Flyers son los dueños del cielo, donde campan a sus anchas realizando vuelos a una velocidad de vértigo o investigando los misterios ocultos en las nubes. Su característica principal es la excelente defensa que poseen, tanto física como mágica.<br/>Consta de los siguientes subtipos: Libélula, Dragón, Fénix, Hada.<br/><img src='./img/mysdia-r3.png'/></p>"
				+ "	<p><b>HORNS:</b> Los Horns son, de entre todas las razas, los seres más tozudos e irritables. Poseen una fuerza física tremenda y una excelente puntería, por lo que es mejor intentar no molestarles mucho al cruzarse con ellos.<br/>Consta de los siguientes subtipos: Toro, Cabra, Mino, Unicornio.<br/><img src='./img/mysdia-r4.png'/></p>"
				+ "	"
				+ "	<div class='listname'><br/>Profesiones</div>"
				+ "	<p><b>MAGOS:</b> Los magos son los poseedores de la magia blanca. Con ella, son capaces de ayudarse a sí mismos y a los demás, centrándose principalmente en el apoyo.</p>"
				+ "	<p><b>BRUJOS:</b> Los brujos son los poseedores de la magia negra. Con ella, son capaces de crear poderosos y siniestros conjuros para destrozar a sus enemigos.</p>"
				+ "	<p><b>GUERREROS:</b> Los guerreros son seres justos y valientes que luchan por defender sus ideales a fuerza de espada, pues su poder mágico apenas está desarrollado.</p>"
				+ "	<p><b>MERCENARIOS:</b> Los mercenarios son seres sin ética ni moral, capaces de cualquier cosa por dinero. Además, poseen un equilibrio entre sus características físicas y mágicas que los convierten en unos adversarios formidables.</p>"
				+ "	",
			"<div class='listname'><br/>Races</div>"
				+ "	<p><b>SKULLS:</b> Skulls are Halloween creatures, misunderstood beings whose sarcastic and macabre sense of humour have made them be known as crazy and unworried people. Anyway, they still expand themselves all around the world, taking everywhere they go their powerful magic.<br/>There are the following sub-races: Bagman, Pumpkin, Umbrella, Skeleton.<br/><img src='./img/mysdia-r1.png'/></p>"
				+ "	<p><b>HIGHLANDERS:</b> Highlanders are dauntless and brave adventurers. Their passion usually put them in big trouble, but they will scape thanks to their brute strength, stamina and agility.<br/>There are the following sub-races: Cat, Leopard, Tiger, Panther.<br/><img src='./img/mysdia-r2.png'/></p>"
				+ "	<p><b>FLYERS:</b> Flyers are sky owners, where they fly at ease, making full speed flights or investigating hidden mysteries in the clouds. Their main characteristic is their great defence, as physical as magical.<br/>There are the following sub-races: Dragonfly, Dragon, Phoenix, Fairy.<br/><img src='./img/mysdia-r3.png'/></p>"
				+ "	<p><b>HORNS:</b> From all races, Horns are the most irritable and stubborn beings. They have an enormous strength and an excellent aim. That's why it's better don't disturb him if you bump into a Horn.<br/>There are the following sub-races: Bull, Goat, Mino, Unicorn.<br/><img src='./img/mysdia-r4.png'/></p>"
				+ "	"
				+ "	<div class='listname'><br/>Jobs</div>"
				+ "	<p><b>MAGICIANS:</b> Magicians are the white magic owners. With magic, they can help others and themselves, focusing mainly in supporting tasks.</p>"
				+ "	<p><b>WIZARDS:</b> Wizards are the black magic owners. They can use it to create powerful and dark spellings that can destroy their enemies.</p>"
				+ "	<p><b>WARRIORS:</b> Warriors are brave and fair people. They fight their ideals by sword, because their magic potential isn't developed enough.</p>"
				+ "	<p><b>MERCENARIES:</b> Mercenaries are amoral people with no ethics. They will do anything by money, as well as they have a perfect balance between their magical and physic characteristics that makes them terrific enemies.</p>"
				+ "	",
			"<div class='listname'><br/>Races</div>"
				+ "	<p><b>SKULLS:</b> Els Skulls són criatures de Halloween, sers incompresos als qui el seu sarcàstic i macabre humor els ha suposat la consideració de bojos i despreocupats. Tot i això, ells continuen expandint-se pel món, duent allà on van la seua poderosa màgia.<br/>Consta dels següents subtipus: Home del sac, Carabassa, Paraigües, Esquelet.<br/><img src='./img/mysdia-r1.png'/></p>"
				+ "	<p><b>MUNTANYESOS:</b> Els Muntanyesos són uns intrèpids i valents aventurers als qui la seua passió els ha posat en més d'una ocasió en seriosos problemes dels que no hagueren pogut eixir sense la seua increïble força bruta, la seua resistència física i la seua agilitat.<br/>Consta dels següents subtipus: Gat, Lleopard, Tigre, Pantera.<br/><img src='./img/mysdia-r2.png'/></p>"
				+ "	<p><b>FLYERS:</b> Els Flyers són els amos del cel, on campen lliurement realitzant vols a una velocitat vertiginosa o investigant els misteris ocults als núvols. La seua característica principal és l'excel·lent defensa que tenen, tant física com màgica.<br/>Consta dels següents subtipus: Libèl·lula, Drac, Fènix, Fada.<br/><img src='./img/mysdia-r3.png'/></p>"
				+ "	<p><b>HORNS:</b> Els Horns són, d'entre totes les races, els sers més cabuts i irritants. Posseeixen una força física tremenda i una excel·lent punteria, pel que és millor intentar no molestar-los molt al creuar-se amb ells.<br/>Consta dels següents subtipus: Bou, Cabra, Mino, Unicorn.<br/><img src='./img/mysdia-r4.png'/></p>"
				+ "	"
				+ "	<div class='listname'><br/>Professions</div>"
				+ "	<p><b>MACS:</b> Els macs són els posseïdors de la màgia blanca. Amb ella poden ajudar-se a sí mateixos i als altres, centrant-se principalment en el recolzament.</p>"
				+ "	<p><b>BRUIXOTS:</b> Els bruixots són els posseïdors de la màgia negra. Amb ella poden crear poderosos i sinistres conjurs per destrossar als seus enemics.</p>"
				+ "	<p><b>GUERRERS:</b> Els guerrers són sers justos i valents que lluiten per defendre els seus ideals a força d'espasa, doncs el seu poder màgic pràcticament no està desenvolupat.</p>"
				+ "	<p><b>MERCENARIS:</b> Els mercenaris són sers sense ètica ni moral, capaços de qualsevol cosa per diners. A més, tenen un equilibri entre les seues característiques físiques i màgiques que els converteixen en uns adversaris formidables.</p>"
				+ "	"
		];
		strings[cardId].media = {};
		strings[cardId].media.img = {};
		strings[cardId].media.img.content = "mysdia-";
		strings[cardId].media.img.contentType = "png";
		strings[cardId].media.img.count = 5;
		strings[cardId].media.video = {};
		strings[cardId].media.video.content = [];
		strings[cardId].media.video.content[0] = ["18Ij73UNO4g"];
		strings[cardId].media.video.content[1] = ["W2-BCie6EcI"];
		strings[cardId].media.video.content[2] = ["4Dn849v6LCs"];
		strings[cardId].media.video.content[3] = ["RSnrTMICecA"];
		strings[cardId].media.video.count = 4;
	}
	
	/*
	------------------------------------------------ PC --------------------------------------------------------------------
	*/
	
	// FUNGUS
	{
		cardId = "fungus";
		strings[cardId] = {};
		strings[cardId].title = ["Fungus", "Fungus", "Fungus"];
		strings[cardId].cover = "./img/fungus_en.jpg";
		strings[cardId].platform = "Windows";
		strings[cardId].version = "1.0 (Final)";
		strings[cardId].category = "app";
		strings[cardId].genre = "email";
		strings[cardId].languages = {};
		strings[cardId].languages.content = [];
		strings[cardId].languages.content[0] = "EN";
		strings[cardId].languages.content[1] = "ES";
		strings[cardId].languages.count = 2;
		strings[cardId].libraries = "<a href='http://www.openssl.org/' target='_blank'>OpenSSL</a>";
		strings[cardId].languagesPrg = "C, Visual Basic";
		strings[cardId].releaseDate = ["16 de agosto de 2012", "August 16, 2012", "16 d'agosto de 2012"];
		strings[cardId].download = "./downloads/PC/Fungus.rar";
		strings[cardId].description = {};
		strings[cardId].description.content = [];
		strings[cardId].description.content[0] = [
			"Fungus es un programa que nos permite enviar correos electrónicos haciendo uso de una cuenta de Gmail, con la diferencia de que podremos cambiar el nombre que se mostrará al receptor.",
			"Fungus is a program that allow us to send emails through a Gmail account, but with the difference that you can change the name that your receivers will see.",
			"Fungus és un programa que ens permet enviar correus electrònics fent ús d'un compte de Gmail, amb la diferència de que podrem canviar el nom que es mostrarà al receptor."];
		strings[cardId].description.content[1] = [
			"El programa también lleva incorporado un conector IMAP, que permite administrar tu cuenta de Gmail mediante comandos IMAP, los cuales se pueden ver en el manual detallado que incorpora.",
			"The program have also incorporated an IMAP connector (“IMAP Connection” button), that allows you to manage your Gmail account through IMAP commands, which you can see in the manual.",
			"El programa també incorpora un connector IMAP, que permet administrar el teu compte de Gmail mitjançant ordres IMAP, que es poden consultar al manual que incorpora."];
		strings[cardId].description.count = 2;
		strings[cardId].installation = "pc";
		strings[cardId].media = {};
		strings[cardId].media.img = {};
		strings[cardId].media.img.content = "fungus-";
		strings[cardId].media.img.contentType = "png";
		strings[cardId].media.img.count = 4;
		strings[cardId].media.video = {};
		strings[cardId].media.video.count = 0;
	}
	
	// STORM ALARM
	{
		cardId = "stormalarm";
		strings[cardId] = {};
		strings[cardId].title = ["Storm Alarm", "Storm Alarm", "Storm Alarm"];
		strings[cardId].cover = "./img/stormalarm.gif";
		strings[cardId].platform = "Windows, Linux";
		strings[cardId].version = "Windows 2.0.0 - Linux 1.1.1";
		strings[cardId].category = "app";
		strings[cardId].genre = "meteo";
		strings[cardId].languages = {};
		strings[cardId].languages.content = [];
		strings[cardId].languages.content[0] = "ES";
		strings[cardId].languages.count = 1;
		strings[cardId].libraries = "<a href='http://www.sfml-dev.org/' target='_blank'>Simple and Fast Multimedia Library 1.6</a>";
		strings[cardId].languagesPrg = "C/C++";
		strings[cardId].releaseDate = ["23 de noviembre de 2011", "November 23, 2011", "23 de novembre de 2011"];
		strings[cardId].downloadExtra = [
			"<a class='download' href='./downloads/PC/StormAlarm_Setup.exe' target='_blank'>Windows (installer)</a><br/>"
				+ "	<a class='download' href='./downloads/PC/StormAlarm_Portable.rar' target='_blank'>Windows (portable)</a><br/>"
				+ "	<a class='download' href='./downloads/PC/StormAlarm_Linux.tar.gz' target='_blank'>Linux (v1.1.1)</a><br/>"
				+ "	<a class='download' href='./downloads/PC/LibreriasSFML_Setup.exe' target='_blank'>SFML 1.6 (Windows - installer)</a><br/>",
			"<a class='download' href='./downloads/PC/StormAlarm_Setup.exe' target='_blank'>Windows (installer)</a><br/>"
				+ "	<a class='download' href='./downloads/PC/StormAlarm_Portable.rar' target='_blank'>Windows (portable)</a><br/>"
				+ "	<a class='download' href='./downloads/PC/StormAlarm_Linux.tar.gz' target='_blank'>Linux (v1.1.1)</a><br/>"
				+ "	<a class='download' href='./downloads/PC/LibreriasSFML_Setup.exe' target='_blank'>SFML 1.6 (Windows - installer)</a><br/>",
			"<a class='download' href='./downloads/PC/StormAlarm_Setup.exe' target='_blank'>Windows (installer)</a><br/>"
				+ "	<a class='download' href='./downloads/PC/StormAlarm_Portable.rar' target='_blank'>Windows (portable)</a><br/>"
				+ "	<a class='download' href='./downloads/PC/StormAlarm_Linux.tar.gz' target='_blank'>Linux (v1.1.1)</a><br/>"
				+ "	<a class='download' href='./downloads/PC/LibreriasSFML_Setup.exe' target='_blank'>SFML 1.6 (Windows - installer)</a><br/>"
			];
		strings[cardId].description = {};
		strings[cardId].description.content = [];
		strings[cardId].description.content[0] = [
			"Storm Alarm es un programa que, haciendo uso de las imágenes de radar de la Agencia Estatal de Meteorología (AEMET), nos avisará en caso de que un foco convectivo que supere un umbral determinado (tanto de reflectividad como de echotop) y/o una tormenta eléctrica se encuentre cerca de nuestra posición. Para ello, bastará con configurar unos simples parámetros.",
			"Storm Alarm is a program who, using the maps from State Meteorology Agency (AEMET), will advise us when a convective outbreak that exceeds a certain level (both reflectivity and ECHOTOP) and/or a thunderstorm is near of our position. To do it, just needs to configure some parameters.",
			"Storm Alarm és un programa que, fent ús de les imatges de radar de l'Agencia Estatal de Meteorologia (AEMET), ens avisarà en cas de que un foc convectiu que supere un nivell determinat (tant de reflectivitat com d'echotop) i/o una tempesta elèctrica es troben a prop de la nostra posició. Per fer-ho, només cal configurar uns simples paràmetres."];
		strings[cardId].description.content[1] = [
			"Entre sus características principales destacan:<br/>"
				+ " - Seguimiento con hasta tres tipos de radar: reflectividad, ECHOTOP, rayos.<br/>"
				+ "	- Seguimiento de hasta dos mapas por tipo de radar.<br/>"
				+ " - Posibilidad de animar los mapas, pudiéndose remontar hasta 24 horas atrás respecto de la hora actual.<br/>"
				+ " - Alta configuración de los parámetros de alarma: sonido, repeticiones, marcador de zona de alarma, nivel de alarma...<br/>"
				+ " - Alta configuración de los parámetros de vigilancia: marcador visual, zoom auxiliar, movimiento de zona...<br/>"
				+ " - Alta adaptabilidad a todo tipo de pantallas y resoluciones, pudiendo seleccionar el tipo de pantalla (4:3 o 16:9) y si mantener las proporciones de la misma al redimensionar la ventana del programa.<br/>"
				+ " - Posibilidad de configuración directa desde el archivo 'config.ini', que está debidamente comentado.<br/>"
				+ " - Inclusión de un completo manual de uso.<br/>"
				+ " - Refranero meteorológico con 101 refranes.<br/>"
				+ " - Aviso de nuevas actualizaciones.",
			"Some of its main features are:<br/>"
				+ " - Watching of up to three radar types: reflectivity, ECHOTOP, beams.<br/>"
				+ "	- Watching of up to two maps by radar.<br/>"
				+ " - Possibility to animate the maps, going back up to 24 hours respect the current time.<br/>"
				+ " - High configuration of alarm parameters: sound, repeats, alarm zone's mark, alarm level...<br/>"
				+ " - High configuration of vigilance parameters: visual mark, auxiliary zoom, zone movement...<br/>"
				+ " - High adaptability to all kind of screens and resolutions; you can choose the display type (4:3 or 16:9) and if you want to keep the screen aspect when resizing the program window.<br/>"
				+ " - Possibility of configure the program directly from 'config.ini', which is perfectly commented.<br/>"
				+ " - A complete manual.<br/>"
				+ " - 101 weather proverbs.<br/>"
				+ " - Check for updates.",
			"Entre les seues característiques principals destaquen:<br/>"
				+ " - Seguiment amb fins a tres tipus de radar: reflectivitat, ECHOTOP, raigs.<br/>"
				+ "	- Seguiment amb fins a dos mapes per tipus de radar.<br/>"
				+ " - Possibilitat d'animar els mapes, que poden remuntar-se fins a 24 hores enrere respecte de l'hora actual.<br/>"
				+ " - Alta configuració dels paràmetres d'alarma: so, repeticions, marcador de zona d'alarma, nivell d'alarma...<br/>"
				+ " - Alta configuració dels paràmetres de vigilància: marcador visual, zoom auxiliar, moviment de zona...<br/>"
				+ " - Alta adaptabilitat a tot tipus de pantalles i resolucions, ja que es pot seleccionar el tipus de pantalla (4:3 o 16:9) i si mantenir les proporcions o no al redimensionar la finestra del programa.<br/>"
				+ " - Possibilitat de configuració directa des de l'arxiu 'config.ini', que està perfectament comentat.<br/>"
				+ " - Inclusió d'un complet manual d'ús.<br/>"
				+ " - Refranyer meteorològic amb 101 refranys.<br/>"
				+ " - Avís de noves actualitzacions."];
		strings[cardId].description.count = 2;
		strings[cardId].extras = [
			"<div class='listname'><br/>Menciones</div>"
				+ "<p><a href='http://www.tiempo.com/ram/16827/storm-alarm-una-aplicacion-sobre-la-cercania-de-nucleos-convectivos/' target='_blank'>Revista del Aficionado a la Meteorología</a>, Octubre de 2011.<br/>"
				+ "<a href='http://www.tiempo.com/ram/18144/storm-alarm-una-aplicacion-sobre-la-cercania-de-nucleos-convectivos-nueva-version-storm-alarm-2-0-0/' target='_blank'>Revista del Aficionado a la Meteorología</a>, Diciembre de 2011.</p>",
			"<div class='listname'><br/>Mentions</div>"
				+ "<p><a href='http://www.tiempo.com/ram/16827/storm-alarm-una-aplicacion-sobre-la-cercania-de-nucleos-convectivos/' target='_blank'>Amateur Meteorology Magazine</a>, October 2011.<br/>"
				+ "<a href='http://www.tiempo.com/ram/18144/storm-alarm-una-aplicacion-sobre-la-cercania-de-nucleos-convectivos-nueva-version-storm-alarm-2-0-0/' target='_blank'>Amateur Meteorology Magazine</a>, December 2011.</p>",
			"<div class='listname'><br/>Mencions</div>"
				+ "<p><a href='http://www.tiempo.com/ram/16827/storm-alarm-una-aplicacion-sobre-la-cercania-de-nucleos-convectivos/' target='_blank'>Revista de l'Aficionat a la Meteorologia</a>, Octubre de 2011.<br/>"
				+ "<a href='http://www.tiempo.com/ram/18144/storm-alarm-una-aplicacion-sobre-la-cercania-de-nucleos-convectivos-nueva-version-storm-alarm-2-0-0/' target='_blank'>Revista de l'Aficionat a la Meteorologia</a>, Desembre de 2011.</p>"
		];
		strings[cardId].media = {};
		strings[cardId].media.img = {};
		strings[cardId].media.img.content = "stormalarm-";
		strings[cardId].media.img.contentType = "png";
		strings[cardId].media.img.count = 4;
		strings[cardId].media.video = {};
		strings[cardId].media.video.count = 0;
	}
	
	// HIMITSU
	{
		cardId = "himitsu";
		strings[cardId] = {};
		strings[cardId].title = ["Himitsu", "Himitsu", "Himitsu"];
		strings[cardId].cover = "./img/himitsu.png";
		strings[cardId].platform = "Windows";
		strings[cardId].version = "1.1 (Final)";
		strings[cardId].category = "app";
		strings[cardId].genre = "crypt";
		strings[cardId].languages = {};
		strings[cardId].languages.content = [];
		strings[cardId].languages.content[0] = "EN";
		strings[cardId].languages.content[1] = "ES";
		strings[cardId].languages.count = 2;
		strings[cardId].languagesPrg = "C, Visual Basic";
		strings[cardId].releaseDate = ["19 de agosto de 2009", "August 19, 2009", "19 d'agosto de 2009"];
		strings[cardId].download = "./downloads/PC/Himitsu.rar";
		strings[cardId].description = {};
		strings[cardId].description.content = [];
		strings[cardId].description.content[0] = [
			"Himitsu ('Secreto' en japonés), es un programa para PC que te permitirá codificar y decodificar mensajes de texto, bien sea directamente o desde archivos '.txt', como por ejemplo: <em>Frui niorbnf wb jp pjioi tidqfppr qese uo. Temaeut, Ihzpkfq.</em>",
			"Himitsu ('Secret' in Japanese) is a program who allows you to encoding and decoding text messages typing directly or from '.txt' files. For example: <em>Oux piot kfrtehi iet jp rfbsiu hpq zuv. Qffbqer, Ffmunis.</em>",
			"Himitsu ('Secret' en japonés), és un programa per PC que et permetrà codificar i descodificar missatges de text, siga directament o des d'arxius '.txt', com per exemple: <em>Bsvitp notrbphi ke ou uì tidqfpt tfq ua. Temauedopjt, Ihzpkfq.</em>"];
		strings[cardId].description.content[1] = [
			"Soporta el juego de caracteres del español y el inglés. Ideal si quieres tener a mano archivos de texto importantes y no quieres que nadie lea su contenido.",
			"English and Spanish characters support. Ideal if you want to have important text files and you don't want anyone to read the content.",
			"Suporta el joc de caràcters de l'espanyol i l'anglés. Ideal si vols tindre a mà arxius de text importants i no vols que ningú llitja el seu contingut."];
		strings[cardId].description.count = 2;
		strings[cardId].installation = "pc";
		strings[cardId].media = {};
		strings[cardId].media.img = {};
		strings[cardId].media.img.content = "himitsu-";
		strings[cardId].media.img.contentType = "png";
		strings[cardId].media.img.count = 1;
		strings[cardId].media.video = {};
		strings[cardId].media.video.count = 0;
	}
	
	/*
	------------------------------------------------ WEB --------------------------------------------------------------------
	*/
	
	
	/*
	------------------------------------------------ OTHERS --------------------------------------------------------------------
	*/
		
	// STORM CHASER SCRIPT
	{
		cardId = "stormchaserscript";
		strings[cardId] = {};
		strings[cardId].title = ["Storm Chaser Script", "Storm Chaser Script", "Storm Chaser Script"];
		strings[cardId].cover = "./img/chdk.png";
		strings[cardId].platform = "Canon <a href='http://chdk.wikia.com/wiki/CHDK' target='_blank'>CHDK</a>";
		strings[cardId].version = "1.0 (Final)";
		strings[cardId].category = "app";
		strings[cardId].genre = "meteo";
		strings[cardId].languages = {};
		strings[cardId].languages.content = [];
		strings[cardId].languages.content[0] = "EN";
		strings[cardId].languages.content[1] = "ES";
		strings[cardId].languages.count = 2;
		strings[cardId].languagesPrg = "Basic";
		strings[cardId].releaseDate = ["30 de junio de 2010", "June 30, 2010", "30 de Juny de 2010"];
		strings[cardId].download = "./downloads/OTHERS/stormchaserscript.rar";
		strings[cardId].description = {};
		strings[cardId].description.content = [];
		strings[cardId].description.content[0] = [
			"Este script te permite añadir a tu cámara de fotos la posibilidad de realizar timelapses, cazar rayos, apagar la cámara a una determinada hora o bajo ciertas circunstancias (fin de espacio libre, sobrecalentamiento...), así como la configuración total de los modos timelapse y cazarayos. También se puede activar un modo dual en el que se establecen las franjas horarias en las que la cámara actuará en modo timelapse o en modo cazarayos, y se puede activar la opción de ahorro de energía para apagar la pantalla de la cámara mientras funciona.",
			"This script allows you to add to your camera the possibility to make timelapses, beams hunt, turn off the camera at a certain hour or when there's certain circumstances (out of free space, overheating...), and the total configuration of timelapse and lighting mode. You can use a dual mode in which you have to establish slots time in which the camera will use timelapse mode or lighting mode, and you can turn on the power saving option too for turn off the display when the camera is working.",
			"Aquest script permet afegir a la teua càmera de fotos la possibilitat de realitzar timelapses, caçar raigs, apagar la càmera a una determinada hora o al donar-se certes circumstàncies (esgotament de l'espai lliure, sobrecalfament...), així com la configuració total dels modes timelapse i caçaraigs. També es pot activar un mode dual en que s'estableixes les franges horàries en les que la càmera actuarà en mode timelapse o en mode caçaraigs, i es pot activar la opció d'estalvi d'energia per apagar la pantalla de la càmera mentres està funcionant."];
		strings[cardId].description.content[1] = [
			"Incluye un completo manual de instrucciones en el que explica cómo configurar todas y cada una de las opciones que ofrece.",
			"Includes a manual in which is explained how to configure all of the script options.",
			"Inclou un complet manual d'instruccions en que s'explica com configurar totes i cadascuna de les opcions que ofereix."];
		strings[cardId].description.count = 2;
		strings[cardId].musicDescription = {};
		strings[cardId].musicDescription.count = 0;
		strings[cardId].installation = "chdk";
		strings[cardId].media = {};
		strings[cardId].media.img = {};
		strings[cardId].media.img.content = "chdk-";
		strings[cardId].media.img.contentType = "jpg";
		strings[cardId].media.img.count = 2;
		strings[cardId].media.video = {};
		strings[cardId].media.video.content = [];
		strings[cardId].media.video.content[0] = ["i1lD8GyMXl8"];
		strings[cardId].media.video.count = 1;
	}
	
	/*
	------------------------------------------------ PUBLICATIONS --------------------------------------------------------------------
	*/		
		
	// INTERCULTURAL
	{
		cardId = "intercultural";
		strings[cardId] = {};
		strings[cardId].title = [
			"La construcción de la escuela intercultural inclusiva desde procesos de investigación-acción", 
			"Construction of the inclusive intercultural school from research-action processes", 
			"La construcció de l'escola intercultural inclusiva des de processos d'investigació-acció"];
		strings[cardId].cover = "./img/uji.jpg";
		strings[cardId].platform = "Windows";
		strings[cardId].version = "1.0";
		strings[cardId].category = "app";
		strings[cardId].genre = "edu";
		strings[cardId].languages = {};
		strings[cardId].languages.content = [];
		strings[cardId].languages.content[0] = "ES";
		strings[cardId].languages.count = 1;
		strings[cardId].languagesPrg = "HTML, Javascript, Flash, C++";
		strings[cardId].releaseDate = ["2010", "2010", "2010"];
		strings[cardId].music = "";
		strings[cardId].downloadExtra = [
			"<a class='download' href='http://www.tenda.uji.es/pls/iglu/!GCPPA00.GCPPR0002?id_art=979&lg=ES' target='_blank'>COMPRAR</a><br/>",
			"<a class='download' href='http://www.tenda.uji.es/pls/iglu/!GCPPA00.GCPPR0002?id_art=979&lg=UK' target='_blank'>PURCHASE</a><br/>",
			"<a class='download' href='http://www.tenda.uji.es/pls/iglu/!GCPPA00.GCPPR0002?id_art=979&lg=CA' target='_blank'>COMPRAR</a><br/>"];
		strings[cardId].description = {};
		strings[cardId].description.content = [];
		strings[cardId].description.content[0] = [
			"En esta publicación me encargué del diseño técnico y gráfico de los menús del CD que la acompaña. Para ello, utilicé C++ para realizar el autorun, lanzando el navegador Internet Explorer y, en caso de no encontrarlo, el navegador por defecto, y HTML + Javascript + Flash para los contenidos, que incluyen entre otras funciones: carga y visualización de archivos PDF, carga y visualización de vídeos FLV, y galerías de imágenes.",
			"In this publication I took care of technical design and graphical design of the menus of the accompanying CD. For technical design I used C++ to make the autorun who launch Internet Explorer bowser and, if not found, it launch the default bowser, and HTML + Javascript + Flash to the contents, which includes: loading and viewing of PDF files, loading and viewing of FLV videos, and image galleries.",
			"En aquesta publicació em vaig encarregar del disseny tècnic i gràfic dels menús del CD que l'acompanyen. Per fer-ho, vaig utilitzar C++ per realitzar l'autorun, llançant el navegador Internet Explorer i, en cas de no trobar-lo, el navegador per defecte, i HTML + Javascript + Flash pels continguts, que inclouen entre altres funcions: càrrega i visualització d'arxius PDF, càrrega i visualització de vídeos FLV, i galeries d'imatges."];
		strings[cardId].description.content[1] = [
			"El apartado gráfico consiste en una serie de fondos y botones temáticos creados con ayuda del Paint Shop Pro, más el retoque de imágenes creadas por los niños protagonistas de la investigación.",
			"Graphical design was to create some thematic backgrounds and buttons using Paint Shop Pro, and to modify some images created by children of this research.",
			"L'apartat gràfic consisteix en una sèrie de fons i botons temàtics creats amb ajuda del Paint Shop Pro, més el retoc d'imatges creades pels xiquets protagonistes de la investigació."];
		strings[cardId].description.count = 2;
		strings[cardId].extras = [
			"<div class='listname'><br/>Información</div>"
				+ "<p>- Autores:&nbsp;</span>Auxiliadora Sales, Odet Moliner, Joan Andrés Traver.<br/>"
				+ "- ISBN:&nbsp;</span>978-84-8021-738-5<br/>"
				+ "- Editorial:&nbsp;</span>Universidad Jaume I.<br/>"
				+ "- Colección:&nbsp;</span><em>e-educació</em>.<br/></p>" 
				+ " "
				+ "	<div class='listname'><br/>Aclaraciones legales</div>"
				+ "	<p>Las muestras presentadas en esta web pertenecen a sus respectivos autores, quedando prohibida su copia, modificación o distribución sin su consentimiento.</p>"
				+ "	",
			"<div class='listname'><br/>Información</div>"
				+ "<p>- Authors:&nbsp;</span>Auxiliadora Sales, Odet Moliner, Joan Andrés Traver.<br/>"
				+ "- ISBN:&nbsp;</span>978-84-8021-738-5<br/>"
				+ "- Editorial:&nbsp;</span>Universidad Jaume I.<br/>"
				+ "- Collection:&nbsp;</span><em>e-educació</em>.<br/></p>"
				+ " "
				+ "	<div class='listname'><br/>Legal clarifications</div>"
				+ "	<p>The samples presented in this web belong to their respective owners. Forbidden to copy, modification or distribution without their consent.</p>"
				+ "	",
			"<div class='listname'><br/>Información</div>"
				+ "<p>- Autors:&nbsp;</span>Auxiliadora Sales, Odet Moliner, Joan Andrés Traver.<br/>"
				+ "- ISBN:&nbsp;</span>978-84-8021-738-5<br/>"
				+ "- Editorial:&nbsp;</span>Universidad Jaume I.<br/>"
				+ "- Col·lecció:&nbsp;</span><em>e-educació</em>.<br/></p>"
				+ " "
				+ "	<div class='listname'><br/>Aclariments legals</div>"
				+ "	<p>Les mostres presentades en aquesta web pertanyen als seus respectius autors; queda prohibida la seua còpia, modificació o distribució sense el seu consentiment.</p>"
				+ "	"
		];
		strings[cardId].media = {};
		strings[cardId].media.img = {};
		strings[cardId].media.img.content = "uji-";
		strings[cardId].media.img.contentType = "png";
		strings[cardId].media.img.count = 3;
		strings[cardId].media.video = {};
		strings[cardId].media.video.count = 0;
	}
	
	/*
	------------------------------------------------ OFFTOPIC --------------------------------------------------------------------
	*/		
		
	// NÉMORAK
	{
		cardId = "nemorak";
		strings[cardId] = {};
		strings[cardId].title = ["Némorak", "Némorak", "Némorak"];
		strings[cardId].cover = "./img/nemorak.jpg";
		strings[cardId].platform = "Amazon, Wattpad";
		strings[cardId].category = "book";
		strings[cardId].genre = "novel";
		strings[cardId].languages = {};
		strings[cardId].languages.content = [];
		strings[cardId].languages.content[0] = "ES";
		strings[cardId].languages.count = 1;
		strings[cardId].releaseDate = ["2012", "2012", "2012"];
		strings[cardId].downloadExtra = [
			"<a class='download' href='http://www.amazon.es/N%C3%A9morak-Javier-Moya-N%C3%A1jera/dp/8490150745/ref=sr_1_1?ie=UTF8&qid=1349784455&sr=8-1' target='_blank'>COMPRAR EN AMAZON</a><br/>"
				+ "	<a class='download' href='http://es.united-pc.eu/libros/infantil-jovenes/11-12-anos/nemorak.html' target='_blank'>COMPRAR EN LA EDITORIAL</a><br/>"
				+ "	<a class='download' href='https://www.wattpad.com/story/218558633-n%C3%A9morak' target='_blank'>LEER EN WATTPAD</a><br/>",
			"<a class='download' href='http://www.amazon.com/N%C3%A9morak-Javier-Moya-N%C3%A1jera/dp/8490150745/ref=sr_1_1?ie=UTF8&qid=1349784455&sr=8-1' target='_blank'>PURCHASE IN AMAZON</a><br/>"
				+ "	<a class='download' href='http://es.united-pc.eu/libros/infantil-jovenes/11-12-anos/nemorak.html' target='_blank'>PURCHASE IN THE EDITORIAL</a><br/>"
				+ "	<a class='download' href='https://www.wattpad.com/story/218558633-n%C3%A9morak' target='_blank'>READ IN WATTPAD</a><br/>",
			"<a class='download' href='http://www.amazon.es/N%C3%A9morak-Javier-Moya-N%C3%A1jera/dp/8490150745/ref=sr_1_1?ie=UTF8&qid=1349784455&sr=8-1' target='_blank'>COMPRAR EN AMAZON</a><br/>"
				+ "	<a class='download' href='http://es.united-pc.eu/libros/infantil-jovenes/11-12-anos/nemorak.html' target='_blank'>COMPRAR EN L'EDITORIAL</a><br/>"
				+ "	<a class='download' href='https://www.wattpad.com/story/218558633-n%C3%A9morak' target='_blank'>LLEGIR EN WATTPAD</a><br/>"];
		strings[cardId].extras = [
			"<div class='listname'><br/>Sinopsis</div>"
				+ "	<p>Agazapado a oscuras, tras una mesa, esperaba un hombre menudo de tez clara y pelo canoso. Llevaba allí lo suficiente como para no sentir las piernas, pero aún así aguantó estoicamente hasta que se vació el edificio. Corrió precipitadamente hacia un lujoso despacho, encendió el ordenador y buscó frenéticamente aquello por lo que tanto había esperado sin saber que, a consecuencia de sus actos, las tranquilas vidas de Darko, un antiguo asesino a sueldo, y de Julio, un adolescente aficionado a los juegos de lógica, se verían amenazadas por la sombra de la organización a la que estaba a punto de traicionar.</p>"
				+ " <p>Dos mundos distintos que confluyen inesperadamente y que desencadenan en una frenética historia de acción y misterio cuyo nexo de unión sólo tiene un nombre: Némorak.</p>"
				+ "	"
				+ "<div class='listname'><br/>Información</div>"
				+ "<p>- ISBN:&nbsp;</span>978-84-9015-074-0<br/>"
				+ "- Editorial:&nbsp;</span><a href='http://novumpublishing.es' target='_blank'>Novum Publishing</a> (ahora <a href='http://es.united-pc.eu' target='_blank'>United-PC</a>).<br/>"
				+ "- Edad objetivo:&nbsp;</span>11-12 años.<br/>" 
				+ "- Páginas:&nbsp;</span>196.<br/></p>" 
				+ " "
				+ "	<div class='listname'><br/>Aclaraciones legales</div>"
				+ "	<p>Las muestras presentadas en esta web pertenecen a sus respectivos autores, quedando prohibida su copia, modificación o distribución sin su consentimiento.</p>",
			"<div class='listname'><br/>Synopsis</div>"
				+ "	<p>A small man with light complexion and gray hair was waiting crouched in the dark, behind a table. He had been there for a long time and didn't feel his legs, but he stoically endured until the building was empty. Then, he ran ahead into a luxurious office, turned on the computer and searched frantically what he was waiting for without knowing that as result of their actions, the quiet lives of Darko, a former murder, and Julio, a teenage fan of puzzle games, would be threatened by the shadow of the organization he was about to betray.</p>"
				+ " <p>Two different worlds who unexpectedly come together to trigger a frenzy story of action and mistery and which link has only one name: Némorak.</p>"
				+ "	"
				+ "<div class='listname'><br/>Information</div>"
				+ "<p>- ISBN:&nbsp;</span>978-84-9015-074-0<br/>"
				+ "- Editorial:&nbsp;</span><a href='http://novumpublishing.es' target='_blank'>Novum Publishing</a> (now <a href='http://es.united-pc.eu' target='_blank'>United-PC</a>).<br/>"
				+ "- Age:&nbsp;</span>11-12 years.<br/>" 
				+ "- Pages:&nbsp;</span>196.<br/></p>" 
				+ " "
				+ "	<div class='listname'><br/>Legal clarifications</div>"
				+ "	<p>The samples presented in this web belong to their respective owners. Forbidden to copy, modification or distribution without their consent.</p>",
			"<div class='listname'><br/>Sinopsis</div>"
				+ "	<p>Amagat a fosques, darrere d'una taula, esperava un home menut de pell clara i pèl canós. Portava allí prou temps com per a no sentir les cames però, tot i això, va aguantar estoicament fins que es va buidar l'edifici. Aleshores, va córrer precipitadament fins un luxós despatx, va encendre l'ordinador i va buscar frenèticament allò pel que tant havia esperat sense saber que, com a conseqüència dels seus actes, les tranquil·les vides de Darko, un antic assassí a sou, i de Julio, un adolescent aficionat als jocs de lògica, es veurien amenaçades per l'ombra de l'organització a la qual estava a punt de trair.</p>"
				+ " <p>Dos móns distints que conflueixen inesperadament i que desencadenen en una frenètica història d'acció i misteri, i dels quals el nexe només té un nom: Némorak.</p>"
				+ "	"
				+ "<div class='listname'><br/>Información</div>"
				+ "<p>- ISBN:&nbsp;</span>978-84-9015-074-0<br/>"
				+ "- Editorial:&nbsp;</span><a href='http://novumpublishing.es' target='_blank'>Novum Publishing</a> (ara <a href='http://es.united-pc.eu' target='_blank'>United-PC</a>).<br/>"
				+ "- Edat:&nbsp;</span>11-12 anys.<br/>" 
				+ "- Pàgines:&nbsp;</span>196.<br/></p>" 
				+ " "
				+ "	<div class='listname'><br/>Aclariments legals</div>"
				+ "	<p>Les mostres presentades en aquesta web pertanyen als seus respectius autors; queda prohibida la seua còpia, modificació o distribució sense el seu consentiment.</p>"];
		strings[cardId].media = {};
		strings[cardId].media.img = {};
		strings[cardId].media.img.content = "nemorak-";
		strings[cardId].media.img.contentType = "jpg";
		strings[cardId].media.img.count = 1;
		strings[cardId].media.video = {};
		strings[cardId].media.video.count = 0;
	}
	
	// 
	/*{
		cardId = "";
		strings[cardId] = {};
		strings[cardId].title = ["", "", ""];
		strings[cardId].cover = "./img/";
		strings[cardId].platform = "";
		strings[cardId].version = "";
		strings[cardId].category = "";
		strings[cardId].genre = "";
		strings[cardId].languages = {};
		strings[cardId].languages.content = [];
		strings[cardId].languages.content[0] = "EN";
		strings[cardId].languages.content[1] = "ES";
		strings[cardId].languages.count = 2;
		strings[cardId].libraries = "";
		strings[cardId].languagesPrg = "";
		strings[cardId].releaseDate = ["", "", ""];
		strings[cardId].music = "";
		strings[cardId].download = "";
		strings[cardId].description = {};
		strings[cardId].description.content = [];
		strings[cardId].description.content[0] = [
			"",
			"",
			""];
		strings[cardId].description.content[1] = [
			"",
			"",
			""];
		strings[cardId].description.count = 2;
		strings[cardId].musicDescription = {};
		strings[cardId].musicDescription.count = 0;
		strings[cardId].installation = "";
		strings[cardId].media = {};
		strings[cardId].media.img = {};
		strings[cardId].media.img.content = "-";
		strings[cardId].media.img.contentType = "";
		strings[cardId].media.img.count = 4;
		strings[cardId].media.video = {};
		strings[cardId].media.video.content = [];
		strings[cardId].media.video.content[0] = [""];
		strings[cardId].media.video.count = 1;
	}*/
	
	
	// This function load the card content
	function LoadCard(id){
		var object;
		object = document.getElementById("card");
		
		var cardVersion = "";
		if (typeof strings[id].version !== 'undefined' && strings[id].version != "")
		{
			cardVersion = "<span class='property'>" + strings["general"].version[lang] + ":&nbsp;</span> " + strings[id].version + ".<br/>";
		}
		
		var cardLanguages = "";
		for (var i = 0; i < strings[id].languages.count; ++i)
		{
			if (i > 0) {
				cardLanguages += ", ";
			}
			cardLanguages += strings["common"].languages[strings[id].languages.content[i]][lang];
		}
		
		var cardLanguagesPrg = "";
		if (typeof strings[id].languagesPrg !== 'undefined' && strings[id].languagesPrg != "")
		{
			cardLanguagesPrg = "<span class='property'>" + strings["general"].languagesPrg[lang] + ":&nbsp;</span>" + strings[id].languagesPrg + ".<br/>";
		}
		
		var cardLibraries = "";
		if (typeof strings[id].libraries !== 'undefined' && strings[id].libraries != "")
		{
			cardLibraries = "<span class='property'>" + strings["general"].libraries[lang] + ":&nbsp;</span> " + strings[id].libraries + ".<br/>";
		}
		
		var cardMusic = "";
		if (typeof strings[id].music !== 'undefined' && strings[id].music != "")
		{
			cardMusic = "<span class='property'>" + strings["general"].music[lang] + ":&nbsp;</span>" + strings[id].music + ".<br/>"
		}
		
		var cardMusicDescription = "";
		if (typeof strings[id].musicDescription !== 'undefined' && strings[id].musicDescription.count > 0)
		{
			cardMusicDescription = "<div class='listname'><br/>" + strings["general"].musicDescription[lang] + "</div>";
			
			for (var i = 0; i < strings[id].musicDescription.count; ++i)
			{
				cardMusicDescription += "<p>" + strings[id].musicDescription.content[i][lang] + "</p>";
			}
			
			cardMusicDescription += " ";
		}
		
		var cardDownload = "";
		if (typeof strings[id].download !== 'undefined' && strings[id].download != "")
		{
			cardDownload = "	<a class='download' href='" + strings[id].download + "' target='_blank'>" + strings["general"].download[lang] + "</a><br/>";
		}
		var cardDownloadExtra = "";
		if (typeof strings[id].downloadExtra !== 'undefined' && strings[id].downloadExtra != "")
		{
			cardDownloadExtra = strings[id].downloadExtra[lang];
		}
		
		var cardDescription = "";
		if (typeof strings[id].description !== 'undefined' && strings[id].description.count > 0)
		{
			cardDescription = "<div class='listname'><br/>" + strings["general"].description[lang] + "</div>";
			
			for (var i = 0; i < strings[id].description.count; ++i)
			{
				cardDescription += "<p>" + strings[id].description.content[i][lang] + "</p>";
			}
			
			cardDescription += " ";
		}
		
		var cardExtras = "";
		if (typeof strings[id].extras !== 'undefined' && strings[id].extras != "")
		{
			cardExtras = strings[id].extras[lang];
		}
		
		var cardContests = "";
		if (typeof strings[id].contests !== 'undefined' && strings[id].contests != "")
		{
			cardContests = "<div class='listname'><br/>" + strings["general"].contests[lang] + "</div>"
			+ strings[id].contests[lang]
			+ " ";
		}
		
		var cardInstallation = "";
		if (typeof strings[id].installation !== 'undefined' && strings[id].installation != "")
		{
			cardInstallation = "<div class='listname'><br/>" + strings["general"].installation[lang] + "</div>"
				+ "	<p>" + strings["common"].installation[strings[id].installation][lang] + "</p>"
				+ "	";
		}
		
		var cardMedia = "";
		for (var i = 1; i <= strings[id].media.img.count; ++i)
		{
			cardMedia += "<img class='screenshot' src='./img/" + strings[id].media.img.content + i + "." + strings[id].media.img.contentType + "'/>";
		}
		for (var i = 0; i < strings[id].media.video.count; ++i)
		{
			cardMedia += "<div>"
				+ "			<a href='http://www.youtube.com/watch?v=" + strings[id].media.video.content[i] + "' target='_blank'>"
				+ "				<img src='https://img.youtube.com/vi/" + strings[id].media.video.content[i] + "/hqdefault.jpg'/>"
				+ "				<img src='./img/play.png' style='position:relative;top:-360px'>"
				+ "			</a>"
				+ "		</div>";
		}
		
		object.innerHTML = 
				  "<div class='title'>" + strings[id].title[lang] + "</div>"
				+ "<div class='properties'>"
				+ "	<img class ='cover' src='" + strings[id].cover + "'/>"
				+ "	<div class='listname'><br/>" + strings["general"].features[lang] + "</div>"
				+ "	<span class='property'>" + strings["general"].platform[lang] + ":&nbsp;</span> " + strings[id].platform + ".<br/>"
				+ cardVersion
				+ "	<span class='property'>" + strings["general"].category[lang] + ":&nbsp;</span> " + strings["common"].category[strings[id].category][lang] + ".<br/>"
				+ "	<span class='property'>" + strings["general"].genre[lang] + ":&nbsp;</span> " + strings["common"].genre[strings[id].genre][lang] + ".<br/>"
				+ cardLibraries
				+ "	<span class='property'>" + strings["general"].languages[lang] + ":&nbsp;</span> " + cardLanguages + ".<br/>"
				+ cardLanguagesPrg
				+ cardMusic
				+ "	<span class='property'>" + strings["general"].releaseDate[lang] + ":&nbsp;</span>" + strings[id].releaseDate[lang] + ".<br/>"
				+ cardDownload
				+ cardDownloadExtra
				+ "	"
				+ cardDescription
				+ cardMusicDescription
				+ cardInstallation
				+ cardExtras
				+ cardContests
				+ "	<div class='listname'><br/>" + strings["general"].media[lang] + "</div>"
				+ "	<div style='text-align:center;'>"
				+ cardMedia
				+ "		<div style='clear:both;'>&nbsp;</div>"
				+ "	</div>"
				+ ""
				+ ""
				+ "</div>";
	}
	
	// This function loads the card content and then shows it.
	function ShowCard(id){
		var object;
		object = document.getElementById("card_bg");
		// Properties from objects
		object.style.visibility = 'visible';
		object.style.overflow = 'auto';
		Show("close");
		// Content
		LoadCard(id);
		cardLoaded = id;
	}
	
	// This function unloads the card.
	function HideCard(){
		var object;
		object = document.getElementById("card_bg");
		// Properties from objects
		object.scrollTop = 0;
		object.style.visibility = 'hidden';
		object.style.overflow = 'hidden';
		Hide("close");
		// Content
		object = document.getElementById("card");
		object.innerHTML="";

		cardLoaded = ""; // Card Loaded none							
	}
	
//]]>